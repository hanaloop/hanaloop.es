import Link from 'next/link';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

export type PlatformHeroRelatedLink = {
    label: Record<AppLocale, string>;
    href: string;
    current?: boolean;
};

export type PlatformHeroCopy = {
    heading: string;
    description: string;
    navAriaLabel: string;
};

type PlatformHeroProps = {
    locale: AppLocale;
    ariaLabel: string;
    backgroundImageUrl: string;
    copy: Record<AppLocale, PlatformHeroCopy>;
    relatedLinks: PlatformHeroRelatedLink[];
};

export function PlatformHero({ locale, ariaLabel, backgroundImageUrl, copy, relatedLinks }: PlatformHeroProps) {
    const text = copy[locale];

    return (
        <>
            <section className="relative h-[330px] overflow-hidden text-white lg:h-[420px] xl:h-[480px]" aria-label={ariaLabel}>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${backgroundImageUrl}')` }} />
                <div className="absolute inset-0 bg-black/30" />

                <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-[42px] font-semibold leading-none tracking-[-0.02em] lg:text-[56px] 2xl:text-[64px]">{text.heading}</h1>
                    <p className="mt-4 text-[16px] font-medium leading-[1.45] text-white/95 lg:text-[18px]">{text.description}</p>

                    <nav className="gradient-border mt-12 hidden h-[52px] items-center rounded-full bg-white/12 px-8 backdrop-blur-[8px] lg:flex" aria-label={text.navAriaLabel}>
                        {relatedLinks.map((item, index) => (
                            <div key={item.href} className="flex items-center">
                                {item.current ? (
                                    <span className="inline-flex h-8 min-w-0 items-center justify-center rounded-full border border-white/35 px-5 text-[21px] font-semibold tracking-[-0.25px] text-white" aria-current="page">
                                        {item.label[locale]}
                                    </span>
                                ) : (
                                    <Link href={withLocalePath(locale, item.href)} className="inline-flex h-8 items-center text-[21px] tracking-[-0.25px] text-white/95 transition hover:text-white">
                                        {item.label[locale]}
                                    </Link>
                                )}
                                {index < relatedLinks.length - 1 ? <span className="mx-4 text-white/55">|</span> : null}
                            </div>
                        ))}
                    </nav>
                </div>
            </section>

            <nav className="flex flex-wrap justify-center gap-2 bg-[#07090c] px-5 py-4 lg:hidden" aria-label={text.navAriaLabel}>
                {relatedLinks.map((item) =>
                    item.current ? (
                        <span key={item.href} className="inline-flex h-8 items-center rounded-full border border-white/35 px-4 text-[15px] font-semibold tracking-[-0.25px] text-white" aria-current="page">
                            {item.label[locale]}
                        </span>
                    ) : (
                        <Link key={item.href} href={withLocalePath(locale, item.href)} className="inline-flex h-8 items-center rounded-full px-4 text-[15px] tracking-[-0.25px] text-white/65 transition hover:text-white">
                            {item.label[locale]}
                        </Link>
                    )
                )}
            </nav>
        </>
    );
}
