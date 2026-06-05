import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { SupplyClimateManagementSection } from '@/components/sections/supply/overview-section';
import { SupplyHeroSection } from '@/components/sections/supply/hero-section';
import { SupplyChainMainFeaturesSection } from '@/components/sections/supply/main-features-section';
import { CtaSection } from '@/components/sections/home/cta-section';
import { isLocale, locales } from '@/lib/locales';
import { getStaticPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();
    return (
        <SiteShell>
            <SupplyHeroSection />
            <SupplyClimateManagementSection />
            <SupplyChainMainFeaturesSection />
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

    return getStaticPageMetadata(locale, 'supply', '/supply');
}
