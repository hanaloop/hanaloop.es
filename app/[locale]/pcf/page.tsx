import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { PcfHeroSection } from '@/components/sections/pcf/hero-section';
import { PcfMainFeaturesSection } from '@/components/sections/pcf/main-features-section';
import { PcfOverviewSection } from '@/components/sections/pcf/overview-section';
import { PcfWhyNeededSection } from '@/components/sections/pcf/why-needed-section';
import { CtaSection } from '@/components/sections/home/cta-section';
import { isLocale, locales } from '@/lib/locales';
import { getStaticPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();
    return (
        <SiteShell>
            <PcfHeroSection />
            <PcfOverviewSection />
            <PcfWhyNeededSection />
            <PcfMainFeaturesSection />
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

    return getStaticPageMetadata(locale, 'pcf', '/pcf');
}
