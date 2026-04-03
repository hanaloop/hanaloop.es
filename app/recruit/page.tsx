import { getDefaultLocaleRouteMetadata, renderDefaultLocaleRoute } from '@/lib/default-locale-route';

export default function Page() {
  return renderDefaultLocaleRoute('recruit');
}

export function generateMetadata() {
  return getDefaultLocaleRouteMetadata('recruit');
}
