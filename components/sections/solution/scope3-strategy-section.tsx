import type { CSSProperties } from 'react';
import Image from 'next/image';
import type { AppLocale } from '@/lib/locales';
import bgImage from '@/public/images/revamp/scope3-strategy-bg.png';
import logoImage from '@/docs/figma/export/lb.png';

type Scope3StrategySectionProps = {
    locale: AppLocale;
};

type Scope3StrategyCopy = {
    sectionAriaLabel: string;
    heading: string;
    columns: Array<{
        title: string;
        bullets: string[];
    }>;
    imageAlt: string;
    logoAlt: string;
};

const titleGradientStyle: CSSProperties = {
    background: 'linear-gradient(97.75deg, rgba(31, 189, 125, 0.7) 37.72%, rgba(1, 148, 255, 0.7) 63.18%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
};

const koCopy: Scope3StrategyCopy = {
    sectionAriaLabel: 'Scope3 데이터 기반 탄소중립 전략',
    heading: '데이터가 보이면 탄소중립 전략이 보입니다!',
    columns: [
        {
            title: '데이터 연동, 생성형AI기반 분석',
            bullets: [
                '자동 데이터 수집으로 번거로운 수작업 데이터 수집 줄임',
                '생성형AI기반 규제 검색과 리포트 생성',
                '전사 배출 현황 및 추세 분석 제공',
                '데이터 저장 및 전송 암호화 보안으로 안전성',
            ],
        },
        {
            title: '가치사슬망 스코프 3 관리',
            bullets: ['가치사슬 배출량 관리', '협력사 관리', '다국어 지원'],
        },
        {
            title: '제품 LCA 지원',
            bullets: [
                '제품의 원부자재(전구물질/PRECURSOR) 관리',
                '제품 생산 공정 설정과 내재배출 산정',
                '업스트림(UPSTREAM)·다운스트림(DOWNSTREAM) 배출 산정',
                '제품 내재배출 분석 및 벤츠마킹',
            ],
        },
        {
            title: 'OpenAPI - 플랫폼',
            bullets: ['확장 솔루션 구축시간 단축', '신사업 모델 창출 가능', '저탄소 생태계 형성'],
        },
    ],
    imageAlt: '숲 배경 이미지',
    logoAlt: 'HanaLoop 로고',
};

const copy: Record<AppLocale, Scope3StrategyCopy> = {
    ko: koCopy,
    en: koCopy,
    es: koCopy,
};

export function Scope3StrategySection({ locale }: Scope3StrategySectionProps) {
    const text = copy[locale];

    return (
        <section className="px-5 pb-16 pt-12 md:px-8 lg:px-0 lg:pb-[120px] lg:pt-[92px]" aria-label={text.sectionAriaLabel}>
            <div className="mx-auto w-full max-w-[1440px] lg:px-11">
                <h2
                    className="text-black"
                    style={{
                        fontWeight: 700,
                        fontSize: 'clamp(34px, calc(23.81px + 2.12vw), 60px)',
                        letterSpacing: '-0.25px',
                        lineHeight: 1.2,
                    }}
                >
                    {text.heading}
                </h2>

                <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
                    {text.columns.map((column) => (
                        <article key={column.title} className="min-w-0">
                            <h3
                                style={{
                                    ...titleGradientStyle,
                                    fontWeight: 600,
                                    fontSize: 'clamp(20px, calc(18.43px + 0.33vw), 24px)',
                                    letterSpacing: '-0.25px',
                                    lineHeight: 1.35,
                                }}
                            >
                                {column.title}
                            </h3>
                            <div className="mt-6 h-px bg-black/40" />
                            <ul className="mt-7 list-disc space-y-2 pl-6 text-black">
                                {column.bullets.map((bullet) => (
                                    <li
                                        key={bullet}
                                        style={{
                                            fontWeight: 500,
                                            fontSize: 'clamp(16px, calc(15.22px + 0.16vw), 18px)',
                                            letterSpacing: '-0.25px',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="relative mt-14 overflow-hidden rounded-[20px] lg:mt-[74px]">
                    <Image src={bgImage} alt={text.imageAlt} width={1920} height={400} className="h-[240px] w-full object-cover md:h-[320px] lg:h-[400px]" sizes="(min-width: 1920px) 1440px, (min-width: 1024px) calc(100vw - 88px), 100vw" />
                    <Image src={logoImage} alt={text.logoAlt} className="absolute bottom-6 left-6 h-[34px] w-auto opacity-60 md:bottom-8 md:left-8 md:h-[42px] lg:bottom-10 lg:left-10 lg:h-[53px]" />
                </div>
            </div>
        </section>
    );
}
