'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export type ListTableItem = {
    id: string;
    title: string;
    dateText: string;
    author: string;
    thumbnail: string;
    href: string;
};

type ListTableProps = {
    heading: string;
    items: ListTableItem[];
    itemsPerPage?: number;
    viewMoreHref?: string;
    viewMoreLabel?: string;
    emptyTitle?: string;
    emptyDescription?: string;
};

function getPaginationRange(currentPage: number, totalPages: number) {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = new Set<number>([1, totalPages, currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]);
    const normalized = Array.from(pages)
        .filter((n) => n >= 1 && n <= totalPages)
        .sort((a, b) => a - b);

    const result: Array<number | '...'> = [];
    for (let i = 0; i < normalized.length; i += 1) {
        const page = normalized[i];
        const prev = normalized[i - 1];
        if (i > 0 && prev + 1 < page) result.push('...');
        result.push(page);
    }

    return result;
}

export function ListTable({ heading, items, itemsPerPage = 10, viewMoreHref, viewMoreLabel, emptyTitle, emptyDescription }: ListTableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
    const hasItems = items.length > 0;

    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return items.slice(start, start + itemsPerPage);
    }, [currentPage, items, itemsPerPage]);

    const pagination = useMemo(() => getPaginationRange(currentPage, totalPages), [currentPage, totalPages]);

    return (
        <div className="mx-auto mt-10 max-w-[1440px] border-t border-[var(--color-border)] px-4">
            <div className="border-b border-[var(--color-border)] px-6 py-4">
                <h3 className="[font-size:clamp(16px,calc(10.47px+1.50vw),32px)] font-medium leading-none text-[var(--color-text-default)]">{heading}</h3>
            </div>

            {hasItems ? (
                <>
                    {currentItems.map((item) => (
                        <article key={item.id} className="grid grid-cols-[1fr_auto] items-center gap-6 border-b border-[var(--color-border)] px-6 py-4">
                            <div className="min-w-0">
                                <h4 className="truncate [font-size:clamp(14px,calc(10.54px+0.93vw),24px)] font-medium leading-[1.3] text-[var(--color-text-default)]">
                                    <Link href={item.href} className="hover:underline">
                                        {item.title}
                                    </Link>
                                </h4>
                                <p className="mt-2 [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] font-normal leading-none text-[var(--color-text-muted)]">
                                    {item.dateText}, by {item.author}
                                </p>
                            </div>
                            <Link href={item.href} className="block overflow-hidden rounded-[4px]">
                                <Image src={item.thumbnail} alt={item.title} width={185} height={110} className="h-[60px] md:h-[80px] lg:h-[110px] w-[80px] md:w-[100px] lg:w-[185px] object-cover" />
                            </Link>
                        </article>
                    ))}

                    <div className="px-6 py-4 flex items-end justify-between gap-6">
                        <nav className="flex flex-wrap items-center gap-2 [font-size:clamp(16px,calc(13.23px+0.75vw),24px)] leading-none text-[var(--color-text-default)]" aria-label="Blog list pagination">
                            {currentPage > 1 && (
                                <button type="button" className="cursor-pointer hover:underline" onClick={() => setCurrentPage(1)}>
                                    First
                                </button>
                            )}
                            {pagination.map((token, idx) => {
                                const next = pagination[idx + 1];
                                const showDotSeparator = typeof token === 'number' && typeof next === 'number';
                                const tokenLabel = token === '...' ? '...' : `${token}${showDotSeparator ? '.' : ''}`;

                                return (
                                    <span key={`page-token-${idx}`} className="inline-flex items-center">
                                        {token === '...' ? (
                                            <span>{tokenLabel}</span>
                                        ) : (
                                            <button
                                                type="button"
                                                className={token === currentPage ? 'font-semibold cursor-default' : 'font-normal cursor-pointer hover:underline'}
                                                onClick={token === currentPage ? undefined : () => setCurrentPage(token)}
                                                aria-current={token === currentPage ? 'page' : undefined}
                                            >
                                                {tokenLabel}
                                            </button>
                                        )}
                                    </span>
                                );
                            })}
                            {currentPage < totalPages && (
                                <button type="button" className="cursor-pointer hover:underline" onClick={() => setCurrentPage(totalPages)}>
                                    Last
                                </button>
                            )}
                        </nav>
                        {viewMoreHref && viewMoreLabel ? (
                            <Link href={viewMoreHref} className="inline-flex items-center gap-2 text-[24px] font-medium leading-none text-[var(--color-text-default)]">
                                <span>{viewMoreLabel}</span>
                                <Image src="/site/icons/ic-arrow-right-black.png" alt="" width={17} height={17} className="h-[17px] w-[17px]" />
                            </Link>
                        ) : null}
                    </div>
                </>
            ) : (
                <div className="border-b border-[var(--color-border)] px-6 py-14 text-center">
                    <p className="[font-size:clamp(16px,calc(13.23px+0.75vw),24px)] font-medium leading-[1.4] text-[var(--color-text-default)]">{emptyTitle ?? 'No posts yet'}</p>
                    <p className="mt-3 [font-size:clamp(13px,calc(11.96px+0.28vw),16px)] leading-[1.6] text-[var(--color-text-muted)]">{emptyDescription ?? 'There are no published items at the moment. Please check back soon.'}</p>
                </div>
            )}
        </div>
    );
}
