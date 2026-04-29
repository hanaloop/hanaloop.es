import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/site-shell';
import { HomeHeroSection } from '@/components/sections/home-hero-section';
import { HomeIntroSection } from '@/components/sections/home-intro-section';
import { HomeCollaborationSection } from '@/components/sections/home-collaboration-section';
import { HomeOurMissionSection } from '@/components/sections/home-our-mission-section';
import { HomeInsightSection } from '@/components/sections/home-insight-section';
import { HomeFaqSection } from '@/components/sections/home-faq-section';
import { HomeCtaSection } from '@/components/sections/home-cta-section';
import { HomeRegulatoryComplianceSection } from '@/components/sections/home-regulatory-compliance-section';
import { getHomeMetadataText, siteConfig } from '@/lib/site-config';

export default function Page() {
  return (
    <SiteShell>
      <HomeHeroSection locale="ko" />
      <HomeIntroSection locale="ko" />
      <HomeCollaborationSection locale="ko" />
      <HomeOurMissionSection locale="ko" />
      <HomeRegulatoryComplianceSection locale="ko" />
      <HomeInsightSection locale="ko" />
      <HomeFaqSection locale="ko" />
      <HomeCtaSection locale="ko" />
    </SiteShell>
  );
}

export function generateMetadata(): Metadata {
  const meta = getHomeMetadataText('ko');
  const title = `${siteConfig.title} | ${meta.title}`;
  return {
    title,
    description: meta.description,
    openGraph: { title, description: meta.description, images: [siteConfig.image] },
    twitter: { title, description: meta.description, images: [siteConfig.image] },
  };
}
