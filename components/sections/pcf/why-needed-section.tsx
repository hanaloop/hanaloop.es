import Image from 'next/image';
import type { AppLocale } from '@/lib/locales';

type PcfWhyNeededSectionProps = {
    locale: AppLocale;
};

const copy = {
    ko: {
        title: 'PCF관리 왜 필요할까요?',
        itemOneNumber: '01.',
        itemOneTitle: '글로벌 규제 대응',
        itemOneBody:
            'PCF는 CBAM 등 글로벌 규제에 대응하기 위한 필수 지표로,\n제품 단위의 탄소 배출량을 정확하게 산출 시 요구되는 데이터를 제공합니다.\nISO 14067 등 국제 표준 기반 산정은 신뢰성과 규제 적합성을 높이며,\n무역 리스크를 사전에 관리할 수 있게 합니다.',
        itemTwoNumber: '02.',
        itemTwoTitle: '감축 전략 수립의 기반',
        itemTwoBody: '제품 단위의 배출량을 정량화하면 어떤 공정, 소재, 공급망 요소가\n고탄소 요인인지 식별할 수 있으며, 이를 기반으로 구체적인\n탄소 감축 전략(대체 소재 적용, 에너지 효율 개선, 저탄소 공급처 전환 등)을\n수립할 수 있습니다.',
        imageAlt: 'PCF 관리 필요성 이미지',
    },
    en: {
        title: 'Why is PCF management needed?',
        itemOneNumber: '01.',
        itemOneTitle: 'Responding to global regulations',
        itemOneBody: 'PCF is an essential metric for responding to global regulations such as CBAM,\nproviding required product-level carbon emissions data.',
        itemTwoNumber: '02.',
        itemTwoTitle: 'Foundation for reduction strategy',
        itemTwoBody: 'Quantifying product-level emissions helps identify high-carbon factors and\nenables concrete reduction strategies.',
        imageAlt: 'Why PCF management is needed',
    },
    es: {
        title: 'Por que es necesaria la gestion de PCF?',
        itemOneNumber: '01.',
        itemOneTitle: 'Respuesta a regulaciones globales',
        itemOneBody: 'PCF es una metrica esencial para responder a regulaciones globales como CBAM,\ny proporciona datos de emisiones a nivel de producto.',
        itemTwoNumber: '02.',
        itemTwoTitle: 'Base para estrategia de reduccion',
        itemTwoBody: 'Cuantificar emisiones por producto permite identificar factores de alto carbono\ny definir estrategias concretas de reduccion.',
        imageAlt: 'Necesidad de gestion de PCF',
    },
} as const;

function GradientHeading({ children }: { children: string }) {
    return (
        <h3
            className="inline-block"
            style={{
                background: 'linear-gradient(90deg, #1FBD7D 0%, #0194FF 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                fontSize: 'clamp(32px, calc(27.64px + 0.91vw), 42px)',
                lineHeight: 1.2,
                letterSpacing: '-0.5px',
            }}
        >
            {children}
        </h3>
    );
}

export function PcfWhyNeededSection({ locale }: PcfWhyNeededSectionProps) {
    const text = copy[locale];

    return (
        <section className="bg-[#ebebeb] px-5 pb-20 pt-8 md:px-8 lg:px-10 lg:pb-[132px] lg:pt-[46px] xl:px-0" aria-label={text.title}>
            <div className="mx-auto w-full max-w-[1440px] min-[1440px]:px-[44px]">
                <h2
                    className="text-black"
                    style={{
                        fontWeight: 700,
                        fontSize: 'clamp(36px, calc(30.77px + 1.09vw), 48px)',
                        letterSpacing: '-1px',
                        lineHeight: 1.2,
                    }}
                >
                    {text.title}
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-[68px] lg:gap-12 min-[1440px]:grid-cols-[1fr_724px] min-[1440px]:gap-[56px]">
                    <div className="flex flex-col justify-center gap-12 lg:gap-[86px]">
                        <article>
                            <p
                                className="text-[#1BAFA5]"
                                style={{
                                    fontWeight: 700,
                                    fontSize: 'clamp(34px, calc(30.95px + 0.63vw), 42px)',
                                    lineHeight: 1,
                                    letterSpacing: '-0.5px',
                                }}
                            >
                                {text.itemOneNumber}
                            </p>
                            <div className="mt-2">
                                <GradientHeading>{text.itemOneTitle}</GradientHeading>
                            </div>
                            <p
                                className="mt-5 whitespace-pre-line text-[#2f2f2f]"
                                style={{
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    letterSpacing: '0.5px',
                                    lineHeight: 1.6,
                                }}
                            >
                                {text.itemOneBody}
                            </p>
                        </article>

                        <article>
                            <p
                                className="text-[#1BAFA5]"
                                style={{
                                    fontWeight: 700,
                                    fontSize: 'clamp(34px, calc(30.95px + 0.63vw), 42px)',
                                    lineHeight: 1,
                                    letterSpacing: '-0.5px',
                                }}
                            >
                                {text.itemTwoNumber}
                            </p>
                            <div className="mt-2">
                                <GradientHeading>{text.itemTwoTitle}</GradientHeading>
                            </div>
                            <p
                                className="mt-5 whitespace-pre-line text-[#2f2f2f]"
                                style={{
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    letterSpacing: '0.5px',
                                    lineHeight: 1.6,
                                }}
                            >
                                {text.itemTwoBody}
                            </p>
                        </article>
                    </div>

                    <div className="relative mx-auto w-full max-w-[724px] overflow-hidden rounded-[18px] min-[1440px]:h-[676px] min-[1440px]:w-[724px] min-[1440px]:max-w-none">
                        <Image
                            src="/images/revamp/pcf-why-right.png"
                            alt={text.imageAlt}
                            width={724}
                            height={676}
                            className="h-auto w-full object-cover min-[1440px]:h-full"
                            sizes="(min-width: 1920px) 724px, (min-width: 1440px) 724px, (min-width: 768px) 80vw, calc(100vw - 40px)"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
