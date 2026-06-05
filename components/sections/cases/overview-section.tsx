import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';

export async function CasesOverviewSection() {
    const t = await getTranslations('CasesOverview');
    const locale = (await getLocale()) as AppLocale;

    return (
        <section className="pb-16 pt-14 lg:pb-[120px] lg:pt-[150px]" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-11 text-left md:text-center">
                <h2 className="text-black font-bold [font-size:clamp(28px,calc(16.94px+2.99vw),60px)] tracking-[-1px]">{t('heading')}</h2>
                <p className="mt-5 text-[var(--color-text-subtle)] font-semibold [font-size:clamp(16px,calc(13.23px+0.75vw),24px)] tracking-[0.5px]">{t('subheading')}</p>
            </div>
        </section>
    );
}
