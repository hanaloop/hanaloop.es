import Image from 'next/image';
import type { CSSProperties } from 'react';
import type { AppLocale } from '@/lib/locales';

type CbamProcessSectionProps = {
    locale: AppLocale;
};

type ProcessCopy = {
    sectionAriaLabel: string;
    title: string;
    steps: Array<{
        heading: string;
        items: string[];
    }>;
};

const TITLE_STYLE: CSSProperties = {
    fontSize: 'clamp(28px, 2.5vw, 48px)',
    fontWeight: 500,
    letterSpacing: '-1px',
    lineHeight: 'normal',
    fontFamily: 'inherit',
};

const ITEM_STYLE: CSSProperties = {
    fontSize: 'clamp(14px, 0.9375vw, 18px)',
    fontWeight: 500,
    letterSpacing: '-0.25px',
    lineHeight: 'normal',
    fontFamily: 'inherit',
};

const STEP_TITLE_STYLE: CSSProperties = {
    fontSize: 'clamp(16px, 1.25vw, 24px)',
    fontWeight: 500,
    letterSpacing: '-0.25px',
    lineHeight: 'normal',
    fontFamily: 'inherit',
};


const copy: Record<AppLocale, ProcessCopy> = {
    ko: {
        sectionAriaLabel: 'CBAM 인프라 도입 절차',
        title: 'CBAM 인프라 도입 절차',
        steps: [
            {
                heading: '1. 현황분석_컨설팅',
                items: ['제품 경계 할당', '데이터 모니터링 포인트 확인', '전체 데이터 수집 현황 파악 및 프로세스 개선 사항 분석', '사업장 인벤토리 완전성과 정확성 분석'],
            },
            {
                heading: '2. 플랫폼 셋업',
                items: ['데이터 수집', '제품 공정에 따른 배출원 설정', '수집된 필요 데이터 정규화', '과거 데이터 입력', '프로세스 정의'],
            },
            {
                heading: '3. 계측기 설치 및 연동',
                items: ['계측 데이터 자동수집 커스터마이징', 'ERP, MES 시스템의 데이터 활용안 논의 및 커넥터 제공'],
            },
            {
                heading: '4. 전환',
                items: ['사용 매뉴얼 제공', '실무자에게 플랫폼 활용 교육 제공으로 프로세스 내재화'],
            },
        ],
    },
    en: {
        sectionAriaLabel: 'CBAM Infrastructure Onboarding',
        title: 'CBAM Infrastructure Onboarding',
        steps: [
            {
                heading: '1. Assessment and Consulting',
                items: ['Define product boundaries', 'Review monitoring points', 'Assess collection status and process gaps', 'Analyze inventory completeness and accuracy'],
            },
            {
                heading: '2. Platform Setup',
                items: ['Collect required data', 'Configure emission sources by process', 'Normalize required data', 'Enter historical data', 'Define operating process'],
            },
            {
                heading: '3. Meter Installation and Integration',
                items: ['Customize automated metering collection', 'Discuss ERP/MES usage and provide connectors'],
            },
            {
                heading: '4. Transition',
                items: ['Provide user manuals', 'Train operators to internalize the process'],
            },
        ],
    },
    es: {
        sectionAriaLabel: 'Implementacion de Infraestructura CBAM',
        title: 'Implementacion de Infraestructura CBAM',
        steps: [
            {
                heading: '1. Diagnostico y Consultoria',
                items: ['Definir limites del producto', 'Revisar puntos de monitoreo', 'Evaluar estado de recopilacion y mejoras', 'Analizar integridad y precision del inventario'],
            },
            {
                heading: '2. Configuracion de Plataforma',
                items: ['Recolectar datos', 'Configurar fuentes de emision por proceso', 'Normalizar datos requeridos', 'Ingresar datos historicos', 'Definir proceso operativo'],
            },
            {
                heading: '3. Instalacion e Integracion',
                items: ['Personalizar recopilacion automatica', 'Definir uso de ERP/MES y proveer conectores'],
            },
            {
                heading: '4. Transicion',
                items: ['Entregar manual de uso', 'Capacitar al equipo para internalizar el proceso'],
            },
        ],
    },
};

export function CbamProcessSection({ locale }: CbamProcessSectionProps) {
    const text = copy[locale];

    return (
        <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden" aria-label={text.sectionAriaLabel}>
            <div className="relative min-h-[920px] w-full md:min-h-[980px] lg:min-h-0 lg:aspect-[1920/673]">
                <Image src="/images/revamp/cbam-process-bg.png" alt="" aria-hidden="true" fill className="object-cover" sizes="100vw" priority />
                <div className="absolute inset-0 px-5 pt-10 sm:px-8 md:pt-14 lg:hidden">
                    <h2 className="text-center text-white" style={TITLE_STYLE}>
                        {text.title}
                    </h2>

                    <div className="mx-auto mt-8 w-full rounded-[12px] bg-black/38 px-4 py-5 sm:px-6 md:mt-10 md:px-8 md:py-7">
                        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
                            {text.steps.map((step) => (
                                <div key={`${step.heading}-mobile`}>
                                    <p className="text-white" style={STEP_TITLE_STYLE}>
                                        {step.heading}
                                    </p>
                                    <div className="-mt-1">
                                        <Image src="/images/revamp/cbam-process-line.png" alt="" aria-hidden="true" width={340} height={22} className="h-auto w-full max-w-[260px] object-contain" sizes="260px" />
                                    </div>
                                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-white marker:text-[16px] md:space-y-2">
                                        {step.items.map((item) => (
                                            <li key={`${step.heading}-${item}`} style={ITEM_STYLE}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 hidden px-5 pt-10 sm:px-8 md:pt-14 lg:block lg:px-[8.4375vw] lg:pt-[6vw]">
                    <h2 className="text-center text-white" style={TITLE_STYLE}>
                        {text.title}
                    </h2>

                    <div className="mx-auto mt-8 w-full rounded-[12px] bg-black/38 px-4 py-5 sm:px-8 lg:mt-[2vw] lg:px-[2.7083vw] lg:py-[2.1875vw]">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-9">
                            {text.steps.map((step) => (
                                <div key={step.heading}>
                                    <p className="text-white" style={STEP_TITLE_STYLE}>
                                        {step.heading}
                                    </p>
                                    <div className="-mt-1 hidden lg:block">
                                        <Image src="/images/revamp/cbam-process-line.png" alt="" aria-hidden="true" width={340} height={22} className="h-auto w-full max-w-[17vw] object-contain" sizes="(min-width: 1920px) 326px, 17vw" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-[0.9375vw] lg:grid-cols-4 lg:gap-9">
                            {text.steps.map((step) => (
                                <ul key={`${step.heading}-items`} className="list-disc space-y-2 pl-5 text-white marker:text-[18px]">
                                    {step.items.map((item) => (
                                        <li key={item} style={ITEM_STYLE}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
