import type { AppLocale } from '@/lib/locales';

type HanaAiOverviewSectionProps = {
    locale: AppLocale;
};

type OverviewCopy = {
    sectionAriaLabel: string;
    heading: string;
    subheading: string;
    aiHeading: string;
    leftTitle: string;
    leftBody: string;
    rightTitle: string;
    rightBody: string;
};

const copy: Record<AppLocale, OverviewCopy> = {
    ko: {
        sectionAriaLabel: 'Hana.eco AI 개요',
        heading: 'AI 기반 탄소관리 플랫폼 Hana.eco',
        subheading: '귀사의 탄소관리 Hana.eco AI가 도와드립니다.',
        aiHeading: 'AI 기반 Hana.eco',
        leftTitle: '탄소발자국 산정 지원',
        leftBody: '탄소 배출량을 산정하는 과정에서 배출계수를 지정하는 일은 전문적인 지식을 요구합니다. Hana.eco는 AI를 활용해 활동 데이터를 클러스터링하고, 적합한 배출계수를 자동 매핑하여 산정 과정을 간소화하고 정확성을 높입니다.',
        rightTitle: 'LLM 환각을 최소화한 신뢰도 높은 정보 제공',
        rightBody: 'Hana.eco는 LLM이 외부의 불확실한 정보에 의존하여 잘못된 답변을 생성하는 문제를 줄이기 위해, Index DB와 RAG 기법을 도입하였습니다. 이를 통해 규제 동향, 배출권 거래 등에 관한 질의에 대해서도 보다 신뢰할 수 있는 정보를 제공합니다.',
    },
    en: {
        sectionAriaLabel: 'Hana.eco AI overview',
        heading: 'AI-powered Carbon Management Platform Hana.eco',
        subheading: 'Hana.eco AI helps your company manage carbon with confidence.',
        aiHeading: 'AI-powered Hana.eco',
        leftTitle: 'Support for Carbon Footprint Calculation',
        leftBody: 'Selecting emission factors during carbon footprint calculation requires expert knowledge. Hana.eco uses AI to cluster activity data and automatically map suitable emission factors, simplifying the process and improving accuracy.',
        rightTitle: 'Reliable Information with Reduced LLM Hallucination',
        rightBody: 'To reduce incorrect responses caused by uncertain external sources, Hana.eco adopts an Index DB and RAG approach. This provides more reliable answers on regulation trends, emissions trading, and related topics.',
    },
    es: {
        sectionAriaLabel: 'Resumen de Hana.eco AI',
        heading: 'Plataforma de Gestion de Carbono con IA Hana.eco',
        subheading: 'Hana.eco AI ayuda a su empresa a gestionar el carbono con confianza.',
        aiHeading: 'Hana.eco con IA',
        leftTitle: 'Soporte para el Calculo de Huella de Carbono',
        leftBody: 'Seleccionar factores de emision durante el calculo de la huella de carbono requiere conocimiento especializado. Hana.eco usa IA para agrupar datos de actividad y asignar automaticamente factores adecuados, simplificando el proceso y mejorando la precision.',
        rightTitle: 'Informacion Confiable con Menor Alucinacion de LLM',
        rightBody: 'Para reducir respuestas incorrectas causadas por fuentes externas inciertas, Hana.eco adopta un enfoque de Index DB y RAG. Asi ofrece respuestas mas confiables sobre tendencias regulatorias, comercio de emisiones y temas relacionados.',
    },
};

export function HanaAiOverviewSection({ locale }: HanaAiOverviewSectionProps) {
    const text = copy[locale];

    return (
        <section className="px-5 pb-20 pt-16 md:px-8 lg:px-0 lg:pb-[170px] lg:pt-[114px]" aria-label={text.sectionAriaLabel}>
            <div className="mx-auto w-full max-w-[1440px] px-0 lg:px-11">
                <h2
                    className="text-black"
                    style={{
                        fontSize: 'clamp(34px, calc(24.54px + 1.97vw), 60px)',
                        fontWeight: 500,
                        letterSpacing: '-1px',
                        lineHeight: 1.13,
                    }}
                >
                    {text.heading}
                </h2>
                <p
                    className="mt-5 max-w-[900px] text-[var(--color-text-subtle)]"
                    style={{
                        fontSize: 'clamp(16px, calc(13.81px + 0.46vw), 21px)',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        lineHeight: 1.48,
                    }}
                >
                    {text.subheading}
                </p>

                <h3 className="mt-20 text-[38px] font-medium leading-[1.2] tracking-[-1px] text-black lg:mt-[120px] lg:text-[48px]">{text.aiHeading}</h3>

                <div className="mt-16 grid gap-16 lg:mt-[84px] lg:grid-cols-2 lg:gap-12">
                    <article className="max-w-[590px]">
                        <h4 className="text-[30px] font-medium leading-[1.35] tracking-[-0.25px] text-black lg:text-[36px]">{text.leftTitle}</h4>
                        <p className="mt-6 text-[17px] font-normal leading-[1.9] tracking-[-0.25px] text-[var(--color-text-subtle)] lg:text-[18px]">{text.leftBody}</p>
                    </article>

                    <article className="max-w-[590px] lg:mt-[304px] lg:justify-self-end">
                        <h4 className="text-[30px] font-medium leading-[1.35] tracking-[-0.25px] text-black lg:text-[36px]">{text.rightTitle}</h4>
                        <p className="mt-6 text-[17px] font-normal leading-[1.9] tracking-[-0.25px] text-[var(--color-text-subtle)] lg:text-[18px]">{text.rightBody}</p>
                    </article>
                </div>
            </div>
        </section>
    );
}
