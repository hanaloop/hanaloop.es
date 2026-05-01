import Image from 'next/image';
import type { AppLocale } from '@/lib/locales';

type PcfMainFeaturesSectionProps = {
    locale: AppLocale;
};

const copy = {
    ko: {
        title: 'PCF 솔루션 주요 기능',
        body: '제품 단위의 배출량을 공정 흐름 기반으로 정량화하고 직접 및 간접 배출 데이터를 통해 내재배출량을 관리하며, 시각화를 통해 감축 우선순위를 파악할 수 있습니다. 글로벌 규제 대응과 탄소 감축 전략 수립을 효과적으로 지원합니다.',
        caption: '*하나에코 플랫폼 PCF솔루션의 예시화면입니다.',
        imageAlt: 'PCF 솔루션 주요 기능 예시 화면',
    },
    en: {
        title: 'Key Features of the PCF Solution',
        body: 'Quantify product-level emissions through process-flow-based calculations, manage embedded emissions with direct and indirect data, and identify reduction priorities through visualization.',
        caption: '*Example screen of the Hana.eco PCF solution.',
        imageAlt: 'Example view of key PCF solution features',
    },
    es: {
        title: 'Funciones Clave de la Solucion PCF',
        body: 'Cuantifica emisiones por producto con base en flujo de procesos, gestiona emisiones incorporadas con datos directos e indirectos, e identifica prioridades de reduccion mediante visualizacion.',
        caption: '*Pantalla de ejemplo de la solucion PCF de Hana.eco.',
        imageAlt: 'Vista de ejemplo de funciones de la solucion PCF',
    },
} as const;

export function PcfMainFeaturesSection({ locale }: PcfMainFeaturesSectionProps) {
    const text = copy[locale];

    return (
        <section className="bg-[#ebebeb] px-4 pb-20 pt-20 sm:px-6 md:px-8 lg:pb-[128px] lg:pt-[146px] xl:px-0" aria-label={text.title}>
            <div className="mx-auto w-full max-w-[1440px]">
                <h2
                    className="text-center text-black"
                    style={{
                        fontWeight: 500,
                        fontSize: 'clamp(36px, calc(30.77px + 1.09vw), 48px)',
                        letterSpacing: '-1px',
                        lineHeight: 1.2,
                    }}
                >
                    {text.title}
                </h2>

                <p
                    className="mx-auto mt-7 max-w-[1096px] text-center text-[#4c4c4c]"
                    style={{
                        fontWeight: 600,
                        fontSize: 'clamp(17px, calc(15.25px + 0.36vw), 21px)',
                        letterSpacing: '0.5px',
                        lineHeight: 1.55,
                    }}
                >
                    {text.body}
                </p>

                <div className="mt-16 overflow-hidden rounded-[18px] lg:mt-[74px]">
                    <Image
                        src="/images/revamp/pcf-main-features-example.png"
                        alt={text.imageAlt}
                        width={1440}
                        height={786}
                        className="h-auto w-full object-cover"
                        sizes="(min-width: 1920px) 1440px, (min-width: 1440px) 75vw, 100vw"
                    />
                </div>

                <p className="mt-4 text-[14px] font-medium tracking-[-0.2px] text-[#7f7f7f]">{text.caption}</p>
            </div>
        </section>
    );
}
