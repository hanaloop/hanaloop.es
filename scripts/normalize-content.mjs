import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = path.join(process.cwd(), 'content');
const markdownExtensions = new Set(['.md', '.mdx']);
const truncatePattern = /<!--\s*truncate\s*-->\u200b?/;
const truncateJsxMarker = '{/*truncate*/}';
const allTruncatePatterns = /(?:<!--\s*truncate\s*-->\u200b?|\{\/\*\s*truncate\s*\*\/\})/g;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(filePath);
      continue;
    }

    if (!markdownExtensions.has(path.extname(entry.name))) continue;
    normalizeFile(filePath);
  }
}

function deriveTitle(content, filePath) {
  const match = content.match(/^#\s+(.+)$/m);
  if (match?.[1]) return match[1].trim();

  return path.basename(filePath, path.extname(filePath)).replace(/^_+/, '').replace(/[-_]/g, ' ').trim();
}

function getOriginalSourcePath(filePath) {
  const relativePath = path.relative(root, filePath);
  const [locale, kind, ...rest] = relativePath.split(path.sep);

  if (kind !== 'blog' || rest.length === 0) return null;

  if (locale === 'ko') {
    return path.resolve(process.cwd(), '..', 'blog', ...rest);
  }

  if (locale === 'en' || locale === 'es') {
    const localizedPath = path.resolve(process.cwd(), '..', 'i18n', locale, 'docusaurus-plugin-content-blog', ...rest);
    if (fs.existsSync(localizedPath)) return localizedPath;

    return path.resolve(process.cwd(), '..', 'blog', ...rest);
  }

  return null;
}

function restoreTruncateMarker(content, originalSource, filePath) {
  if (!originalSource || !truncatePattern.test(originalSource) || truncatePattern.test(content)) {
    return content;
  }

  const originalParsed = matter(originalSource);
  const beforeTruncate = originalParsed.content.split(truncatePattern)[0] ?? '';
  const anchorLine = beforeTruncate
    .split('\n')
    .map((line) => line.trimEnd())
    .filter((line) => line.trim())
    .at(-1);

  if (!anchorLine) return content;

  const anchorIndex = content.indexOf(anchorLine);
  if (anchorIndex === -1) return content;

  const insertAt = anchorIndex + anchorLine.length;
  const marker = path.extname(filePath) === '.mdx' ? truncateJsxMarker : '<!--truncate-->';
  return `${content.slice(0, insertAt)}\n\n${marker}\n${content.slice(insertAt)}`;
}

function canonicalizeTruncateMarkers(content, filePath) {
  const marker = path.extname(filePath) === '.mdx' ? truncateJsxMarker : '<!--truncate-->';
  const parts = content.split(allTruncatePatterns);

  if (parts.length <= 1) return content;

  return `${parts[0].trimEnd()}\n\n${marker}\n\n${parts.slice(1).join('').trimStart()}`;
}

function normalizeContentBody(content, originalSource, filePath) {
  const truncateReplacement = path.extname(filePath) === '.mdx' ? truncateJsxMarker : '<!--truncate-->';

  return content
    .replace(/<!--[\s\S]*?-->\u200b?/g, (match) => (truncatePattern.test(match) ? truncateReplacement : ''))
    .replace(/\{\/\*\s*truncate\s*\*\/\}/g, truncateReplacement)
    .replace(/```math\b/g, '```text')
    .replace(/\n{3,}/g, '\n\n')
    .trimEnd() + '\n';
}

function normalizeFile(filePath) {
  const basename = path.basename(filePath);

  if (basename.startsWith('_index.') && filePath.includes(`${path.sep}docs${path.sep}`)) {
    fs.unlinkSync(filePath);
    return;
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const originalSourcePath = getOriginalSourcePath(filePath);
  const originalSource = originalSourcePath && fs.existsSync(originalSourcePath)
    ? fs.readFileSync(originalSourcePath, 'utf8')
    : null;

  let normalizedBody = normalizeContentBody(source, originalSource, filePath);
  normalizedBody = restoreTruncateMarker(normalizedBody, originalSource, filePath);
  normalizedBody = canonicalizeTruncateMarkers(normalizedBody, filePath);
  const parsed = matter(normalizedBody);
  let changed = normalizedBody !== source;

  if (!parsed.data.title) {
    parsed.data.title = deriveTitle(parsed.content, filePath);
    changed = true;
  }

  if (Array.isArray(parsed.data.tags)) {
    const tags = parsed.data.tags.map((value) => String(value));
    if (tags.some((value, index) => value !== parsed.data.tags[index])) changed = true;
    parsed.data.tags = tags;
  }

  if (!changed) return;

  fs.writeFileSync(filePath, matter.stringify(parsed.content, parsed.data));
}

if (fs.existsSync(root)) {
  walk(root);
}
