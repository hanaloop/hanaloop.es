import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { CompanyHeroSection } from '@/components/sections/company/hero-section';
import { CompanyLifeSection } from '@/components/sections/company/life-section';
import { CompanyMissionSection } from '@/components/sections/company/mission-section';
import { CompanyRoleSection } from '@/components/sections/company/role-section';
import { CompanyTeamSection } from '@/components/sections/company/team-section';
import { CompanyValueSection } from '@/components/sections/company/value-section';
import { isLocale, locales } from '@/lib/locales';
import { getStaticPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <SiteShell>
      <CompanyHeroSection />
      <CompanyMissionSection />
      <CompanyValueSection />
      <CompanyTeamSection />
      <CompanyLifeSection />
      <CompanyRoleSection />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return getStaticPageMetadata(locale, 'company', '/company');
}
