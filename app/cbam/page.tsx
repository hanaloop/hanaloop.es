import { SiteShell } from '@/components/layout/site-shell';
import { CbamCertifiedSection } from '@/components/sections/cbam/cbam-certified-section';
import { CbamHeroSection } from '@/components/sections/cbam/hero-section';
import { CbamInsightCardsSection } from '@/components/sections/cbam/insight-cards-section';
import { CbamOverviewSection } from '@/components/sections/cbam/overview-section';
import { CbamPlanSection } from '@/components/sections/cbam/cbam-plan-section';
import { CbamProcessSection } from '@/components/sections/cbam/process-section';

export const dynamicParams = false;

export default function Page() {
  return (
    <SiteShell>
      <CbamHeroSection locale="ko" />
      <CbamOverviewSection locale="ko" />
      <CbamProcessSection locale="ko" />
      <CbamCertifiedSection locale="ko" />
      <CbamPlanSection locale="ko" />
      <CbamInsightCardsSection locale="ko" />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return [];
}
