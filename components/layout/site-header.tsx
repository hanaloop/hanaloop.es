'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { AppLocale } from '@/lib/locales';
import { isLocale, stripBasePath, withLocalePath } from '@/lib/locales';
import type { MobileContextualNav } from '@/lib/mobile-nav';
import { LocaleSwitcher } from '@/components/features/locale-switcher';
import { buildMenus, type MenuItem, type MenuGroup } from './nav-config';
import { MobileDrawer } from './mobile-drawer';

const ICON = {
    logoLight: '/site/icons/logo-white-ci.png',
    logoDark: '/site/icons/logo-color-ci.png',
    chevronDown: '/site/icons/ic-chevron-down.png',
    link: '/site/icons/ic-arrow.png',
    menuLight: '/site/icons/ic-menu-white.png',
    menuDark: '/site/icons/ic-menu-dark.png',
} as const;

function NavDropdownItem({ item, locale, onClose }: { item: MenuItem; locale: AppLocale; onClose?: () => void }) {
    if (item.external) {
        return (
            <a href={item.href} target="_blank" rel="noreferrer" onClick={onClose} className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white">
                {item.label}
                <Image src={ICON.link} alt="" width={13} height={13} aria-hidden="true" className="h-3 w-3 shrink-0" />
            </a>
        );
    }

    return (
        <Link href={withLocalePath(locale, item.href)} onClick={onClose} className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white">
            {item.label}
        </Link>
    );
}

type SiteHeaderProps = {
    locale: AppLocale;
    pathname: string;
    mobileContextualNav?: MobileContextualNav;
    initialDark?: boolean;
};

export function SiteHeader({ locale, pathname, mobileContextualNav: _mobileContextualNav, initialDark }: SiteHeaderProps) {
    const t = useTranslations('SiteHeader');
    const tNav = useTranslations('Nav');
    const menus = useMemo(() => buildMenus(locale, tNav), [locale, tNav]);
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [localeMenuOpen, setLocaleMenuOpen] = useState(false);
    const menuHovered = openMenu !== null;
    const normalizedPath = useMemo(() => stripBasePath(pathname ?? '/'), [pathname]);
    const pathSegments = useMemo(() => normalizedPath.split('/').filter(Boolean), [normalizedPath]);
    const isHome = pathSegments.length === 0 || (pathSegments.length === 1 && isLocale(pathSegments[0]));
    const desktopSolid = initialDark || scrolled || menuHovered || localeMenuOpen;
    const mobileSolid = initialDark || scrolled;
    const overlayBg = desktopSolid ? '#1c1c1e' : 'transparent';
    const mobileHeaderClassName = mobileSolid ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]' : 'bg-transparent';

    useEffect(() => {
        const handle = () => setScrolled(window.scrollY > 24);
        handle();
        window.addEventListener('scroll', handle, { passive: true });
        return () => window.removeEventListener('scroll', handle);
    }, []);

    return (
        <>
            <input id="mobile-menu-toggle" type="checkbox" className="mobile-menu-toggle sr-only lg:hidden" />

            <header className={`fixed inset-x-0 top-0 z-50 h-[56px] overflow-hidden transition-all duration-300 lg:hidden ${mobileHeaderClassName}`}>
                <div className="mx-auto flex h-[56px] w-full items-center justify-between px-6">
                    <Link href={withLocalePath(locale, '/')} className="relative z-10 inline-flex h-[56px] items-center">
                        <img src={mobileSolid ? ICON.logoDark : ICON.logoLight} alt="HanaLoop" width={130} height={19} />
                    </Link>

                    <label htmlFor="mobile-menu-toggle" className="relative z-10 inline-flex h-[56px] cursor-pointer items-center justify-center" aria-label={t('openMenu')}>
                        <span className="inline-flex h-10 w-10 items-center justify-center">
                            <Image src={mobileSolid ? ICON.menuDark : ICON.menuLight} alt="" width={40} height={40} aria-hidden="true" className="h-10 w-10" />
                        </span>
                    </label>
                </div>
            </header>

            <MobileDrawer locale={locale} groups={menus} />

            <header
                className="gradient-border pc-header fixed left-1/2 z-50 hidden h-[50px] -translate-x-1/2 items-center justify-between rounded-full px-14 shadow-[0_16px_48px_rgba(0,0,0,0.35)] transition-colors duration-500 lg:flex"
                style={{
                    top: '33px',
                    width: 'min(1440px, calc(100vw - 48px))',
                    backgroundColor: overlayBg,
                    backdropFilter: 'blur(13px)',
                    WebkitBackdropFilter: 'blur(13px)',
                }}
            >
                <div className="flex items-center gap-5">
                    <Link href={withLocalePath(locale, '/')} className="relative z-10 flex items-center">
                        <img src={ICON.logoLight} alt="HanaLoop" width={168} height={20} className="h-auto w-[168px] brightness-0 invert" />
                    </Link>
                </div>

                <div className="relative z-10 hidden items-center gap-3 text-white lg:flex">
                    <nav className="hidden items-center gap-1 lg:flex" aria-label={t('primaryNavigation')}>
                        {menus.map((menu: MenuGroup) => (
                            <div
                                key={menu.label}
                                className="relative"
                                onMouseEnter={() => setOpenMenu(menu.label)}
                                onMouseLeave={() => setOpenMenu(null)}
                            >
                                <button type="button" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-[14px] font-medium leading-none text-white transition">
                                    <span>{menu.label}</span>
                                    <Image src={ICON.chevronDown} alt="" width={16} height={16} aria-hidden="true" className="h-4 w-4" />
                                </button>
                                <div
                                    className={`gradient-border absolute left-0 top-full z-50 mt-2 min-w-52 rounded-xl p-1.5 shadow-2xl transition-all duration-500 ${openMenu === menu.label ? 'visible opacity-100' : 'invisible opacity-0'}`}
                                    style={{ backgroundColor: overlayBg, backdropFilter: 'blur(13px)', WebkitBackdropFilter: 'blur(13px)' }}
                                >
                                    {menu.items.map((item: MenuItem) => (
                                        <NavDropdownItem key={item.label} item={item} locale={locale} onClose={() => setOpenMenu(null)} />
                                    ))}
                                </div>
                            </div>
                        ))}
                        <a href="https://www.hana.eco" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-[14px] font-medium leading-none text-white transition">
                            <span>{t('hanaEco')}</span>
                            <Image src={ICON.link} alt="" width={8} height={8} aria-hidden="true" className="h-2 w-2" />
                        </a>
                    </nav>
                    <LocaleSwitcher locale={locale} pathname={pathname} dropdownBackgroundColor={overlayBg} onOpenChange={setLocaleMenuOpen} />
                </div>
            </header>
        </>
    );
}
