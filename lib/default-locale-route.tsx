import type { Metadata } from 'next';
import { getSiteRouteMetadata, renderSiteRoute } from '@/components/site-route-renderer';

export function renderDefaultLocaleRoute(slug: string) {
  return renderSiteRoute('ko', slug);
}

export function getDefaultLocaleRouteMetadata(slug: string): Metadata {
  return getSiteRouteMetadata(slug) ?? {};
}
