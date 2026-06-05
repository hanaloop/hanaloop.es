import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const processItems = [
    { label: 'Extraction', icon: '/site/pcf/process-icon-1.png' },
    { label: 'Production', icon: '/site/pcf/process-icon-2.png' },
    { label: 'Transportation', icon: '/site/pcf/process-icon-3.png' },
    { label: 'Use', icon: '/site/pcf/process-icon-4.png' },
    { label: 'Disposal', icon: '/site/pcf/process-icon-5.png' },
];

export async function PcfOverviewSection() {
    const t = await getTranslations('PcfOverview');

    return (
        <section className="pb-16 pt-14 lg:pb-[120px] lg:pt-[150px]" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-11">
                <h2 className="text-black font-bold [font-size:clamp(28px,calc(16.94px+2.99vw),60px)] tracking-[-1px]">{t('heading')}</h2>
                <p className="mt-5 text-[var(--color-text-subtle)] font-semibold [font-size:clamp(16px,calc(13.23px+0.75vw),24px)] tracking-[0.5px]">{t('subheading')}</p>

                <h3 className="mt-20 lg:mt-30 [font-size:clamp(24px,calc(15.70px+2.24vw),48px)] font-bold tracking-[-0.25px] text-black">{t('title')}</h3>

                <div className="relative mt-[26px] hidden w-full overflow-hidden rounded-t-[14px] xl:block">
                    <Image src="/site/pcf/overview-bg.png" alt={t('imageAlt')} width={1440} height={240} className="h-[240px] w-full object-cover" sizes="(min-width: 1440px) 1440px, 100vw" />

                    <div className="absolute inset-0 flex items-center justify-center px-[20px] py-5">
                        <div className="flex w-full items-center justify-center gap-[14px]">
                            {processItems.map((item, index) => (
                                <div key={item.label} className="flex items-center gap-[14px]">
                                    <div
                                        className="flex h-[104px] w-[232px] items-center rounded-[12px] px-5"
                                        style={{
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid #FFFFFF',
                                            background: 'rgba(255, 255, 255, 0.4)',
                                        }}
                                    >
                                        <Image src={item.icon} alt="" width={32} height={32} className="h-8 w-8 shrink-0" />
                                        <span className="flex-1 text-center text-[18px] font-semibold tracking-[-0.25px] text-white">{item.label}</span>
                                    </div>
                                    {index < processItems.length - 1 && <Image src="/site/pcf/process-right.png" alt="" width={6} height={19} className="h-[19px] w-[6px] shrink-0" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative mt-[26px] w-full overflow-hidden rounded-[14px] xl:hidden">
                    <Image src="/site/pcf/overview-bg.png" alt={t('imageAlt')} fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10 flex flex-col justify-center px-3 py-5 sm:px-4 sm:py-6 md:px-8 md:py-8">
                        {processItems.map((item, index) => (
                            <div key={`mobile-${item.label}`} className="flex flex-col items-center">
                                <div
                                    className="flex h-[88px] w-[min(92%,420px)] items-center rounded-[12px] px-4"
                                    style={{
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid #FFFFFF',
                                        background: 'rgba(255, 255, 255, 0.4)',
                                    }}
                                >
                                    <Image src={item.icon} alt="" width={32} height={32} className="h-8 w-8 shrink-0" />
                                    <span className="flex-1 text-center text-[18px] font-semibold tracking-[-0.25px] text-white">{item.label}</span>
                                </div>
                                {index < processItems.length - 1 && <Image src="/site/pcf/process-right.png" alt="" width={6} height={19} className="my-2 h-[19px] w-[6px] rotate-90 shrink-0" />}
                            </div>
                        ))}
                    </div>
                </div>

                <p className="mt-[34px] whitespace-pre-line lg:font-semibold [font-size:clamp(16px,calc(14.27px+0.47vw),21px)] tracking-[-0.25px] text-[var(--color-text-subtle)]">{t('lead')}</p>
                <p className="mt-[22px] whitespace-pre-line [font-size:clamp(16px,calc(14.27px+0.47vw),21px)] tracking-[-0.25px] text-[var(--color-text-subtle)]">{t('body')}</p>
            </div>
        </section>
    );
}
