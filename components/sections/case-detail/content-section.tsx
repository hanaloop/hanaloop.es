import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

type CaseDetailSummary = {
    label: string;
    text: string;
};

type CaseDetailSection = {
    title: string;
    paragraphs: string[];
    bullets?: string[];
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
    summary: CaseDetailSummary[];
    sections: CaseDetailSection[];
};

export async function CaseDetailContentSection({ caseId }: { caseId: number }) {
    const t = await getTranslations('CasesDetail');
    const items = t.raw('items') as CaseDetailItem[];
    const item = items.find((caseItem) => caseItem.id === caseId);

    if (!item) notFound();

    return (
        <section className="mx-auto w-full max-w-[1440px] px-4 py-16 md:px-8 md:py-24 lg:px-11 lg:py-[120px]" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <Image src={item.logoSrc} alt={item.logoAlt} width={320} height={140} className="h-auto w-auto max-h-[100px] max-w-[260px] md:max-h-[140px] md:max-w-[320px]" priority />
                    <Link href="/partnership" className="inline-flex h-[56px] w-[200px] items-center justify-between rounded-full bg-black px-4 text-white md:w-[240px] md:px-8 lg:w-[280px]">
                        <span className="[font-size:clamp(14px,calc(14px+(18-14)*((100vw-370px)/1070)),18px)] tracking-[-0.3px]">{item.contactLabel ?? t('defaultContactLabel')}</span>
                        <Image src="/site/icons/ic-arrow.png" alt="" aria-hidden="true" width={10} height={10} className="h-[10px] w-[10px]" />
                    </Link>
                </div>

                <div className="mt-12 md:mt-20 lg:mt-28">
                    <p className="[font-size:clamp(26px,calc(26px+(36-26)*((100vw-370px)/1070)),36px)] font-bold tracking-[-0.3px] text-[#222]">{item.companyName}</p>
                    <p className="mt-9 [font-size:clamp(16px,calc(16px+(20-16)*((100vw-370px)/1070)),20px)] font-bold tracking-[-0.3px] text-[#222]">{item.eyebrow}</p>
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
                        <section key={section.title}>
                            <h2 className="[font-size:clamp(20px,calc(20px+(28-20)*((100vw-370px)/1070)),28px)] font-bold tracking-[-0.3px] text-[#111]">{section.title}</h2>
                            <div className="mt-5 space-y-4 md:mt-7">
                                {section.paragraphs.map((paragraph) => (
                                    <p key={paragraph} className="[font-size:clamp(15px,calc(15px+(18-15)*((100vw-370px)/1070)),18px)] leading-[1.9] tracking-[-0.3px] text-[#333]">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
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
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}
