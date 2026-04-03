'use client';

import { useMemo } from 'react';
import Link from 'fumadocs-core/link';
import { useTreeContext, useTreePath } from 'fumadocs-ui/contexts/tree';
import { getBreadcrumbItemsFromPath } from 'fumadocs-core/breadcrumb';
import { ChevronRight, House } from 'lucide-react';
import { withLocalePath, type AppLocale } from '@/lib/locales';

export function DocsBreadcrumb({ locale }: { locale: AppLocale }) {
  const path = useTreePath();
  const { root } = useTreeContext();

  const items = useMemo(() => {
    const breadcrumbItems = getBreadcrumbItemsFromPath(root, path, {
      includePage: true,
      includeRoot: false,
    });

    return breadcrumbItems.map((item, index) => {
      const node = path[index];
      const fallbackUrl =
        node && 'url' in node && typeof node.url === 'string' && node.url.length > 0 ? node.url : undefined;

      return {
        ...item,
        url: item.url ?? fallbackUrl,
      };
    });
  }, [path, root]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm">
      <Link
        href={withLocalePath(locale, '/docs/intro')}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
      >
        <House className="h-4 w-4 fill-current" />
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="inline-flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-gray-400" />
            {isLast ? (
              <span className="inline-flex rounded-full bg-[#eef8f2] px-3 py-1 text-sm font-medium text-[#2e8555]">
                {item.name}
              </span>
            ) : item.url ? (
              <Link href={item.url} className="text-gray-600 transition hover:text-gray-900">
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-600">{item.name}</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
