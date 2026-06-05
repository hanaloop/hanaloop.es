import { getBlogPosts, getBlogSlug } from './blog';
import { defaultLocale, getLocale, type AppLocale, withLocalePath } from './locales';

export type BlogTagEntry = {
  title: string;
  description?: string;
  href: string;
  tags: string[];
};

function getEntryTags(entry: ReturnType<typeof getBlogPosts>[number]) {
  return Array.isArray(entry.tags)
    ? entry.tags.filter((tag): tag is string => typeof tag === 'string' && tag.length > 0)
    : [];
}

export function getBlogTags(locale: AppLocale) {
  return [...new Set(getBlogPosts(locale).flatMap((entry) => getEntryTags(entry)))].sort((a, b) => a.localeCompare(b));
}

export function getBlogByTag(locale: AppLocale, tag: string): BlogTagEntry[] {
  return getBlogPosts(locale)
    .filter((entry) => getEntryTags(entry).includes(tag))
    .map((entry) => ({
      title: String(entry.title ?? ''),
      description: typeof entry.description === 'string' ? entry.description : undefined,
      href: withLocalePath(locale, `/blog/${getBlogSlug(entry).join('/')}`),
      tags: getEntryTags(entry),
    }));
}

export function getBlogTagLocale(locale?: string) {
  return getLocale(locale ?? defaultLocale);
}
