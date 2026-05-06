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

export function ListTable({ heading, items, itemsPerPage = 10, viewMoreHref, viewMoreLabel }: ListTableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return items.slice(start, start + itemsPerPage);
    }, [currentPage, items, itemsPerPage]);

    const pagination = useMemo(() => getPaginationRange(currentPage, totalPages), [currentPage, totalPages]);

    return (
        <div className="mt-10 border-t border-[#bdbdbd] max-w-[1440px] mx-auto px-11">
            <div className="border-b border-[#d0d0d0] px-6 py-4">
                <h3 className="text-[16px] md:text-[24px] lg:text-[32px] font-medium leading-none text-[var(--color-text-default)]">{heading}</h3>
            </div>

            {currentItems.map((item) => (
                <article key={item.id} className="grid grid-cols-[1fr_auto] items-center gap-6 border-b border-[#d0d0d0] px-6 py-4">
                    <div className="min-w-0">
                        <h4 className="truncate text-[12px] md:text-[18px] lg:text-[24px] font-medium leading-[1.3] text-[var(--color-text-default)]">
                            <Link href={item.href} className="hover:underline">
                                {item.title}
                            </Link>
                        </h4>
                        <p className="mt-2 text-[10px] md:text-[14px] lg:text-[18px] font-normal leading-none text-[#6a6a6a]">
                            {item.dateText}, by {item.author}
                        </p>
                    </div>
                    <Link href={item.href} className="block overflow-hidden rounded-[4px]">
                        <Image src={item.thumbnail} alt={item.title} width={185} height={110} className="h-[60px] md:h-[80px] lg:h-[110px] w-[80px] md:w-[100px] lg:w-[185px] object-cover" />
                    </Link>
                </article>
            ))}

            <div className="px-6 py-4 flex items-end justify-between gap-6">
                <nav className="flex flex-wrap items-center gap-2 text-[16px] md:text-[20px] lg:text-[24px] leading-none text-[var(--color-text-default)]" aria-label="Blog list pagination">
                    {currentPage > 1 && (
                        <button type="button" className="cursor-pointer hover:underline" onClick={() => setCurrentPage(1)}>
                            First
                        </button>
                    )}
                    {pagination.map((token, idx) =>
                        token === '...' ? (
                            <span key={`ellipsis-${idx}`}>...</span>
                        ) : (
                            <button key={token} type="button" className={token === currentPage ? 'font-semibold cursor-default' : 'font-normal cursor-pointer hover:underline'} onClick={token === currentPage ? undefined : () => setCurrentPage(token)} aria-current={token === currentPage ? 'page' : undefined}>
                                {token}
                            </button>
                        ),
                    )}
                    {currentPage < totalPages && (
                        <button type="button" className="cursor-pointer hover:underline" onClick={() => setCurrentPage(totalPages)}>
                            Last
                        </button>
                    )}
                </nav>
                {viewMoreHref && viewMoreLabel ? (
                    <Link href={viewMoreHref} className="inline-flex items-center gap-2 text-[24px] font-medium leading-none text-[var(--color-text-default)]">
                        <span>{viewMoreLabel}</span>
                        <Image src="/icons/revamp/ic-arrow-right-black.png" alt="" width={27} height={27} className="h-[27px] w-[27px]" />
                    </Link>
                ) : null}
            </div>
        </div>
    );
}
