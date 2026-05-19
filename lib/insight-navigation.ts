import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

export type InsightNavNode = {
  id: string;
  title: string;
  href?: string;
  children?: InsightNavNode[];
};

export type InsightHeading = {
  id: string;
  text: string;
};

function readJsonFile<T>(filePath: string): T | null {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
}

function readTitleFromDoc(basePath: string): string {
  const mdxPath = `${basePath}.mdx`;
  const mdPath = `${basePath}.md`;
  const target = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : '';
  if (!target) return path.basename(basePath);

  const { data } = matter(fs.readFileSync(target, 'utf8'));
  return String(data.title ?? path.basename(basePath));
}

function cleanLabel(raw: string): string {
  return raw.replace(/^x\d+_/, '').replaceAll('-', ' ').trim();
}

type MetaShape = {
  title?: string;
  pages?: string[];
};

function buildTreeNode(locale: AppLocale, docsRoot: string, relDir: string, key: string): InsightNavNode {
  const nodeId = `${relDir}/${key}`.replace(/^\//, '');
  const currentDir = path.join(docsRoot, relDir);
  const childDir = path.join(currentDir, key);
  const nextRelDir = path.posix.join(relDir.replaceAll('\\', '/'), key).replace(/^\//, '');

  if (fs.existsSync(childDir) && fs.statSync(childDir).isDirectory()) {
    const meta = readJsonFile<MetaShape>(path.join(childDir, 'meta.json'));
    const pages = meta?.pages ?? [];
    const children = pages.map((entry) => buildTreeNode(locale, docsRoot, nextRelDir, entry));

    return {
      id: nodeId,
      title: String(meta?.title ?? cleanLabel(key)),
      children,
    };
  }

  const docBase = path.join(currentDir, key);
  const title = readTitleFromDoc(docBase);

  return {
    id: nodeId,
    title,
    href: withLocalePath(locale, `/docs/${nextRelDir}`),
  };
}

export function buildInsightNavTree(locale: AppLocale): InsightNavNode[] {
  const docsRoot = path.join(process.cwd(), 'content', locale, 'docs');
  const rootMeta = readJsonFile<MetaShape>(path.join(docsRoot, 'meta.json'));
  const rootPages = rootMeta?.pages ?? [];

  return rootPages.map((entry) => buildTreeNode(locale, docsRoot, '', entry));
}

function stripHeadingSyntax(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[>*_~]/g, '')
    .trim();
}

function toSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function extractInsightHeadings(content: string): InsightHeading[] {
  const regex = /^##\s+(.+)$/gm;
  const counts = new Map<string, number>();
  const headings: InsightHeading[] = [];

  for (const match of content.matchAll(regex)) {
    const text = stripHeadingSyntax(match[1]);
    if (!text) continue;

    const base = toSlug(text) || 'section';
    const used = counts.get(base) ?? 0;
    counts.set(base, used + 1);
    const id = used === 0 ? base : `${base}-${used + 1}`;

    headings.push({ id, text });
  }

  return headings;
}
