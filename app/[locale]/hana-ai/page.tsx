import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/site-shell';
import { HanaAiHeroSection } from '@/components/sections/hana-ai/hero-section';
import { HanaAiOverviewSection } from '@/components/sections/hana-ai/overview-section';
import { HanaAiWhyNeedSection } from '@/components/sections/hana-ai/why-need-section';
import { HanaAiMainFeaturesSection } from '@/components/sections/hana-ai/main-features-section';
import { CtaSection } from '@/components/sections/home/cta-section';
import { notFound } from 'next/navigation';
import { isLocale, locales } from '@/lib/locales';
import { getStaticPageMetadata } from '@/lib/seo';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();

    return (
        <SiteShell>
            <HanaAiHeroSection />
            <HanaAiOverviewSection />
            <HanaAiWhyNeedSection />
            <HanaAiMainFeaturesSection />
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

    return getStaticPageMetadata(locale, 'hanaAi', '/hana-ai');
}
