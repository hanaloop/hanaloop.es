'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { AppLocale } from '@/lib/locales';
import insightItems from '@/lib/data/home-insights.json';

type HomeInsightSectionProps = {
    locale: AppLocale;
};

type InsightItem = {
    id: string;
    title: string;
    date: string;
    author: string;
    thumbnail: string;
    href: string;
};

const ITEMS_PER_PAGE = 4;

type SectionCopy = {
    eyebrow: string;
    heading: string;
    listTitle: string;
    viewMore: string;
    first: string;
    last: string;
};

const copy: Record<AppLocale, SectionCopy> = {
    ko: {
        eyebrow: '다양하고 정확한 탄소중립 인사이트를 확인해보세요.',
        heading: 'Check out Carbon Neutral Insights.',
        listTitle: 'Insight LIST',
        viewMore: 'View more',
        first: 'First',
        last: 'Last',
    },
    en: {
        eyebrow: 'Explore diverse and accurate carbon neutrality insights.',
        heading: 'Check out Carbon Neutral Insights.',
        listTitle: 'Insight LIST',
        viewMore: 'View more',
        first: 'First',
        last: 'Last',
    },
    es: {
        eyebrow: 'Consulta ideas diversas y precisas sobre neutralidad de carbono.',
        heading: 'Check out Carbon Neutral Insights.',
        listTitle: 'Insight LIST',
        viewMore: 'View more',
        first: 'First',
        last: 'Last',
    },
};

function formatDate(dateString: string, locale: AppLocale) {
    const date = new Date(dateString);
    if (locale === 'ko') {
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
    }
    return date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
}

function getPaginationRange(currentPage: number, totalPages: number) {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = new Set<number>([1, totalPages, currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]);
    const normalized = Array.from(pages)
        .filter((n) => n >= 1 && n <= totalPages)
        .sort((a, b) => a - b);

    const result: (number | '...')[] = [];
    for (let i = 0; i < normalized.length; i += 1) {
        const page = normalized[i];
        const prev = normalized[i - 1];
        if (i > 0 && prev + 1 < page) result.push('...');
        result.push(page);
    }
    return result;
}

export function HomeInsightSection({ locale }: HomeInsightSectionProps) {
    const text = copy[locale];
    const items = insightItems as InsightItem[];
    const totalPages = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE));
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobileOpen, setIsMobileOpen] = useState(true);

    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return items.slice(start, start + ITEMS_PER_PAGE);
    }, [currentPage, items]);

    const pagination = useMemo(() => getPaginationRange(currentPage, totalPages), [currentPage, totalPages]);

    return (
        <section className="px-5 pb-[64px] pt-[72px] text-[var(--color-text-default)] md:px-8 md:pb-[90px] md:pt-[110px] lg:px-[64px] lg:pb-[140px] lg:pt-[140px]">
            <div className="mx-auto w-full max-w-[1440px]">
                <div className="text-center">
                    <p className="text-[21px] font-semibold leading-[1.3] tracking-[0.5px]">{text.eyebrow}</p>
                    <h2 className="mx-auto mt-2 font-medium leading-[1.14] tracking-[-0.02em] text-black [font-size:clamp(22px,4vw,48px)]">{text.heading}</h2>
                </div>

                <div className="mt-[56px] border-t border-black lg:mt-[88px] lg:px-11">
                    <div className="lg:px-11 flex items-center justify-between py-[18px]">
                        <h3 className="!text-[32px] font-medium leading-[1.1] tracking-[-0.01em]">{text.listTitle}</h3>
                        <button type="button" className="lg:hidden" onClick={() => setIsMobileOpen((prev) => !prev)} aria-expanded={isMobileOpen} aria-label={isMobileOpen ? 'Collapse insight list' : 'Expand insight list'}>
                            <Image src="/icons/revamp/ic-accordion-shape.png" alt="" width={18} height={10} className={`transition-transform duration-200 ${isMobileOpen ? 'rotate-0' : 'rotate-180'}`} />
                        </button>
                    </div>

                    <div className={`${isMobileOpen ? 'block' : 'hidden'} lg:block`}>
                        {currentItems.map((item) => (
                            <article key={item.id} className="lg:px-11 grid grid-cols-[1fr_106px] items-center gap-4 border-t border-[var(--color-border)] py-[18px] md:grid-cols-[1fr_140px] md:gap-6 md:py-6 lg:grid-cols-[1fr_240px] lg:gap-8 lg:py-4">
                                <div>
                                    <h4 className="max-w-[760px] text-[24px] font-medium leading-[1.22] tracking-[-0.02em]">
                                        <Link href={item.href} className="hover:underline">
                                            {item.title}
                                        </Link>
                                    </h4>
                                    <p className="mt-2 text-[18px] font-normal leading-[1.25] tracking-[-0.01em] text-[#2f2f2f]">
                                        {formatDate(item.date, locale)}, by {item.author}
                                    </p>
                                </div>
                                <Link href={item.href} className="block overflow-hidden rounded-[8px] border border-[var(--color-border)]">
                                    <Image src={item.thumbnail} alt={item.title} width={240} height={120} className="h-[110px] w-[106px] object-cover md:w-[140px] lg:w-[240px]" />
                                </Link>
                            </article>
                        ))}
                    </div>
                    <div className="border-t border-[var(--color-border)]"></div>
                </div>

                <div className="px-22 pt-[20px] flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                    <nav className={`${isMobileOpen ? 'flex' : 'hidden'} lg:flex flex-wrap items-center gap-[10px] text-[24px] font-normal leading-none`} aria-label="Insight pagination">
                        {currentPage !== 1 && (
                            <button type="button" className="hover:underline disabled:opacity-40" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                                {text.first}
                            </button>
                        )}
                        {pagination.map((token, idx) =>
                            token === '...' ? (
                                <span key={`ellipsis-${idx}`} className="px-1">
                                    ...
                                </span>
                            ) : (
                                <button
                                    key={token}
                                    type="button"
                                    className={`hover:underline ${token === currentPage ? 'font-semibold' : 'font-normal'}`}
                                    onClick={() => setCurrentPage(token)}
                                    aria-current={token === currentPage ? 'page' : undefined}
                                >
                                    {token}
                                </button>
                            ),
                        )}
                        <button type="button" className="hover:underline disabled:opacity-40" onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
                            {text.last}
                        </button>
                    </nav>

                    <Link
                        href="/blog"
                        className={`${isMobileOpen ? 'inline-flex' : 'hidden'} lg:inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-black px-8 text-[24px] font-medium text-white lg:h-auto lg:bg-transparent lg:px-0 lg:text-[24px] lg:font-medium lg:text-black`}
                    >
                        {text.viewMore}
                        <Image src="/icons/revamp/ic-arrow-up-right.png" alt="" width={24} height={24} className="lg:hidden" />
                        <Image src="/icons/revamp/ic-arrow-right-black.png" alt="" width={27} height={27} className="hidden lg:block" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
