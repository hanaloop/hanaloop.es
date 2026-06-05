export const locales = ['ko', 'en', 'es'] as const;
export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = 'ko';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function isLocale(value: string | undefined): value is AppLocale {
  return locales.includes((value ?? '') as AppLocale);
}

export function getLocale(value?: string): AppLocale {
  return isLocale(value) ? value : defaultLocale;
}

export function isExternalHref(href: string) {
  return /^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');
}

export function isStaticAssetPath(href: string) {
  return (
    href.startsWith('/images/') ||
    href.startsWith('/icons/') ||
    href.startsWith('/files/') ||
    href.startsWith('/favicon') ||
    href === '/robots.txt' ||
    href === '/site.webmanifest'
  );
}

export function withLocalePath(locale: AppLocale, href: string) {
  if (!href || isExternalHref(href) || href.startsWith('#') || isStaticAssetPath(href)) return href;
  if (!href.startsWith('/')) return href;

  if (locale === defaultLocale) return href;
  if (href === '/') return `/${locale}`;
  if (href === `/${locale}` || href.startsWith(`/${locale}/`)) return href;

  return `/${locale}${href}`;
}

export function withBasePath(href: string) {
  if (!href.startsWith('/') || !basePath) return href;
  if (href.startsWith(basePath)) return href;

  return `${basePath}${href}`;
}

export function toClientHref(locale: AppLocale, href: string) {
  return withBasePath(withLocalePath(locale, href));
}

export function stripBasePath(pathname: string) {
  if (!basePath) return pathname;
  return pathname.startsWith(basePath) ? pathname.slice(basePath.length) || '/' : pathname;
}

export function getLocaleFromPathname(pathname?: string) {
  const value = stripBasePath(pathname ?? '/');
  const segments = value.split('/').filter(Boolean);
  const first = segments[0];

  return isLocale(first) ? first : defaultLocale;
}

export function switchLocalePath(pathname: string, targetLocale: AppLocale) {
  const value = stripBasePath(pathname);
  const segments = value.split('/').filter(Boolean);

  if (isLocale(segments[0])) segments.shift();

  const nextPath = `/${segments.join('/')}`;
  return withLocalePath(targetLocale, nextPath === '/' ? '/' : nextPath);
}
