import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

const desktopCardImages = ['/site/home/intro/pc-1.png', '/site/home/intro/pc-2.png', '/site/home/intro/pc-3.png'] as const;
const mobileCardImages = ['/site/home/intro/mobile-1.png', '/site/home/intro/mobile-2.png', '/site/home/intro/mobile-3.png'] as const;

function CardAction({ title }: { title: string }) {
    return (
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-center gap-2 xl:px-10 md:bottom-4 md:left-4 md:right-4">
            <div className="gradient-border relative flex w-[200px] h-10 md:flex-1 items-center justify-center rounded-full bg-black/10 px-4 [font-size:clamp(14px,calc(11.93px+0.56vw),20px)] font-medium leading-none text-white backdrop-blur-[4px] md:h-12">
                {title}
            </div>
            <div className="gradient-border relative flex h-10 w-10 items-center justify-center rounded-full bg-black/10 backdrop-blur-[4px] md:h-12 md:w-12">
                <Image src="/site/icons/ic-arrow-up-right.png" alt="" aria-hidden="true" width={20} height={20} />
            </div>
        </div>
    );
}

export async function HomeIntroSection() {
    const t = await getTranslations('HomeIntro');
    const locale = (await getLocale()) as AppLocale;

    const eyebrowMobileLines = t.raw('eyebrowMobileLines') as string[];
    const titleDesktopLines = t.raw('titleDesktopLines') as string[];
    const titleMobileLines = t.raw('titleMobileLines') as string[];
    const descriptionMobileLines = t.raw('descriptionMobileLines') as string[];
    const cards = t.raw('cards') as Array<{ title: string; href: string }>;
    const metrics = t.raw('metrics') as Array<{ value: string; label: string }>;

    return (
        <section className="px-5 pb-10 pt-8 text-[#131313] md:px-8 md:pb-14 md:pt-10 lg:px-[64px] lg:pb-16 lg:pt-20">
            <div className="mx-auto w-full max-w-[1440px]">
                <div className="relative">
                    <p className="mx-auto max-w-[780px] text-center font-medium leading-[1.45] text-[var(--color-text-eyebrow)] [font-size:clamp(13px,calc(12.31px+0.19vw),15px)] lg:hidden">
                        {eyebrowMobileLines.map((line) => (
                            <span key={line} className="block whitespace-nowrap">
                                {line}
                            </span>
                        ))}
                    </p>
                    <p className="mx-auto hidden max-w-[780px] text-center text-[21px] font-semibold leading-[1.4] text-[var(--color-text-eyebrow)] lg:block">
                        <span className="whitespace-nowrap">{t('eyebrowDesktop')}</span>
                    </p>

                    <h2 className="mx-auto mt-2 max-w-[1020px] text-center font-medium leading-[1.14] tracking-[-0.02em] text-black [font-size:clamp(24px,calc(15.70px+2.24vw),48px)] lg:mt-4">
                        <span className="lg:hidden font-bold">
                            {titleMobileLines.map((line) => (
                                <span key={line} className="block">
                                    {line}
                                </span>
                            ))}
                        </span>
                        <span className="hidden lg:block font-bold">
                            {titleDesktopLines.map((line) => (
                                <span key={line} className="block">
                                    {line}
                                </span>
                            ))}
                        </span>
                    </h2>

                    <Link
                        href={withLocalePath(locale, '/partnership')}
                        className="absolute right-0 xl:bottom-30 2xl:bottom-12 hidden h-[128px] w-[128px] flex-col items-center justify-center rounded-full text-white xl:flex"
                        style={{ background: 'linear-gradient(149deg, #59c98a 0%, #3cb2ea 100%)' }}
                    >
                        <Image src="/site/icons/home-intro-arrow.png" alt="" aria-hidden="true" width={34} height={10} className="mb-2 h-auto w-[34px]" style={{ width: 'auto', height: 'auto' }} />
                        <span className="text-center text-[21px] font-medium leading-[1.05]">
                            {t('contactLabel')
                                .split(' ')
                                .map((word) => (
                                    <span key={word} className="block">
                                        {word}
                                    </span>
                                ))}
                        </span>
                    </Link>
                </div>

                <p className="mx-auto mt-9 hidden max-w-[1040px] text-center [font-size:clamp(13px,calc(11.96px+0.28vw),16px)] font-medium leading-[1.55] text-[var(--color-text-subtle)] lg:mt-16 lg:block">
                    <span className="">{t('descriptionDesktop')}</span>
                </p>

                <div className="mt-8 grid gap-3.5 lg:mt-6 lg:grid-cols-3 lg:gap-4">
                    {cards.map((card, index) => (
                        <Link key={card.title} href={withLocalePath(locale, card.href)} className="relative block overflow-hidden rounded-[12px] lg:rounded-[18px]">
                            <Image src={desktopCardImages[index]} alt={card.title} width={920} height={540} className="hidden h-auto w-full object-cover lg:block" sizes="(min-width: 1440px) 430px, 30vw" />
                            <Image src={mobileCardImages[index]} alt={card.title} width={716} height={334} className="h-auto w-full object-cover lg:hidden" sizes="(max-width: 1023px) 100vw, 0px" />
                            <CardAction title={card.title} />
                        </Link>
                    ))}
                </div>

                <p className="mx-auto mt-9 max-w-[700px] text-center [font-size:clamp(13px,calc(12.31px+0.19vw),15px)] font-medium leading-[1.55] text-[var(--color-text-subtle)] lg:hidden">
                    {descriptionMobileLines.map((line) => (
                        <span key={line} className="block whitespace-nowrap">
                            {line}
                        </span>
                    ))}
                </p>

                <div className="mt-14 hidden lg:grid lg:grid-cols-4">
                    {metrics.map((metric, index) => (
                        <div key={metric.value} className={`px-11 py-3 ${index > 0 ? 'border-l border-black/15' : ''}`}>
                            <p className="text-[58px] leading-none tracking-[-0.02em] text-[var(--color-metric-value)]">{metric.value}</p>
                            <p className="mt-4 text-[16px] font-medium leading-[1.25] text-[var(--color-metric-label)]">{metric.label}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 lg:hidden">
                    {metrics.map((metric) => (
                        <div key={metric.value} className="flex items-end justify-between border-b border-black/15 py-4">
                            <p className="[font-size:clamp(56px,calc(53.93px+0.56vw),62px)] leading-none tracking-[-0.02em] text-[var(--color-metric-value)]">{metric.value}</p>
                            <p className="max-w-[172px] text-right [font-size:clamp(14px,calc(10.62px+0.37vw),16px)] font-medium leading-[1.35] text-[var(--color-metric-label)] md:max-w-[240px]">{metric.label}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-3 text-center [font-size:clamp(12px,calc(11.31px+0.19vw),14px)] leading-[1.5] text-[var(--color-text-note)] lg:mt-8 lg:text-right">{t('footnote')}</p>
                <div className="mt-8 hidden border-b border-black/15 lg:mt-16 lg:block" />
            </div>
        </section>
    );
}
