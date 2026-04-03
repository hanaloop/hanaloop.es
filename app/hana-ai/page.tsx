import { getDefaultLocaleRouteMetadata, renderDefaultLocaleRoute } from '@/lib/default-locale-route';

export default function Page() {
  return renderDefaultLocaleRoute('hana-ai');
}

export function generateMetadata() {
  return getDefaultLocaleRouteMetadata('hana-ai');
}
