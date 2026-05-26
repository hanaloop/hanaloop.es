import type { MetadataRoute } from 'next';
import { locales, type AppLocale } from '@/lib/locales';
import { getBlogPostSlugs } from '@/lib/blog-content';
import { getInsightPostSlugs } from '@/lib/insight-content';
import { getCanonicalUrl, getLanguageAlternates } from '@/lib/site-config';
import koMessages from '@/messages/ko.json';

type SitemapEntry = MetadataRoute.Sitemap[number];

const staticPaths = [
  '/',
  '/overview',
  '/platform',
  '/cbam',
  '/pcf',
  '/supply',
  '/hana-ai',
  '/cases',
  '/partnership',
  '/company',
  '/blog',
] as const;

const caseIds = (koMessages.CasesDetail.items as { id: number }[]).map((item) => item.id);

function makeEntry(locale: AppLocale, pathname: string, priority: number, changeFrequency: SitemapEntry['changeFrequency']): SitemapEntry {
  const alternates = getLanguageAlternates(locale, pathname);

  return {
    url: getCanonicalUrl(locale, pathname),
    alternates: {
      languages: alternates.languages,
    },
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: SitemapEntry[] = [];

  for (const locale of locales) {
    for (const pathname of staticPaths) {
      entries.push(makeEntry(locale, pathname, pathname === '/' ? 1 : 0.82, pathname === '/blog' ? 'weekly' : 'monthly'));
    }

    for (const slug of getInsightPostSlugs(locale)) {
      entries.push(makeEntry(locale, `/docs/${slug.join('/')}`, 0.72, 'monthly'));
    }

    for (const slug of getBlogPostSlugs(locale)) {
      entries.push(makeEntry(locale, `/blog/${slug.join('/')}`, 0.68, 'monthly'));
    }

    for (const id of caseIds) {
      entries.push(makeEntry(locale, `/case_detail/${id}`, 0.7, 'monthly'));
    }
  }

  return entries;
}
