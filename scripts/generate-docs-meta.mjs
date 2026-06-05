import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import YAML from 'yaml';

const locales = ['ko', 'en', 'es'];
const docsRoots = locales.map((locale) => path.join(process.cwd(), 'content', locale, 'docs'));

function readCategory(dir) {
  const categoryPath = path.join(dir, '_category_.yaml');
  if (!fs.existsSync(categoryPath)) return {};

  return YAML.parse(fs.readFileSync(categoryPath, 'utf8')) ?? {};
}

function extractDate(name) {
  const match = name.match(/(\d{4}-\d{2}-\d{2})/);
  return match?.[1] ?? null;
}

function getSidebarPosition(dir, slug) {
  for (const ext of ['.md', '.mdx']) {
    const filePath = path.join(dir, `${slug}${ext}`);
    if (!fs.existsSync(filePath)) continue;

    const { data } = matter(fs.readFileSync(filePath, 'utf8'));
    if (typeof data.sidebar_position === 'number') return data.sidebar_position;
  }

  return null;
}

function sortDocs(dir, a, b) {
  const positionA = getSidebarPosition(dir, a);
  const positionB = getSidebarPosition(dir, b);

  if (positionA !== null && positionB !== null) return positionA - positionB;
  if (positionA !== null) return -1;
  if (positionB !== null) return 1;

  const dateA = extractDate(a);
  const dateB = extractDate(b);

  if (dateA && dateB) return dateB.localeCompare(dateA);
  if (dateA) return -1;
  if (dateB) return 1;

  return a.localeCompare(b);
}

function buildMeta(dir, isRoot = false) {
  const category = readCategory(dir);
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const directories = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const docs = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => /\.(md|mdx)$/.test(name))
    .filter((name) => !name.startsWith('_'))
    .map((name) => name.replace(/\.(md|mdx)$/, ''))
    .sort((a, b) => sortDocs(dir, a, b));

  const meta = {
    ...(category.label ? { title: category.label } : {}),
    ...(category.link?.description ? { description: category.link.description } : {}),
    ...(typeof category.collapsed === 'boolean' ? { defaultOpen: !category.collapsed } : {}),
    ...(category.collapsible !== undefined ? { collapsible: Boolean(category.collapsible) } : {}),
    ...(isRoot ? {} : {}),
    pages: [...docs, ...directories],
  };

  fs.writeFileSync(path.join(dir, 'meta.json'), `${JSON.stringify(meta, null, 2)}\n`);

  for (const childDir of directories) {
    buildMeta(path.join(dir, childDir));
  }
}

for (const root of docsRoots) {
  if (!fs.existsSync(root)) continue;
  buildMeta(root, true);
}
