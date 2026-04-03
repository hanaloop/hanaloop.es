'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronLeft, ExternalLink, Globe2, Menu, MoonStar, SunMedium, X } from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { getLocaleFromPathname, locales, switchLocalePath, type AppLocale, withLocalePath } from '@/lib/locales';
import type { MobileContextualNav, MobileContextualNavItem } from '@/lib/mobile-nav';
import { getFooterMessage, getNavbarMessage } from '@/lib/translations';

type SiteShellProps = {
  children: ReactNode;
  wrapperClassName?: string;
  mobileContextualNav?: MobileContextualNav;
};

type MenuItem = {
  label: string;
  href: string;
  external?: boolean;
};

type MenuGroup = {
  label: string;
  items: MenuItem[];
};

type ThemeMode = 'light' | 'dark';

const localeLabels: Record<AppLocale, string> = {
  ko: '한국어',
  en: 'English',
  es: 'Español',
};

function buildMenus(locale: AppLocale): MenuGroup[] {
  return [
    {
      label: getNavbarMessage(locale, 'item.label.Solution', 'Solution'),
      items: [
        { label: getNavbarMessage(locale, 'item.label.CBAM', 'CBAM'), href: '/cbam' },
        { label: getNavbarMessage(locale, 'item.label.ProductCarbonFootprint', 'PCF'), href: '/pcf' },
        { label: getNavbarMessage(locale, 'item.label.Scope3', 'Scope3'), href: '/scope3' },
        { label: getNavbarMessage(locale, 'item.label.HanaecoAI', 'Hanaeco.AI'), href: '/hana-ai' },
        { label: getNavbarMessage(locale, 'item.label.CarbonAccounting', 'Carbon Accounting'), href: '/platform' },
        { label: getNavbarMessage(locale, 'item.label.ClimateManagement', 'Climate Management'), href: '/solution' },
      ],
    },
    {
      label: getNavbarMessage(locale, 'item.label.Resources', 'Resources'),
      items: [
        { label: getNavbarMessage(locale, 'item.label.Resources', 'Resources'), href: '/docs/intro' },
        { label: getNavbarMessage(locale, 'item.label.Blog', 'Blog'), href: '/blog' },
      ],
    },
    {
      label: getNavbarMessage(locale, 'item.label.Company', 'Company'),
      items: [
        { label: getNavbarMessage(locale, 'item.label.Partnership', 'Partnership'), href: '/partnership' },
        { label: getNavbarMessage(locale, 'item.label.Company', 'Company'), href: '/company' },
        { label: getNavbarMessage(locale, 'item.label.Recruit', 'Recruit'), href: '/recruit' },
      ],
    },
  ];
}

function footerSections(locale: AppLocale) {
  return [
    {
      title: getFooterMessage(locale, 'link.title.Company', 'Company'),
      items: [
        { label: getFooterMessage(locale, 'link.item.label.Company', 'Company'), href: '/company' },
        { label: getFooterMessage(locale, 'link.item.label.Recruit', 'Recruit'), href: '/recruit' },
      ],
    },
    {
      title: getFooterMessage(locale, 'link.title.Resources', 'Resources'),
      items: [
        { label: getFooterMessage(locale, 'link.item.label.Resources', 'Resources'), href: '/docs/intro' },
        { label: getFooterMessage(locale, 'link.item.label.Blog', 'Blog'), href: '/blog' },
        { label: 'YouTube', href: 'https://www.youtube.com/@hanaloop', external: true },
        { label: 'Brunch', href: 'https://brunch.co.kr/@hanaloop', external: true },
        { label: 'Naver Blog', href: 'https://blog.naver.com/hanaloop', external: true },
      ],
    },
    {
      title: getFooterMessage(locale, 'link.title.More', 'More'),
      items: [
        { label: getFooterMessage(locale, 'link.item.label.Privacy', 'Privacy'), href: '/privacy' },
        { label: 'Credits', href: '/credits' },
      ],
    },
  ];
}

function NavLink({ item, locale }: { item: MenuItem; locale: AppLocale }) {
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" className="block px-3 py-1 hover:text-[#2e8555] text-sm">
        {item.label}
      </a>
    );
  }

  return (
    <Link href={withLocalePath(locale, item.href)} className="block px-3 py-1 hover:text-[#2e8555] text-sm">
      {item.label}
    </Link>
  );
}

function ThemeButton() {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    const root = document.documentElement;
    const stored = window.localStorage.getItem('theme') as ThemeMode | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextTheme = stored ?? (systemPrefersDark ? 'dark' : 'light');

    root.classList.toggle('dark', nextTheme === 'dark');
    root.style.colorScheme = nextTheme;
    setTheme(nextTheme);
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';

    root.classList.toggle('dark', nextTheme === 'dark');
    root.style.colorScheme = nextTheme;
    window.localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex cursor-pointer items-center justify-center p-1 rounded-full text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white"
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? <MoonStar className="h-6 w-6" /> : <SunMedium className="h-6 w-6" />}
    </button>
  );
}

function LocaleSwitcher({ locale, pathname }: { locale: AppLocale; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center rounded-full py-2 text-base font-medium hover:text-[#2f9e72] transition dark:hover:bg-white/10"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <div className="flex items-center gap-1">
          <Globe2 className="h-4 w-4" />
          <span>{localeLabels[locale]}</span>
        </div>
        <ChevronDown className={`h-4 w-4 transition`} />
      </button>
      {open ? (
        <div className="absolute right-0 top-[calc(100%)] z-50 min-w-40 rounded-xl border border-gray-200 bg-white py-2 shadow-xl dark:border-white/10 dark:bg-[#232a36]">
          {locales.map((item) => {
            const href = switchLocalePath(pathname, item);
            const active = item === locale;

            return (
              <Link
                key={item}
                href={href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-3 text-lg transition ${
                  active
                    ? 'bg-gray-100 font-medium text-[#2f9e72] dark:bg-white/10'
                    : 'text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5'
                }`}
              >
                {localeLabels[item]}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function normalizePathname(value: string) {
  return value.replace(/\/+$/, '') || '/';
}

function isNavItemActive(item: MobileContextualNavItem, pathname: string): boolean {
  const currentPath = normalizePathname(pathname);
  const ownPath = item.href ? normalizePathname(item.href) : null;

  if (ownPath && ownPath === currentPath) return true;
  return Array.isArray(item.children) ? item.children.some((child) => isNavItemActive(child, pathname)) : false;
}

function ContextualNavItemRow({
  item,
  pathname,
  depth = 0,
  onNavigate,
}: {
  item: MobileContextualNavItem;
  pathname: string;
  depth?: number;
  onNavigate: () => void;
}) {
  const active = isNavItemActive(item, pathname);
  const [expanded, setExpanded] = useState(active);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  useEffect(() => {
    if (active) setExpanded(true);
  }, [active]);

  if (!hasChildren) {
    return item.href ? (
      <Link
        href={item.href}
        onClick={onNavigate}
        className={`block rounded-md px-3 py-2 text-[1.02rem] transition ${
          active
            ? 'bg-gray-100 font-medium text-[#2f9e72] dark:bg-white/10'
            : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5'
        }`}
        style={{ paddingInlineStart: `${0.75 + depth * 0.85}rem`, fontSize: '0.9rem', lineHeight: '1.2rem' }}
      >
        {item.label}
      </Link>
    ) : (
      <div
        className="px-3 py-2 text-gray-700 dark:text-gray-300"
        style={{ paddingInlineStart: `${0.75 + depth * 0.85}rem`, fontSize: '0.9rem', lineHeight: '1.2rem' }}
      >
        {item.label}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        {item.href ? (
          <Link
            href={item.href}
            onClick={onNavigate}
            className={`min-w-0 flex-1 rounded-md px-3 py-2 transition ${
              active
                ? 'bg-gray-100 font-medium text-[#2f9e72] dark:bg-white/10'
                : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5'
            }`}
            style={{ paddingInlineStart: `${0.75 + depth * 0.85}rem`, fontSize: '0.9rem', lineHeight: '1.2rem' }}
          >
            {item.label}
          </Link>
        ) : (
          <div
            className="min-w-0 flex-1 px-3 py-2 text-gray-700 dark:text-gray-300"
            style={{ paddingInlineStart: `${0.75 + depth * 0.85}rem`, fontSize: '0.9rem', lineHeight: '1.2rem' }}
          >
            {item.label}
          </div>
        )}
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
          aria-label={expanded ? `Collapse ${item.label}` : `Expand ${item.label}`}
        >
          <ChevronDown className={`h-5 w-5 transition ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="space-y-1 border-s border-gray-200 ps-1 dark:border-white/10">
            {item.children!.map((child) => (
              <ContextualNavItemRow key={child.id} item={child} pathname={pathname} depth={depth + 1} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDrawer({
  locale,
  pathname,
  menus,
  contextualNav,
}: {
  locale: AppLocale;
  pathname: string;
  menus: MenuGroup[];
  contextualNav?: MobileContextualNav;
}) {
  const [rendered, setRendered] = useState(false);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'main' | 'contextual'>(contextualNav ? 'contextual' : 'main');
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [languagesOpen, setLanguagesOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setRendered(true);
      const frame = window.requestAnimationFrame(() => {
        document.body.style.overflow = 'hidden';
      });

      return () => {
        window.cancelAnimationFrame(frame);
      };
    }
  }, [open]);

  useEffect(() => {
    if (!rendered) return;

    if (open) return;

    const timeout = window.setTimeout(() => {
      setOpenGroup(null);
      setLanguagesOpen(false);
      setMode(contextualNav ? 'contextual' : 'main');
      setRendered(false);
      document.body.style.overflow = '';
    }, 280);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [open, rendered]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setRendered(true);
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              setMode(contextualNav ? 'contextual' : 'main');
              setOpen(true);
            });
          });
        }}
        className="inline-flex items-center justify-center rounded-md p-1 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10 lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-7 w-7" />
      </button>
      {rendered ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className={`absolute inset-0 bg-black/35 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />
          <div
            className={`absolute inset-y-0 left-0 flex h-dvh w-[82vw] max-w-[320px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out dark:bg-[#131922] ${
              open ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 dark:border-white/10">
              <Link href={withLocalePath(locale, '/')} className="flex items-center gap-3 font-semibold" onClick={() => setOpen(false)}>
                <img src="/images/hanaloop-logo.png" alt="HanaLoop Logo" className="h-8 w-auto" />
                <span>HanaLoop</span>
              </Link>
              <div className="flex items-center gap-2">
                <ThemeButton />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-md p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>
            </div>
            <nav className="flex-1 overflow-hidden bg-white dark:bg-[#131922]">
              {contextualNav ? (
                <div
                  className={`flex h-full w-[200%] transition-transform duration-300 ease-out ${
                    mode === 'contextual' ? 'translate-x-0' : '-translate-x-1/2'
                  }`}
                >
                  <div className="w-1/2 overflow-y-auto px-4 py-3">
                    <div className="space-y-3">
                      <button
                        type="button"
                        onClick={() => setMode('main')}
                        className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-[1rem] font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-white/5"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span>{contextualNav.backLabel ?? 'Back to main menu'}</span>
                      </button>
                      <div className="space-y-1">
                        {contextualNav.items.map((item) => (
                          <ContextualNavItemRow key={item.id} item={item} pathname={pathname} onNavigate={() => setOpen(false)} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 overflow-y-auto px-4 py-3">
                    {menus.map((menu) => {
                      const expanded = openGroup === menu.label;

                      return (
                        <div key={menu.label} className="border-b border-gray-100 py-1 dark:border-white/10">
                          <button
                            type="button"
                            onClick={() => setOpenGroup((current) => (current === menu.label ? null : menu.label))}
                            className="flex w-full items-center justify-between py-3 text-left text-[1.05rem] font-medium text-gray-700 dark:text-gray-100"
                          >
                            <span>{menu.label}</span>
                            <ChevronDown className={`h-5 w-5 transition ${expanded ? 'rotate-180' : ''}`} />
                          </button>
                          <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                              {menu.items.map((item) =>
                                item.external ? (
                                  <a
                                    key={`${menu.label}-${item.label}`}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between rounded-md px-3 py-2 text-[1.02rem] text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5"
                                  >
                                    <span>{item.label}</span>
                                    <ExternalLink className="h-4 w-4" />
                                  </a>
                                ) : (
                                  <Link
                                    key={`${menu.label}-${item.label}`}
                                    href={withLocalePath(locale, item.href)}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-md px-3 py-2 text-[1.02rem] text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5"
                                  >
                                    {item.label}
                                  </Link>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="border-b border-gray-100 py-1 dark:border-white/10">
                      <a
                        href="https://www.hana.eco"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between py-3 text-[1.05rem] font-medium text-gray-700 dark:text-gray-100"
                      >
                        <span>Hana.eco</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <div className="py-1">
                      <button
                        type="button"
                        onClick={() => setLanguagesOpen((value) => !value)}
                        className="flex w-full items-center justify-between py-3 text-left text-[1.05rem] font-medium text-gray-700 dark:text-gray-100"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Globe2 className="h-4 w-4" />
                          Languages
                        </span>
                        <ChevronDown className={`h-5 w-5 transition ${languagesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${languagesOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="space-y-1 overflow-hidden pb-2">
                          {locales.map((item) => {
                            const href = switchLocalePath(pathname, item);
                            const active = item === locale;

                            return (
                              <Link
                                key={item}
                                href={href}
                                onClick={() => setOpen(false)}
                                className={`block rounded-md px-3 py-2 text-[1.02rem] ${
                                  active
                                    ? 'bg-gray-100 font-medium text-[#2f9e72] dark:bg-white/10'
                                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5'
                                }`}
                              >
                                {localeLabels[item]}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full overflow-y-auto px-4 py-3">
                  {menus.map((menu) => {
                    const expanded = openGroup === menu.label;

                    return (
                      <div key={menu.label} className="border-b border-gray-100 py-1 dark:border-white/10">
                        <button
                          type="button"
                          onClick={() => setOpenGroup((current) => (current === menu.label ? null : menu.label))}
                          className="flex w-full items-center justify-between py-3 text-left text-[1.05rem] font-medium text-gray-700 dark:text-gray-100"
                        >
                          <span>{menu.label}</span>
                          <ChevronDown className={`h-5 w-5 transition ${expanded ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                          <div className="overflow-hidden">
                            {menu.items.map((item) =>
                              item.external ? (
                                <a
                                  key={`${menu.label}-${item.label}`}
                                  href={item.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex items-center justify-between rounded-md px-3 py-2 text-[1.02rem] text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5"
                                >
                                  <span>{item.label}</span>
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              ) : (
                                <Link
                                  key={`${menu.label}-${item.label}`}
                                  href={withLocalePath(locale, item.href)}
                                  onClick={() => setOpen(false)}
                                  className="block rounded-md px-3 py-2 text-[1.02rem] text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5"
                                >
                                  {item.label}
                                </Link>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="border-b border-gray-100 py-1 dark:border-white/10">
                    <a
                      href="https://www.hana.eco"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between py-3 text-[1.05rem] font-medium text-gray-700 dark:text-gray-100"
                    >
                      <span>Hana.eco</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="py-1">
                    <button
                      type="button"
                      onClick={() => setLanguagesOpen((value) => !value)}
                      className="flex w-full items-center justify-between py-3 text-left text-[1.05rem] font-medium text-gray-700 dark:text-gray-100"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Globe2 className="h-4 w-4" />
                        Languages
                      </span>
                      <ChevronDown className={`h-5 w-5 transition ${languagesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${languagesOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="space-y-1 overflow-hidden pb-2">
                        {locales.map((item) => {
                          const href = switchLocalePath(pathname, item);
                          const active = item === locale;

                          return (
                            <Link
                              key={item}
                              href={href}
                              onClick={() => setOpen(false)}
                              className={`block rounded-md px-3 py-2 text-[1.02rem] ${
                                active
                                  ? 'bg-gray-100 font-medium text-[#2f9e72] dark:bg-white/10'
                                  : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5'
                              }`}
                            >
                              {localeLabels[item]}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function SiteShell({ children, wrapperClassName, mobileContextualNav }: SiteShellProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const menus = buildMenus(locale);
  const footer = footerSections(locale);
  const currentPath = pathname ?? '/';
  const currentYear = new Date().getFullYear();

  return (
    <div className={`min-h-screen bg-white text-gray-800 transition-colors dark:bg-[#131922] dark:text-gray-100 ${wrapperClassName ?? ''}`}>
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur transition-colors dark:border-white/10 dark:bg-[#131922]/95">
        <div className="mx-auto flex w-full items-center justify-between gap-6 px-4 py-3">
          <div className="flex items-center gap-6">
            <MobileDrawer locale={locale} pathname={currentPath} menus={menus} contextualNav={mobileContextualNav} />
            <Link href={withLocalePath(locale, '/')} className="flex items-center gap-3 font-semibold">
              <img src="/images/hanaloop-logo.png" alt="HanaLoop Logo" className="h-8 w-auto" />
              <span>HanaLoop</span>
            </Link>
            <nav className="hidden items-center gap-6 lg:flex">
              {menus.map((menu) => (
                <div key={menu.label} className="group relative">
                  <button className="inline-flex items-center gap-1 py-2 text-md font-medium text-gray-700 transition hover:text-[#2e8555] dark:text-gray-200 dark:hover:text-white">
                    <span>{menu.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="invisible absolute left-0 top-full min-w-60 rounded-xl border border-gray-200 bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 dark:border-white/10 dark:bg-[#232a36]">
                    {menu.items.map((item) => (
                      <NavLink key={`${menu.label}-${item.label}`} item={item} locale={locale} />
                    ))}
                  </div>
                </div>
              ))}
              <a
                href="https://www.hana.eco"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 py-2 text-md font-medium text-gray-700 hover:text-[#2e8555] dark:text-gray-200 dark:hover:text-white"
              >
                <span>Hana.eco</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </nav>
          </div>
          <div className="hidden items-center gap-2 text-sm lg:flex">
            <LocaleSwitcher locale={locale} pathname={currentPath} />
            <ThemeButton />
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-[#303846] text-white dark:bg-[#0d1219]">
        <div className="mx-auto grid max-w-[1520px] gap-10 px-4 py-8 md:grid-cols-3 md:px-12 xl:px-20">
          {footer.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 text-[1.05rem] font-semibold tracking-[0.01em] text-white">{section.title}</h2>
              <div className="space-y-2.5 text-[1.02rem] leading-6 flex flex-col">
                {section.items.map((item) =>
                  item.external ? (
                    <a
                      key={`${section.title}-${item.label}`}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-gray-300 hover:text-white"
                    >
                      <span>{item.label}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      key={`${section.title}-${item.label}`}
                      href={withLocalePath(locale, item.href)}
                      className="block text-gray-300 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 pb-10 text-center text-gray-300">
          <img src="/images/hanaloop-logo.png" alt="HanaLoop Logo" className="mx-auto mb-4 h-8 w-auto" />
          <div className="text-[1.05rem]">
            Copyright © {currentYear} 주식회사 하나루프 | HanaLoop Corp., Seoul Korea
          </div>
        </div>
        <div className="px-4 pb-4 text-center text-[1.02rem] leading-8 text-gray-300">
          <div>서울특별시 관악구 봉천로 545, 서울창업센터 관악 4층</div>
          <div>email: info@hanaloop.com | phone: +82 0507-1337-9251</div>
        </div>
      </footer>
    </div>
  );
}
