import Image from 'next/image';
import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { RoundedArrowButton } from '@/components/ui/rounded-arrow-button';

export async function CbamOverviewSection() {
    const t = await getTranslations('CbamOverview');
    const locale = (await getLocale()) as AppLocale;

    return (
        <section className="px-5 pb-14 pt-14 md:px-8 lg:px-0 lg:pb-[120px] lg:pt-[114px]" aria-label={t('sectionAriaLabel')}>
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
                    {t('heading')}
                </h2>
                <p
                    className="mt-5 text-[var(--color-text-subtle)]"
                    style={{
                        fontSize: 'clamp(16px, calc(13.81px + 0.46vw), 21px)',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        lineHeight: 1.48,
                    }}
                >
                    {t('subheading')}
                </p>

                <div className="mt-10 lg:hidden">
                    <div className="relative mt-10 aspect-[957/707] overflow-hidden rounded-tl-[18px] rounded-br-[18px] lg:mt-[8px] lg:w-[min(957px,49.84vw,50vw)] lg:shrink-0">
                        <Image
                            src="/site/cbam/overview-cars.png"
                            alt={t('imageAlt')}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1920px) 957px, (min-width: 1200px) 49.84vw, (min-width: 1024px) 50vw, 100vw"
                        />
                    </div>

                    <div className="mt-10 pt-1 lg:max-w-[700px] lg:flex-1">
                        <h3 className="text-[28px] font-bold leading-[1.3] tracking-[-0.25px] text-black md:text-[32px]">{t('whatTitle')}</h3>
                        <p className="mt-4 text-[16px] font-medium leading-[1.6] tracking-[-0.25px] text-black md:mt-5 md:text-[17px]">{t('whatBody')}</p>

                        <h3 className="mt-12 text-[28px] font-bold leading-[1.3] tracking-[-0.25px] text-black md:mt-14 md:text-[32px]">{t('solutionTitle')}</h3>
                        <p className="mt-4 text-[16px] font-medium leading-[1.6] tracking-[-0.25px] text-black md:mt-5 md:text-[17px]">{t('solutionBody')}</p>

                        <RoundedArrowButton href={withLocalePath(locale, '/partnership')} label={t('contactLabel')} className="mt-10 h-[52px] lg:max-w-[280px] md:mt-12 md:h-[56px]" />
                    </div>
                </div>
            </div>

            <div className="mt-18 hidden items-center justify-between gap-10 lg:flex xl:pl-[calc((100vw-1440px)/2)]">
                <div className="pt-1 lg:max-w-[700px] lg:flex-1 pl-11">
                    <h3 className="text-[36px] font-bold leading-[1.35] tracking-[-0.25px] text-black">{t('whatTitle')}</h3>
                    <p className="mt-6 text-[18px] font-medium leading-[1.65] tracking-[-0.25px]">{t('whatBody')}</p>

                    <h3 className="mt-22 text-[36px] font-bold leading-[1.35] tracking-[-0.25px] text-black">{t('solutionTitle')}</h3>
                    <p className="mt-6 text-[18px] font-medium leading-[1.65] tracking-[-0.25px]">{t('solutionBody')}</p>

                    <RoundedArrowButton href={withLocalePath(locale, '/partnership')} label={t('contactLabel')} className="mt-16" />
                </div>

                <div className="relative aspect-[957/707] overflow-hidden rounded-tl-[18px] rounded-br-[18px] lg:w-[min(957px,50vw)] lg:shrink-0">
                    <Image src="/site/cbam/overview-cars.png" alt={t('imageAlt')} fill className="object-cover" sizes="(min-width: 1920px) 957px, (min-width: 1024px) 50vw, 100vw" />
                </div>
            </div>
        </section>
    );
}
