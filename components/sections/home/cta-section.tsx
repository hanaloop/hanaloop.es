import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

function CtaButton({ href, label, locale, style, className }: { href: string; label: string; locale: AppLocale; style?: CSSProperties; className?: string }) {
    return (
        <Link
            href={withLocalePath(locale, href)}
            style={style}
            className={`bg-gradient-brand inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-full [font-size:clamp(12px,calc(10.62px+0.37vw),16px)] font-medium leading-none text-white transition hover:opacity-90 lg:min-w-[170px] lg:w-auto lg:gap-4 lg:px-8${className ? ` ${className}` : ''}`}
        >
            <span>{label}</span>
            <Image src="/site/icons/ic-arrow-up-right.png" alt="" aria-hidden="true" width={20} height={20} className="h-[20px] w-[20px]" />
        </Link>
    );
}

export async function CtaSection({ isHome = false }: { isHome?: boolean }) {
    const t = await getTranslations('HomeCta');
    const locale = (await getLocale()) as AppLocale;

    const mobileHeadingLines = t.raw('mobileHeadingLines') as string[];

    return (
        <section className="px-5 pb-[80px] pt-[72px] md:px-8 md:pb-[100px] md:pt-[90px] lg:px-[64px] lg:pb-[140px] lg:pt-[120px]">
            <div className="mx-auto w-full max-w-[1440px] text-center">
                <p className="text-[16px] leading-[1.3] tracking-[-0.01em] text-[var(--color-text-default)] lg:hidden">{t('eyebrow')}</p>
                <h2
                    className="mx-auto mt-5 [font-size:clamp(28px,calc(12.79px+4.11vw),72px)] font-medium tracking-[-0.03em] text-[var(--color-text-default)] lg:mt-0 lg:tracking-[-0.02em]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, letterSpacing: '-0.25px' }}
                >
                    {mobileHeadingLines.map((line) => (
                        <span key={line} className="block lg:hidden">
                            {line}
                        </span>
                    ))}
                    <span className="hidden lg:inline lg:text-[42px]">{t('heading')}</span>
                </h2>

                <div className="mt-12 flex w-full items-center gap-2 md:gap-4 lg:mt-16 justify-center lg:gap-6">
                    {isHome ? (
                        <>
                            <CtaButton className="max-w-[230px]" href="/demo_request" label={t('demoLabel')} locale={locale} />
                            <CtaButton className="max-w-[280px]" href="https://docs.google.com/presentation/d/1fNDHGk5kAEI_JigpLZ5yKbHd9uBvoRg4d-S7Nb5YyYo/present?slide=id.p" label={t('solutionLabel')} locale={locale} />
                        </>
                    ) : (
                        <CtaButton className="max-w-[280px]" href="/partnership" label={t('contactLabel')} locale={locale} style={{ width: 'clamp(176px, calc(140.04px + 9.72vw), 280px)' }} />
                    )}
                </div>
            </div>
        </section>
    );
}
