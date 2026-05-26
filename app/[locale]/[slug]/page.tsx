import type { Metadata } from 'next';
import { UnderConstruction } from '@/components/features/under-construction';
import { notFound } from 'next/navigation';
import { isLocale, locales } from '@/lib/locales';
import { getStaticPageMetadata } from '@/lib/seo';

const slugs = ['company', 'partnership', 'privacy', 'credits', 'docs'];

type Props = {
    params: Promise<{ locale: string; slug: string }>;
};

export default async function Page({ params }: Props) {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();
    return <UnderConstruction locale={locale} />;
}

export function generateStaticParams() {
    return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;
    if (!isLocale(locale)) notFound();

    return getStaticPageMetadata(locale, 'credits', `/${slug}`, { noindex: true });
}
