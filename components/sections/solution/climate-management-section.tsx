import type { CSSProperties } from 'react';
import Image from 'next/image';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { RoundedArrowButton } from '@/components/ui/rounded-arrow-button';
import bgImage from '@/public/images/revamp/climate-management-bg.png';

const GRADIENT_TEXT_STYLE: CSSProperties = {
    background: 'linear-gradient(90deg, #1FBD7D 0%, #0194FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
};

type SolutionClimateManagementSectionProps = {
    locale: AppLocale;
};

type ClimateManagementCopy = {
    sectionAriaLabel: string;
    heading: string;
    subheading: string;
    message: string;
    itemOneTitle: string;
    itemOneBody: string;
    itemTwoTitle: string;
    itemTwoBody: string;
    contactLabel: string;
    imageAlt: string;
};

const koCopy: ClimateManagementCopy = {
    sectionAriaLabel: '기후 경영 소개',
    heading: '기후 경영',
    subheading: '자원은 유한하지만 잠재력은 무한합니다.',
    message: '디지털 솔루션으로 환경적, 경제적,\n사회적 이익을 동시에 실현!',
    itemOneTitle: '지속가능한 디지털 전환',
    itemOneBody: '급변하는 비즈니스 환경과 시장 요구에 맞추어 디지털 기술로 고객의 잠재력과 비즈니스 가치를 극대화합니다. 기술뿐만 아니라 기업 문화를 향상시켜 고객 조직의 만족도와 생산력을 높입니다.',
    itemTwoTitle: '친환경 하나에코 플랫폼 기반 솔루션',
    itemTwoBody: '플랫폼은 환경 규제에 대한 지침과 시장에 대한 통찰력을 제공하고 신속한 친환경 기술 검색 및 거래를 가능하게 하여 더욱 깨끗한 가치사슬을 생성시킴으로써 고객이 지속가능한 방식으로 성장할 수 있도록 도와줍니다. 결과적으로 보다 책임있고 윤리적인 산업으로 발전하는데 기여합니다.',
    contactLabel: 'Contact Us',
    imageAlt: '친환경 모빌리티 컨셉 이미지',
};

const copy: Record<AppLocale, ClimateManagementCopy> = {
    ko: koCopy,
    en: koCopy,
    es: koCopy,
};

export function SolutionClimateManagementSection({ locale }: SolutionClimateManagementSectionProps) {
    const text = copy[locale];
    const [messageFirstLine, messageSecondLine] = text.message.split('\n');

    return (
        <section className="px-5 pb-16 pt-14 md:px-8 lg:px-0 lg:pb-[120px] lg:pt-[114px]" aria-label={text.sectionAriaLabel}>
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

                <p
                    className="mt-20 text-black"
                    style={{
                        fontWeight: 700,
                        fontSize: 'clamp(34px, 2.5vw, 48px)',
                        letterSpacing: '-1px',
                        lineHeight: 1.28,
                    }}
                >
                    {messageFirstLine}
                    <br />
                    {messageSecondLine}
                </p>
            </div>

            <div className="mx-auto mt-14 w-full max-w-[1440px] lg:hidden">
                <div className="space-y-14 px-5 md:px-8">
                    <article>
                        <h3 style={{ fontSize: 'clamp(32px, calc(22.55px + 1.97vw), 42px)', fontWeight: 700, lineHeight: 1.28, ...GRADIENT_TEXT_STYLE }}>{text.itemOneTitle}</h3>
                        <p className="mt-4" style={{ fontSize: 'clamp(16px, calc(14.12px + 0.39vw), 18px)', fontWeight: 500, letterSpacing: '0.5px', lineHeight: 1.58 }}>
                            {text.itemOneBody}
                        </p>
                    </article>

                    <article>
                        <h3 style={{ fontSize: 'clamp(32px, calc(22.55px + 1.97vw), 42px)', fontWeight: 700, lineHeight: 1.28, ...GRADIENT_TEXT_STYLE }}>{text.itemTwoTitle}</h3>
                        <p className="mt-4" style={{ fontSize: 'clamp(16px, calc(14.12px + 0.39vw), 18px)', fontWeight: 500, letterSpacing: '0.5px', lineHeight: 1.58 }}>
                            {text.itemTwoBody}
                        </p>
                    </article>

                    <RoundedArrowButton
                        href={withLocalePath(locale, '/demo_request')}
                        label={text.contactLabel}
                        className="h-[52px] w-full max-w-[320px] px-8 md:h-[56px] md:w-[279px] md:px-12"
                    />
                </div>

                <div className="mt-10 overflow-hidden rounded-tl-[18px] rounded-br-[18px] lg:w-[min(957px,49.84vw,50vw)] lg:shrink-0">
                    <Image src={bgImage} alt={text.imageAlt} width={957} height={707} className="h-auto w-full object-cover" sizes="(min-width: 1920px) 957px, (min-width: 1200px) 49.84vw, 100vw" />
                </div>
            </div>

            <div className="mt-18 hidden items-center justify-between gap-10 lg:flex lg:pl-[calc((100vw-1440px)/2)]">
                <div className="max-w-[640px] flex-1 space-y-24 pt-2 pl-11">
                    <article>
                        <h3 style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.28, ...GRADIENT_TEXT_STYLE }}>{text.itemOneTitle}</h3>
                        <p className="mt-6" style={{ fontSize: '18px', fontWeight: 500, letterSpacing: '0.5px', lineHeight: 1.58 }}>
                            {text.itemOneBody}
                        </p>
                    </article>

                    <article>
                        <h3 style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.28, ...GRADIENT_TEXT_STYLE }}>{text.itemTwoTitle}</h3>
                        <p className="mt-6" style={{ fontSize: '18px', fontWeight: 500, letterSpacing: '0.5px', lineHeight: 1.58 }}>
                            {text.itemTwoBody}
                        </p>
                    </article>

                    <RoundedArrowButton href={withLocalePath(locale, '/demo_request')} label={text.contactLabel} />
                </div>

                <div className="overflow-hidden rounded-tl-[18px] rounded-br-[18px] lg:w-[min(957px,50vw)] lg:shrink-0">
                    <Image src={bgImage} alt={text.imageAlt} width={957} height={707} className="h-auto w-full object-cover" sizes="(min-width: 1920px) 957px, (min-width: 1024px) 50vw, 100vw" />
                </div>
            </div>
        </section>
    );
}
