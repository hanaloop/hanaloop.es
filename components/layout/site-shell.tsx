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
};

export function SiteShell({ children, wrapperClassName, mobileContextualNav }: SiteShellProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (
    <div className={`min-h-screen bg-white text-[#131313] ${wrapperClassName ?? ''}`}>
      <SiteHeader locale={locale} pathname={pathname ?? '/'} mobileContextualNav={mobileContextualNav} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
