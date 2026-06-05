import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

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
            <Image src="/site/icons/ic-arrow-up-right.png" alt="" aria-hidden="true" width={20} height={20} className="h-4 w-4 shrink-0 lg:h-5 lg:w-5" />
        </Link>
    );
}

export async function HomeHeroSection() {
    const t = await getTranslations('HomeHero');
    const locale = (await getLocale()) as AppLocale;

    return (
        <section className="relative isolate overflow-x-hidden text-white">
            <div className="relative overflow-hidden bg-[var(--color-hero-bg)]" style={{ height: 'clamp(620px, calc(620px + 16vw), 958px)' }}>
                <video autoPlay muted loop playsInline src="/site/home/main.mp4" poster="/site/home/hero-bg-main.png" className="absolute inset-0 h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col px-5 md:px-8 lg:px-[64px] pt-40 md:pt-60 lg:t-80">
                    <div className="max-w-[800px]">
                        <h1 className="font-sans font-semibold leading-[1.18] tracking-[-0.02em] text-white [font-size:clamp(28px,calc(16.94px+2.99vw),60px)]">
                            <span className="block">{t('title')}</span>
                        </h1>

                        <p className="mt-8 whitespace-pre-line font-semibold tracking-[0] text-white md:mt-8 lg:hidden [font-size:clamp(13px,calc(11.62px+0.37vw),17px)] leading-[1.62]" style={{ fontFamily: 'Pretendard' }}>
                            {t('mobileDescription')}
                        </p>
                        <p className="mt-6 hidden whitespace-pre-line text-[18px] font-semibold leading-[32px] tracking-[0] text-white/90 md:mt-8 lg:block" style={{ fontFamily: 'Pretendard' }}>
                            {t('desktopDescription')}
                        </p>

                        <div className="mt-14 flex flex-col items-start gap-3 md:mt-14 md:max-w-[260px] lg:mt-14 lg:max-w-none lg:flex-row lg:gap-4">
                            <HeroButton href="/overview" label={t('solutionLabel')} locale={locale} mobileWidthClassName="w-[206px]" />
                            <HeroButton href="/partnership" label={t('contactLabel')} locale={locale} mobileWidthClassName="w-[160px]" />
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
                        <Image src="/site/home/macbook-mockup.png" alt="Hana Eco dashboard preview on laptop" width={1362} height={682} className="h-auto w-full object-contain" sizes="(max-width: 1920px) 41.67vw, 800px" />
                    </div>
                </div>
            </div>
        </section>
    );
}
