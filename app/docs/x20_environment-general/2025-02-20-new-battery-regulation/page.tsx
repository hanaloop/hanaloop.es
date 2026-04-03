import type { Metadata } from 'next';
import { StaticRedirect } from '@/components/static-redirect';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <StaticRedirect to="/docs/x20_environment-general/EU-regulations/2025-02-20-new-battery-regulation" />;
}
