import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { renderSiteRoute, getSiteRouteMetadata } from '@/components/site-route-renderer';
import { routePageSlugs } from '@/lib/site-pages';

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (slug.length !== 1) notFound();

  return renderSiteRoute('ko', slug[0]);
}

export function generateStaticParams() {
  return routePageSlugs.map((slug) => ({ slug: [slug] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug.length !== 1) notFound();

  return getSiteRouteMetadata(slug[0]) ?? {};
}
