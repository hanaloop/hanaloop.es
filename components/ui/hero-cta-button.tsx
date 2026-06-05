import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

type HeroCtaButtonProps = {
    locale: AppLocale;
    href: string;
    label: string;
    variant: 'outline' | 'gradient';
    className?: string;
    style?: CSSProperties;
    iconClassName?: string;
};

const outlineStyle: CSSProperties = {
    backgroundColor: 'transparent',
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none',
    filter: 'none',
};

export function HeroCtaButton({ locale, href, label, variant, className = '', style, iconClassName }: HeroCtaButtonProps) {
    const isOutline = variant === 'outline';
    const baseClassName = isOutline
        ? 'gradient-border relative inline-flex items-center justify-between rounded-full bg-transparent font-medium leading-none text-white transition'
        : 'bg-gradient-brand inline-flex items-center justify-center rounded-full font-medium leading-none text-white transition hover:opacity-90';

    return (
        <Link
            href={withLocalePath(locale, href)}
            className={`${baseClassName} ${className}`.trim()}
            style={isOutline ? { ...outlineStyle, ...style } : style}
        >
            <span className="whitespace-nowrap">{label}</span>
            <Image
                src="/site/icons/ic-arrow-up-right.png"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
                className={iconClassName ?? (isOutline ? 'h-4 w-4 shrink-0 lg:h-5 lg:w-5' : 'h-5 w-5')}
            />
        </Link>
    );
}
