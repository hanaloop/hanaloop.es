import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DocsPage, DocsTitle, DocsDescription, DocsBody } from 'fumadocs-ui/layouts/docs/page';
import { DocsBreadcrumb } from '@/legacy/components/docs-breadcrumb';
import { getDocsByTag, getDocsTags } from '@/lib/docs-tags';
import { defaultLocale, isLocale, locales } from '@/lib/locales';
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
      description: 'Lista de documentos con esta etiqueta.',
    };
  }

  if (locale === 'en') {
    return {
      title: 'Tag',
      description: 'Documents with this tag.',
    };
  }

  return {
    title: '태그',
    description: '이 태그가 포함된 문서 목록입니다.',
  };
}

export default async function Page({ params }: Props) {
  const { locale, tag } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();

  const decodedTag = decodeURIComponent(tag);
  const items = getDocsByTag(locale, decodedTag);
  if (items.length === 0) notFound();

  const texts = getTexts(locale);

  return (
    <DocsPage
      toc={[]}
      breadcrumb={{ component: <DocsBreadcrumb locale={locale} /> }}
      tableOfContent={{ enabled: false }}
      tableOfContentPopover={{ enabled: false }}
      footer={{ enabled: false }}
    >
      <DocsTitle>{texts.title}: {decodedTag}</DocsTitle>
      <DocsDescription>{texts.description}</DocsDescription>
      <DocsBody>
        <div className="mt-2 flex flex-col gap-4">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg border p-4 no-underline transition hover:bg-gray-50">
              <div className="text-xl font-semibold text-gray-900">{item.title}</div>
              {item.description ? <div className="mt-2 text-sm text-gray-600">{item.description}</div> : null}
            </Link>
          ))}
        </div>
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .flatMap((locale) => getDocsTags(locale).map((tag) => ({ locale, tag })));
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
