import type { Metadata } from 'next';
import { UnderConstruction } from '@/components/features/under-construction';
import { notFound } from 'next/navigation';
import { isLocale, locales } from '@/lib/locales';
import { getStaticPageMetadata } from '@/lib/seo';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <UnderConstruction locale={locale} />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return getStaticPageMetadata(locale, 'credits', '/credits', { noindex: true });
}
