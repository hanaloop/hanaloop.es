import { getDefaultLocaleRouteMetadata, renderDefaultLocaleRoute } from '@/lib/default-locale-route';

export default function Page() {
  return renderDefaultLocaleRoute('company_profile_request');
}

export function generateMetadata() {
  return getDefaultLocaleRouteMetadata('company_profile_request');
}
