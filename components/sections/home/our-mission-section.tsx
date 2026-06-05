import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const BADGE = 'OUR MISSION';

export async function HomeOurMissionSection() {
    const t = await getTranslations('HomeOurMission');
    const body = t('body');

    return (
        <section className="px-5 pb-12 pt-10 md:px-8 md:pb-16 md:pt-16 lg:px-[64px] lg:pb-20 lg:pt-28">
            <div className="mx-auto w-full max-w-[1440px]">
                <div className="px-4 grid gap-6 lg:grid-cols-[1fr_1.35fr] lg:items-start lg:gap-10">
                    <p className="mx-auto hidden max-w-[680px] font-medium leading-[1.14] tracking-[-0.02em] text-black [font-size:clamp(22px,calc(13.01px+2.43vw),48px)] lg:mx-0 lg:block lg:text-left">{BADGE}</p>
                    <div className="space-y-5 lg:space-y-0">
                        <div className="inline-flex items-center rounded-full px-4 py-2 text-[14px] font-semibold leading-none text-white lg:hidden" style={{ background: 'linear-gradient(149deg, #59c98a 0%, #3cb2ea 100%)' }}>
                            {BADGE}
                        </div>
                        <h2 className="max-w-[660px] font-semibold leading-[1.35] tracking-[-0.02em] [font-size:clamp(16px,calc(7.01px+2.43vw),42px)] lg:hidden">{t('heading')}</h2>
                        <div className="hidden max-w-[720px] space-y-2 text-[18px] font-medium leading-[1.9] text-[var(--color-text-muted)] lg:block">
                            <h2 className="whitespace-nowrap font-bold">{t('heading')}</h2>
                            <p>{body}</p>
                        </div>
                    </div>
                </div>

                <div className="relative mt-5 overflow-hidden rounded-[14px] md:mt-8 md:rounded-[18px] lg:mt-12 lg:h-[446px] lg:rounded-[22px]">
                    <Image src="/site/home/mission-img.jpg" alt="Wind turbines by a road at sunset" width={2048} height={1152} className="h-auto w-full object-cover object-bottom lg:h-full" sizes="(max-width: 1024px) 100vw, 1440px" />
                    <p className="pointer-events-none absolute bottom-1 left-7 [font-size:clamp(48px,calc(35.55px+3.36vw),84px)] font-medium leading-none tracking-[-0.02em] text-white/45 md:left-10 lg:hidden">OUR MISSION</p>
                </div>

                <div className="mt-8 font-medium leading-[1.6] text-[var(--color-text-default)] [font-size:clamp(14px,calc(3.63px+2.80vw),44px)] px-4 md:px-11 lg:hidden">
                    <p>{body}</p>
                </div>
            </div>
        </section>
    );
}
