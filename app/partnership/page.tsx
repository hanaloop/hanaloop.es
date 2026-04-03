import { getDefaultLocaleRouteMetadata, renderDefaultLocaleRoute } from '@/lib/default-locale-route';

export default function Page() {
  return renderDefaultLocaleRoute('partnership');
}

export function generateMetadata() {
  return getDefaultLocaleRouteMetadata('partnership');
}
