import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { HomeHeroSection } from '@/components/sections/home/hero-section';
import { HomeIntroSection } from '@/components/sections/home/intro-section';
import { HomeCollaborationSection } from '@/components/sections/home/collaboration-section';
import { HomeOurMissionSection } from '@/components/sections/home/our-mission-section';
import { HomeInsightSection } from '@/components/sections/home/insight-section';
import { HomeFaqSection } from '@/components/sections/home/faq-section';
import { CtaSection } from '@/components/sections/home/cta-section';
import { HomeRegulatoryComplianceSection } from '@/components/sections/home/regulatory-compliance-section';
import { isLocale, locales } from '@/lib/locales';
import { getStaticPageMetadata } from '@/lib/seo';

type Props = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <SiteShell>
      <HomeHeroSection />
      <HomeIntroSection />
      <HomeCollaborationSection />
      <HomeOurMissionSection />
      <HomeRegulatoryComplianceSection />
      <HomeInsightSection />
      <HomeFaqSection />
      <CtaSection isHome={true} />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return getStaticPageMetadata(locale, 'home', '/');
}
