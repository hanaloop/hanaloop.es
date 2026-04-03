'use client';

import { useMemo } from 'react';
import Link from 'fumadocs-core/link';
import { usePathname } from 'fumadocs-core/framework';
import { useFooterItems } from 'fumadocs-ui/utils/use-footer-items';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path;
}

function isActiveUrl(target: string, pathname: string) {
  return normalizePath(target) === normalizePath(pathname);
}

function FooterCard({
  href,
  label,
  title,
  direction,
}: {
  href: string;
  label: string;
  title: React.ReactNode;
  direction: 'previous' | 'next';
}) {
  const isNext = direction === 'next';

  return (
    <Link
      href={href}
      className={`flex min-h-[76px] flex-col rounded-lg border px-4 py-3 transition-colors hover:bg-gray-50 ${
        isNext ? 'text-right' : 'text-left'
      }`}
    >
      <span className="mb-1 text-sm font-medium text-gray-500">{label}</span>
      <span className={`inline-flex items-center gap-1 text-xl font-semibold text-gray-900 ${isNext ? 'justify-end' : ''}`}>
        {!isNext ? <ChevronLeft className="h-4 w-4" /> : null}
        <span>{title}</span>
        {isNext ? <ChevronRight className="h-4 w-4" /> : null}
      </span>
    </Link>
  );
}

export function DocsFooter() {
  const footerList = useFooterItems();
  const pathname = usePathname();

  const { previous, next } = useMemo(() => {
    const idx = footerList.findIndex((item) => isActiveUrl(item.url, pathname));
    if (idx === -1) return {};

    return {
      previous: footerList[idx - 1],
      next: footerList[idx + 1],
    };
  }, [footerList, pathname]);

  if (!previous && !next) return null;

  return (
    <div className={`grid gap-4 ${previous && next ? 'grid-cols-2' : 'grid-cols-1'}`}>
      {previous ? <FooterCard href={previous.url} label="이전" title={previous.name} direction="previous" /> : null}
      {next ? <FooterCard href={next.url} label="다음" title={next.name} direction="next" /> : null}
    </div>
  );
}
