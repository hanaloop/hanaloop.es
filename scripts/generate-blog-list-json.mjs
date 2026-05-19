import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import YAML from 'yaml';

const LOCALES = ['ko', 'en', 'es'];
const DEFAULT_LOCALE = 'ko';
const FALLBACK_THUMBNAIL = '/site/home/hero-bg-main.png';

function walkMarkdownFiles(rootDir) {
  if (!fs.existsSync(rootDir)) return [];

  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  const files = [];

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

function getDateText(value, locale) {
  if (!value) return '';
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) return '';

  const dateLocale = locale === 'ko' ? 'ko-KR' : locale === 'es' ? 'es-ES' : 'en-US';
  return date.toLocaleDateString(dateLocale, { year: 'numeric', month: 'short', day: 'numeric' });
}

function getSortTimestamp(entry) {
  const frontmatterDate = String(entry.meta.date ?? entry.meta.publishedAt ?? '');
  const frontmatterTimestamp = Date.parse(frontmatterDate);
  if (!Number.isNaN(frontmatterTimestamp)) return frontmatterTimestamp;

  const fileName = path.basename(entry.filePath, path.extname(entry.filePath));
  const normalized = fileName.replace(/^(\d{4})(\d{2})(\d{2})(?=[-_])/, '$1-$2-$3');
  const match = normalized.match(/^(\d{4}-\d{2}-\d{2})/);
  if (!match) return Number.NaN;

  return Date.parse(match[1]);
}

function withLocalePath(locale, href) {
  if (locale === DEFAULT_LOCALE) return href;
  if (href === '/') return `/${locale}`;
  if (href.startsWith(`/${locale}/`) || href === `/${locale}`) return href;
  return `/${locale}${href}`;
}

function readAuthors(locale) {
  const authorPath = path.join(process.cwd(), 'content', locale, 'blog', 'authors.yml');
  if (!fs.existsSync(authorPath)) return {};
  return YAML.parse(fs.readFileSync(authorPath, 'utf8')) ?? {};
}

function resolveAuthorName(locale, id) {
  if (!id) return 'HanaLoop';
  const localized = readAuthors(locale);
  const fallback = locale === DEFAULT_LOCALE ? localized : readAuthors(DEFAULT_LOCALE);
  const author = localized[id] ?? fallback[id];
  if (!author || typeof author !== 'object') return 'HanaLoop';
  return String(author.name_alt ?? author.name ?? 'HanaLoop');
}

function extractBodyImageSrc(content) {
  const match = content.match(/imageSrc=["']([^"']+)["']/);
  if (match) return match[1];
  const mdMatch = content.match(/!\[.*?\]\(([^)]+)\)/);
  if (mdMatch) return mdMatch[1];
  return null;
}

function buildLocaleList(locale) {
  const localeBlogDir = path.join(process.cwd(), 'content', locale, 'blog');
  const files = walkMarkdownFiles(localeBlogDir);

  const parsed = files.map((filePath) => {
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(raw);
    const relativePath = path.relative(localeBlogDir, filePath).replaceAll('\\', '/');
    const slug = relativePath.replace(/\.(md|mdx)$/i, '');

    return {
      filePath,
      ext: path.extname(filePath).toLowerCase(),
      slug,
      meta: data ?? {},
      bodyImageSrc: extractBodyImageSrc(content),
    };
  });

  const deduped = new Map();
  for (const entry of parsed) {
    const current = deduped.get(entry.slug);
    if (!current) {
      deduped.set(entry.slug, entry);
      continue;
    }

    if (entry.ext === '.mdx' && current.ext !== '.mdx') {
      deduped.set(entry.slug, entry);
    }
  }

  const normalized = [...deduped.values()].sort((a, b) => {
    const aTs = getSortTimestamp(a);
    const bTs = getSortTimestamp(b);
    if (!Number.isNaN(aTs) && !Number.isNaN(bTs) && aTs !== bTs) return bTs - aTs;
    if (!Number.isNaN(aTs) && Number.isNaN(bTs)) return -1;
    if (Number.isNaN(aTs) && !Number.isNaN(bTs)) return 1;
    return b.slug.localeCompare(a.slug);
  });

  return normalized.map((entry, index) => {
    const authors = entry.meta.authors;
    const authorId = Array.isArray(authors) ? authors[0] : authors;
    const href = withLocalePath(locale, `/blog/${entry.slug}`);

    return {
      id: `blog-${index}-${entry.slug.replaceAll('/', '-')}`,
      title: String(entry.meta.title ?? ''),
      dateText: getDateText(entry.meta.date ?? entry.meta.publishedAt, locale),
      author: resolveAuthorName(locale, String(authorId ?? '')),
      thumbnail: String(entry.meta.image ?? entry.bodyImageSrc ?? FALLBACK_THUMBNAIL),
      href,
    };
  });
}

function run() {
  const outputDir = path.join(process.cwd(), 'lib', 'data');
  fs.mkdirSync(outputDir, { recursive: true });

  const byLocale = {};
  for (const locale of LOCALES) {
    byLocale[locale] = buildLocaleList(locale);
  }

  const outputPath = path.join(outputDir, 'blog-list-items.json');
  fs.writeFileSync(outputPath, JSON.stringify(byLocale, null, 2));
  console.log(`[generate-blog-list-json] wrote ${outputPath}`);
}

run();
