import Image from 'next/image';
import type { AppLocale } from '@/lib/locales';

type HanaAiProcessSectionProps = {
    locale: AppLocale;
};

type ProcessItem = {
    badge: string;
    title: string;
    body: string | string[];
    extraTitle?: string;
    extraBody?: string[];
    bgSrc: string;
    bgAlt: string;
};

type ProcessCopy = {
    sectionAriaLabel: string;
    heading: string;
    items: ProcessItem[];
};

const copy: Record<AppLocale, ProcessCopy> = {
    ko: {
        sectionAriaLabel: 'Hana.eco AI Features',
        heading: 'Hana.eco AI Features',
        items: [
            {
                badge: '이상감지',
                title: '데이터 이상값 감지',
                body: [
                    '탄소 회계의 핵심 원칙 중 하나는 정확성입니다.',
                    '방대한 배출 활동 데이터를 수집하고 관리하는 과정에서 다양한 요인으로 인해 이상치가 발생할 수 있으며, 이는 정확성을 저하시킬 수 있습니다.',
                    'Hana.eco는 이러한 이상을 감지하여 데이터의 정확성을 효과적으로 유지합니다.',
                ],
                bgSrc: '/images/revamp/hana-ai/1-bg.png',
                bgAlt: '데이터 이상값 감지 기능 배경',
            },
            {
                badge: '데이터 예측',
                title: '비용 절감과 수익 극대화',
                body: '오늘날 탄소는 곧 금전적 가치를 의미합니다. 배출권거래제, CBAM 등에서 탄소 배출량을 정확히 예측하면 기업은 수익을 극대화하고 비용을 절감할 수 있습니다.',
                extraTitle: '탄소 배출량 예측을 통한 감축 효과 분석',
                extraBody: ['Hana.eco는 인공지능을 활용해 탄소 배출량을 예측하고, 활동 변화에 따른 감축 효과를 분석하여 기업의 전략적 의사결정을 지원합니다.'],
                bgSrc: '/images/revamp/hana-ai/2-bg.png',
                bgAlt: '데이터 예측 기능 배경',
            },
            {
                badge: '카본버디 AI 어시스턴트',
                title: '탄소 경영으로 해결하는 기후 규제 대응',
                body: [
                    '효과적인 탄소 경영을 위해서는 전문 지식과 사업 전략이 유기적으로 연결되어야 합니다.',
                    '이를 통해 최적의 전략을 수립하고 변화하는 규제에 신속하게 대응할 수 있습니다.',
                ],
                extraTitle: '쉽고 빠른 규제 이해',
                extraBody: ['Hana.eco는 생성형 AI와 자연어 처리(NLP) 기술을 활용하여, 비전문가도 복잡한 규제를 쉽게 이해하고 효율적으로 대응할 수 있도록 지원합니다.'],
                bgSrc: '/images/revamp/hana-ai/3-bg.png',
                bgAlt: '카본버디 AI 어시스턴트 기능 배경',
            },
        ],
    },
    en: {
        sectionAriaLabel: 'Hana.eco AI Features',
        heading: 'Hana.eco AI Features',
        items: [
            {
                badge: 'Anomaly Detection',
                title: 'Data Anomaly Detection',
                body: [
                    'Accuracy is one of the core principles in carbon accounting.',
                    'As massive emissions activity data is collected and managed, anomalies can occur due to many factors and reduce data reliability.',
                    'Hana.eco detects these anomalies to effectively preserve data accuracy.',
                ],
                bgSrc: '/images/revamp/hana-ai/1-bg.png',
                bgAlt: 'Background for data anomaly detection feature',
            },
            {
                badge: 'Forecasting',
                title: 'Cost Reduction and Profit Optimization',
                body: [
                    'Today, carbon directly represents financial value. In ETS, CBAM, and other regimes,',
                    'accurate emissions forecasting helps companies maximize profits and reduce costs.',
                ],
                extraTitle: 'Reduction Impact Analysis via Emissions Forecasting',
                extraBody: ['Hana.eco uses AI to forecast emissions and analyze reduction effects from operational changes, supporting strategic business decisions.'],
                bgSrc: '/images/revamp/hana-ai/2-bg.png',
                bgAlt: 'Background for forecasting feature',
            },
            {
                badge: 'Carbon Buddy AI Assistant',
                title: 'Climate Regulation Response Through Carbon Management',
                body: [
                    'Effective carbon management requires close linkage between domain knowledge and business strategy.',
                    'This enables optimal strategy planning and fast response to evolving regulations.',
                ],
                extraTitle: 'Fast and Easy Regulatory Understanding',
                extraBody: ['Hana.eco leverages generative AI and NLP so even non-experts can understand complex regulations and respond efficiently.'],
                bgSrc: '/images/revamp/hana-ai/3-bg.png',
                bgAlt: 'Background for Carbon Buddy AI assistant feature',
            },
        ],
    },
    es: {
        sectionAriaLabel: 'Hana.eco AI Features',
        heading: 'Hana.eco AI Features',
        items: [
            {
                badge: 'Deteccion de Anomalias',
                title: 'Deteccion de Valores Atipicos',
                body: [
                    'La precision es uno de los principios clave en la contabilidad de carbono.',
                    'Durante la recopilacion y gestion masiva de datos de emisiones, pueden surgir anomalias por diversos factores y afectar la fiabilidad.',
                    'Hana.eco detecta estas anomalias para mantener eficazmente la precision de los datos.',
                ],
                bgSrc: '/images/revamp/hana-ai/1-bg.png',
                bgAlt: 'Fondo de la funcion de deteccion de anomalias',
            },
            {
                badge: 'Prediccion de Datos',
                title: 'Reduccion de Costos y Maximizacion de Ingresos',
                body: [
                    'Hoy, el carbono representa valor economico directo. En ETS, CBAM y otros marcos,',
                    'predecir con precision las emisiones ayuda a maximizar ingresos y reducir costos.',
                ],
                extraTitle: 'Analisis del Impacto de Reduccion con Prediccion',
                extraBody: ['Hana.eco usa IA para predecir emisiones y analizar el impacto de reduccion segun cambios operativos, apoyando decisiones estrategicas.'],
                bgSrc: '/images/revamp/hana-ai/2-bg.png',
                bgAlt: 'Fondo de la funcion de prediccion',
            },
            {
                badge: 'Asistente de IA Carbon Buddy',
                title: 'Respuesta Regulatoria con Gestion de Carbono',
                body: [
                    'Una gestion de carbono efectiva requiere integrar conocimiento experto y estrategia empresarial.',
                    'Asi se pueden definir estrategias optimas y responder rapidamente a regulaciones cambiantes.',
                ],
                extraTitle: 'Comprension Regulatoria Rapida y Clara',
                extraBody: ['Hana.eco aprovecha IA generativa y NLP para que incluso no especialistas comprendan regulaciones complejas y respondan con eficiencia.'],
                bgSrc: '/images/revamp/hana-ai/3-bg.png',
                bgAlt: 'Fondo de la funcion de asistente Carbon Buddy AI',
            },
        ],
    },
};

export function HanaAiProcessSection({ locale }: HanaAiProcessSectionProps) {
    const text = copy[locale];
    const splitByPeriod = (value: string) => value.split(/(?<=\.)\s+/).filter(Boolean);

    return (
        <section className="px-5 pb-20 pt-8 md:px-8 lg:px-0 lg:pb-[140px] lg:pt-[56px]" aria-label={text.sectionAriaLabel}>
            <div className="mx-auto w-full max-w-[1440px] px-0 lg:px-11">
                <h2
                    className="text-black"
                    style={{
                        fontSize: 'clamp(34px, calc(24.54px + 1.97vw), 60px)',
                        fontWeight: 700,
                        letterSpacing: '-1px',
                        lineHeight: 1.2,
                    }}
                >
                    {text.heading}
                </h2>

                <div className="mt-12 space-y-[100px] sm:space-y-[120px] md:space-y-[140px] lg:mt-[78px] lg:space-y-[108px]">
                    {text.items.map((item, index) => {
                        const imageLeft = index % 2 === 0;

                        return (
                            <article key={`${item.badge}-${index}`} className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-[74px]">
                                <div className={imageLeft ? 'order-1' : 'order-1 lg:order-2'}>
                                    <div className="relative w-full overflow-visible rounded-[24px] [aspect-ratio:700/410]">
                                        <Image src={item.bgSrc} alt={item.bgAlt} fill className="rounded-[24px] object-cover" sizes="(min-width: 1920px) 700px, (min-width: 1024px) calc((100vw - 220px) / 2), 100vw" />
                                        <Image
                                            src="/images/revamp/hana-ai/pc.png"
                                            alt=""
                                            aria-hidden
                                            width={940}
                                            height={418}
                                            className="absolute bottom-[-14%] left-1/2 z-[3] h-auto w-[92%] -translate-x-1/2"
                                            sizes="(min-width: 1920px) 700px, (min-width: 1024px) calc((100vw - 220px) / 2), 90vw"
                                        />
                                    </div>
                                </div>

                                <div className={imageLeft ? 'order-2 px-11 pt-8 lg:pt-0' : 'order-2 lg:order-1 px-11 pt-8 lg:pt-0'}>
                                    <span
                                        className="inline-flex h-[46px] items-center rounded-full px-[18px] text-[21px] font-semibold leading-none text-white"
                                        style={{ background: 'linear-gradient(106.7deg, rgba(31, 189, 125, 0.7) 26.33%, rgba(1, 148, 255, 0.7) 75.4%)' }}
                                    >
                                        {item.badge}
                                    </span>
                                    <h3 className="mt-5 text-[30px] font-bold leading-[1.35] tracking-[-0.25px] text-black lg:text-[36px]">{item.title}</h3>
                                    <div className="mt-6 space-y-1 text-[17px] font-normal leading-[1.9] tracking-[-0.25px] text-[var(--color-text-subtle)] lg:text-[20px]">
                                        {(Array.isArray(item.body) ? item.body : [item.body])
                                            .flatMap((block) => splitByPeriod(block))
                                            .map((line) => (
                                                <p key={line}>{line}</p>
                                            ))}
                                    </div>

                                    {item.extraTitle ? <h4 className="mt-10 text-[30px] font-bold leading-[1.35] tracking-[-0.25px] text-black lg:mt-[72px] lg:text-[36px]">{item.extraTitle}</h4> : null}
                                    {item.extraBody ? (
                                        <div className="mt-6 space-y-1 text-[17px] font-normal leading-[1.9] tracking-[-0.25px] text-[var(--color-text-subtle)] lg:text-[20px]">
                                            {item.extraBody
                                                .flatMap((block) => splitByPeriod(block))
                                                .map((line) => (
                                                    <p key={line}>{line}</p>
                                                ))}
                                        </div>
                                    ) : null}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
