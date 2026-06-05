import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

function GradientHeading({ children }: { children: string }) {
    return (
        <h3 className="inline-block bg-[linear-gradient(90deg,#1FBD7D_0%,#0194FF_100%)] bg-clip-text [-webkit-background-clip:text] text-transparent [-webkit-text-fill-color:transparent] font-bold [font-size:clamp(24px,calc(17.78px+1.68vw),42px)] tracking-[-0.5px]">
            {children}
        </h3>
    );
}

export async function PcfWhyNeededSection() {
    const t = await getTranslations('PcfWhyNeeded');

    return (
        <section className="pt-10 md:pt-20 lg:pt-30" aria-label={t('title')}>
            <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-11">
                <h2 className="text-black font-bold [font-size:clamp(24px,calc(15.70px+2.24vw),48px)] tracking-[-1px]">{t('title')}</h2>

                <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-[68px] lg:gap-12 min-[1440px]:grid-cols-[1fr_724px] min-[1440px]:gap-[56px]">
                    <div className="flex flex-col justify-center gap-12 lg:gap-[86px]">
                        <article>
                            <p className="text-[#1BAFA5] font-bold [font-size:clamp(24px,calc(15.70px+2.24vw),48px)] leading-none tracking-[-0.5px]">{t('itemOneNumber')}</p>
                            <div className="mt-2">
                                <GradientHeading>{t('itemOneTitle')}</GradientHeading>
                            </div>
                            <p className="mt-5 whitespace-pre-line text-[var(--color-text-subtle)] font-medium [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] tracking-[0.5px]">{t('itemOneBody')}</p>
                        </article>

                        <article>
                            <p className="text-[#1BAFA5] font-bold [font-size:clamp(24px,calc(15.70px+2.24vw),48px)] leading-none tracking-[-0.5px]">{t('itemTwoNumber')}</p>
                            <div className="mt-2">
                                <GradientHeading>{t('itemTwoTitle')}</GradientHeading>
                            </div>
                            <p className="mt-5 whitespace-pre-line text-[var(--color-text-subtle)] font-medium [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] tracking-[0.5px]">{t('itemTwoBody')}</p>
                        </article>
                    </div>

                    <div className="relative mx-auto w-full max-w-[724px] overflow-hidden rounded-[18px] min-[1440px]:h-[676px] min-[1440px]:w-[724px] min-[1440px]:max-w-none">
                        <Image
                            src="/site/pcf/why-right.png"
                            alt={t('imageAlt')}
                            width={724}
                            height={676}
                            className="h-auto w-full object-cover min-[1440px]:h-full"
                            sizes="(min-width: 1920px) 724px, (min-width: 1440px) 724px, (min-width: 768px) 80vw, calc(100vw - 40px)"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
