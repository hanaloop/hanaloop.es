import { getDefaultLocaleRouteMetadata, renderDefaultLocaleRoute } from '@/lib/default-locale-route';

export default function Page() {
  return renderDefaultLocaleRoute('platform');
}

export function generateMetadata() {
  return getDefaultLocaleRouteMetadata('platform');
}
