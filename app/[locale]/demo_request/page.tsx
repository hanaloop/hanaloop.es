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
    <SiteShell>
      <div className="flex justify-center py-10">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfk1GQQrcYy_qQiOog_osm1RX9BgnTjJqgIuDPAGNKM6403zQ/viewform?embedded=true"
          width="657"
          height="1400"
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
