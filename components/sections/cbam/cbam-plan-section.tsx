import type { CSSProperties } from 'react';
import type { AppLocale } from '@/lib/locales';

type CbamPlanSectionProps = {
    locale: AppLocale;
};

type PlanCopy = {
    sectionAriaLabel: string;
    heading: string;
    cards: Array<{
        title: string;
        items: string[];
    }>;
    imageAlt: string;
};

const HEADING_STYLE: CSSProperties = {
    fontSize: 'clamp(24px, 6vw, 48px)',
    fontWeight: 500,
    letterSpacing: '-1px',
    lineHeight: 1.2,
};

const CARD_TITLE_STYLE: CSSProperties = {
    fontSize: 'clamp(24px, 4vw, 28px)',
    fontWeight: 600,
    letterSpacing: '-0.25px',
    lineHeight: 1.35,
};

const CARD_ITEM_STYLE: CSSProperties = {
    fontSize: 'clamp(16px, 4vw, 18px)',
    fontWeight: 500,
    letterSpacing: '-0.25px',
    lineHeight: 1.55,
};

const copy: Record<AppLocale, PlanCopy> = {
    ko: {
        sectionAriaLabel: 'Hana.eco CBAM Plan',
        heading: 'Hana.eco CBAM Plan',
        cards: [
            {
                title: '스탠다드',
                items: ['CBAM 준수를 해야 하는 철강, 알루미늄 기업 대상', '단일 또는 다수 사업장의 탄소 관리 및 CBAM 기준 제품 탄소 발자국 관리'],
            },
            {
                title: '공급망 - LITE',
                items: ['CBAM 준수를 해야 하는 유통센터', '다수 협력사로부터 고유 내재배출량 수집, 추적, 관리'],
            },
            {
                title: '공급망 - ENTERPRISE',
                items: ['CBAM 준수, 수십 개 공급사 보유', 'LITE 기능 + 스탠다드 기능'],
            },
        ],
        imageAlt: 'Hana.eco CBAM Plan 배경 이미지',
    },
    en: {
        sectionAriaLabel: 'Hana.eco CBAM Plan',
        heading: 'Hana.eco CBAM Plan',
        cards: [
            {
                title: 'Standard',
                items: ['For steel and aluminum companies requiring CBAM compliance', 'Carbon management for single or multiple plants and product carbon footprint management by CBAM standards'],
            },
            {
                title: 'Supply Chain - LITE',
                items: ['For distribution centers requiring CBAM compliance', 'Collect, track, and manage embedded emissions data from multiple suppliers'],
            },
            {
                title: 'Supply Chain - ENTERPRISE',
                items: ['CBAM compliance with dozens of suppliers', 'LITE features plus Standard features'],
            },
        ],
        imageAlt: 'Hana.eco CBAM Plan background image',
    },
    es: {
        sectionAriaLabel: 'Plan CBAM de Hana.eco',
        heading: 'Plan CBAM de Hana.eco',
        cards: [
            {
                title: 'Estandar',
                items: ['Para empresas de acero y aluminio que deben cumplir CBAM', 'Gestion de carbono para una o varias plantas y gestion de huella de carbono del producto segun criterios CBAM'],
            },
            {
                title: 'Cadena de Suministro - LITE',
                items: ['Para centros de distribucion que deben cumplir CBAM', 'Recopilar, rastrear y gestionar emisiones embebidas de multiples proveedores'],
            },
            {
                title: 'Cadena de Suministro - ENTERPRISE',
                items: ['Cumplimiento CBAM con decenas de proveedores', 'Funciones LITE + funciones Estandar'],
            },
        ],
        imageAlt: 'Imagen de fondo del plan CBAM de Hana.eco',
    },
};

export function CbamPlanSection({ locale }: CbamPlanSectionProps) {
    const text = copy[locale];

    return (
        <section className="px-5 pb-16 pt-22 md:px-8 lg:px-0 lg:pb-[120px] lg:pt-[110px]" aria-label={text.sectionAriaLabel}>
            <div className="mx-auto w-full max-w-[1440px] lg:px-[80px]">
                <h2 className="text-center text-black" style={HEADING_STYLE}>
                    {text.heading}
                </h2>

                <div className="mt-12 grid grid-cols-1 gap-9 lg:mt-[86px] lg:grid-cols-3 lg:gap-10">
                    {text.cards.map((card) => (
                        <article key={card.title}>
                            <h3 className="text-black" style={CARD_TITLE_STYLE}>
                                {card.title}
                            </h3>
                            <div className="mt-3 h-px w-full bg-black/45 lg:mt-4" />
                            <ul className="mt-5 list-disc space-y-2 pl-5 text-[#535353] lg:mt-7">
                                {card.items.map((item) => (
                                    <li key={item} style={CARD_ITEM_STYLE}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="mt-12 overflow-hidden rounded-[20px] lg:mt-[58px]">
                    <img src="/site/cbam/plan-bg.png" alt={text.imageAlt} className="h-auto w-full" loading="eager" />
                </div>
            </div>
        </section>
    );
}
