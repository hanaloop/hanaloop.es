'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { locales, switchLocalePath, type AppLocale } from '@/lib/locales';

export const localeLabels: Record<AppLocale, string> = {
    ko: '한국어',
    en: 'English',
    es: 'Español',
};

export function LocaleSwitcher({ locale, pathname, dropdownBackgroundColor, onOpenChange }: { locale: AppLocale; pathname: string; dropdownBackgroundColor: string; onOpenChange?: (open: boolean) => void }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearCloseTimer = () => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
    };

    const scheduleClose = () => {
        clearCloseTimer();
        closeTimerRef.current = setTimeout(() => {
            setOpen(false);
            onOpenChange?.(false);
            closeTimerRef.current = null;
        }, 120);
    };

    useEffect(() => {
        function onPointerDown(e: MouseEvent) {
            clearCloseTimer();
            if (!ref.current?.contains(e.target as Node)) {
                setOpen(false);
                onOpenChange?.(false);
            }
        }

        function onEscape(e: KeyboardEvent) {
            clearCloseTimer();
            if (e.key === 'Escape') {
                setOpen(false);
                onOpenChange?.(false);
            }
        }

        document.addEventListener('mousedown', onPointerDown);
        document.addEventListener('keydown', onEscape);

        return () => {
            clearCloseTimer();
            document.removeEventListener('mousedown', onPointerDown);
            document.removeEventListener('keydown', onEscape);
        };
    }, []);

    return (
        <div
            ref={ref}
            className="relative"
            onMouseEnter={() => {
                clearCloseTimer();
                setOpen(true);
                onOpenChange?.(true);
            }}
            onMouseLeave={scheduleClose}
        >
            <button
                type="button"
                onClick={() =>
                    setOpen((v) => {
                        const next = !v;
                        onOpenChange?.(next);
                        return next;
                    })
                }
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent transition"
                aria-expanded={open}
                aria-haspopup="menu"
                aria-label="Open language menu"
            >
                <Image src="/site/icons/globe.svg" alt="" aria-hidden="true" width={20} height={20} className="h-5 w-5 brightness-0 invert" />
            </button>
            {open && (
                <div
                    onMouseEnter={clearCloseTimer}
                    onMouseLeave={scheduleClose}
                    className="absolute right-0 top-full z-50 mt-2 min-w-36 rounded-xl border border-white/20 py-1.5 shadow-2xl backdrop-blur-xl"
                    style={{ backgroundColor: dropdownBackgroundColor }}
                >
                    {locales.map((item) => {
                        const href = switchLocalePath(pathname, item);
                        const active = item === locale;

                        return (
                            <Link
                                key={item}
                                href={href}
                                hrefLang={item}
                                lang={item}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.cookie = `NEXT_LOCALE=${item}; path=/; max-age=31536000; samesite=lax`;
                                    setOpen(false);
                                    onOpenChange?.(false);
                                    window.location.assign(href);
                                }}
                                className={`block px-4 py-2 text-sm transition ${active ? 'font-medium text-white' : 'text-white/75 hover:bg-white/10 hover:text-white'}`}
                            >
                                {localeLabels[item]}
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
