import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { defaultLocale, locales, type AppLocale } from '@/lib/locales';
import { getCanonicalUrl, getLanguageAlternates, siteConfig } from '@/lib/site-config';

export const localeLanguageTags = {
  ko: 'ko-KR',
  en: 'en-US',
  es: 'es-ES',
} satisfies Record<AppLocale, string>;

export const localeOgTags = {
  ko: 'ko_KR',
  en: 'en_US',
  es: 'es_ES',
} satisfies Record<AppLocale, string>;

export type StaticSeoPageKey =
  | 'home'
  | 'overview'
  | 'platform'
  | 'cbam'
  | 'pcf'
  | 'supply'
  | 'hanaAi'
  | 'cases'
  | 'partnership'
  | 'company'
  | 'blog'
  | 'docs'
  | 'privacy'
  | 'demoRequest'
  | 'companyProfileRequest'
  | 'credits';

type MetadataOptions = {
  title: string;
  description: string;
  locale: AppLocale;
  pathname: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
  type?: 'website' | 'article';
};

function normalizeKeywords(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const keywords = value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
  return keywords.length > 0 ? keywords : undefined;
}

export function createSeoMetadata({
  title,
  description,
  locale,
  pathname,
  image = siteConfig.image,
  keywords,
  noindex = false,
  type = 'website',
}: MetadataOptions): Metadata {
  const canonicalUrl = getCanonicalUrl(locale, pathname);
  const alternateLocales = locales.filter((item) => item !== locale).map((item) => localeOgTags[item]);

  return {
    title,
    description,
    keywords,
    alternates: getLanguageAlternates(locale, pathname),
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.title,
      images: [{ url: image, alt: title }],
      locale: localeOgTags[locale],
      alternateLocale: alternateLocales,
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export async function getStaticPageMetadata(locale: AppLocale, pageKey: StaticSeoPageKey, pathname: string, options?: Partial<MetadataOptions>) {
  const t = await getTranslations({ locale, namespace: `Seo.pages.${pageKey}` });

  return createSeoMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    pathname,
    keywords: normalizeKeywords(t.raw('keywords')),
    ...options,
  });
}

export async function getSiteMetadata(locale: AppLocale): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Seo.site' });

  return {
    metadataBase: new URL(siteConfig.url),
    manifest: '/images/favicon_io/site.webmanifest',
    applicationName: siteConfig.title,
    creator: siteConfig.title,
    publisher: siteConfig.title,
    category: 'Climate technology',
    title: {
      default: t('defaultTitle'),
      template: `%s | ${siteConfig.title}`,
    },
    description: t('description'),
    keywords: normalizeKeywords(t.raw('keywords')),
    alternates: getLanguageAlternates(locale, '/'),
    icons: {
      icon: [
        { url: '/images/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/images/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: [{ url: '/images/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      shortcut: ['/images/favicon_io/favicon-32x32.png'],
    },
    openGraph: {
      title: t('defaultTitle'),
      description: t('description'),
      url: getCanonicalUrl(locale, '/'),
      siteName: siteConfig.title,
      images: [{ url: siteConfig.image, alt: t('imageAlt') }],
      locale: localeOgTags[locale],
      alternateLocale: locales.filter((item) => item !== locale).map((item) => localeOgTags[item]),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('defaultTitle'),
      description: t('description'),
      images: [siteConfig.image],
    },
  };
}

export function createOrganizationJsonLd(locale: AppLocale, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.title,
    url: siteConfig.url,
    logo: new URL('/site/icons/logo-color-ci.png', siteConfig.url).toString(),
    description,
    email: 'info@hanaloop.com',
    telephone: '+82-0507-1337-9251',
    sameAs: ['https://www.linkedin.com/company/hanaloop', 'https://www.youtube.com/@hanaloop', 'https://blog.naver.com/hanaloop'],
    inLanguage: localeLanguageTags[locale],
  };
}

export function createWebsiteJsonLd(locale: AppLocale, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    url: getCanonicalUrl(defaultLocale, '/'),
    description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.title,
      url: siteConfig.url,
    },
    inLanguage: localeLanguageTags[locale],
  };
}

export function createBreadcrumbJsonLd(locale: AppLocale, items: Array<{ name: string; pathname: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(locale, item.pathname),
    })),
  };
}
