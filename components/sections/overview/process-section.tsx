import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

type ProcessStep = {
    heading: string;
    items: string[];
};

export async function OverviewProcessSection() {
    const t = await getTranslations('OverviewProcess');
    const steps = t.raw('steps') as ProcessStep[];

    return (
        <section className="relative w-full overflow-hidden" aria-label={t('sectionAriaLabel')}>
            <div className="relative w-full lg:hidden">
                <Image src="/site/overview/process-bg.png" alt="" aria-hidden="true" fill className="object-cover" sizes="100vw" priority />
                <div className="relative px-5 py-10 sm:px-8 md:py-14">
                    <h2 className="text-center text-white font-medium tracking-[-1px] [font-size:clamp(28px,calc(21.08px+1.87vw),48px)]">{t('title')}</h2>

                    <div className="mx-auto mt-8 w-full rounded-[12px] bg-black/38 px-4 py-5 sm:px-6 md:mt-10 md:px-8 md:py-7">
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                            {steps.map((step) => (
                                <div key={`${step.heading}-mobile`}>
                                    <p className="text-white font-medium tracking-[-0.25px] [font-size:clamp(16px,calc(13.23px+0.75vw),24px)]">{step.heading}</p>
                                    <div className="flex w-full items-end">
                                        <span className="block h-px flex-1 bg-white/80" />
                                        <span
                                            className="relative block h-[17px] w-[17px] shrink-0 border-b border-white/80"
                                            style={{ background: 'linear-gradient(45deg, transparent calc(50% - 0.5px), rgba(255,255,255,0.8) calc(50% - 0.5px), rgba(255,255,255,0.8) calc(50% + 0.5px), transparent calc(50% + 0.5px))' }}
                                        />
                                    </div>
                                    <ul className="mt-6 list-none space-y-1.5 text-white md:space-y-2">
                                        {step.items.map((item) => (
                                            <li key={`${step.heading}-${item}`} className="font-medium tracking-[-0.25px] [font-size:clamp(14px,calc(12.62px+0.37vw),18px)]">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative hidden w-full lg:block lg:max-h-[673px]">
                <Image src="/site/overview/process-bg.png" alt="" aria-hidden="true" fill className="object-cover" sizes="100vw" priority />
                <div className="relative px-5 py-10 sm:px-8 md:py-14 lg:px-[8.4375vw] lg:py-[5vw]">
                    <h2 className="text-center text-white font-medium tracking-[-1px] [font-size:clamp(28px,calc(21.08px+1.87vw),48px)]">{t('title')}</h2>

                    <div className="mx-auto mt-8 w-full rounded-[12px] bg-black/38 px-4 py-8 sm:px-8 lg:mt-[2vw] lg:px-[2.7083vw] lg:py-20">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-9">
                            {steps.map((step) => (
                                <div key={step.heading}>
                                    <p className="pe-6 text-white font-medium tracking-[-0.25px] [font-size:clamp(16px,calc(13.23px+0.75vw),24px)]">{step.heading}</p>
                                    <div className="hidden w-full lg:flex lg:items-end mt-[-12px]">
                                        <span className="block h-px flex-1 bg-white/80" />
                                        <span
                                            className="relative block h-[22px] w-[22px] shrink-0 border-b border-white/80"
                                            style={{ background: 'linear-gradient(45deg, transparent calc(50% - 0.5px), rgba(255,255,255,0.8) calc(50% - 0.5px), rgba(255,255,255,0.8) calc(50% + 0.5px), transparent calc(50% + 0.5px))' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-[0.9375vw] lg:grid-cols-4 lg:gap-9">
                            {steps.map((step) => (
                                <ul key={`${step.heading}-items`} className="list-none space-y-2 text-white">
                                    {step.items.map((item) => (
                                        <li key={item} className="font-medium tracking-[-0.25px] [font-size:clamp(14px,calc(12.62px+0.37vw),18px)]">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
