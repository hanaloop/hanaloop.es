import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { DocsLayoutShell } from '@/components/docs-renderer';
import { defaultLocale, isLocale } from '@/lib/locales';

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();

  return <DocsLayoutShell locale={locale}>{children}</DocsLayoutShell>;
}
