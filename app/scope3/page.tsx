import { getDefaultLocaleRouteMetadata, renderDefaultLocaleRoute } from '@/lib/default-locale-route';

export default function Page() {
  return renderDefaultLocaleRoute('scope3');
}

export function generateMetadata() {
  return getDefaultLocaleRouteMetadata('scope3');
}
