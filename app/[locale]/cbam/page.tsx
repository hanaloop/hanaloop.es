import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { CbamCertifiedSection } from '@/components/sections/cbam/cbam-certified-section';
import { CbamHeroSection } from '@/components/sections/cbam/hero-section';
import { CbamOverviewSection } from '@/components/sections/cbam/overview-section';
import { CbamProcessSection } from '@/components/sections/cbam/process-section';
import { CtaSection } from '@/components/sections/home/cta-section';
import { isLocale, locales } from '@/lib/locales';
import { getStaticPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();
    return (
        <SiteShell>
            <CbamHeroSection />
            <CbamOverviewSection />
            <CbamProcessSection />
            <CbamCertifiedSection />
            <CtaSection />
        </SiteShell>
    );
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();

    return getStaticPageMetadata(locale, 'cbam', '/cbam');
}
