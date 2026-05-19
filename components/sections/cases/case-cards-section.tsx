import Image from 'next/image';
import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

type CaseCardItem = {
    id: string;
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
};

export async function CaseCardsSection() {
    const t = await getTranslations('CasesCards');
    const locale = (await getLocale()) as AppLocale;
    const items = t.raw('items') as CaseCardItem[];

    return (
        <section className="pb-16 lg:pb-[120px]" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-11">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
                    {items.map((item, index) => (
                        <article key={item.id} className="flex flex-col rounded-[16px] bg-[#dce7e4] px-6 py-8 md:px-12 md:py-14">
                            <div className="flex md:h-[100px] md:items-start md:justify-between md:gap-4">
                                <Image src={item.logoSrc} alt={item.logoAlt} width={220} height={100} className="h-auto w-auto max-h-[60px] max-w-[160px] md:max-h-[100px] md:max-w-[220px] object-contain" />
                                {item.hasDetail === false ? (
                                    <span aria-disabled="true" className="hidden md:inline-flex h-[48px] w-[182px] cursor-not-allowed items-center justify-between rounded-full bg-[#9a9a9a] px-[26px] text-white">
                                        <span className="[font-size:clamp(14px,calc(14px+(18-14)*((100vw-370px)/1070)),18px)] font-bold tracking-[-0.3px]">{item.ctaLabel}</span>
                                        <Image src="/site/icons/ic-arrow.png" alt="" aria-hidden="true" width={10} height={10} className="h-[10px] w-[10px] opacity-60" />
                                    </span>
                                ) : (
                                    <Link href={withLocalePath(locale, `/case_detail/${index + 1}`)} className="hidden md:inline-flex h-[48px] w-[182px] items-center justify-between rounded-full bg-black px-[26px] text-white">
                                        <span className="[font-size:clamp(14px,calc(14px+(18-14)*((100vw-370px)/1070)),18px)] font-bold tracking-[-0.3px]">{item.ctaLabel}</span>
                                        <Image src="/site/icons/ic-arrow.png" alt="" aria-hidden="true" width={10} height={10} className="h-[10px] w-[10px]" />
                                    </Link>
                                )}
                            </div>

                            <div className="mt-4 flex-1 border-t border-black/10 pt-4 md:mt-7 md:pt-8">
                                <div className="flex items-center gap-4 md:gap-6">
                                    <p className="[font-size:clamp(20px,calc(20px+(28-20)*((100vw-370px)/1070)),28px)] font-bold tracking-[-0.3px] text-[#222] max-w-[400px]">{item.companyName}</p>
                                    <p className="[font-size:clamp(14px,calc(14px+(18-14)*((100vw-370px)/1070)),18px)] font-normal tracking-[-0.3px] text-[#6C6C6C]">{item.industryLabel}</p>
                                </div>

                                <div className="mt-6 space-y-4 md:mt-7 md:space-y-3.5">
                                    <InfoRow label={item.challengeLabel} text={item.challengeText} />
                                    <InfoRow label={item.solutionLabel} text={item.solutionText} />
                                    <InfoRow label={item.resultLabel} text={item.resultText} />
                                </div>
                            </div>

                            {item.hasDetail === false ? (
                                <span aria-disabled="true" className="mt-4 inline-flex h-[48px] w-full cursor-not-allowed items-center justify-between rounded-full bg-[#9a9a9a] px-[22px] text-white md:hidden">
                                    <span className="[font-size:clamp(14px,calc(14px+(18-14)*((100vw-370px)/1070)),18px)] font-bold tracking-[-0.3px]">{item.ctaLabel}</span>
                                    <Image src="/site/icons/ic-arrow.png" alt="" aria-hidden="true" width={10} height={10} className="h-[10px] w-[10px] opacity-60" />
                                </span>
                            ) : (
                                <Link href={withLocalePath(locale, `/case_detail/${index + 1}`)} className="mt-4 inline-flex h-[48px] w-full items-center justify-between rounded-full bg-black px-[22px] text-white md:hidden">
                                    <span className="[font-size:clamp(14px,calc(14px+(18-14)*((100vw-370px)/1070)),18px)] font-bold tracking-[-0.3px]">{item.ctaLabel}</span>
                                    <Image src="/site/icons/ic-arrow.png" alt="" aria-hidden="true" width={10} height={10} className="h-[10px] w-[10px]" />
                                </Link>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function InfoRow({ label, text }: { label: string; text: string }) {
    return (
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-3">
            <span className="inline-flex w-[80px] shrink-0 items-center justify-center rounded-full bg-[#21b97c] px-2 py-2 lg:py-3 [font-size:clamp(12px,calc(11px+(16-11)*((100vw-370px)/1070)),16px)] font-bold leading-none tracking-[-0.3px] text-white md:w-[96px]">
                {label}
            </span>
            <p className="pt-0.5 [font-size:clamp(16px,calc(16px+(18-16)*((100vw-370px)/1070)),18px)] font-normal tracking-[-0.3px] text-[#373737]">{text}</p>
        </div>
    );
}
