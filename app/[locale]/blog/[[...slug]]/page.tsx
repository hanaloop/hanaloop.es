import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogMetadata, getBlogStaticParams, renderBlogRoute } from '@/components/blog-renderer';
import { defaultLocale, isLocale, locales } from '@/lib/locales';

type Props = {
  params: Promise<{
    locale: string;
    slug?: string[];
  }>;
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();

  return renderBlogRoute(locale, slug);
}

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .flatMap((locale) => getBlogStaticParams(locale).map((item) => ({ locale, ...item })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();

  return getBlogMetadata(locale, slug);
}
