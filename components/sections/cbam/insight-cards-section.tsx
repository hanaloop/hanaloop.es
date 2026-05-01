import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { RoundedArrowButton } from '@/components/ui/rounded-arrow-button';

type CbamInsightCardsSectionProps = {
    locale: AppLocale;
};

type InsightItem = {
    id: string;
    title: string;
    subtitle: string;
    body: string;
    href: string;
};

type InsightSectionCopy = {
    sectionAriaLabel: string;
    heading: string;
    moreInsightLabel: string;
    items: InsightItem[];
};

const HEADING_STYLE: CSSProperties = {
    fontSize: '48px',
    fontWeight: 500,
    letterSpacing: '-1px',
    lineHeight: 1.25,
};

const CARD_TITLE_STYLE: CSSProperties = {
    fontSize: '21px',
    fontWeight: 600,
    letterSpacing: '-0.25px',
    lineHeight: 1.45,
};

const CARD_BODY_STYLE: CSSProperties = {
    fontSize: '18px',
    fontWeight: 500,
    letterSpacing: '-0.25px',
    lineHeight: 1.45,
};

const BODY_CLAMP_STYLE: CSSProperties = {
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
};

const copy: Record<AppLocale, InsightSectionCopy> = {
    ko: {
        sectionAriaLabel: 'CBAM 인사이트 카드',
        heading: 'CBAM 이해를 위한 하나루프의 인사이트 모음',
        moreInsightLabel: 'More Insight',
        items: [
            {
                id: 'cbam-01',
                title: 'EU 옴니버스 패키지(Omnibus Package)',
                subtitle: 'CBAM 개편안 설명',
                body: '유럽연합 집행위원회(EU COMMISSION)는 2025년 OMNIBUS 패키지의 일환으로 탄소국경조정제도(CBAM)의 간소화 제안을 발표하였습니다. 이번 개편안은 절차를 보다 효율적으로 정비하는 데 목적이 있습니다.',
                href: '/blog',
            },
            {
                id: 'cbam-02',
                title: 'EU 옴니버스 패키지(Omnibus Package)',
                subtitle: 'CBAM 개편안 설명',
                body: '본 문서는 2024년 12월 17일 CBAM 공식 웹사이트에 게재된 문서의 번역본입니다. 철강, 알루미늄 등 금속 산업에 종사하는 기업에서는 업데이트를 숙지하시기를 권장합니다.',
                href: '/blog',
            },
            {
                id: 'cbam-03',
                title: '탄소 국경 조정 메커니즘(CBAM)',
                subtitle: '질의응답 (FAQ)',
                body: '본 문서는 2024년 10월 24일 CBAM 공식 웹사이트에 게재된 문서의 번역본입니다. 철강, 알루미늄 등 금속 산업에 종사하는 기업에서는 업데이트를 숙지하시기를 권장합니다.',
                href: '/blog',
            },
            {
                id: 'cbam-04',
                title: 'EU CBAM(탄소국경조정제도)에',
                subtitle: '하나에코로 신속히 대응하기',
                body: '유럽연합 집행위원회(EU COMMISSION)는 2025년 OMNIBUS 패키지의 일환으로 탄소국경조정제도(CBAM)의 간소화 제안을 발표하였습니다. 이번 개편안은 절차를 보다 효율적으로 정비하는 데 목적이 있습니다.',
                href: '/blog',
            },
            {
                id: 'cbam-05',
                title: '탄소국경조정 메커니즘(CBAM)',
                subtitle: '보고서에서 포함할 내용',
                body: '본 문서는 2024년 12월 17일 CBAM 공식 웹사이트에 게재된 문서의 번역본입니다. 철강, 알루미늄 등 금속 산업에 종사하는 기업에서는 업데이트를 숙지하시기를 권장합니다.',
                href: '/blog',
            },
            {
                id: 'cbam-06',
                title: 'CBAM 첫 보고서 컨설팅과 솔루션 도입 중',
                subtitle: '고객들에게 받은 질문과 답변 | CBAM Q&A',
                body: '본 문서는 2024년 10월 24일 CBAM 공식 웹사이트에 게재된 문서의 번역본입니다. 철강, 알루미늄 등 금속 산업에 종사하는 기업에서는 업데이트를 숙지하시기를 권장합니다.',
                href: '/blog',
            },
        ],
    },
    en: {
        sectionAriaLabel: 'CBAM insight cards',
        heading: 'Insights from HanaLoop to Understand CBAM',
        moreInsightLabel: 'More Insight',
        items: [],
    },
    es: {
        sectionAriaLabel: 'Tarjetas de insights CBAM',
        heading: 'Insights de HanaLoop para Comprender CBAM',
        moreInsightLabel: 'More Insight',
        items: [],
    },
};

export function CbamInsightCardsSection({ locale }: CbamInsightCardsSectionProps) {
    const text = copy[locale];
    const items = text.items.length > 0 ? text.items : copy.ko.items;

    return (
        <section className="px-5 pb-16 pt-16 md:px-8 lg:px-0 lg:pb-[120px] lg:pt-[92px]" aria-label={text.sectionAriaLabel}>
            <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[80px]">
                <h2 className="text-center text-black" style={HEADING_STYLE}>
                    {text.heading}
                </h2>

        <div className="mt-20 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-[28px]">
                    {items.map((item) => (
                        <Link
                            key={item.id}
                            href={withLocalePath(locale, item.href)}
              className="group relative flex h-[320px] w-full flex-col rounded-[14px] bg-[#07090c] px-[22px] pb-[26px] pt-[28px] transition hover:brightness-110"
                        >
                            <h3 className="text-white" style={CARD_TITLE_STYLE}>
                                {item.title}
                            </h3>
                            <p className="mt-[2px] text-white" style={CARD_TITLE_STYLE}>
                                {item.subtitle}
                            </p>

                            <div className="mt-[16px] h-px w-full bg-white/80" />

                            <p className="mt-[22px] pr-6 text-white/78" style={{ ...CARD_BODY_STYLE, ...BODY_CLAMP_STYLE }}>
                                {item.body}
                            </p>

                            <Image src="/icons/revamp/right.png" alt="" aria-hidden="true" width={10} height={20} className="absolute bottom-[24px] right-[16px] h-[20px] w-[10px] object-contain transition group-hover:translate-x-[1px]" />
                        </Link>
                    ))}
                </div>

                <div className="mt-[34px] flex justify-center">
                    <RoundedArrowButton href={withLocalePath(locale, '/blog')} label={text.moreInsightLabel} />
                </div>
            </div>
        </section>
    );
}
