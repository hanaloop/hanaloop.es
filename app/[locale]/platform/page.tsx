import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { PlatformHeroSection } from '@/components/sections/platform/hero-section';
import { PlatformWhyNeedSection } from '@/components/sections/platform/why-need-section';
import { PlatformMainFeaturesSection } from '@/components/sections/platform/main-features-section';
import { CtaSection } from '@/components/sections/home/cta-section';
import { isLocale, locales } from '@/lib/locales';
import { PlatformOverviewSection } from '@/components/sections/platform/overview-section';
import { getStaticPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();
    return (
        <SiteShell>
            <PlatformHeroSection />
            <PlatformOverviewSection />
            <PlatformWhyNeedSection />
            <PlatformMainFeaturesSection />
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

    return getStaticPageMetadata(locale, 'platform', '/platform');
}
