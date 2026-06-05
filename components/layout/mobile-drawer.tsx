'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { ContactCtaButton } from '@/components/ui/contact-cta-button';
import type { MenuGroup } from './nav-config';

const ICON = {
    logoDrawer: '/site/icons/logo-half-ci.png',
    close: '/site/icons/ic-close-white.png',
    linkedin: '/site/icons/ic-linkedin-white.png',
    x: '/site/icons/ic-x-white.png',
    external: '/site/icons/ic-link.png',
    chevronDown: '/site/icons/ic-chevron-down.png',
} as const;

type MobileDrawerProps = {
    locale: AppLocale;
    groups: MenuGroup[];
    toggleId?: string;
};

export function MobileDrawer({ locale, groups, toggleId = 'mobile-menu-toggle' }: MobileDrawerProps) {
    const t = useTranslations('MobileDrawer');
    const currentYear = new Date().getFullYear();
    const [openGroup, setOpenGroup] = useState<number | null>(0);

    const closeDrawer = () => {
        const toggle = document.getElementById(toggleId) as HTMLInputElement | null;
        if (toggle) toggle.checked = false;
    };

    return (
        <div className="mobile-menu-layer fixed inset-0 z-[60] lg:hidden">
            <label htmlFor={toggleId} className="mobile-menu-overlay absolute inset-0 cursor-pointer bg-black/24" aria-label={t('closeOverlay')} />

            <aside id="mobile-menu-drawer" className="mobile-menu-panel absolute inset-y-0 right-0 flex h-full w-full flex-col overflow-y-auto bg-[var(--color-mobile-dark-bg)] text-white">
                <div className="flex h-full flex-col px-[37px] pb-[52px] pt-[28px]">
                    <div className="flex items-center justify-between">
                        <Link href={withLocalePath(locale, '/')} onClick={closeDrawer} className="inline-flex items-center">
                            <Image src={ICON.logoDrawer} alt="HanaLoop" width={130} height={19} className="h-[19px] w-auto" />
                        </Link>

                        <label htmlFor={toggleId} className="inline-flex h-6 w-6 cursor-pointer items-center justify-center" aria-label={t('closeMenu')}>
                            <Image src={ICON.close} alt="" width={24} height={24} aria-hidden="true" className="h-6 w-6" />
                        </label>
                    </div>

                    <nav style={{ marginTop: '108px' }}>
                        <ul className="flex flex-col">
                            {groups.map((group, index) => (
                                <li key={group.label} className="border-b border-white/14" style={{ paddingTop: index === 0 ? '0px' : '34px', paddingBottom: openGroup === index ? '26px' : '34px' }}>
                                    <button type="button" onClick={() => setOpenGroup((prev) => (prev === index ? null : index))} className="flex w-full items-center justify-between text-white" aria-expanded={openGroup === index}>
                                        <span style={{ fontSize: '24px', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.54px' }}>{group.label}</span>
                                        <Image src={ICON.chevronDown} alt="" width={24} height={24} aria-hidden="true" className={`h-6 w-6 transition-transform duration-200 ${openGroup === index ? 'rotate-180' : ''}`} />
                                    </button>
                                    <ul className={`overflow-hidden transition-all duration-200 ${openGroup === index ? 'mt-6 max-h-[520px]' : 'max-h-0'}`}>
                                        {group.items.map((item) => (
                                            <li key={item.label} className="pt-4 first:pt-0">
                                                <Link href={withLocalePath(locale, item.href)} onClick={closeDrawer} className="text-white/85" style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.2px' }}>
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                            <li style={{ paddingBottom: '34px', paddingTop: '34px' }}>
                                <a href="https://www.hana.eco" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-white" style={{ fontSize: '24px', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.54px' }}>
                                    <span>{t('hanaEco')}</span>
                                    <Image src={ICON.external} alt="" width={24} height={24} aria-hidden="true" className="h-6 w-6 brightness-0 invert" />
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="mt-auto" style={{ paddingTop: '40px' }}>
                        <ContactCtaButton
                            locale={locale}
                            className="justify-center gap-3 px-0 text-[16px] font-medium leading-none"
                            style={{ height: '56px', width: '240px' }}
                            iconSrc="/site/icons/ic-arrow-up-right.png"
                            iconWidth={24}
                            iconHeight={24}
                            iconClassName="h-6 w-6"
                        />

                        <div className="flex items-center" style={{ gap: '18px', marginTop: '48px' }}>
                            <a href="https://www.linkedin.com/company/hanaloop" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <Image src={ICON.linkedin} alt="" width={24} height={22} aria-hidden="true" className="h-[22px] w-6" />
                            </a>
                        </div>

                        <p className="text-[14px] leading-none tracking-[-0.28px] text-white/45" style={{ marginTop: '18px' }}>
                            (c) {currentYear} {t('copyright')}
                        </p>
                    </div>
                </div>
            </aside>
        </div>
    );
}
