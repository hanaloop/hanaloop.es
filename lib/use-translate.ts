'use client';

import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from './locales';
import { getMessage } from './translations';

export function useTranslate() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (key: string, fallback = key) => getMessage(locale, key, fallback);
}
