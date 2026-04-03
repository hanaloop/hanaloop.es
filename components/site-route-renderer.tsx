import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContentPageShell } from '@/components/content-page-shell';
import { LocalizedMDXLink } from '@/components/localized-mdx-link';
import { getMDXComponents } from '@/components/mdx';
import { siteConfig } from '@/lib/site-config';
import { getMarketingPage, getStandalonePage } from '@/lib/site-pages';
import type { AppLocale } from '@/lib/locales';

export function renderSiteRoute(locale: AppLocale, slug: string) {
  const MarketingPage = getMarketingPage(slug);
  if (MarketingPage) return <MarketingPage />;

  const standalonePage = getStandalonePage(slug);
  if (!standalonePage) notFound();

  const MDX = standalonePage.component;

  return (
    <ContentPageShell>
      <MDX
        components={getMDXComponents({
          a: (props) => <LocalizedMDXLink locale={locale} {...props} />,
        })}
      />
    </ContentPageShell>
  );
}

export function getSiteRouteMetadata(slug: string): Metadata | undefined {
  const standalonePage = getStandalonePage(slug);
  if (!standalonePage) return undefined;

  return {
    title: standalonePage.title,
    description: standalonePage.description,
    openGraph: {
      title: standalonePage.title,
      description: standalonePage.description,
      images: [siteConfig.image],
    },
  };
}
