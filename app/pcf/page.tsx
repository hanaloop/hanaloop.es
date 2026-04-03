import { getDefaultLocaleRouteMetadata, renderDefaultLocaleRoute } from '@/lib/default-locale-route';

export default function Page() {
  return renderDefaultLocaleRoute('pcf');
}

export function generateMetadata() {
  return getDefaultLocaleRouteMetadata('pcf');
}
