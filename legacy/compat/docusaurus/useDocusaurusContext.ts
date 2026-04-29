'use client';

import { usePathname } from 'next/navigation';
import { defaultLocale, getLocaleFromPathname, locales } from '@/lib/locales';
import { siteConfig } from '@/lib/site-config';

export default function useDocusaurusContext() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  return {
    siteConfig,
    i18n: {
      currentLocale,
      defaultLocale,
      locales: [...locales],
    },
  };
}
