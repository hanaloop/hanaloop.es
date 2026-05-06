import Image from 'next/image';
import type { AppLocale } from '@/lib/locales';

type PartnershipHeroSectionProps = {
    locale: AppLocale;
};

const copy: Record<AppLocale, { heading: string }> = {
    ko: { heading: 'Reliable and Agile Sustainability Partner' },
    en: { heading: 'Reliable and Agile Sustainability Partner' },
    es: { heading: 'Socio de Sostenibilidad Confiable y Agil' },
};

export function PartnershipHeroSection({ locale }: PartnershipHeroSectionProps) {
    const text = copy[locale];

    return (
        <section aria-label="Partnership Hero" className="relative overflow-hidden text-white">
            <div className="relative min-h-[420px] lg:min-h-[564px]">
                <Image
                    src="/images/revamp/partnership/hero.png"
                    alt=""
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,128,168,0.48)_0%,rgba(34,112,149,0.26)_42%,rgba(20,92,125,0.14)_100%)]" />

                <div className="relative mx-auto flex min-h-[420px] w-full max-w-[1440px] items-center justify-center px-6 pb-10 pt-[130px] text-center lg:min-h-[564px] lg:px-12 lg:pb-[88px] lg:pt-[160px]">
                    <h1 className="max-w-[1360px] text-[40px] font-semibold leading-[1.12] tracking-[-1px] text-white sm:text-[48px] lg:text-[64px]">
                        {text.heading}
                    </h1>
                </div>
            </div>
        </section>
    );
}
