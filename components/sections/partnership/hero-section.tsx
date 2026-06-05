import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export async function PartnershipHeroSection() {
    const t = await getTranslations('PartnershipHero');

    return (
        <section aria-label="Partnership Hero" className="relative overflow-hidden text-white">
            <div className="relative min-h-[260px] lg:min-h-[564px]">
                <Image src="/site/partnership/hero.png" alt="" fill priority className="object-cover object-center" sizes="100vw" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,128,168,0.48)_0%,rgba(34,112,149,0.26)_42%,rgba(20,92,125,0.14)_100%)]" />

                <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-center px-6 pb-10 pt-[120px] text-center lg:min-h-[564px] lg:px-12 lg:pb-[88px] lg:pt-[160px]">
                    <h1 className="max-w-[1360px] [font-size:clamp(28px,calc(15.55px+3.36vw),64px)] font-semibold tracking-[-1px] text-white">{t('heading')}</h1>
                </div>
            </div>
        </section>
    );
}
