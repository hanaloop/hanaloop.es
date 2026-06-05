import type { ListTableItem } from '@/components/features/list-table';
import type { AppLocale } from '@/lib/locales';
import insightListItems from '@/lib/data/insight-list-items.json';

type InsightListItemsByLocale = Record<AppLocale, ListTableItem[]>;
const typedInsightListItems = insightListItems as InsightListItemsByLocale;

export function getInsightListItems(locale: AppLocale): ListTableItem[] {
  return typedInsightListItems[locale] ?? typedInsightListItems.ko ?? [];
}
