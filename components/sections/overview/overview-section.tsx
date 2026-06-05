import { getTranslations } from 'next-intl/server';

export async function OverviewOverviewSection() {
    const t = await getTranslations('OverviewOverview');

    return (
        <section className="pb-16 pt-14 lg:pb-[120px] lg:pt-[150px]" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-11">
                <h2 className="text-black [font-size:clamp(28px,calc(16.94px+2.99vw),60px)] font-bold tracking-[-1px] leading-[1.13]">{t('heading')}</h2>
                <p className="mt-5 text-[var(--color-text-subtle)] [font-size:clamp(16px,calc(13.23px+0.75vw),24px)] font-semibold tracking-[0.5px] leading-[1.48]">{t('subheading')}</p>
            </div>
        </section>
    );
}
