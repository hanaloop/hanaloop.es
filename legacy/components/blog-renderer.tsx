import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import readingTime from 'reading-time';
import { LocalizedMDXLink } from '@/legacy/components/localized-mdx-link';
import { SiteShell } from '@/components/layout/site-shell';
import { BlogHeroSection } from '@/components/sections/blog-hero-section';
import { getMDXComponents } from '@/legacy/components/mdx';
import { getBlogLocale, getBlogPost, getBlogPosts, getBlogSlug, resolveAuthors } from '@/lib/blog';
import { type AppLocale, withLocalePath } from '@/lib/locales';
import { buildBlogMobileContextualNav } from '@/lib/mobile-nav';
import { siteConfig } from '@/lib/site-config';

type BlogSourcePost = Record<string, unknown> & {
  info?: {
    path?: string;
  };
};

function formatDate(value: string | undefined, locale: AppLocale) {
  if (!value) return null;

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  const dateLocale = locale === 'ko' ? 'ko-KR' : locale === 'es' ? 'es-ES' : 'en-US';

  return date.toLocaleDateString(dateLocale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

const truncatePattern = /<!--\s*truncate\s*-->\u200b?|\{\/\*\s*truncate\s*\*\/\}/;

function normalizeText(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function getPostSource(locale: AppLocale, post: BlogSourcePost) {
  const relativePath = post.info?.path;
  if (!relativePath) return '';

  const candidates = [
    path.join(process.cwd(), 'content', locale, 'blog', relativePath),
  ];

  if (locale === 'ko') {
    candidates.push(path.resolve(process.cwd(), '..', 'blog', relativePath));
  } else {
    candidates.push(
      path.resolve(process.cwd(), '..', 'i18n', locale, 'docusaurus-plugin-content-blog', relativePath),
      path.resolve(process.cwd(), '..', 'blog', relativePath),
    );
  }

  for (const filePath of candidates) {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf8');
    }
  }

  return '';
}

function getExcerptSource(source: string) {
  const content = matter(source).content;
  const [excerptContent] = content.split(truncatePattern);

  return excerptContent
    .replace(/^import\s.+$/gm, '')
    .trim();
}

function getPlainText(source: string) {
  return normalizeText(
    matter(source).content
      .replace(truncatePattern, '')
      .replace(/^import\s.+$/gm, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
      .replace(/!\[[^\]]*]\([^)]+\)/g, ' ')
      .replace(truncatePattern, ' ')
      .replace(/[*_>#-]/g, ' ')
  );
}

function slugify(value: string) {
  return normalizeText(value)
    .toLowerCase()
    .replace(/['".,:;!?()[\]{}]/g, '')
    .replace(/\s+/g, '-');
}

function extractHeadings(source: string) {
  const content = matter(source).content.replace(truncatePattern, '');
  const lines = content.split('\n');
  const headings: Array<{ level: number; text: string; id: string }> = [];

  for (const line of lines) {
    const match = line.match(/^(#{2,4})\s+(.+)$/);
    if (!match) continue;

    const level = match[1].length;
    const text = normalizeText(match[2].replace(/[*_`]/g, ''));
    if (!text) continue;

    headings.push({
      level,
      text,
      id: slugify(text),
    });
  }

  return headings;
}

function estimateReadingTime(text: string, locale: AppLocale) {
  if (!text) return null;

  const cjkChars = (text.match(/[\p{Script=Hangul}\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/gu) ?? []).length;
  const latinWords = (text.match(/\b[\p{L}\p{N}][\p{L}\p{N}'-]*\b/gu) ?? []).length;
  const cjkMinutes = cjkChars / 350;
  const wordMinutes = latinWords / 200;
  const minutes = Math.max(1, Math.ceil(cjkMinutes + wordMinutes));

  if (locale === 'ko') return `약 ${minutes}분`;
  if (locale === 'es') return `${minutes} min`;

  const englishEstimate = readingTime(text, { wordsPerMinute: 200 });
  return englishEstimate.minutes > 1 ? `${minutes} min read` : '1 min read';
}

function getArchiveLabels(locale: AppLocale) {
  if (locale === 'ko') {
    return {
      sidebarTitle: '최신 블로그',
      archiveTitle: '최신 블로그',
      readMore: '자세히 보기',
      tags: '태그',
    };
  }

  if (locale === 'es') {
    return {
      sidebarTitle: 'Ultimos articulos',
      archiveTitle: 'Ultimos articulos',
      readMore: 'Leer mas',
      tags: 'Etiquetas',
    };
  }

  return {
    sidebarTitle: 'Latest posts',
    archiveTitle: 'Latest posts',
    readMore: 'Read more',
    tags: 'Tags',
  };
}

function getAuthorImage(author: Record<string, unknown>) {
  const imageUrl = typeof author.image_url === 'string' ? author.image_url : undefined;
  if (!imageUrl) {
    return {
      src: '/images/hanaloop-logo.png',
      className: 'h-8 w-auto object-contain',
    };
  }

  if (author.type === 'system' || imageUrl.endsWith('/images/hanaloop-logo.png')) {
    return {
      src: '/images/hanaloop-logo.png',
      className: 'h-8 w-auto object-contain',
    };
  }

  return {
    src: imageUrl,
    className: 'h-12 w-12 rounded-full object-cover',
  };
}

function flattenChildren(children: unknown): string {
  if (typeof children === 'string' || typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(flattenChildren).join(' ');
  if (children && typeof children === 'object' && 'props' in children) {
    return flattenChildren((children as { props?: { children?: unknown } }).props?.children);
  }

  return '';
}

function createHeadingComponent(level: 'h2' | 'h3' | 'h4', className: string) {
  return function Heading({ children, id, ...props }: ComponentPropsWithoutRef<'h2'>) {
    const text = flattenChildren(children);
    const resolvedId = id ?? slugify(text);
    const Tag = level;

    return (
      <Tag id={resolvedId} className={className} {...props}>
        {children as ReactNode}
      </Tag>
    );
  };
}

export function renderBlogRoute(locale: AppLocale, slug?: string[]) {
  const mobileContextualNav = buildBlogMobileContextualNav(locale);

  if (!slug || slug.length === 0) {
    const posts = getBlogPosts(locale);
    const labels = getArchiveLabels(locale);
    const featuredPosts = posts.slice(0, 10);

    return (
      <SiteShell mobileContextualNav={mobileContextualNav}>
        <BlogHeroSection />
        <div className="hanaloop-blog-archive mx-auto max-w-[1500px] px-2 py-10 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{labels.sidebarTitle}</h1>
              <nav className="space-y-1 pr-2" aria-label={labels.sidebarTitle}>
                {featuredPosts.map((post) => {
                  const href = withLocalePath(locale, `/blog/${getBlogSlug(post).join('/')}`);

                  return (
                    <Link
                      key={post.info.path}
                      href={href}
                      className="block py-1 text-[15px] leading-6 text-gray-800 transition hover:text-sky-700 dark:text-gray-200 dark:hover:text-sky-300"
                    >
                      {String(post.title ?? '')}
                    </Link>
                  );
                })}
              </nav>
            </aside>
            <section className="space-y-20">
              {posts.map((post) => {
                const href = withLocalePath(locale, `/blog/${getBlogSlug(post).join('/')}`);
                const authors = resolveAuthors(locale, post.authors as string | string[] | undefined);
                const primaryAuthor = authors[0];
                const authorImage = primaryAuthor ? getAuthorImage(primaryAuthor) : null;
                const source = getPostSource(locale, post as unknown as BlogSourcePost);
                const excerptSource = getExcerptSource(source);
                const plainText = getPlainText(source);
                const dateText = formatDate(String(post.date ?? post.publishedAt ?? ''), locale);
                const readTimeText = estimateReadingTime(plainText, locale);
                const excerptComponents = getMDXComponents({
                  a: (props) => <LocalizedMDXLink locale={locale} {...props} />,
                });

                return (
                  <article key={post.info.path} className="border-b border-gray-200 pb-14 last:border-b-0 dark:border-white/10">
                    <Link href={href} className="group inline-block">
                      <h2 className="text-3xl font-semibold leading-tight text-[#435b7a] underline decoration-1 underline-offset-8 transition group-hover:text-sky-700 dark:text-[#b8c6db] dark:group-hover:text-sky-300 md:text-5xl">
                        {String(post.title ?? '')}
                      </h2>
                    </Link>
                    <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-base text-gray-700 dark:text-gray-300">
                      {dateText ? <span>{dateText}</span> : null}
                      {dateText && readTimeText ? <span>·</span> : null}
                      {readTimeText ? <span>{readTimeText}</span> : null}
                    </div>
                    {primaryAuthor ? (
                      <div className="mt-5 flex items-center gap-4">
                        {authorImage ? (
                          <img
                            src={authorImage.src}
                            alt={String(primaryAuthor.name ?? primaryAuthor.id)}
                            className={authorImage.className}
                          />
                        ) : null}
                        <div className="text-left">
                          <div className="text-xl font-semibold text-gray-900 dark:text-white">
                            {String(primaryAuthor.name ?? primaryAuthor.id)}
                          </div>
                          {primaryAuthor.title ? (
                            <div className="text-base text-gray-600 dark:text-gray-400">{String(primaryAuthor.title)}</div>
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                    {excerptSource ? (
                      <div className="mt-8 max-w-5xl space-y-6 text-base leading-9 text-gray-800 dark:text-gray-200 md:text-[1.05rem]">
                        <MDXRemote source={excerptSource} components={excerptComponents} />
                      </div>
                    ) : null}
                    <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                      <div className="flex flex-wrap items-center gap-3">
                        {post.tags && Array.isArray(post.tags) && post.tags.length > 0 ? (
                          <span className="text-base font-semibold text-gray-900 dark:text-white">{labels.tags}:</span>
                        ) : null}
                        {Array.isArray(post.tags)
                          ? post.tags.map((tag) => (
                              <Link
                                key={`${post.info.path}-${String(tag)}`}
                                href={withLocalePath(locale, `/blog/tags/${encodeURIComponent(String(tag))}`)}
                                className="rounded-lg border border-gray-300 px-3 py-1 text-sm text-gray-700 dark:border-white/15 dark:text-gray-300"
                              >
                                {String(tag)}
                              </Link>
                            ))
                          : null}
                      </div>
                      <Link
                        href={href}
                        className="text-base font-semibold text-gray-900 underline decoration-1 underline-offset-4 transition hover:text-sky-700 dark:text-white dark:hover:text-sky-300"
                      >
                        {labels.readMore}
                      </Link>
                    </div>
                  </article>
                );
              })}
            </section>
          </div>
        </div>
      </SiteShell>
    );
  }

  const post = getBlogPost(locale, slug);
  if (!post) notFound();

  const posts = getBlogPosts(locale);
  const labels = getArchiveLabels(locale);
  const featuredPosts = posts.slice(0, 10);
  const MDX = post.body;
  const authors = resolveAuthors(locale, post.authors as string | string[] | undefined);
  const primaryAuthor = authors[0];
  const authorImage = primaryAuthor ? getAuthorImage(primaryAuthor) : null;
  const source = getPostSource(locale, post as unknown as BlogSourcePost);
  const dateText = formatDate(String(post.date ?? post.publishedAt ?? ''), locale);
  const readTimeText = estimateReadingTime(getPlainText(source), locale);
  const headings = extractHeadings(source);
  const detailComponents = getMDXComponents({
    a: (props) => <LocalizedMDXLink locale={locale} {...props} />,
    h2: createHeadingComponent('h2', 'scroll-mt-24 pt-8 text-3xl font-bold text-gray-700 dark:text-gray-100'),
    h3: createHeadingComponent('h3', 'scroll-mt-24 pt-6 text-2xl font-semibold text-gray-700 dark:text-gray-100'),
    h4: createHeadingComponent('h4', 'scroll-mt-24 pt-4 text-xl font-semibold text-gray-600 dark:text-gray-200'),
  });

  return (
    <SiteShell wrapperClassName="text-gray-700" mobileContextualNav={mobileContextualNav}>
      <div className="hanaloop-blog-post mx-auto max-w-[1500px] px-2 py-10 md:px-6">
        <div className="grid gap-8 xl:grid-cols-[340px_minmax(0,860px)_170px]">
          <aside className="hidden xl:block xl:sticky xl:top-24 xl:self-start">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{labels.sidebarTitle}</h2>
            <nav className="space-y-1 pr-2" aria-label={labels.sidebarTitle}>
              {featuredPosts.map((featuredPost) => {
                const href = withLocalePath(locale, `/blog/${getBlogSlug(featuredPost).join('/')}`);
                const active = featuredPost.info.path === post.info.path;

                return (
                  <Link
                    key={featuredPost.info.path}
                    href={href}
                    className={`block py-1 text-[14px] leading-6 transition ${
                      active
                        ? 'font-medium text-[#2f9e72]'
                        : 'text-gray-800 hover:text-sky-700 dark:text-gray-200 dark:hover:text-sky-300'
                    }`}
                  >
                    {String(featuredPost.title ?? '')}
                  </Link>
                );
              })}
            </nav>
          </aside>
          <article className="min-w-0 break-keep">
            <div className="mb-8 border-b border-gray-200 pb-8 dark:border-white/10">
              <h1 className="text-4xl font-semibold leading-tight text-gray-700 dark:text-gray-100 md:text-6xl">
                {String(post.title ?? '')}
              </h1>
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-base text-gray-700 dark:text-gray-300">
                {dateText ? <span>{dateText}</span> : null}
                {dateText && readTimeText ? <span>·</span> : null}
                {readTimeText ? <span>{readTimeText}</span> : null}
              </div>
              {primaryAuthor ? (
                <div className="mt-5 flex items-center gap-4">
                  {authorImage ? (
                    <img
                      src={authorImage.src}
                      alt={String(primaryAuthor.name ?? primaryAuthor.id)}
                      className={authorImage.className}
                    />
                  ) : null}
                  <div className="text-left">
                    <div className="text-xl font-semibold text-gray-900 dark:text-white">
                      {String(primaryAuthor.name_alt ?? primaryAuthor.name ?? primaryAuthor.id)}
                    </div>
                    {primaryAuthor.title ? (
                      <div className="text-base text-gray-600 dark:text-gray-400">{String(primaryAuthor.title)}</div>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
            <MDX components={detailComponents} />
            {Array.isArray(post.tags) && post.tags.length > 0 ? (
              <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-gray-200 pt-8 dark:border-white/10">
                <span className="text-base font-semibold text-gray-900 dark:text-white">{labels.tags}:</span>
                {post.tags.map((tag) => (
                  <Link
                    key={`${post.info.path}-${String(tag)}`}
                    href={withLocalePath(locale, `/blog/tags/${encodeURIComponent(String(tag))}`)}
                    className="rounded-lg border border-gray-300 px-3 py-1 text-sm text-gray-700 dark:border-white/15 dark:text-gray-300"
                  >
                    {String(tag)}
                  </Link>
                ))}
              </div>
            ) : null}
          </article>
          <aside className="hidden xl:block">
            {headings.length > 0 ? (
              <nav className="sticky top-28 border-l border-gray-200 pl-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="space-y-3">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={`block transition hover:text-sky-700 dark:hover:text-sky-300 ${
                        heading.level === 3 ? 'pl-3' : heading.level === 4 ? 'pl-6' : ''
                      }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </div>
              </nav>
            ) : null}
          </aside>
        </div>
      </div>
    </SiteShell>
  );
}

export function getBlogStaticParams(locale: AppLocale) {
  return [{ slug: [] as string[] }, ...getBlogPosts(getBlogLocale(locale)).map((post) => ({ slug: getBlogSlug(post) }))];
}

export function getBlogMetadata(locale: AppLocale, slug?: string[]): Metadata {
  if (!slug || slug.length === 0) {
    return {
      title: 'Blog',
      description: siteConfig.tagline,
      openGraph: {
        title: `${siteConfig.title} Blog`,
        description: siteConfig.tagline,
        images: [siteConfig.image],
      },
    };
  }

  const post = getBlogPost(locale, slug);
  if (!post) notFound();

  const title = String(post.title ?? siteConfig.title);
  const description = String(post.description ?? post.subtitle ?? siteConfig.tagline);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [String(post.image ?? siteConfig.image)],
    },
  };
}
