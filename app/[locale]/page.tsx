import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { homePage as HomePage } from '@/lib/site-pages';
import { defaultLocale, isLocale, locales } from '@/lib/locales';
import { getHomeMetadataText, siteConfig } from '@/lib/site-config';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();

  return <HomePage />;
}

export function generateStaticParams() {
  return locales.filter((locale) => locale !== defaultLocale).map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();

  const meta = getHomeMetadataText(locale);
  const title = `${siteConfig.title} | ${meta.title}`;

  return {
    title,
    description: meta.description,
    openGraph: {
      title,
      description: meta.description,
      images: [siteConfig.image],
    },
    twitter: {
      title,
      description: meta.description,
      images: [siteConfig.image],
    },
  };
}
