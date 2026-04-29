import Image from 'next/image';
import Link from 'next/link';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

type HomeCtaSectionProps = {
    locale: AppLocale;
};

type CtaCopy = {
    eyebrow: string;
    heading: string;
    solutionLabel: string;
    contactLabel: string;
};

const copy: Record<AppLocale, CtaCopy> = {
    ko: {
        eyebrow: '체계적인 탄소 관리, 하나에코와 함께하세요.',
        heading: 'Start Systematic Carbon Management with Hana Eco.',
        solutionLabel: 'Solution Overview',
        contactLabel: 'Contact Us',
    },
    en: {
        eyebrow: 'Start systematic carbon management with Hana Eco.',
        heading: 'Start Systematic Carbon Management with Hana Eco.',
        solutionLabel: 'Solution Overview',
        contactLabel: 'Contact Us',
    },
    es: {
        eyebrow: 'Comienza la gestion sistematica de carbono con Hana Eco.',
        heading: 'Start Systematic Carbon Management with Hana Eco.',
        solutionLabel: 'Solution Overview',
        contactLabel: 'Contact Us',
    },
};

function CtaButton({ href, label, locale }: { href: string; label: string; locale: AppLocale }) {
    return (
        <Link
            href={withLocalePath(locale, href)}
            className="inline-flex h-[50px] w-full items-center justify-center gap-4 rounded-full px-6 text-[16px] font-medium leading-none text-white transition hover:opacity-90 lg:h-[50px] lg:w-auto lg:min-w-[170px] lg:px-8 lg:text-[16px]"
            style={{ background: 'linear-gradient(90deg, #1FBD7D 0%, #0194FF 100%)' }}
        >
            <span>{label}</span>
            <Image src="/icons/revamp/ic-arrow-up-right.png" alt="" aria-hidden="true" width={20} height={20} className="h-[20px] w-[20px]" />
        </Link>
    );
}

export function HomeCtaSection({ locale }: HomeCtaSectionProps) {
    const text = copy[locale];

    return (
        <section className="px-5 pb-[80px] pt-[72px] md:px-8 md:pb-[100px] md:pt-[90px] lg:px-[64px] lg:pb-[140px] lg:pt-[120px]">
            <div className="mx-auto w-full max-w-[1440px] text-center">
                <p className="text-[16px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#222222] lg:hidden">{text.eyebrow}</p>
                <h2
                    className="mx-auto mt-5 font-medium leading-[1.06] tracking-[-0.03em] text-[#202124] [font-size:clamp(28px,12vw,72px)] lg:mt-0 lg:tracking-[-0.02em]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, letterSpacing: '-0.25px' }}
                >
                    <span className="block lg:hidden">Start Systematic</span>
                    <span className="block lg:hidden">Carbon Management</span>
                    <span className="block lg:hidden">with Hana Eco.</span>
                    <span className="hidden lg:inline lg:text-[42px]">{text.heading}</span>
                </h2>

                <div className="mx-auto mt-12 flex w-full max-w-[720px] flex-col gap-4 sm:flex-row sm:justify-center lg:mt-16 lg:max-w-none lg:gap-6">
                    <CtaButton href="/solution" label={text.solutionLabel} locale={locale} />
                    <CtaButton href="/demo_request" label={text.contactLabel} locale={locale} />
                </div>
            </div>
        </section>
    );
}
