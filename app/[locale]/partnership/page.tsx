import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { PartnershipConsultationApplicationSection } from '@/components/sections/partnership/consultation-application-section';
import { PartnershipContactApplicationSection } from '@/components/sections/partnership/contact-application-section';
import { PartnershipHeroSection } from '@/components/sections/partnership/hero-section';
import { defaultLocale, isLocale, locales } from '@/lib/locales';

type Props = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();

  return (
    <SiteShell>
      <PartnershipHeroSection locale={locale} />
      <PartnershipConsultationApplicationSection locale={locale} />
      <PartnershipContactApplicationSection locale={locale} />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return locales.filter((l) => l !== defaultLocale).map((locale) => ({ locale }));
}
