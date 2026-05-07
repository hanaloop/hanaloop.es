import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { isLocale, locales } from '@/lib/locales';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <SiteShell headerDark>
      <div style={{ paddingTop: '120px' }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeJEFIcUzy68oP-mA--noSht_3Bq8ctRC4aCTleWh6oYtmCQQ/viewform"
          style={{ width: '100vw', height: 'calc(100vh - 120px)', border: 0, margin: 0, padding: 0 }}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          Loading...
        </iframe>
      </div>
    </SiteShell>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
