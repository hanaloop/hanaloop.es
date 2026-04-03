import type { Metadata } from 'next';
import { StaticRedirect } from '@/components/static-redirect';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <StaticRedirect to="/docs/x20_environment-general/CBAM/2022-12-14-CBAM" />;
}
