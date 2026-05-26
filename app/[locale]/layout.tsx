import {notFound} from 'next/navigation';
import type {Metadata, Viewport} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {setRequestLocale, getMessages, getTranslations} from 'next-intl/server';
import type {ReactNode} from 'react';
import {isLocale, locales} from '@/lib/locales';
import {JsonLd} from '@/components/seo/json-ld';
import {createOrganizationJsonLd, createWebsiteJsonLd, getSiteMetadata, localeLanguageTags} from '@/lib/seo';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

type Props = {
  children: ReactNode;
  params: Promise<{locale: string}>;
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  if (!isLocale(locale)) notFound();

  return getSiteMetadata(locale);
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({locale, namespace: 'Seo.site'});

  return (
    <html
      lang={localeLanguageTags[locale]}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-gray-800" suppressHydrationWarning>
        <JsonLd data={[createOrganizationJsonLd(locale, t('description')), createWebsiteJsonLd(locale, t('description'))]} />
        <NextIntlClientProvider locale={locale} messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
