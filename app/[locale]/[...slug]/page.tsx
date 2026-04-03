import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSiteRouteMetadata, renderSiteRoute } from '@/components/site-route-renderer';
import { defaultLocale, isLocale, locales } from '@/lib/locales';
import { routePageSlugs } from '@/lib/site-pages';

type Props = {
  params: Promise<{
    locale: string;
    slug: string[];
  }>;
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === defaultLocale || slug.length !== 1) notFound();

  return renderSiteRoute(locale, slug[0]);
}

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .flatMap((locale) => routePageSlugs.map((slug) => ({ locale, slug: [slug] })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === defaultLocale || slug.length !== 1) notFound();

  return getSiteRouteMetadata(slug[0]) ?? {};
}
