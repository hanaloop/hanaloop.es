'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

export type PlatformHeroRelatedLink = {
    label: string;
    href: string;
    current?: boolean;
};

type PlatformHeroProps = {
    ariaLabel: string;
    backgroundImageUrl: string;
    mobileBackgroundImageUrl?: string;
    heading: string;
    description: string;
    navAriaLabel: string;
    relatedLinks: PlatformHeroRelatedLink[];
};

export function PlatformHero({ ariaLabel, backgroundImageUrl, mobileBackgroundImageUrl, heading, description, navAriaLabel, relatedLinks }: PlatformHeroProps) {
    const locale = useLocale() as AppLocale;
    const [mobileColumns, setMobileColumns] = useState<2 | 3>(2);

    useEffect(() => {
        const updateColumns = () => {
            setMobileColumns(window.innerWidth >= 520 ? 3 : 2);
        };
        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    return (
        <section className="relative h-[566px] overflow-hidden text-white lg:h-[420px] xl:h-[480px]" aria-label={ariaLabel}>
            {mobileBackgroundImageUrl ? (
                <>
                    <div className="absolute inset-0 bg-cover bg-center lg:hidden" style={{ backgroundImage: `url('${mobileBackgroundImageUrl}')` }} />
                    <div className="absolute inset-0 bg-cover bg-center hidden lg:block" style={{ backgroundImage: `url('${backgroundImageUrl}')` }} />
                </>
            ) : (
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${backgroundImageUrl}')` }} />
            )}
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center px-4 text-center">
                <h1 className="[font-size:clamp(28px,calc(15.55px+3.36vw),64px)] font-semibold leading-none tracking-[-0.02em]">{heading}</h1>
                <p className="[font-size:clamp(14px,calc(12.62px+0.37vw),18px)] mt-8 lg:mt-4 font-medium leading-[1.45] text-white/95 px-6 lg:px-11">{description}</p>

                <nav className="gradient-border mt-12 hidden min-h-[52px] py-1 items-center rounded-full bg-white/12 px-8 backdrop-blur-[8px] lg:flex" aria-label={navAriaLabel}>
                    {relatedLinks.map((item, index) => (
                        <div key={item.href} className="flex items-center">
                            {item.current ? (
                                <Link
                                    href={withLocalePath(locale, item.href)}
                                    className="inline-flex min-h-8 min-w-0 items-center justify-center rounded-full border border-white/35 px-5 [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] font-semibold tracking-[-0.25px] text-white"
                                    aria-current="page"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <Link href={withLocalePath(locale, item.href)} className="inline-flex h-8 items-center [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] tracking-[-0.25px] text-white/95 transition hover:text-white">
                                    {item.label}
                                </Link>
                            )}
                            {index < relatedLinks.length - 1 ? <span className="mx-4 text-white/55">|</span> : null}
                        </div>
                    ))}
                </nav>

                <nav className="mt-10 w-full max-w-[600px] rounded-[34px] border border-white/30 bg-white/10 px-6 py-7 backdrop-blur-[8px] lg:hidden" aria-label={navAriaLabel}>
                    <div className={`grid ${mobileColumns === 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-x-6 gap-y-6`}>
                        {relatedLinks.map((item, index) => (
                            <div key={item.href} className="relative flex min-h-10 items-center justify-center px-4">
                                {index % mobileColumns !== 0 ? <span aria-hidden="true" className="absolute -left-3 top-1/2 h-7 -translate-y-1/2 border-l border-white/55" /> : null}
                                {item.current ? (
                                    <Link
                                        href={withLocalePath(locale, item.href)}
                                        className="inline-flex py-2 px-4 items-center justify-center rounded-full border border-white/40 px-5 text-center text-[16px] font-semibold leading-none tracking-[-0.25px] text-white"
                                        aria-current="page"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <Link
                                        href={withLocalePath(locale, item.href)}
                                        className="inline-flex h-10 items-center justify-center text-center text-[16px] font-semibold leading-none tracking-[-0.25px] text-white/95 transition hover:text-white"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </nav>
            </div>
        </section>
    );
}
