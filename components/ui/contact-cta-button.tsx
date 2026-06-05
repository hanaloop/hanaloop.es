'use client';

import Link from 'next/link';
import type { CSSProperties } from 'react';
import { useTranslations } from 'next-intl';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

type ContactCtaButtonProps = {
    locale: AppLocale;
    className?: string;
    iconSrc?: string;
    iconWidth?: number;
    iconHeight?: number;
    iconClassName?: string;
    style?: CSSProperties;
};

export function ContactCtaButton({ locale, className = '', iconSrc = '/site/icons/ic-arrow-up-right.png', iconWidth = 16, iconHeight = 16, iconClassName = 'h-4 w-4', style }: ContactCtaButtonProps) {
    const t = useTranslations('ContactCtaButton');

    return (
        <Link
            href={withLocalePath(locale, '/partnership')}
            className={`bg-gradient-brand inline-flex h-12 items-center gap-2 rounded-[50px] font-medium text-white transition hover:opacity-90 ${className}`}
            style={style}
        >
            {t('label')}
            <img src={iconSrc} alt="" aria-hidden="true" style={{ width: iconWidth, height: iconHeight }} className={iconClassName} />
        </Link>
    );
}
