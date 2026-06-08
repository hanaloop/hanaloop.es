'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

export type CaseCardFilterId = 'all' | 'scope-123' | 'cbam' | 'pcf-lca' | 'supply-chain-pcf' | 'hana-eco-ai';

export type CaseCardItem = {
    id: string;
    detailId: number;
    logoSrc: string;
    logoAlt: string;
    hasDetail?: boolean;
    ctaLabel: string;
    companyName: string;
    industryLabel: string;
    challengeLabel: string;
    challengeText: string;
    solutionLabel: string;
    solutionText: string;
    resultLabel: string;
    resultText: string;
    categories: CaseCardFilterId[];
};

type CaseCardsSectionClientProps = {
    locale: AppLocale;
    overviewAriaLabel: string;
    overviewHeading: string;
    overviewSubheading: string;
    cardsAriaLabel: string;
    filters: Record<CaseCardFilterId, string>;
    items: CaseCardItem[];
};

const FILTER_ORDER: CaseCardFilterId[] = ['all', 'scope-123', 'cbam', 'pcf-lca', 'supply-chain-pcf', 'hana-eco-ai'];

export function CaseCardsSectionClient({ locale, overviewAriaLabel, overviewHeading, overviewSubheading, cardsAriaLabel, filters, items }: CaseCardsSectionClientProps) {
    const [activeFilter, setActiveFilter] = useState<CaseCardFilterId>('all');
    const filteredItems = activeFilter === 'all' ? items : items.filter((item) => item.categories.includes(activeFilter));

    return (
        <>
            <section className="pb-12 pt-14 lg:pb-30 lg:pt-[150px]" aria-label={overviewAriaLabel}>
                <div className="mx-auto w-full max-w-[1440px] px-5 text-left md:px-8 md:text-center lg:px-11">
                    <h2 className="font-bold tracking-[-1px] text-black [font-size:clamp(28px,calc(16.94px+2.99vw),60px)]">{overviewHeading}</h2>
                    <p className="mt-5 font-semibold tracking-[0.5px] text-[var(--color-text-subtle)] [font-size:clamp(16px,calc(13.23px+0.75vw),24px)]">{overviewSubheading}</p>

                    <div className="mt-10 hidden flex-wrap items-center justify-center gap-3 md:flex">
                        {FILTER_ORDER.map((filterId) => {
                            const isActive = activeFilter === filterId;
                            return (
                                <button
                                    key={filterId}
                                    type="button"
                                    onClick={() => setActiveFilter(filterId)}
                                    className={`inline-flex h-[56px] cursor-pointer items-center justify-center rounded-full px-7 text-[18px] font-bold tracking-[-0.3px] transition-colors ${
                                        isActive ? 'bg-black text-white' : 'bg-[#EDEDED] text-[#9B9B9B]'
                                    }`}
                                >
                                    {filters[filterId]}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="pb-16 lg:pb-[120px]" aria-label={cardsAriaLabel}>
                <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-11">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
                        {filteredItems.map((item) => (
                            <article key={item.id} className="flex flex-col rounded-[16px] bg-[#dce7e4] px-6 py-8 md:px-12 md:py-14">
                                <div className="flex md:min-h-[124px] md:flex-col md:items-start md:justify-start md:gap-6 xl:h-[100px] xl:min-h-0 xl:flex-row xl:justify-between xl:gap-4">
                                    <div className="flex h-[60px] items-start md:h-[100px]">
                                        <Image src={item.logoSrc} alt={item.logoAlt} width={220} height={100} className="h-auto w-auto max-h-[60px] max-w-[160px] object-contain md:max-h-[100px] md:max-w-[220px]" />
                                    </div>
                                    <CaseCardAction locale={locale} item={item} variant="desktop" className="hidden xl:inline-flex xl:w-[260px] xl:shrink-0" />
                                </div>

                                <div className="mt-4 flex-1 border-t border-black/10 pt-4 md:mt-7 md:pt-8">
                                    <div className="flex items-center gap-4 md:gap-6">
                                        <p className="max-w-[400px] font-bold tracking-[-0.3px] text-[#222] [font-size:clamp(20px,calc(20px+(28-20)*((100vw-370px)/1070)),28px)]">{item.companyName}</p>
                                        <p className="font-normal tracking-[-0.3px] text-[#6C6C6C] [font-size:clamp(14px,calc(14px+(18-14)*((100vw-370px)/1070)),18px)]">{item.industryLabel}</p>
                                    </div>

                                    <div className="mt-6 space-y-4 md:mt-7 md:space-y-3.5">
                                        <InfoRow label={item.challengeLabel} text={item.challengeText} />
                                        <InfoRow label={item.solutionLabel} text={item.solutionText} />
                                        <InfoRow label={item.resultLabel} text={item.resultText} />
                                    </div>
                                </div>

                                <CaseCardAction locale={locale} item={item} variant="mobile" className="mt-8 inline-flex w-full xl:hidden" />
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

function CaseCardAction({ locale, item, variant, className = '' }: { locale: AppLocale; item: CaseCardItem; variant: 'desktop' | 'mobile'; className?: string }) {
    const baseClassName =
        variant === 'desktop'
            ? 'group min-h-[56px] items-center justify-between rounded-full border border-black bg-transparent px-6 py-3 text-black transition-colors hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white active:bg-black active:text-white'
            : 'group min-h-[56px] items-center justify-between rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-black focus-visible:bg-black active:bg-black';

    if (item.hasDetail === false) {
        return (
            <span aria-disabled="true" className={`${baseClassName} cursor-not-allowed ${variant === 'desktop' ? 'border-[#9B9B9B] text-[#9B9B9B]' : 'bg-[#9a9a9a] text-white'} ${className}`}>
                <span className="whitespace-nowrap text-[18px] font-bold tracking-[-0.3px]">{item.ctaLabel}</span>
                <Image
                    src={variant === 'desktop' ? '/site/icons/ic-arrow-black.png' : '/site/icons/ic-arrow.png'}
                    alt=""
                    aria-hidden="true"
                    width={18}
                    height={18}
                    className={`h-[18px] w-[18px] ${variant === 'desktop' ? 'opacity-40' : 'opacity-60'}`}
                />
            </span>
        );
    }

    return (
        <Link href={withLocalePath(locale, `/case_detail/${item.detailId}`)} className={`${baseClassName} ${className}`}>
            <span className="whitespace-nowrap text-[18px] font-bold tracking-[-0.3px]">{item.ctaLabel}</span>
            {variant === 'desktop' ? (
                <span className="relative h-[18px] w-[18px] shrink-0">
                    <Image
                        src="/site/icons/ic-arrow-black.png"
                        alt=""
                        aria-hidden="true"
                        width={18}
                        height={18}
                        className="absolute inset-0 h-[18px] w-[18px] transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0 group-active:opacity-0"
                    />
                    <Image
                        src="/site/icons/ic-arrow.png"
                        alt=""
                        aria-hidden="true"
                        width={18}
                        height={18}
                        className="absolute inset-0 h-[18px] w-[18px] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100"
                    />
                </span>
            ) : (
                <Image src="/site/icons/ic-arrow.png" alt="" aria-hidden="true" width={18} height={18} className="h-[18px] w-[18px]" />
            )}
        </Link>
    );
}

function InfoRow({ label, text }: { label: string; text: string }) {
    return (
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-3">
            <span className="inline-flex w-[80px] shrink-0 items-center justify-center rounded-full bg-[#21b97c] px-2 py-2 font-bold leading-none tracking-[-0.3px] text-white md:w-[96px] lg:py-3 [font-size:clamp(12px,calc(11px+(16-11)*((100vw-370px)/1070)),16px)]">
                {label}
            </span>
            <p className="pt-0.5 font-normal tracking-[-0.3px] text-[#373737] [font-size:clamp(16px,calc(16px+(18-16)*((100vw-370px)/1070)),18px)]">{text}</p>
        </div>
    );
}
