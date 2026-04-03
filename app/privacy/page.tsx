import { getDefaultLocaleRouteMetadata, renderDefaultLocaleRoute } from '@/lib/default-locale-route';

export default function Page() {
  return renderDefaultLocaleRoute('privacy');
}

export function generateMetadata() {
  return getDefaultLocaleRouteMetadata('privacy');
}
