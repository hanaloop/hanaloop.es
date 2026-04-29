import Image from 'next/image';
import Link from 'next/link';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

type HomeHeroSectionProps = {
    locale: AppLocale;
};

const heroCopy: Record<
    AppLocale,
    {
        title: string;
        mobileDescription: string;
        desktopDescription: string;
        solutionLabel: string;
        contactLabel: string;
    }
> = {
    ko: {
        title: 'Smarter Carbon Management with AI-powered Hana Eco',
        mobileDescription: '오늘날 탄소 관리는 기업 경쟁력입니다.\n하나루프와 함께 에너지 비용 절감과\n기후 리스크 완화를 동시에 실현하세요.',
        desktopDescription: '오늘날 탄소 관리는 기업 경쟁력입니다. EU CBAM, ISSB S1·S2, 배터리 규제,\nCSDDD 등 강화되는 기후 규제와 CDP·GRI 공시 요구를 신속히 준수하고,\n에너지 비용 절감과 기후 리스크 완화를 동시에 실현하세요.',
        solutionLabel: 'Solution Overview',
        contactLabel: 'Contact Us',
    },
    en: {
        title: 'Smarter Carbon Management with AI-powered Hana Eco',
        mobileDescription: 'Carbon management is now a core business capability.\nCut energy costs and reduce climate risks with HanaLoop.',
        desktopDescription:
            'Carbon management is now a core business capability. Rapidly comply with EU CBAM, ISSB S1·S2,\nbattery regulations, CSDDD, and CDP·GRI disclosure requirements while reducing energy costs\nand mitigating climate risks at the same time.',
        solutionLabel: 'Solution Overview',
        contactLabel: 'Contact Us',
    },
    es: {
        title: 'Smarter Carbon Management with AI-powered Hana Eco',
        mobileDescription: 'La gestión de carbono es una ventaja competitiva.\nReduce costos de energía y riesgos climáticos\ncon HanaLoop.',
        desktopDescription:
            'La gestión de carbono es una ventaja competitiva. Cumple rápidamente con EU CBAM, ISSB S1·S2,\nregulaciones de baterías, CSDDD y requisitos de divulgación CDP·GRI, mientras reduces costos de energía\ny mitigas riesgos climáticos al mismo tiempo.',
        solutionLabel: 'Solution Overview',
        contactLabel: 'Contact Us',
    },
};

function HeroButton({ href, label, locale, mobileWidthClassName }: { href: string; label: string; locale: AppLocale; mobileWidthClassName: string }) {
    return (
        <Link
            href={withLocalePath(locale, href)}
            className={`gradient-border relative inline-flex h-[52px] ${mobileWidthClassName} items-center justify-between gap-3 rounded-full bg-transparent px-6 text-[14px] font-medium leading-none text-white transition lg:w-auto lg:justify-center lg:px-8 lg:text-base`}
            style={{
                backgroundColor: 'transparent',
                backdropFilter: 'none',
                WebkitBackdropFilter: 'none',
                filter: 'none',
            }}
        >
            <span className="whitespace-nowrap">{label}</span>
            <Image src="/icons/revamp/ic-arrow-up-right.png" alt="" aria-hidden="true" width={20} height={20} className="h-4 w-4 shrink-0 lg:h-5 lg:w-5" />
        </Link>
    );
}

export function HomeHeroSection({ locale }: HomeHeroSectionProps) {
    const copy = heroCopy[locale];

    return (
        <section className="relative isolate overflow-x-hidden text-white">
            <div className="relative overflow-hidden bg-[var(--color-hero-bg)]" style={{ height: 'clamp(620px, calc(620px + 16vw), 958px)' }}>
                <Image src="/images/kristaps-ungurs-4PeamaB-7ok-unsplash 1.png" alt="" fill priority className="object-cover object-center" sizes="100vw" />
                <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col px-5 md:px-8 lg:px-[64px]" style={{ paddingTop: 'clamp(92px, calc(54.14px + 10.10vw), 248px)' }}>
                    <div className="max-w-[780px]">
                        <h1 className="font-sans font-semibold leading-[1.18] tracking-[-0.02em] text-white" style={{ fontSize: 'clamp(28px, calc(20.24px + 2.07vw), 60px)' }}>
                            <span className="lg:hidden">
                                <span className="block">Smarter</span>
                                <span className="block">Carbon Management</span>
                                <span className="block">with AI-powered</span>
                                <span className="block">Hana Eco</span>
                            </span>
                            <span className="hidden lg:inline">
                                <span className="block whitespace-nowrap">Smarter Carbon Management</span>
                                <span className="block whitespace-nowrap">with AI-powered Hana Eco</span>
                            </span>
                        </h1>

                        <p className="mt-8 whitespace-pre-line font-semibold tracking-[0] text-white md:mt-8 lg:hidden" style={{ fontFamily: 'Pretendard', fontSize: 'clamp(13px, calc(10.7px + 0.6vw), 17px)', lineHeight: 1.62 }}>
                            {copy.mobileDescription}
                        </p>
                        <p className="mt-6 hidden whitespace-pre-line text-[18px] font-semibold leading-[32px] tracking-[0] text-white/90 md:mt-8 lg:block" style={{ fontFamily: 'Pretendard' }}>
                            {copy.desktopDescription}
                        </p>

                        <div className="mt-14 flex flex-col items-start gap-3 md:mt-14 md:max-w-[260px] lg:mt-14 lg:max-w-none lg:flex-row lg:gap-4">
                            <HeroButton href="/solution" label={copy.solutionLabel} locale={locale} mobileWidthClassName="w-[206px]" />
                            <HeroButton href="/demo_request" label={copy.contactLabel} locale={locale} mobileWidthClassName="w-[160px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[92px] lg:h-[96px]" />

            <div className="pointer-events-none absolute inset-x-0 z-20" style={{ bottom: 'clamp(20px, 4vw, 22px)' }}>
                <div className="mx-auto w-full max-w-[1440px]">
                    <div
                        className="ml-auto mr-0"
                        style={{
                            width: 'clamp(296px, calc(154px + 40vw), 800px)',
                        }}
                    >
                        <Image src="/images/macbook-mockup.png" alt="Hana Eco dashboard preview on laptop" width={1362} height={682} className="h-auto w-full object-contain" sizes="(max-width: 1920px) 41.67vw, 800px" />
                    </div>
                </div>
            </div>
        </section>
    );
}
