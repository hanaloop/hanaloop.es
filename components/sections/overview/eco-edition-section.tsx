import { getTranslations } from 'next-intl/server';

type EditionPlan = {
    title: string;
    items: string[];
};

function DesktopPlanRow({ plan }: { plan: EditionPlan }) {
    const columnCount = plan.items.length === 4 ? 2 : 3;
    const baseSize = Math.floor(plan.items.length / columnCount);
    const remainder = plan.items.length % columnCount;
    const columns: string[][] = [];
    let cursor = 0;

    for (let index = 0; index < columnCount; index += 1) {
        const currentColumnSize = baseSize + (index < remainder ? 1 : 0);
        columns.push(plan.items.slice(cursor, cursor + currentColumnSize));
        cursor += currentColumnSize;
    }

    return (
        <article className="grid min-h-[108px] grid-cols-[150px_1fr] items-center rounded-[12px] bg-[#EAF9F3] px-9 py-7 gap-x-2">
            <h3 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.3px] text-[var(--color-brand-green)]">{plan.title}</h3>
            <div className={`grid gap-x-9 text-[var(--color-text-subtle)] ${columnCount === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                {columns.map((columnItems, columnIndex) => (
                    <ul key={`${plan.title}-column-${columnIndex}`} className="space-y-3">
                        {columnItems.map((item) => (
                            <li key={`${plan.title}-${item}`} className="flex items-start gap-2 [font-size:clamp(16px,calc(15.31px+0.187vw),18px)] font-normal leading-[1.25] tracking-[-0.3px]">
                                <span aria-hidden="true" className="mt-[0.55em] h-[3px] w-[3px] shrink-0 rounded-full bg-[#4C4C4C]" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </article>
    );
}

function MobilePlanCard({ plan }: { plan: EditionPlan }) {
    return (
        <article className="rounded-[6px] bg-[#EAF9F3] px-[18px] pb-[19px] pt-[18px]">
            <h3 className="inline-flex min-h-[30px] items-center rounded-full border border-[var(--color-brand-green)] px-[18px] py-2 text-[20px] font-semibold leading-[1.2] tracking-[-0.3px] text-[var(--color-brand-green)]">
                {plan.title}
            </h3>
            <div className="mt-[18px] h-px w-full bg-black/20" />
            <ul className="mt-[18px] space-y-[13px] text-[#2F3C38]">
                {plan.items.map((item) => (
                    <li key={`${plan.title}-${item}`} className="flex items-start gap-[7px] [font-size:clamp(16px,calc(15.31px+0.187vw),18px)] font-normal leading-[1.25] tracking-[-0.3px]">
                        <span aria-hidden="true" className="mt-[0.55em] h-[3px] w-[3px] shrink-0 rounded-full bg-[#2F3C38]" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}

export async function OverviewEcoEditionSection() {
    const t = await getTranslations('OverviewEcoEdition');
    const saasPlans = t.raw('saasPlans') as EditionPlan[];
    const onPremPlans = t.raw('onPremPlans') as EditionPlan[];

    return (
        <section className="pb-16 pt-3 lg:pb-[120px]" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-11">
                <h2 className="hidden text-center [font-size:clamp(24px,calc(15.70px+2.243vw),48px)] font-semibold leading-[1.2] tracking-[-0.1px] text-black lg:block">{t('heading')}</h2>

                <div className="mx-auto mt-12 hidden w-full grid-cols-[280px_1fr] lg:gap-x-[64px] gap-y-10 lg:grid">
                    <h3 className="pt-2 [font-size:clamp(20px,calc(17.23px+0.748vw),28px)] font-semibold leading-[1.2] tracking-[-0.3px] text-black">{t('saasEdition')}</h3>
                    <div className="space-y-4">
                        {saasPlans.map((plan) => (
                            <DesktopPlanRow key={plan.title} plan={plan} />
                        ))}
                    </div>

                    <h3 className="pt-2 [font-size:clamp(20px,calc(17.23px+0.748vw),28px)] font-semibold leading-[1.2] tracking-[-0.3px] text-black">{t('onPremEdition')}</h3>
                    <div className="space-y-4">
                        {onPremPlans.map((plan) => (
                            <DesktopPlanRow key={plan.title} plan={plan} />
                        ))}
                    </div>
                </div>

                <div className="mx-auto w-full space-y-3 lg:hidden">
                    <div className="flex justify-center pb-[13px]">
                        <h3 className="inline-flex min-h-[30px] min-w-[292px] items-center justify-center rounded-full bg-[var(--color-brand-green)] px-7 py-2 [font-size:clamp(20px,calc(17.23px+0.748vw),28px)] font-semibold leading-[1.2] tracking-[-0.3px] text-white">
                            {t('saasEdition')}
                        </h3>
                    </div>

                    {saasPlans.map((plan) => (
                        <MobilePlanCard key={plan.title} plan={plan} />
                    ))}

                    <div className="flex justify-center py-[13px]">
                        <h3 className="inline-flex min-h-[30px] min-w-[292px] items-center justify-center rounded-full bg-[var(--color-brand-green)] px-7 py-2 [font-size:clamp(20px,calc(17.23px+0.748vw),28px)] font-semibold leading-[1.2] tracking-[-0.3px] text-white">
                            {t('onPremEdition')}
                        </h3>
                    </div>

                    {onPremPlans.map((plan) => (
                        <MobilePlanCard key={plan.title} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
}
