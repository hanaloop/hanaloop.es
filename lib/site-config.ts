import { defaultLocale, locales, withLocalePath, type AppLocale } from '@/lib/locales';

export const siteConfig = {
  title: 'HanaLoop',
  tagline: 'Carbon Management and Climate Compliance Platform',
  url: 'https://www.hanaloop.com',
  image: '/site/home/hero-bg-main.png',
};

function normalizePathname(pathname: string) {
  if (!pathname || pathname === '/') return '/';
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

function withTrailingSlash(pathname: string) {
  if (pathname === '/') return pathname;
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function getCanonicalUrl(locale: AppLocale, pathname = '/') {
  const localizedPath = withTrailingSlash(withLocalePath(locale, normalizePathname(pathname)));
  return new URL(localizedPath, siteConfig.url).toString();
}

export function getLanguageAlternates(locale: AppLocale, pathname = '/') {
  return {
    canonical: getCanonicalUrl(locale, pathname),
    languages: {
      ...Object.fromEntries(locales.map((locale) => [locale, getCanonicalUrl(locale, pathname)])),
      'x-default': getCanonicalUrl(defaultLocale, pathname),
    },
  };
}
