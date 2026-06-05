import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { SiteShell } from '@/components/layout/site-shell';
import { CaseDetailContentSection } from '@/components/sections/case-detail/content-section';
import { CasesHeroSection } from '@/components/sections/cases/hero-section';
import { CtaSection } from '@/components/sections/home/cta-section';
import { isLocale, locales } from '@/lib/locales';
import { createSeoMetadata } from '@/lib/seo';
import koMessages from '@/messages/ko.json';

type Props = { params: Promise<{ locale: string; id: string }> };

const caseIds = (koMessages.CasesDetail.items as { id: number }[]).map((item) => item.id);

export default async function Page({ params }: Props) {
    const { locale, id } = await params;
    if (!isLocale(locale)) notFound();
    const caseId = Number(id);
    if (!caseIds.includes(caseId)) notFound();

    return (
        <SiteShell>
            <CasesHeroSection />
            <CaseDetailContentSection caseId={caseId} />
            <CtaSection />
        </SiteShell>
    );
}

export function generateStaticParams() {
    return locales.flatMap((locale) => caseIds.map((id) => ({ locale, id: String(id) })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, id } = await params;
    if (!isLocale(locale)) notFound();

    const caseId = Number(id);
    if (!caseIds.includes(caseId)) notFound();

    const t = await getTranslations({ locale, namespace: 'CasesDetail' });
    const items = t.raw('items') as Array<{
        id: number;
        title: string;
        companyName: string;
        logoSrc?: string;
        summary?: Array<{ text: string }>;
    }>;
    const item = items.find((caseItem) => caseItem.id === caseId);
    if (!item) notFound();

    return createSeoMetadata({
        title: item.title,
        description: item.summary?.map((summary) => summary.text).join(' ') || `${item.companyName} case study from HanaLoop.`,
        locale,
        pathname: `/case_detail/${caseId}`,
        image: item.logoSrc,
    });
}
