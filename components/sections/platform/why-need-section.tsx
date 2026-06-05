import { getTranslations } from 'next-intl/server';

type OverviewCard = {
    number: string;
    title: string;
    body: string;
};

export async function PlatformWhyNeedSection() {
    const t = await getTranslations('PlatformWhyNeed');
    const cards = t.raw('cards') as OverviewCard[];

    return (
        <section className="pt-10 md:pt-20 lg:pt-30" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-11">
                <h2 className="text-black font-bold [font-size:clamp(28px,calc(16.94px+2.99vw),60px)] tracking-[-1px]">{t('heading')}</h2>
                <p className="mt-5 font-semibold text-[var(--color-text-subtle)] [font-size:clamp(16px,calc(13.23px+0.75vw),24px)] tracking-[-0.5px]">{t('subheading')}</p>

                <div className="pb-12 pt-8 text-center md:pb-16 md:pt-24 lg:pb-[62px] lg:pt-[20px]">
                    <h3 className="text-black font-bold [font-size:clamp(24px,calc(15.70px+2.24vw),48px)] tracking-[-1px]">{t('whyTitle')}</h3>
                    <p className="mt-4 font-semibold text-[var(--color-text-subtle)] [font-size:clamp(14px,calc(11.60px+0.65vw),21px)] tracking-[-0.5px]">{t('whySubheading')}</p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div role="img" aria-label={t('imageAlt')} className="relative lg:h-[695px] bg-[url('/site/platform/overview-bg.png')] bg-center bg-cover">
                    <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-center px-5 py-20 md:px-8 lg:px-12">
                        <div className="flex items-center justify-center gap-5 flex-col md:flex-row">
                            {cards.map((card) => (
                                <article key={card.number} className="max-w-[464px] h-full rounded-[18px] border border-white/10 bg-[rgba(0,0,0,0.42)] px-7 py-7 backdrop-blur-[2px] lg:min-h-[306px] lg:px-8 lg:py-10">
                                    <p className="bg-[linear-gradient(90deg,#1FBD7D_0%,#0194FF_100%)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [font-size:clamp(14px,calc(11.58px+0.65vw),21px)] font-bold leading-none">
                                        {card.number}
                                    </p>
                                    <h4 className="mt-2 bg-[linear-gradient(90deg,#1FBD7D_0%,#0194FF_100%)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [font-size:clamp(18px,calc(15.93px+0.56vw),24px)] font-bold tracking-[-0.25px]">
                                        {card.title}
                                    </h4>
                                    <div className="mt-7 h-px w-full bg-white/60" />
                                    <p className="mt-7 text-white [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] lg:font-semibold tracking-[-0.25px]">{card.body}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
