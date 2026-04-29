import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

const contactLabel: Record<AppLocale, string> = {
  ko: 'Contact Us',
  en: 'Contact Us',
  es: 'Contacto',
};

type ContactCtaButtonProps = {
  locale: AppLocale;
  className?: string;
  iconSrc?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconClassName?: string;
  style?: CSSProperties;
};

export function ContactCtaButton({
  locale,
  className = '',
  iconSrc = '/icons/revamp/ic-arrow-up-right.png',
  iconWidth = 16,
  iconHeight = 16,
  iconClassName = 'h-4 w-4',
  style,
}: ContactCtaButtonProps) {
  return (
    <Link
      href={withLocalePath(locale, '/demo_request')}
      className={`inline-flex h-12 items-center gap-2 rounded-[50px] px-6 text-sm font-medium text-white transition hover:opacity-90 ${className}`}
      style={{ background: 'linear-gradient(to right, #1FBD7D, #0194FF)', ...style }}
    >
      {contactLabel[locale]}
      <img src={iconSrc} alt="" aria-hidden="true" style={{ width: iconWidth, height: iconHeight }} className={iconClassName} />
    </Link>
  );
}
