'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { ContactCtaButton } from '@/components/ui/contact-cta-button';

const insightLinks = [
    { label: 'Youtube', href: 'https://www.youtube.com/@hanaloop' },
    { label: 'Brunch', href: 'https://brunch.co.kr/@hanaloop' },
    { label: 'Naver Blog', href: 'https://blog.naver.com/hanaloop' },
] as const;

const ICON = {
    link: '/site/icons/ic-link.png',
    linkedin: '/site/icons/ic-linkedin-white.png',
    x: '/site/icons/ic-x-white.png',
    logo: '/site/icons/logo-white-ci.png',
} as const;

const bodyText = 'text-[16px] leading-none font-normal text-white';

export function SiteFooter({ locale }: { locale: AppLocale }) {
    const t = useTranslations('SiteFooter');
    const copyright = t('copyright', { year: new Date().getFullYear() });

    return (
        <footer className="bg-[var(--color-mobile-dark-bg)] text-white lg:bg-[var(--color-footer-bg)]">
            <div className="mx-auto min-h-[760px] px-6 pb-10 pt-[44px] lg:hidden">
                <div className="flex h-full min-h-[676px] flex-col">
                    <div>
                        <div className="flex items-center justify-between gap-2 sm:gap-4">
                            <Link href={withLocalePath(locale, '/')} className="inline-flex items-center">
                                <img src={ICON.logo} alt="HanaLoop" width={136} height={24} className="h-auto w-[136px]" />
                            </Link>
                            <ContactCtaButton
                                locale={locale}
                                className="h-[48px] min-w-[148px] justify-center gap-2 px-4 [font-size:clamp(14px,calc(10.62px+0.37vw),16px)] leading-none font-medium sm:min-w-[172px] sm:gap-3 sm:px-5"
                                iconSrc="/site/icons/ic-arrow-up-right.png"
                                iconWidth={20}
                                iconHeight={20}
                                iconClassName="h-5 w-5"
                            />
                        </div>

                        <ul className="mt-[44px] space-y-[28px]">
                            <li>
                                <Link href={withLocalePath(locale, '/platform')} className={bodyText}>
                                    {t('mobilePrimary.platform')}
                                </Link>
                            </li>
                            <li>
                                <Link href={withLocalePath(locale, '/docs/intro')} className={bodyText}>
                                    {t('mobilePrimary.insight')}
                                </Link>
                            </li>
                            <li>
                                <Link href={withLocalePath(locale, '/company')} className={bodyText}>
                                    {t('mobilePrimary.about')}
                                </Link>
                            </li>
                            <li>
                                <a href="https://www.hana.eco" target="_blank" rel="noreferrer" className="inline-flex items-center gap-[10px] text-[16px] leading-none font-semibold text-white">
                                    <span>{t('hanaEco')}</span>
                                    <Image src={ICON.link} alt="" width={24} height={24} aria-hidden="true" className="h-6 w-6 brightness-0 invert" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-auto">
                        <div className="flex items-center gap-[18px]">
                            <a href="https://www.linkedin.com/company/hanaloop" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <Image src={ICON.linkedin} alt="" width={24} height={22} aria-hidden="true" className="h-[22px] w-6" />
                            </a>
                        </div>

                        <div className="mt-[34px] space-y-2">
                            <p className={bodyText}>
                                {t('email')} :{' '}
                                <a href="mailto:info@hanaloop.com" className="transition hover:text-white/80">
                                    info@hanaloop.com
                                </a>
                            </p>
                            <p className={bodyText}>
                                {t('phone')} :{' '}
                                <a href="tel:+82050713379251" className="transition hover:text-white/80">
                                    +82 0507-1337-9251
                                </a>
                            </p>
                        </div>

                        <p className="mt-[26px] text-[14px] leading-none font-normal text-white/45">{copyright}</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto hidden max-w-[1440px] lg:block lg:min-h-[520px] lg:px-[64px] lg:pb-[46px] lg:pt-[98px]">
                <div className="grid grid-cols-[260px_260px_1fr] items-start gap-x-[48px] desktop:grid-cols-[300px_320px_1fr] desktop:gap-x-[76px]">
                    <div>
                        <p className="mb-[30px] text-[30px] leading-none font-medium text-white">{t('insightTitle')}</p>
                        <ul className="space-y-[18px]">
                            <li>
                                <Link href={withLocalePath(locale, '/docs/intro')} className={`${bodyText} transition hover:text-white/80`}>
                                    {t('insight')}
                                </Link>
                            </li>
                            {insightLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-[10px] ${bodyText} transition hover:text-white/80`}>
                                        <span>{item.label}</span>
                                        <Image src={ICON.link} alt="" width={20} height={20} aria-hidden="true" className="h-5 w-5 brightness-0 invert" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-[30px] text-[30px] leading-none font-medium text-white">{t('contactTitle')}</p>
                        <ul className="space-y-[26px]">
                            <li className={bodyText}>
                                {t('email')}:{' '}
                                <a href="mailto:info@hanaloop.com" className="transition hover:text-white/80">
                                    info@hanaloop.com
                                </a>
                            </li>
                            <li className={bodyText}>
                                {t('phone')}:{' '}
                                <a href="tel:+82050713379251" className="transition hover:text-white/80">
                                    +82 0507-1337-9251
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-end gap-[40px]">
                        <Link href={withLocalePath(locale, '/')} className="inline-flex items-center">
                            <img src={ICON.logo} alt="HanaLoop" width={224} height={40} className="h-auto w-[224px]" />
                        </Link>
                        <ContactCtaButton
                            locale={locale}
                            iconSrc="/site/icons/ic-arrow-up-right.png"
                            iconWidth={20}
                            iconHeight={20}
                            iconClassName="h-[20px] w-[20px]"
                            className="h-[48px] gap-3 px-[39px] text-[16px] leading-none font-medium"
                        />
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-8 lg:mt-[148px] lg:grid lg:grid-cols-[1fr_auto] lg:items-end">
                    <p className={bodyText}>{t('address')}</p>
                    <div className="flex flex-col items-start gap-[18px] lg:items-end">
                        <Link href={withLocalePath(locale, '/privacy')} className={`${bodyText} transition hover:text-white/80`}>
                            {t('privacy')}
                        </Link>
                        <Link href={withLocalePath(locale, '/credits')} className={`${bodyText} transition hover:text-white/80`}>
                            {t('terms')}
                        </Link>
                        <p className={bodyText}>{copyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
