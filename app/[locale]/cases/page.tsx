import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { CasesHeroSection } from '@/components/sections/cases/hero-section';
import { CtaSection } from '@/components/sections/home/cta-section';
import { CasesOverviewSection } from '@/components/sections/cases/overview-section';
import { CaseCardsSection } from '@/components/sections/cases/case-cards-section';
import { isLocale, locales } from '@/lib/locales';
import { getStaticPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();
    return (
        <SiteShell>
            <CasesHeroSection />
            <CasesOverviewSection />
            <CaseCardsSection />
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

    return getStaticPageMetadata(locale, 'cases', '/cases');
}
