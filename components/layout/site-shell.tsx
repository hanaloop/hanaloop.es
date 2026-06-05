'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { getLocaleFromPathname } from '@/lib/locales';
import type { MobileContextualNav } from '@/lib/mobile-nav';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

type SiteShellProps = {
    children?: ReactNode;
    wrapperClassName?: string;
    mobileContextualNav?: MobileContextualNav;
    headerDark?: boolean;
};

export function SiteShell({ children, wrapperClassName, mobileContextualNav, headerDark }: SiteShellProps) {
    const pathname = usePathname();
    const locale = getLocaleFromPathname(pathname ?? '/');

    return (
        <div className={`min-h-screen ${wrapperClassName ?? ''}`}>
            <SiteHeader locale={locale} pathname={pathname ?? '/'} mobileContextualNav={mobileContextualNav} initialDark={headerDark} />
            <main>{children}</main>
            <SiteFooter locale={locale} />
        </div>
    );
}
