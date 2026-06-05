import Image from 'next/image';
import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { RoundedArrowButton } from '@/components/ui/rounded-arrow-button';
import bgImage from '@/public/site/hana-ai/overview-bg.png';

export async function HanaAiOverviewSection() {
    const t = await getTranslations('HanaAiOverview');
    const locale = (await getLocale()) as AppLocale;

    return (
        <section className="pb-16 pt-14 lg:pb-[120px] lg:pt-[150px]" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-11">
                <h2 className="text-black font-bold [font-size:clamp(28px,calc(16.94px+2.99vw),60px)] tracking-[-1px]">{t('heading')}</h2>
                <p className="mt-5 text-[var(--color-text-subtle)] [font-size:clamp(16px,calc(13.23px+0.75vw),24px)] font-semibold tracking-[0.5px] leading-[1.48]">{t('subheading')}</p>
            </div>

            <div className="mx-auto mt-14 w-full max-w-[1440px] lg:hidden px-4 md:px-8">
                <div className="mt-12 overflow-hidden rounded-[20px] lg:mt-[58px]">
                    <Image src={bgImage} alt={t('imageAlt')} width={957} height={707} className="h-auto w-full" loading="eager" />
                </div>
                <div className="space-y-14 md:px-8 mt-10">
                    <article>
                        <h3 className="text-black [font-size:clamp(32px,calc(28.54px+0.93vw),42px)] font-bold leading-[1.28]">{t('itemOneTitle')}</h3>
                        <p className="text-[var(--color-text-subtle)] mt-4 [font-size:clamp(16px,calc(15.31px+0.19vw),18px)] font-medium tracking-[0.5px] leading-[1.58] whitespace-pre-line">{t('itemOneBody')}</p>
                    </article>

                    <RoundedArrowButton href={withLocalePath(locale, '/partnership')} label={t('contactLabel')} className="w-full max-w-[240px] px-8 md:w-[279px] md:px-12" />
                </div>
            </div>

            <div className="mt-18 hidden items-center justify-between gap-10 lg:flex lg:pl-[calc((100vw-1440px)/2)]">
                <div className="max-w-[640px] flex-1 space-y-24 pt-2 pl-11">
                    <article>
                        <h3 className="text-black [font-size:clamp(24px,calc(19.86px+1.12vw),36px)] font-bold leading-[1.28]">{t('itemOneTitle')}</h3>
                        <p className="mt-6 [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] font-medium tracking-[0.5px] leading-[1.58] whitespace-pre-line">{t('itemOneBody')}</p>
                    </article>

                    <RoundedArrowButton href={withLocalePath(locale, '/partnership')} label={t('contactLabel')} />
                </div>

                <div className="overflow-hidden rounded-tl-[18px] rounded-br-[18px] lg:w-[min(957px,50vw)] lg:shrink-0">
                    <Image src={bgImage} alt={t('imageAlt')} width={957} height={707} className="h-auto w-full object-cover" sizes="(min-width: 1920px) 957px, (min-width: 1024px) 50vw, 100vw" />
                </div>
            </div>
        </section>
    );
}
