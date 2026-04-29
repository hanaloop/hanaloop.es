import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { getBlogByTag, getBlogTags } from '@/lib/blog-tags';
import { defaultLocale, isLocale, locales } from '@/lib/locales';
import { buildBlogMobileContextualNav } from '@/lib/mobile-nav';
import { siteConfig } from '@/lib/site-config';

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

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { locale, tag } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();

  const decodedTag = decodeURIComponent(tag);
  const items = getBlogByTag(locale, decodedTag);
  if (items.length === 0) notFound();

  const texts = getTexts(locale);
  const mobileContextualNav = buildBlogMobileContextualNav(locale);

  return (
    <SiteShell mobileContextualNav={mobileContextualNav}>
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">
          {texts.title}: {decodedTag}
        </h1>
        <p className="mt-3 text-base text-gray-600 dark:text-gray-400">{texts.description}</p>
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

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .flatMap((locale) => getBlogTags(locale).map((tag) => ({ locale, tag })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, tag } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();

  const decodedTag = decodeURIComponent(tag);
  const texts = getTexts(locale);

  return {
    title: `${texts.title}: ${decodedTag}`,
    description: texts.description,
    openGraph: {
      title: `${texts.title}: ${decodedTag}`,
      description: texts.description,
      images: [siteConfig.image],
    },
  };
}
