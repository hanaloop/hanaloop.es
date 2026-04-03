import { getDefaultLocaleRouteMetadata, renderDefaultLocaleRoute } from '@/lib/default-locale-route';

export default function Page() {
  return renderDefaultLocaleRoute('solution');
}

export function generateMetadata() {
  return getDefaultLocaleRouteMetadata('solution');
}
