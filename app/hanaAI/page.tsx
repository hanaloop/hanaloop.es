import type { Metadata } from 'next';
import { StaticRedirect } from '@/components/static-redirect';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <StaticRedirect to="/hana-ai" />;
}
