import Image from 'next/image';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { RoundedArrowButton } from '@/components/ui/rounded-arrow-button';

type CbamOverviewSectionProps = {
    locale: AppLocale;
};

type OverviewCopy = {
    sectionAriaLabel: string;
    heading: string;
    subheading: string;
    whatTitle: string;
    whatBody: string;
    solutionTitle: string;
    solutionBody: string;
    contactLabel: string;
    imageAlt: string;
};

const copy: Record<AppLocale, OverviewCopy> = {
    ko: {
        sectionAriaLabel: 'CBAM 개요',
        heading: 'Hana.eco CBAM 솔루션',
        subheading: 'HanaLoop는 CBAM 전문 컨설팅과 Hana.eco를 통해 기업의 효율적인 CBAM 대응을 지원합니다.',
        whatTitle: 'CBAM 이란?',
        whatBody: 'CBAM(Carbon Border Adjustment Mechanism)은 EU의 탄소국경조정제도로, 수입 제품의 내재 탄소배출량을 기준으로 비용을 부과합니다. 탄소배출 데이터의 정밀한 관리가 핵심입니다.',
        solutionTitle: 'CBAM 컨설팅 및 솔루션',
        solutionBody: 'HanaLoop는 CBAM 전문 컨설팅과 Hana.eco 솔루션을 통해 기업의 효율적인 CBAM 대응을 지원합니다. Hana.eco의 CBAM 모듈은 복잡한 데이터 관리를 자동화해 보고서 작성과 규제 대응을 간편하게 만듭니다.',
        contactLabel: 'Contact Us',
        imageAlt: 'CBAM 물류 관련 항만 전경',
    },
    en: {
        sectionAriaLabel: 'CBAM Overview',
        heading: 'Hana.eco CBAM Solution',
        subheading: 'HanaLoop supports companies in efficient CBAM compliance through expert consulting and Hana.eco.',
        whatTitle: 'What is CBAM?',
        whatBody: "CBAM (Carbon Border Adjustment Mechanism) is the EU's carbon border adjustment system that applies costs to imported goods based on embedded carbon emissions. Precise carbon data management is essential.",
        solutionTitle: 'CBAM Consulting and Solution',
        solutionBody: 'HanaLoop supports efficient CBAM compliance through expert consulting and the Hana.eco solution. The Hana.eco CBAM module automates complex data management, simplifying report preparation and regulatory response.',
        contactLabel: 'Contact Us',
        imageAlt: 'Port logistics scene related to CBAM',
    },
    es: {
        sectionAriaLabel: 'Resumen de CBAM',
        heading: 'Solucion CBAM de Hana.eco',
        subheading: 'HanaLoop apoya a las empresas en el cumplimiento eficiente de CBAM mediante consultoria especializada y Hana.eco.',
        whatTitle: 'Que es CBAM?',
        whatBody:
            'CBAM (Carbon Border Adjustment Mechanism) es el mecanismo de ajuste en frontera por carbono de la UE, que aplica costos a productos importados segun sus emisiones de carbono incorporadas. Es esencial gestionar los datos de emisiones con precision.',
        solutionTitle: 'Consultoria y Solucion CBAM',
        solutionBody:
            'HanaLoop apoya el cumplimiento eficiente de CBAM mediante consultoria especializada y la solucion Hana.eco. El modulo CBAM de Hana.eco automatiza la gestion de datos complejos y simplifica la preparacion de reportes y la respuesta regulatoria.',
        contactLabel: 'Contactenos',
        imageAlt: 'Vista portuaria relacionada con la logistica de CBAM',
    },
};

export function CbamOverviewSection({ locale }: CbamOverviewSectionProps) {
    const text = copy[locale];

    return (
        <section className="px-5 pb-14 pt-14 md:px-8 lg:px-0 lg:pb-[120px] lg:pt-[114px]" aria-label={text.sectionAriaLabel}>
            <div className="mx-auto w-full max-w-[1440px] px-11">
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
                    className="mt-5 text-[#4c4c4c]"
                    style={{
                        fontSize: 'clamp(16px, calc(13.81px + 0.46vw), 21px)',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        lineHeight: 1.48,
                    }}
                >
                    {text.subheading}
                </p>

                <div className="mt-10 lg:hidden">
                    <div className="pt-1 lg:max-w-[700px] lg:flex-1">
                        <h3 className="text-[28px] font-bold leading-[1.3] tracking-[-0.25px] text-black md:text-[32px]">{text.whatTitle}</h3>
                        <p className="mt-4 text-[16px] font-medium leading-[1.6] tracking-[-0.25px] text-black md:mt-5 md:text-[17px]">{text.whatBody}</p>

                        <h3 className="mt-12 text-[28px] font-bold leading-[1.3] tracking-[-0.25px] text-black md:mt-14 md:text-[32px]">{text.solutionTitle}</h3>
                        <p className="mt-4 text-[16px] font-medium leading-[1.6] tracking-[-0.25px] text-black md:mt-5 md:text-[17px]">{text.solutionBody}</p>

                        <RoundedArrowButton
                            href={withLocalePath(locale, '/demo_request')}
                            label={text.contactLabel}
                            className="mt-10 h-[52px] w-full max-w-[320px] px-8 md:mt-12 md:h-[56px] md:w-[279px] md:px-12"
                        />
                    </div>

                    <div className="mt-10 overflow-hidden rounded-tl-[18px] rounded-br-[18px] lg:mt-[8px] lg:w-[min(957px,49.84vw,50vw)] lg:shrink-0">
                        <Image src="/images/revamp/cars.png" alt={text.imageAlt} width={957} height={707} className="h-auto w-full object-cover" sizes="(min-width: 1920px) 957px, (min-width: 1200px) 49.84vw, (min-width: 1024px) 50vw, 100vw" />
                    </div>
                </div>
            </div>

            <div className="mt-18 hidden items-center justify-between gap-10 lg:flex xl:pl-[calc((100vw-1440px)/2)]">
                <div className="pt-1 lg:max-w-[700px] lg:flex-1 pl-11">
                    <h3 className="text-[36px] font-bold leading-[1.35] tracking-[-0.25px] text-black">{text.whatTitle}</h3>
                    <p className="mt-6 text-[18px] font-medium leading-[1.65] tracking-[-0.25px] text-black">{text.whatBody}</p>

                    <h3 className="mt-22 text-[36px] font-bold leading-[1.35] tracking-[-0.25px] text-black">{text.solutionTitle}</h3>
                    <p className="mt-6 text-[18px] font-medium leading-[1.65] tracking-[-0.25px] text-black">{text.solutionBody}</p>

                    <RoundedArrowButton href={withLocalePath(locale, '/demo_request')} label={text.contactLabel} className="mt-16" />
                </div>

                <div className="overflow-hidden rounded-tl-[18px] rounded-br-[18px] lg:w-[min(957px,50vw)] lg:shrink-0">
                    <Image src="/images/revamp/cars.png" alt={text.imageAlt} width={957} height={707} className="h-auto w-full object-cover" sizes="(min-width: 1920px) 957px, (min-width: 1024px) 50vw, 100vw" />
                </div>
            </div>
        </section>
    );
}
