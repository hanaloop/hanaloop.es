import { SiteShell } from '@/components/layout/site-shell';
import { PcfHeroSection } from '@/components/sections/pcf/hero-section';
import { PcfMainFeaturesSection } from '@/components/sections/pcf/main-features-section';
import { PcfOverviewSection } from '@/components/sections/pcf/overview-section';
import { PcfWhyNeededSection } from '@/components/sections/pcf/why-needed-section';

export const dynamicParams = false;

export default function Page() {
  return (
    <SiteShell>
      <PcfHeroSection locale="ko" />
      <PcfOverviewSection locale="ko" />
      <PcfWhyNeededSection locale="ko" />
      <PcfMainFeaturesSection locale="ko" />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return [];
}
