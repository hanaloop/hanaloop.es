import Link from 'next/link';
import Image from 'next/image';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

type BlogHeroSectionProps = {
    locale: AppLocale;
};

const copy: Record<AppLocale, { contactLabel: string }> = {
    ko: { contactLabel: 'Contact Us' },
    en: { contactLabel: 'Contact Us' },
    es: { contactLabel: 'Contáctenos' },
};

export function BlogHeroSection({ locale }: BlogHeroSectionProps) {
    const text = copy[locale];

    return (
        <section className="relative h-[160px] overflow-hidden md:h-[280px] lg:h-[360px] xl:h-[420px] 2xl:h-[480px]" aria-label="HanaLoop Blog Hero">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/revamp/blog-hero-bg.png')" }} />
            <div className="absolute inset-0 bg-black/35" />

            <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center px-4 text-white">
                <h1 className="text-center text-[28px] font-semibold leading-none md:text-[42px] xl:text-[56px] 2xl:text-[64px]">HanaLoop Blog</h1>
                <Link
                    href={withLocalePath(locale, '/demo_request')}
                    className="mt-6 h-8 lg:mt-12 inline-flex lg:h-12 min-w-[176px] items-center justify-center gap-3 rounded-full border border-white px-6 text-base font-medium leading-none text-white transition hover:bg-white/10"
                >
                    <span>{text.contactLabel}</span>
                    <Image src="/icons/revamp/ic-arrow-up-right.png" alt="" width={20} height={20} className="h-5 w-5" aria-hidden />
                </Link>
            </div>
        </section>
    );
}
