import Image from 'next/image';
import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { RoundedArrowButton } from '@/components/ui/rounded-arrow-button';

export async function PlatformOverviewSection() {
    const t = await getTranslations('PlatformOverview');
    const locale = (await getLocale()) as AppLocale;

    return (
        <section className="pb-16 pt-14 lg:pb-[120px] lg:pt-[150px]" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-11">
                <h2 className="text-black font-bold [font-size:clamp(28px,calc(16.94px+2.99vw),60px)] tracking-[-1px]">{t('heading')}</h2>
                <p className="mt-5 text-[var(--color-text-subtle)] font-semibold [font-size:clamp(16px,calc(13.23px+0.75vw),24px)] tracking-[0.5px]">{t('subheading')}</p>

                <div className="mt-10 lg:hidden">
                    <div className="relative mt-10 aspect-[957/707] overflow-hidden rounded-tl-[18px] rounded-br-[18px] lg:mt-[8px] lg:w-[min(957px,49.84vw,50vw)] lg:shrink-0">
                        <Image src="/site/cbam/overview-cars.png" alt={t('imageAlt')} fill className="object-cover" sizes="(min-width: 1920px) 957px, (min-width: 1200px) 49.84vw, (min-width: 1024px) 50vw, 100vw" />
                    </div>

                    <div className="mt-10 pt-1 lg:max-w-[700px] lg:flex-1">
                        <h3 className="[font-size:clamp(28px,calc(26.62px+0.37vw),32px)] font-bold tracking-[-0.25px] text-black">{t('whatTitle')}</h3>
                        <p className="mt-4 text-[var(--color-text-subtle)] [font-size:clamp(16px,calc(14.27px+0.47vw),21px)] font-medium tracking-[-0.25px] md:mt-5">{t('whatBody')}</p>

                        <RoundedArrowButton href={withLocalePath(locale, '/partnership')} label={t('contactLabel')} className="mt-10 h-[52px] lg:max-w-[280px] md:mt-12 md:h-[56px]" />
                    </div>
                </div>
            </div>

            <div className="mt-18 hidden items-center justify-between gap-10 lg:flex lg:pl-[calc((100vw-1440px)/2)]">
                <div className="pt-1 lg:max-w-[700px] lg:flex-1 pl-11">
                    <h3 className="text-[36px] font-bold tracking-[-0.25px] text-black">{t('whatTitle')}</h3>
                    <p className="mt-6 text-[18px] font-medium tracking-[-0.25px]">{t('whatBody')}</p>

                    <RoundedArrowButton href={withLocalePath(locale, '/partnership')} label={t('contactLabel')} className="mt-16" />
                </div>

                <div className="relative aspect-[957/707] overflow-hidden rounded-tl-[18px] rounded-br-[18px] lg:w-[min(957px,50vw)] lg:shrink-0">
                    <Image src="/site/cbam/overview-cars.png" alt={t('imageAlt')} fill className="object-cover" sizes="(min-width: 1920px) 957px, (min-width: 1024px) 50vw, 100vw" />
                </div>
            </div>
        </section>
    );
}
