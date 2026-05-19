import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { SiteShell } from '@/components/layout/site-shell';
import { InsightHeroSection } from '@/components/sections/docs/hero-section';
import { InsightListSection } from '@/components/sections/docs/list-section';
import { getInsightPostSlugs } from '@/lib/insight-content';
import { isLocale, locales, withLocalePath } from '@/lib/locales';
import { getLanguageAlternates } from '@/lib/site-config';
import { getDocsSource } from '@/lib/source';

type Props = {
    params: Promise<{
        locale: string;
        slug?: string[];
    }>;
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
    const { locale, slug } = await params;
    if (!isLocale(locale)) notFound();
    setRequestLocale(locale);
    if (!slug || slug.length === 0) redirect(withLocalePath(locale, '/docs/intro'));

    const page = getDocsSource(locale).getPage(slug);
    if (!page) notFound();

    return (
        <SiteShell>
            <InsightHeroSection locale={locale} />
            <InsightListSection locale={locale} selectedSlug={slug} />
        </SiteShell>
    );
}

export function generateStaticParams() {
    return locales.flatMap((locale) => [{ locale, slug: [] as string[] }, ...getInsightPostSlugs(locale).map((slug) => ({ locale, slug }))]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;
    if (!isLocale(locale)) notFound();

    if (!slug || slug.length === 0) {
        return {
            title: 'HanaLoop Insight',
            description: 'HanaLoop insight and research updates.',
            alternates: getLanguageAlternates(locale, '/docs'),
        };
    }

    const page = getDocsSource(locale).getPage(slug);
    if (!page) notFound();

    const data = page.data as { title?: string; description?: string; summary?: string; image?: string };
    const title = String(data.title ?? 'HanaLoop Insight');
    const description = String(data.description ?? data.summary ?? title);

    return {
        title,
        description,
        alternates: getLanguageAlternates(locale, `/docs/${slug.join('/')}`),
        openGraph: {
            title,
            description,
            images: data.image ? [data.image] : undefined,
        },
    };
}
