import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

type PlanCard = {
    title: string;
    body: string;
};

export async function OverviewCbamPlanSection() {
    const t = await getTranslations('OverviewCbamPlan');
    const cards = t.raw('cards') as PlanCard[];

    return (
        <section className="pb-16 pt-14 lg:pb-[120px] lg:pt-[150px]" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-11">
                <h2 className="text-center [font-size:clamp(24px,calc(15.70px+2.24vw),48px)] font-semibold leading-[1.2] tracking-[-0.1px] text-black my-8">{t('heading')}</h2>

                <div className="mx-auto mt-6 grid w-full grid-cols-1 gap-3 md:mt-12 md:grid-cols-3 md:gap-10 lg:mt-[56px] lg:gap-[78px]">
                    {cards.map((card) => (
                        <article key={card.title} className="rounded-[8px] bg-[linear-gradient(105deg,rgba(31,189,125,0.08)_0%,rgba(1,148,255,0.10)_100%)] px-5 py-5 md:rounded-none md:bg-none md:p-0">
                            <h3 className="inline-flex min-h-[30px] items-center rounded-full border border-[var(--color-brand-green)] px-5 py-2 [font-size:clamp(20px,calc(18.62px+0.37vw),24px)] font-bold leading-[1.2] tracking-[-0.3px] text-[var(--color-brand-green)] md:min-h-0 md:border-0 md:px-0 md:text-black">
                                {card.title}
                            </h3>
                            <div className="mt-4 h-px w-full bg-black/20 md:mt-4 md:bg-black/55" />
                            <p className="mt-4 whitespace-pre-line text-[12px] font-medium leading-[1.55] tracking-[-0.2px] text-[var(--color-text-subtle)] md:mt-5 md:text-[14px] md:leading-[1.5]">{card.body}</p>
                        </article>
                    ))}
                </div>

                <div className="relative mx-auto mt-[58px] h-[clamp(150px,calc(84.21px+17.76vw),340px)] w-full max-w-[1440px] overflow-hidden rounded-[8px] md:mt-[70px] md:rounded-[14px]">
                    <Image src="/site/overview/feature-bg.png" alt={t('imageAlt')} fill className="object-cover" sizes="(min-width: 1200px) 1440px, calc(100vw - 32px)" priority />
                    <div className="absolute inset-0 flex items-center justify-center bg-[#00000066] lg:hidden">
                        <p className="text-center text-[24px] font-semibold leading-[1.2] tracking-[-0.3px] text-white">{t('imageLabel')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
