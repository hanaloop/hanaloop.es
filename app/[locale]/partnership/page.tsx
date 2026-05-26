import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { PartnershipConsultationApplicationSection } from '@/components/sections/partnership/consultation-application-section';
import { PartnershipContactApplicationSection } from '@/components/sections/partnership/contact-application-section';
import { PartnershipHeroSection } from '@/components/sections/partnership/hero-section';
import { isLocale, locales } from '@/lib/locales';
import { getStaticPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <SiteShell>
      <PartnershipHeroSection />
      <PartnershipConsultationApplicationSection />
      <PartnershipContactApplicationSection />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return getStaticPageMetadata(locale, 'partnership', '/partnership');
}
