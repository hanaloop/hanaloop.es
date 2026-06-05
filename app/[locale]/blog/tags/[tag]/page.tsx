import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { SiteShell } from '@/components/layout/site-shell';
import { getBlogByTag, getBlogTags } from '@/lib/blog-tags';
import { isLocale, locales } from '@/lib/locales';
import { buildBlogMobileContextualNav } from '@/lib/mobile-nav';
import { getLanguageAlternates, siteConfig } from '@/lib/site-config';

type Props = {
  params: Promise<{
    locale: string;
    tag: string;
  }>;
};

function getTexts(locale: string) {
  if (locale === 'es') {
    return {
      title: 'Etiqueta',
      description: 'Lista de articulos del blog con esta etiqueta.',
    };
  }

  if (locale === 'en') {
    return {
      title: 'Tag',
      description: 'Blog posts with this tag.',
    };
  }

  return {
    title: '태그',
    description: '이 태그가 포함된 블로그 글 목록입니다.',
  };
}

export default async function Page({ params }: Props) {
  const { locale, tag } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  const decodedTag = decodeURIComponent(tag);
  const items = getBlogByTag(locale, decodedTag);
  if (items.length === 0) notFound();

  const texts = getTexts(locale);
  const mobileContextualNav = buildBlogMobileContextualNav(locale);

  return (
    <SiteShell mobileContextualNav={mobileContextualNav}>
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-4xl font-semibold text-gray-900">
          {texts.title}: {decodedTag}
        </h1>
        <p className="mt-3 text-base text-gray-600">{texts.description}</p>
        <div className="mt-8 flex flex-col gap-4">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg border p-4 no-underline transition hover:bg-gray-50">
              <div className="text-xl font-semibold text-gray-900">{item.title}</div>
              {item.description ? <div className="mt-2 text-sm text-gray-600">{item.description}</div> : null}
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}

export async function generateStaticParams() {
  const params = locales
    
    .flatMap((locale) => {
      const tags = getBlogTags(locale);
      if (tags.length === 0) {
        return [{ locale, tag: '__no_tags__' }];
      }
      return tags.map((tag) => ({ locale, tag }));
    });
  return params.length > 0 ? params : [{ locale: 'en', tag: '__no_tags__' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, tag } = await params;
  if (!isLocale(locale)) notFound();

  const decodedTag = decodeURIComponent(tag);
  const texts = getTexts(locale);

  return {
    title: `${texts.title}: ${decodedTag}`,
    description: texts.description,
    alternates: getLanguageAlternates(locale, `/blog/tags/${tag}`),
    openGraph: {
      title: `${texts.title}: ${decodedTag}`,
      description: texts.description,
      images: [siteConfig.image],
    },
  };
}
