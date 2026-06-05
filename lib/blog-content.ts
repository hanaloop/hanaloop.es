import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { AppLocale } from '@/lib/locales';

export type BlogPostContent = {
  slug: string[];
  title: string;
  description: string;
  dateText: string;
  dateIso?: string;
  image?: string;
  content: string;
};

function walkMarkdownFiles(rootDir: string): string[] {
  if (!fs.existsSync(rootDir)) return [];
  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkMarkdownFiles(fullPath));
      continue;
    }
    if (!entry.isFile()) continue;
    if (!entry.name.endsWith('.md') && !entry.name.endsWith('.mdx')) continue;
    files.push(fullPath);
  }

  return files;
}

function getDateText(value: unknown, locale: AppLocale): string {
  if (!value) return '';
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) return '';
  const dateLocale = locale === 'ko' ? 'ko-KR' : locale === 'es' ? 'es-ES' : 'en-US';
  return date.toLocaleDateString(dateLocale, { year: 'numeric', month: 'short', day: 'numeric' });
}

function getDateIso(value: unknown): string | undefined {
  if (!value) return undefined;
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString();
}

function stripMdxImports(content: string): string {
  return content
    .replace(/^import\s+.*?from\s+['"][^'"]+['"]\s*;?\s*$/gm, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trimStart();
}

function findBlogFile(locale: AppLocale, slug: string[]) {
  const base = path.join(process.cwd(), 'content', locale, 'blog', ...slug);
  const mdxPath = `${base}.mdx`;
  const mdPath = `${base}.md`;

  if (fs.existsSync(mdxPath)) return mdxPath;
  if (fs.existsSync(mdPath)) return mdPath;
  return null;
}

const slugCache = new Map<string, string[][]>();
const contentCache = new Map<string, BlogPostContent | null>();

export function getBlogPostSlugs(locale: AppLocale): string[][] {
  if (slugCache.has(locale)) return slugCache.get(locale)!;
  const blogRoot = path.join(process.cwd(), 'content', locale, 'blog');
  const result = walkMarkdownFiles(blogRoot).map((filePath) => {
    const relative = path.relative(blogRoot, filePath).replaceAll('\\', '/');
    const clean = relative.replace(/\.(md|mdx)$/i, '');
    return clean.split('/');
  });
  slugCache.set(locale, result);
  return result;
}

export function getBlogPostContent(locale: AppLocale, slug: string[]): BlogPostContent | null {
  const key = `${locale}:${slug.join('/')}`;
  if (contentCache.has(key)) return contentCache.get(key)!;

  const filePath = findBlogFile(locale, slug);
  if (!filePath) {
    contentCache.set(key, null);
    return null;
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);

  const result: BlogPostContent = {
    slug,
    title: String(parsed.data.title ?? ''),
    description: String(parsed.data.description ?? parsed.data.summary ?? ''),
    dateText: getDateText(parsed.data.date ?? parsed.data.publishedAt, locale),
    dateIso: getDateIso(parsed.data.date ?? parsed.data.publishedAt),
    image: parsed.data.image ? String(parsed.data.image) : undefined,
    content: stripMdxImports(parsed.content),
  };
  contentCache.set(key, result);
  return result;
}
