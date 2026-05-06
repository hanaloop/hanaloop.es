import { UnderConstruction } from '@/components/features/under-construction';
import { defaultLocale, isLocale, locales } from '@/lib/locales';

const slugs = ['company', 'partnership', 'platform', 'recruit', 'privacy', 'credits', 'recruit_apply', 'docs'];

type Props = {
    params: Promise<{ locale: string; slug: string }>;
};

export default async function Page({ params }: Props) {
    const { locale } = await params;
    const resolvedLocale = isLocale(locale) ? locale : defaultLocale;
    return <UnderConstruction locale={resolvedLocale} />;
}

export function generateStaticParams() {
    return locales.filter((locale) => locale !== defaultLocale).flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}
