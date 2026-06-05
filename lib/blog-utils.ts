import type { ListTableItem } from '@/components/features/list-table';
import type { AppLocale } from '@/lib/locales';
import blogListItems from '@/lib/data/blog-list-items.json';

type BlogListItemsByLocale = Record<AppLocale, ListTableItem[]>;
const typedBlogListItems = blogListItems as BlogListItemsByLocale;

export function getBlogListItems(locale: AppLocale): ListTableItem[] {
  return typedBlogListItems[locale] ?? typedBlogListItems.ko ?? [];
}
