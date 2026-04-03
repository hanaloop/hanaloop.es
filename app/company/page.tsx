import { getDefaultLocaleRouteMetadata, renderDefaultLocaleRoute } from '@/lib/default-locale-route';

export default function Page() {
  return renderDefaultLocaleRoute('company');
}

export function generateMetadata() {
  return getDefaultLocaleRouteMetadata('company');
}
