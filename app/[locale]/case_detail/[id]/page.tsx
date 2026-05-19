import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { CaseDetailContentSection } from '@/components/sections/case-detail/content-section';
import { CasesHeroSection } from '@/components/sections/cases/hero-section';
import { CtaSection } from '@/components/sections/home/cta-section';
import { isLocale, locales } from '@/lib/locales';
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
