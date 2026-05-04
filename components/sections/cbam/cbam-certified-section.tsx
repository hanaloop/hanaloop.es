import type { AppLocale } from '@/lib/locales';
import { AlternatingImageProcessSection } from '@/components/features/alternating-image-process-section';

type CbamCertifiedSectionProps = {
    locale: AppLocale;
};

type CertifiedCopy = {
    sectionAriaLabel: string;
    title: string;
    subtitle: string;
    cards: Array<{
        index: string;
        title: string;
        description: string;
        imageSrc: string;
        imageAlt: string;
    }>;
};

const koCopy: CertifiedCopy = {
    sectionAriaLabel: '적합성 인증받은 CBAM 솔루션',
    title: '적합성 인증받은 CBAM 솔루션',
    subtitle: '로이드인증원(LRQA)으로부터 배출권거래제와 EU 탄소국경조정제도 적합성 국내 첫 검증의견서 획득',
    cards: [
        {
            index: '01.',
            title: '제품 및 전구물질 관리(CN 코드 관리)',
            description: '제품과 전구물질을 통합적으로 관리하고, CBAM 규제 대상 품목에 필요한 CN 코드를 체계적으로 등록 및 추적할 수 있습니다. 이를 통해 제품별 탄소배출 분석 및 보고에 필요한 기초 데이터를 손쉽게 확보할 수 있습니다.',
            imageSrc: '/images/revamp/cbam-certified-1.png',
            imageAlt: '제품 및 전구물질 관리 시각화 이미지',
        },
        {
            index: '02.',
            title: 'Installation 설정, 공정 관리',
            description: '각 제조시설의 정보와 생산 공정 흐름을 설정하고 관리할 수 있습니다. 이는 CBAM 보고서에 요구되는 배출 정보 및 공정별 배출 산정의 정확성을 높이는 데 중요한 역할을 합니다.',
            imageSrc: '/images/revamp/cbam-certified-2.png',
            imageAlt: 'Installation 설정 및 공정 관리 시각화 이미지',
        },
        {
            index: '03.',
            title: '제품 내재배출 산정 및 분석',
            description: '제품 생산 과정에서 발생하는 직접 및 간접 배출량을 제품 단위로 산정합니다. 산정 결과를 바탕으로 제품별 탄소 집약도, 고배출 요소, 개선 포인트 등을 분석할 수 있어, 규제 대응은 물론 탄소감축 전략 수립에도 유용합니다.',
            imageSrc: '/images/revamp/cbam-certified-3.png',
            imageAlt: '제품 내재배출 산정 및 분석 시각화 이미지',
        },
        {
            index: '04.',
            title: 'CBAM 보고서 생성',
            description: '수집된 활동 데이터와 배출 정보를 기반으로, CBAM 규정에 맞는 보고서를 자동 생성할 수 있습니다. 복잡한 규정 해석과 수작업 없이, 유럽 수출 기업의 CBAM 보고 의무 이행을 효율적으로 지원합니다.',
            imageSrc: '/images/revamp/cbam-certified-4.png',
            imageAlt: 'CBAM 보고서 생성 시각화 이미지',
        },
    ],
};

const copy: Record<AppLocale, CertifiedCopy> = {
    ko: koCopy,
    en: koCopy,
    es: koCopy,
};

export function CbamCertifiedSection({ locale }: CbamCertifiedSectionProps) {
    const text = copy[locale];

    return (
        <AlternatingImageProcessSection
            ariaLabel={text.sectionAriaLabel}
            title={text.title}
            subtitle={text.subtitle}
            cards={text.cards}
        />
    );
}
