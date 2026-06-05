import { getInsightPostSlugs } from '@/lib/insight-content';
import { isLocale, locales, withLocalePath } from '@/lib/locales';
import { notFound, redirect } from 'next/navigation';

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

    if (!slug || slug.length === 0) {
        redirect(withLocalePath(locale, '/docs'));
    }

    redirect(withLocalePath(locale, `/docs/${slug.join('/')}`));
}

export function generateStaticParams() {
    return locales.flatMap((locale) => [
        { locale, slug: [] as string[] },
        ...getInsightPostSlugs(locale).map((slug) => ({ locale, slug })),
    ]);
}
