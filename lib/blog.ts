import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { blogKo, blogEn, blogEs } from 'collections/server';
import { defaultLocale, getLocale, type AppLocale } from './locales';

type BlogEntry = (typeof blogKo)[number];
type AuthorMap = Record<string, Record<string, unknown>>;
type ResolvedAuthor = {
  id: string;
  name?: string;
} & Record<string, unknown>;

const blogCollections: Record<AppLocale, BlogEntry[]> = {
  ko: blogKo,
  en: blogEn,
  es: blogEs,
};

function getExtension(filePath: string) {
  return path.extname(filePath).toLowerCase();
}

function getSlugSegments(entry: BlogEntry) {
  return entry.info.path.replace(/\.(md|mdx)$/, '').split('/');
}

function getEntrySortTimestamp(entry: BlogEntry) {
  const frontmatterDate = String(entry.date ?? entry.publishedAt ?? '');
  const frontmatterTimestamp = Date.parse(frontmatterDate);

  if (!Number.isNaN(frontmatterTimestamp)) {
    return frontmatterTimestamp;
  }

  const fileName = path.basename(entry.info.path, path.extname(entry.info.path));
  const normalizedFileName = fileName.replace(/^(\d{4})(\d{2})(\d{2})(?=[-_])/, '$1-$2-$3');
  const filenameDateMatch = normalizedFileName.match(/^(\d{4}-\d{2}-\d{2})/);

  if (!filenameDateMatch) {
    return Number.NaN;
  }

  return Date.parse(filenameDateMatch[1]);
}

function normalizeBlogEntries(entries: BlogEntry[]) {
  const deduped = new Map<string, BlogEntry>();

  for (const entry of entries) {
    const key = getSlugSegments(entry).join('/');
    const current = deduped.get(key);

    if (!current) {
      deduped.set(key, entry);
      continue;
    }

    if (getExtension(entry.info.path) === '.mdx' && getExtension(current.info.path) !== '.mdx') {
      deduped.set(key, entry);
    }
  }

  return [...deduped.values()].sort((a, b) => {
    const rawDateA = String(a.date ?? a.publishedAt ?? '');
    const rawDateB = String(b.date ?? b.publishedAt ?? '');
    const timestampA = getEntrySortTimestamp(a);
    const timestampB = getEntrySortTimestamp(b);

    if (!Number.isNaN(timestampA) && !Number.isNaN(timestampB) && timestampA !== timestampB) {
      return timestampB - timestampA;
    }

    if (!Number.isNaN(timestampA) && Number.isNaN(timestampB)) return -1;
    if (Number.isNaN(timestampA) && !Number.isNaN(timestampB)) return 1;

    const fallback = rawDateB.localeCompare(rawDateA);
    if (fallback !== 0) return fallback;

    return getSlugSegments(b).join('/').localeCompare(getSlugSegments(a).join('/'));
  });
}

export function getBlogPosts(locale: AppLocale) {
  return normalizeBlogEntries(blogCollections[locale] ?? blogCollections[defaultLocale]);
}

export function getBlogPost(locale: AppLocale, slug: string[]) {
  const key = slug.join('/');
  return getBlogPosts(locale).find((entry) => getSlugSegments(entry).join('/') === key);
}

function readAuthorFile(locale: AppLocale): AuthorMap {
  const filePath = path.join(process.cwd(), 'content', locale, 'blog', 'authors.yml');
  if (!fs.existsSync(filePath)) return {};

  return (YAML.parse(fs.readFileSync(filePath, 'utf8')) ?? {}) as AuthorMap;
}

export function resolveAuthors(locale: AppLocale, value: string | string[] | undefined) {
  const ids = Array.isArray(value) ? value : value ? [value] : [];
  const localized = readAuthorFile(locale);
  const fallback = locale === defaultLocale ? localized : readAuthorFile(defaultLocale);

  return ids.map((id) => {
    const author = localized[id] ?? fallback[id];
    return {
      id,
      ...(typeof author === 'object' && author ? author : {}),
    };
  }) as ResolvedAuthor[];
}

export function getBlogSlug(entry: BlogEntry) {
  return getSlugSegments(entry);
}

export function getBlogLocale(locale?: string) {
  return getLocale(locale);
}
