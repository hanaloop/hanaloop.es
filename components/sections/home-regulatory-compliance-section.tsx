'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { AppLocale } from '@/lib/locales';
import 'swiper/css';
import 'swiper/css/pagination';

type HomeRegulatoryComplianceSectionProps = {
    locale: AppLocale;
};

type ComplianceCard = {
    title: string;
    subtitle: string;
    items: string[];
};

type ComplianceCopy = {
    eyebrow: string;
    heading: string;
    reasonEyebrow: string;
    reasonHeading: [string, string];
    reasons: {
        title: string;
        body: string;
        desktopLines?: [string, string, string];
    }[];
    cards: ComplianceCard[];
};

const copy: Record<AppLocale, ComplianceCopy> = {
    ko: {
        eyebrow: '로이드인증원(LRQA)으로부터 배출권거래제와 EU 탄소국경조정제도 적합성 국내 첫 검증의견서 획득',
        heading: 'Regulatory Compliance Approved: hana.eco',
        reasonEyebrow: '하나루프를 선택해야하는 이유',
        reasonHeading: ['Why you should choose', 'HanaLoop'],
        cards: [
            {
                title: 'EU 탄소국경조정제도 (CBAM) 준수',
                subtitle: 'Carbon Border Adjustment Mechanism',
                items: ['제품 관리', '원부자재 공급 관리', 'CBAM 보고서 출력', '배출계수 제공'],
            },
            {
                title: '배출권거래제, 목표관리제 준수',
                subtitle: 'Korea Emissions Trading System',
                items: ['검증 수준의 데이터 관리', '배출권 장부 관리', '배출량 목표 설정과 배출 시나리오 분석'],
            },
            {
                title: 'IFRS(TCFD) / CDP / GRI 준수',
                subtitle: 'Climate Normatives, Frameworks And Standards',
                items: ['표준 보고서에서 요구되는 리포팅 리소스 관리', '배출 시나리오 분석'],
            },
            {
                title: 'EU 탄소국경조정제도 (CBAM) 준수',
                subtitle: 'Carbon Border Adjustment Mechanism',
                items: ['제품 관리', '원부자재 공급 관리', 'CBAM 보고서 출력', '배출계수 제공'],
            },
        ],
        reasons: [
            {
                title: 'Customized Partnership',
                body: '글로벌 규제에 검증된 기술로 환경 컨설팅, 에너지전환 프로바이더 등과의 파트너십으로 맞춤형 시장에 진입합니다.',
                desktopLines: ['글로벌 규제에 검증된 기술로 환경 컨설팅,', '에너지전환 프로바이더 등과의 파트너십으로', '맞춤형 시장에 진입합니다.'],
            },
            {
                title: 'Everything with Hanaeco',
                body: '기업, 제품 공급망 등 모든 탄소관리를 하나에코 한곳에서 할 수 있습니다. 하나에코를 통해 편하게 관리하세요.',
                desktopLines: ['기업, 제품 공급망 등 모든 탄소관리를', '하나에코 한곳에서 할 수 있습니다.', '하나에코를 통해 편하게 관리하세요.'],
            },
            {
                title: 'Select the right pricing plan',
                body: '다양한 플랜과 가격옵션으로 각 기업사에 맞는 플랜을 추천하고 선택할 수 있도록 서비스를 제공하고있습니다.',
                desktopLines: ['다양한 플랜과 가격옵션으로 각 기업사에 맞는', '플랜을 추천하고 선택할 수 있도록 서비스를', '제공하고있습니다.'],
            },
        ],
    },
    en: {
        eyebrow: 'First verification statement in Korea from LRQA for Emissions Trading Scheme and EU CBAM compliance',
        heading: 'Regulatory Compliance Approved: hana.eco',
        reasonEyebrow: 'Why you should choose HanaLoop',
        reasonHeading: ['Why you should choose', 'HanaLoop'],
        cards: [
            {
                title: 'EU Carbon Border Adjustment Mechanism (CBAM) Compliance',
                subtitle: 'Carbon Border Adjustment Mechanism',
                items: ['Product management', 'Raw material supply management', 'CBAM report export', 'Emission factor support'],
            },
            {
                title: 'K-ETS and Target Management Compliance',
                subtitle: 'Korea Emissions Trading System',
                items: ['Verification-grade data management', 'Allowance ledger management', 'Target setting and emissions scenario analysis'],
            },
            {
                title: 'IFRS (TCFD) / CDP / GRI Compliance',
                subtitle: 'Climate Normatives, Frameworks And Standards',
                items: ['Reporting resource management for standard disclosures', 'Emissions scenario analysis'],
            },
            {
                title: 'EU Carbon Border Adjustment Mechanism (CBAM) Compliance',
                subtitle: 'Carbon Border Adjustment Mechanism',
                items: ['Product management', 'Raw material supply management', 'CBAM report export', 'Emission factor support'],
            },
        ],
        reasons: [
            {
                title: 'Customized Partnership',
                body: 'With technology validated against global regulations, we enter tailored markets through partnerships with environmental consulting and energy transition providers.',
            },
            {
                title: 'Everything with Hanaeco',
                body: 'Manage all carbon operations across company and product supply chains in one place. Make carbon management easier with Hanaeco.',
            },
            {
                title: 'Select the right pricing plan',
                body: 'We provide flexible plans and pricing options so each organization can choose the best plan for its needs.',
            },
        ],
    },
    es: {
        eyebrow: 'Primer informe de verificacion en Corea de LRQA para cumplimiento del ETS y del CBAM de la UE',
        heading: 'Regulatory Compliance Approved: hana.eco',
        reasonEyebrow: 'Por que elegir HanaLoop',
        reasonHeading: ['Why you should choose', 'HanaLoop'],
        cards: [
            {
                title: 'Cumplimiento del CBAM de la UE',
                subtitle: 'Carbon Border Adjustment Mechanism',
                items: ['Gestion de productos', 'Gestion del suministro de materias primas', 'Exportacion de reportes CBAM', 'Soporte de factores de emision'],
            },
            {
                title: 'Cumplimiento ETS y gestion por objetivos',
                subtitle: 'Korea Emissions Trading System',
                items: ['Gestion de datos con nivel de verificacion', 'Gestion de libro de derechos', 'Definicion de objetivos y analisis de escenarios'],
            },
            {
                title: 'Cumplimiento IFRS (TCFD) / CDP / GRI',
                subtitle: 'Climate Normatives, Frameworks And Standards',
                items: ['Gestion de recursos para reportes estandar', 'Analisis de escenarios de emisiones'],
            },
            {
                title: 'Cumplimiento del CBAM de la UE',
                subtitle: 'Carbon Border Adjustment Mechanism',
                items: ['Gestion de productos', 'Gestion del suministro de materias primas', 'Exportacion de reportes CBAM', 'Soporte de factores de emision'],
            },
        ],
        reasons: [
            {
                title: 'Customized Partnership',
                body: 'Con tecnologia validada ante regulaciones globales, entramos en mercados a medida mediante alianzas con consultoria ambiental y proveedores de transicion energetica.',
            },
            {
                title: 'Everything with Hanaeco',
                body: 'Administra toda la gestion de carbono de empresa y cadena de suministro en un solo lugar con Hanaeco.',
            },
            {
                title: 'Select the right pricing plan',
                body: 'Ofrecemos planes y precios flexibles para que cada empresa elija la opcion adecuada.',
            },
        ],
    },
};

export function HomeRegulatoryComplianceSection({ locale }: HomeRegulatoryComplianceSectionProps) {
    const sectionCopy = copy[locale];

    return (
        <section className="mt-28 pb-6 lg:pb-10">
            <div className="relative min-h-[968px] w-full overflow-hidden rounded-t-[50px]">
                <Image src="/images/revamp/regulatory/home-regulatory-bg.jpg" alt="City buildings" fill className="object-cover" sizes="100vw" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(45,66,99,0.62)_0%,rgba(6,39,71,0.68)_56%,rgba(4,28,57,0.82)_100%)]" />

                <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-11">
                    <div className="relative z-[2] px-0 pb-[34px] pt-5 text-white lg:pb-[66px] lg:pt-[88px]">
                        <div className="lg:hidden">
                            <Image src="/images/revamp/regulatory/lrqa.png" alt="LRQA" width={207} height={62} className="h-auto w-[110px]" />
                            <p className="mt-8 max-w-[340px] text-[11px] font-medium leading-[1.45]">{sectionCopy.eyebrow}</p>
                            <h2 className="mt-3 max-w-[340px] text-[57px] font-medium leading-[1.08] tracking-[-0.6px]">{sectionCopy.heading}</h2>
                        </div>

                        <div className="hidden items-start justify-between gap-0 lg:flex">
                            <div>
                                <p className="lg:max-w-none lg:text-[21px] lg:font-semibold lg:leading-[1.3] lg:tracking-[0.5px]">{sectionCopy.eyebrow}</p>
                                <h2 className="lg:mt-[7px] lg:max-w-none lg:text-[48px] lg:font-medium lg:leading-[1.2]">{sectionCopy.heading}</h2>
                            </div>
                            <Image src="/images/revamp/regulatory/lrqa.png" alt="LRQA" width={207} height={62} className="lg:mt-1 lg:h-[52px] lg:w-auto" />
                        </div>

                        <div className="mt-4 block lg:hidden">
                            <Swiper modules={[Pagination]} slidesPerView={'auto'} spaceBetween={12} pagination={{ clickable: true }} className="regulatory-mobile-swiper overflow-visible pb-6">
                                {sectionCopy.cards.map((card, index) => (
                                    <SwiperSlide key={`mobile-${card.title}-${index}`} className="!w-[226px]">
                                        <article className="min-h-[249px] rounded-[14px] border border-white/20 bg-[rgba(228,236,245,0.56)] p-[14px_14px_12px] text-[#eaf1f7] backdrop-blur-[3px]">
                                            <h3 className="text-[14px] font-semibold leading-[1.45] tracking-[-0.01em]">{card.title}</h3>
                                            <p className="mt-1.5 text-[11px] font-medium leading-[1.5] opacity-90">{card.subtitle}</p>
                                            <ul className="mt-2 list-disc pl-[14px]">
                                                {card.items.map((item) => (
                                                    <li key={`${card.title}-${item}`} className="text-[11px] leading-[1.72]">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="mt-[62px] hidden grid-cols-4 gap-2 lg:grid">
                            {sectionCopy.cards.map((card, index) => (
                                <article
                                    key={`${card.title}-${index}`}
                                    className="group min-h-[290px] rounded-2xl border border-white/20 bg-[rgba(228,236,245,0.56)] p-[22px_22px_18px] text-[#eaf1f7] backdrop-blur-[3px] transition-colors duration-200 hover:bg-[rgba(238,241,246,0.74)] hover:text-[#23252b]"
                                >
                                    <h3 className="text-[24px] font-semibold leading-[1.34] tracking-[0.5px]">{card.title}</h3>
                                    <p className="mt-2 min-h-[82px] text-[18px] font-semibold leading-[1.45] tracking-[0.5px] opacity-90">{card.subtitle}</p>
                                    <ul className="mt-[14px] list-disc pl-[18px]">
                                        {card.items.map((item) => (
                                            <li key={`${card.title}-${item}`} className="text-[16px] font-semibold leading-[1.68] tracking-[0.5px]">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>

                        <div className="mt-[14px] lg:mt-[78px]">
                            <p className="text-[11px] leading-[1.5] lg:text-[21px] lg:font-medium lg:leading-[1.3] lg:tracking-[0.5px]">{sectionCopy.reasonEyebrow}</p>
                            <h3 className="mt-[3px] text-[48px] font-medium leading-[1.1] tracking-[-0.015em] lg:mt-1.5 lg:text-[48px] lg:leading-[1.14] lg:tracking-[-1px]">
                                <span className="block">{sectionCopy.reasonHeading[0]}</span>
                                <span className="block">{sectionCopy.reasonHeading[1]}</span>
                            </h3>

                            <div className="mt-[26px] grid grid-cols-1 gap-6 lg:mt-[58px] lg:grid-cols-3 lg:gap-7">
                                {sectionCopy.reasons.map((reason) => (
                                    <article key={reason.title}>
                                        <h4 className="text-[16px] font-medium lg:text-[24px] lg:leading-[1.3] lg:tracking-[-1px]">{reason.title}</h4>
                                        <div className="mt-2 h-px w-full bg-white/50 lg:mt-4" />
                                        <p className="mt-2 text-[12px] leading-[1.7] lg:mt-[10px] lg:text-[16px] lg:font-medium lg:tracking-[0.5px]">
                                            <span className="lg:hidden">{reason.body}</span>
                                            <span className="hidden lg:block">
                                                {(reason.desktopLines ?? [reason.body, '', '']).map((line, idx) => (
                                                    <span key={`${reason.title}-line-${idx}`} className="block">
                                                        {line}
                                                    </span>
                                                ))}
                                            </span>
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .regulatory-mobile-swiper .swiper-pagination {
                    bottom: 0 !important;
                }
                .regulatory-mobile-swiper .swiper-pagination-bullet {
                    background: rgba(182, 193, 211, 0.64);
                    border-radius: 999px;
                    height: 7px;
                    margin: 0 3px !important;
                    opacity: 1;
                    transition: all 220ms ease;
                    width: 7px;
                }
                .regulatory-mobile-swiper .swiper-pagination-bullet-active {
                    background: rgba(198, 213, 238, 0.95);
                    width: 34px;
                }
            `}</style>
        </section>
    );
}
