import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { isLocale, locales } from '@/lib/locales';
import { getStaticPageMetadata } from '@/lib/seo';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();

    return (
        <SiteShell headerDark>
            <div className="pt-20 lg:pt-32">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfk1GQQrcYy_qQiOog_osm1RX9BgnTjJqgIuDPAGNKM6403zQ/viewform?embedded=true"
                    style={{ width: '100%', maxWidth: '1024px', margin: '0 auto', height: 'calc(100vh - 120px)', border: 0, padding: 0 }}
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();

    return getStaticPageMetadata(locale, 'demoRequest', '/demo_request', { noindex: true });
}
