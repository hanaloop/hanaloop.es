import { getTranslations } from 'next-intl/server';

export async function CompanyMissionSection() {
    const t = await getTranslations('CompanyMission');
    const paragraphs = t.raw('paragraphs') as string[];

    return (
        <section className="py-[72px] md:py-[84px] xl:py-[92px]" aria-label="Our Mission">
            <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-[108px]">
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-[108px]">
                    <h2 className="text-gradient-brand text-[clamp(24px,calc(21.925px+0.5607vw),30px)] font-semibold leading-[1.2] tracking-[-0.02em]">
                        {t('title')}
                    </h2>
                    <p className="text-[clamp(14px,calc(12.617px+0.3738vw),18px)] font-normal leading-[1.7] tracking-[-0.02em] text-[var(--color-text-body)]">
                        {paragraphs.join(' ')}
                    </p>
                </div>
            </div>
        </section>
    );
}
