import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { HomeHeroSection } from '@/components/sections/home-hero-section';
import { HomeIntroSection } from '@/components/sections/home-intro-section';
import { HomeCollaborationSection } from '@/components/sections/home-collaboration-section';
import { HomeOurMissionSection } from '@/components/sections/home-our-mission-section';
import { HomeInsightSection } from '@/components/sections/home-insight-section';
import { HomeFaqSection } from '@/components/sections/home-faq-section';
import { HomeCtaSection } from '@/components/sections/home-cta-section';
import { HomeRegulatoryComplianceSection } from '@/components/sections/home-regulatory-compliance-section';
import { defaultLocale, isLocale, locales } from '@/lib/locales';
import { getHomeMetadataText, siteConfig } from '@/lib/site-config';

type Props = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();

  return (
    <SiteShell>
      <HomeHeroSection locale={locale} />
      <HomeIntroSection locale={locale} />
      <HomeCollaborationSection locale={locale} />
      <HomeOurMissionSection locale={locale} />
      <HomeRegulatoryComplianceSection locale={locale} />
      <HomeInsightSection locale={locale} />
      <HomeFaqSection locale={locale} />
      <HomeCtaSection locale={locale} />
    </SiteShell>
  );
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
    openGraph: { title, description: meta.description, images: [siteConfig.image] },
    twitter: { title, description: meta.description, images: [siteConfig.image] },
  };
}

