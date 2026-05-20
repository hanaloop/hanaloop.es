import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

type CaseDetailSummary = {
    label: string;
    text: string;
};

type CaseDetailSection = {
    title: string;
    paragraphs: string[];
    bullets?: string[];
    resultRows?: Array<{ area: string; achievement: string }>;
};

type CaseDetailItem = {
    id: number;
    logoSrc: string;
    logoAlt: string;
    companyName: string;
    eyebrow: string;
    title: string;
    subtitle?: string;
    contactLabel?: string;
    hideHeaderAssets?: boolean;
    summary: CaseDetailSummary[];
    sections: CaseDetailSection[];
};

export async function CaseDetailContentSection({ caseId }: { caseId: number }) {
    const t = await getTranslations('CasesDetail');
    const locale = (await getLocale()) as AppLocale;
    const items = t.raw('items') as CaseDetailItem[];
    const currentCaseIndex = items.findIndex((caseItem) => caseItem.id === caseId);
    const item = currentCaseIndex >= 0 ? items[currentCaseIndex] : undefined;

    if (!item) notFound();

    const previousItem = items[(currentCaseIndex - 1 + items.length) % items.length];
    const nextItem = items[(currentCaseIndex + 1) % items.length];
    const navigationLabels = {
        ko: { previous: '이전 사례 보기', next: '다음 사례 보기' },
        en: { previous: 'View previous case', next: 'View next case' },
        es: { previous: 'Ver caso anterior', next: 'Ver siguiente caso' },
    } satisfies Record<AppLocale, { previous: string; next: string }>;

    return (
        <section className="mx-auto w-full max-w-[1440px] px-4 pb-16 md:px-8 md:pb-24 lg:px-11 lg:pb-50" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto">
                <div className="flex items-center justify-between py-10 md:py-20 lg:py-30">
                    <Link
                        href={withLocalePath(locale, `/case_detail/${previousItem.id}`)}
                        aria-label={navigationLabels[locale].previous}
                        className="inline-flex h-[clamp(42px,calc(42px+14*((100vw-370px)/1070)),56px)] w-[clamp(42px,calc(42px+14*((100vw-370px)/1070)),56px)] items-center justify-center rounded-full bg-[#EDEDED] transition-colors hover:bg-[#e2e2e2]"
                    >
                        <Image
                            src="/site/icons/page_arrow.png"
                            alt=""
                            aria-hidden="true"
                            width={24}
                            height={24}
                            className="h-[clamp(18px,calc(18px+6*((100vw-370px)/1070)),24px)] w-[clamp(18px,calc(18px+6*((100vw-370px)/1070)),24px)] rotate-180"
                        />
                    </Link>

                    <Link
                        href={withLocalePath(locale, `/case_detail/${nextItem.id}`)}
                        aria-label={navigationLabels[locale].next}
                        className="inline-flex h-[clamp(42px,calc(42px+14*((100vw-370px)/1070)),56px)] w-[clamp(42px,calc(42px+14*((100vw-370px)/1070)),56px)] items-center justify-center rounded-full bg-[#EDEDED] transition-colors hover:bg-[#e2e2e2]"
                    >
                        <Image src="/site/icons/page_arrow.png" alt="" aria-hidden="true" width={24} height={24} className="h-[clamp(18px,calc(18px+6*((100vw-370px)/1070)),24px)] w-[clamp(18px,calc(18px+6*((100vw-370px)/1070)),24px)]" />
                    </Link>
                </div>

                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    {!item.hideHeaderAssets ? (
                        <>
                            <Image src={item.logoSrc} alt={item.logoAlt} width={320} height={140} className="h-auto w-auto max-h-[100px] max-w-[260px] md:max-h-[140px] md:max-w-[320px]" priority />
                            <Link href={withLocalePath(locale, '/partnership')} className="inline-flex h-[56px] w-[200px] items-center justify-between rounded-full bg-black px-4 text-white md:w-[240px] md:px-8 lg:w-[280px]">
                                <span className="[font-size:clamp(14px,calc(14px+(18-14)*((100vw-370px)/1070)),18px)] tracking-[-0.3px]">{item.contactLabel ?? t('defaultContactLabel')}</span>
                                <Image src="/site/icons/ic-arrow.png" alt="" aria-hidden="true" width={10} height={10} className="h-[10px] w-[10px]" />
                            </Link>
                        </>
                    ) : null}
                </div>

                <div className={item.hideHeaderAssets ? 'mt-2 md:mt-4' : 'mt-12 md:mt-20 lg:mt-28'}>
                    {!item.hideHeaderAssets ? <p className="[font-size:clamp(26px,calc(26px+(36-26)*((100vw-370px)/1070)),36px)] font-bold tracking-[-0.3px] text-[#222]">{item.companyName}</p> : null}
                    <p
                        className={
                            item.hideHeaderAssets
                                ? '[font-size:clamp(16px,calc(16px+(20-16)*((100vw-370px)/1070)),20px)] font-bold tracking-[-0.3px] text-[#222]'
                                : 'mt-9 [font-size:clamp(16px,calc(16px+(20-16)*((100vw-370px)/1070)),20px)] font-bold tracking-[-0.3px] text-[#222]'
                        }
                    >
                        {item.eyebrow}
                    </p>
                    <h1 className="mt-2 [font-size:clamp(24px,calc(24px+(34-24)*((100vw-370px)/1070)),34px)] font-bold leading-tight tracking-[-0.3px] text-[#111]">{item.title}</h1>
                    {item.subtitle ? <p className="mt-4 [font-size:clamp(16px,calc(16px+(20-16)*((100vw-370px)/1070)),20px)] font-semibold tracking-[-0.3px] text-[#333]">{item.subtitle}</p> : null}
                </div>

                <div className="mt-10 space-y-3 md:mt-12">
                    {item.summary.map((summary) => (
                        <p key={summary.label} className="[font-size:clamp(15px,calc(15px+(18-15)*((100vw-370px)/1070)),18px)] leading-[1.8] tracking-[-0.3px] text-[#333]">
                            <strong className="font-bold text-[#111]">{summary.label}: </strong>
                            {summary.text}
                        </p>
                    ))}
                </div>

                <div className="mt-16 space-y-16 md:mt-24 md:space-y-20">
                    {item.sections.map((section) => (
                        <section key={section.title} className={section.resultRows ? 'mt-25 md:mt-45 lg:mt-60' : ''}>
                            <h2 className="[font-size:clamp(20px,calc(20px+(28-20)*((100vw-370px)/1070)),28px)] font-bold tracking-[-0.3px] text-[#111]">{section.title}</h2>

                            {!section.resultRows ? (
                                <div className="mt-5 space-y-4 md:mt-7">
                                    {section.paragraphs.map((paragraph) => (
                                        <p key={paragraph} className="[font-size:clamp(15px,calc(15px+(18-15)*((100vw-370px)/1070)),18px)] leading-[1.9] tracking-[-0.3px] text-[#333]">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            ) : null}

                            {section.bullets ? (
                                <ul className="mt-6 space-y-3">
                                    {section.bullets.map((bullet) => (
                                        <li key={bullet} className="flex gap-3 [font-size:clamp(15px,calc(15px+(18-15)*((100vw-370px)/1070)),18px)] leading-[1.8] tracking-[-0.3px] text-[#333]">
                                            <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#21b97c]" aria-hidden="true" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}

                            {section.resultRows ? (
                                <>
                                    <div className="mt-16 hidden md:block">
                                        <table className="w-full table-fixed border-collapse text-left">
                                            <colgroup>
                                                <col className="w-[26%]" />
                                                <col className="w-[74%]" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th className="border-b border-[#d9d9d9] pb-4 pr-10 [font-size:clamp(18px,calc(18px+(28-18)*((100vw-370px)/1070)),28px)] font-bold tracking-[-0.3px] text-[#111]">영역</th>
                                                    <th className="border-b border-[#d9d9d9] pb-4 [font-size:clamp(18px,calc(18px+(28-18)*((100vw-370px)/1070)),28px)] font-bold tracking-[-0.3px] text-[#111]">성과</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {section.resultRows.map((row) => (
                                                    <tr key={row.area}>
                                                        <td className="whitespace-pre-line py-5 pr-10 align-top [font-size:clamp(15px,calc(15px+(18-15)*((100vw-370px)/1070)),18px)] font-semibold leading-[1.85] tracking-[-0.3px] text-[#222]">
                                                            {row.area}
                                                        </td>
                                                        <td className="whitespace-pre-line py-5 align-top [font-size:clamp(15px,calc(15px+(18-15)*((100vw-370px)/1070)),18px)] leading-[1.9] tracking-[-0.3px] text-[#333]">
                                                            {row.achievement}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="mt-12 space-y-4 md:hidden">
                                        <div className="grid grid-cols-[96px_1fr] border-b border-[#d9d9d9] pb-3">
                                            <p className="text-[18px] font-bold tracking-[-0.3px] text-[#111]">영역</p>
                                            <p className="text-[18px] font-bold tracking-[-0.3px] text-[#111]">성과</p>
                                        </div>
                                        {section.resultRows.flatMap((row) => {
                                            const areas = row.area
                                                .split('\n')
                                                .map((v) => v.trim())
                                                .filter(Boolean);
                                            const achievements = row.achievement
                                                .split('\n')
                                                .map((v) => v.trim())
                                                .filter(Boolean);
                                            return areas.map((area, index) => (
                                                <div key={`${area}-${index}`} className="grid grid-cols-[96px_1fr] gap-3">
                                                    <p className="text-[16px] font-semibold leading-[1.65] tracking-[-0.3px] text-[#222]">{area}</p>
                                                    <p className="text-[16px] leading-[1.7] tracking-[-0.3px] text-[#333]">{achievements[index] ?? ''}</p>
                                                </div>
                                            ));
                                        })}
                                    </div>

                                    <div className="mt-14 space-y-4 md:mt-16">
                                        {section.paragraphs.map((paragraph) => (
                                            <p key={`result-${paragraph}`} className="[font-size:clamp(15px,calc(15px+(18-15)*((100vw-370px)/1070)),18px)] leading-[1.9] tracking-[-0.3px] text-[#333]">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </>
                            ) : null}
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}
