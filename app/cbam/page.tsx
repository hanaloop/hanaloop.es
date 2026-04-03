import { getDefaultLocaleRouteMetadata, renderDefaultLocaleRoute } from '@/lib/default-locale-route';

export default function Page() {
  return renderDefaultLocaleRoute('cbam');
}

export function generateMetadata() {
  return getDefaultLocaleRouteMetadata('cbam');
}
