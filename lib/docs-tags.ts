import { defaultLocale, getLocale, type AppLocale } from './locales';
import { getDocsSource } from './source';

type DocsEntry = ReturnType<ReturnType<typeof getDocsSource>['getPages']>[number];

export type DocsTagEntry = {
  title: string;
  description?: string;
  href: string;
  tags: string[];
};

function getDocsEntries(locale: AppLocale): DocsEntry[] {
  return getDocsSource(locale).getPages();
}

function getEntryTags(entry: DocsEntry) {
  return Array.isArray(entry.data.tags)
    ? entry.data.tags.filter((tag): tag is string => typeof tag === 'string' && tag.length > 0)
    : [];
}

export function getDocsTags(locale: AppLocale) {
  return [...new Set(getDocsEntries(locale).flatMap((entry) => getEntryTags(entry)))].sort((a, b) => a.localeCompare(b));
}

export function getDocsByTag(locale: AppLocale, tag: string): DocsTagEntry[] {
  return getDocsEntries(locale)
    .filter((entry) => getEntryTags(entry).includes(tag))
    .map((entry) => ({
      title: entry.data.title ?? entry.slugs.at(-1) ?? entry.url,
      description: entry.data.description,
      href: entry.url,
      tags: getEntryTags(entry),
    }));
}

export function getDocsTagLocale(locale?: string) {
  return getLocale(locale ?? defaultLocale);
}
