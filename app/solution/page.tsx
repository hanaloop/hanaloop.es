import { SiteShell } from '@/components/layout/site-shell';
import { SolutionClimateManagementSection } from '@/components/sections/solution/climate-management-section';
import { SolutionHeroSection } from '@/components/sections/solution/hero-section';
import { Scope3StrategySection } from '@/components/sections/solution/scope3-strategy-section';

export const dynamicParams = false;

export default function Page() {
  return (
    <SiteShell>
      <SolutionHeroSection locale="ko" />
      <SolutionClimateManagementSection locale="ko" />
      <Scope3StrategySection locale="ko" />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return [];
}
