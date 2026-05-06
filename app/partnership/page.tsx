import { SiteShell } from '@/components/layout/site-shell';
import { PartnershipConsultationApplicationSection } from '@/components/sections/partnership/consultation-application-section';
import { PartnershipContactApplicationSection } from '@/components/sections/partnership/contact-application-section';
import { PartnershipHeroSection } from '@/components/sections/partnership/hero-section';

export const dynamicParams = false;

export default function Page() {
  return (
    <SiteShell>
      <PartnershipHeroSection />
      <PartnershipConsultationApplicationSection />
      <PartnershipContactApplicationSection />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return [];
}
