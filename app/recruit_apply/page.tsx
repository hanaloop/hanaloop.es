import { getDefaultLocaleRouteMetadata, renderDefaultLocaleRoute } from '@/lib/default-locale-route';

export default function Page() {
  return renderDefaultLocaleRoute('recruit_apply');
}

export function generateMetadata() {
  return getDefaultLocaleRouteMetadata('recruit_apply');
}
