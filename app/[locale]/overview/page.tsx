import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { OverviewHeroSection } from '@/components/sections/overview/hero-section';
import { isLocale, locales } from '@/lib/locales';
import { OverviewOverviewSection } from '@/components/sections/overview/overview-section';
import { OverviewCbamPlanSection } from '@/components/sections/overview/cbam-plan-section';
import { OverviewEcoEditionSection } from '@/components/sections/overview/eco-edition-section';
import { OverviewSolutionMatrixSection } from '@/components/sections/overview/solution-matrix-section';
import { OverviewProcessSection } from '@/components/sections/overview/process-section';
import { CtaSection } from '@/components/sections/home/cta-section';
import { getStaticPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();
    return (
        <SiteShell>
            <OverviewHeroSection />
            <OverviewOverviewSection />
            <OverviewSolutionMatrixSection />
            <OverviewProcessSection />
            <OverviewCbamPlanSection />
            <OverviewEcoEditionSection />
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

    return getStaticPageMetadata(locale, 'overview', '/overview');
}
