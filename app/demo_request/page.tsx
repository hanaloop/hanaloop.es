import { getDefaultLocaleRouteMetadata, renderDefaultLocaleRoute } from '@/lib/default-locale-route';

export default function Page() {
  return renderDefaultLocaleRoute('demo_request');
}

export function generateMetadata() {
  return getDefaultLocaleRouteMetadata('demo_request');
}
