import { getBlogPosts, getBlogSlug } from './blog';
import { type AppLocale, withLocalePath } from './locales';
import { getDocsSource } from './source';

export type MobileContextualNavItem = {
  id: string;
  label: string;
  href?: string;
  children?: MobileContextualNavItem[];
};

export type MobileContextualNav = {
  title: string;
  items: MobileContextualNavItem[];
  backLabel?: string;
};

function extractLabel(value: unknown): string {
  if (typeof value === 'string' || typeof value === 'number') return String(value);
  if (Array.isArray(value)) return value.map(extractLabel).join(' ').trim();
  if (value && typeof value === 'object' && 'props' in value) {
    return extractLabel((value as { props?: { children?: unknown } }).props?.children);
  }

  return '';
}

function mapDocsNode(node: any): MobileContextualNavItem | null {
  if (!node || typeof node !== 'object') return null;

  if (node.type === 'page') {
    return {
      id: node.$id ?? node.url ?? extractLabel(node.name),
      label: extractLabel(node.name),
      href: node.url,
    };
  }

  if (node.type === 'folder') {
    const children = Array.isArray(node.children)
      ? node.children.map(mapDocsNode).filter((item): item is MobileContextualNavItem => item !== null)
      : [];

    return {
      id: node.$id ?? node.index?.url ?? extractLabel(node.name),
      label: extractLabel(node.name),
      href: node.index?.url,
      children: children.length > 0 ? children : undefined,
    };
  }

  return null;
}

export function buildDocsMobileContextualNav(locale: AppLocale): MobileContextualNav {
  const tree = getDocsSource(locale).getPageTree();
  const items = Array.isArray(tree.children)
    ? tree.children.map(mapDocsNode).filter((item): item is MobileContextualNavItem => item !== null)
    : [];

  return {
    title: extractLabel(tree.name) || 'Docs',
    backLabel: 'Back to main menu',
    items,
  };
}

function getBlogTitle(locale: AppLocale) {
  if (locale === 'ko') return '최신 블로그';
  if (locale === 'es') return 'Ultimos articulos';
  return 'Latest posts';
}

export function buildBlogMobileContextualNav(locale: AppLocale): MobileContextualNav {
  const items = getBlogPosts(locale).slice(0, 10).map((post) => ({
    id: post.info.path,
    label: String(post.title ?? ''),
    href: withLocalePath(locale, `/blog/${getBlogSlug(post).join('/')}`),
  }));

  return {
    title: getBlogTitle(locale),
    backLabel: 'Back to main menu',
    items,
  };
}
