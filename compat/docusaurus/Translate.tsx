import type { ReactNode } from 'react';
import { defaultLocale, getLocaleFromPathname } from '@/lib/locales';
import { getMessage } from '@/lib/translations';

type TranslateProps = {
  id?: string;
  children?: ReactNode;
};

function getClientLocale() {
  if (typeof window === 'undefined') return defaultLocale;
  return getLocaleFromPathname(window.location.pathname);
}

export function translate({ message }: { message: string }) {
  return getMessage(getClientLocale(), message, message);
}

export default function Translate({ id, children }: TranslateProps) {
  if (id) return getMessage(getClientLocale(), id, id);
  return children;
}
