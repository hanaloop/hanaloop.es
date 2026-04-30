import Link from 'next/link';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

type CbamHeroSectionProps = {
    locale: AppLocale;
};

type RelatedLink = {
    label: Record<AppLocale, string>;
    href: string;
    current?: boolean;
};

const relatedLinks: RelatedLink[] = [
    { label: { ko: 'CBAM', en: 'CBAM', es: 'CBAM' }, href: '/cbam', current: true },
    { label: { ko: '제품탄소발자국', en: 'PCF', es: 'PCF' }, href: '/pcf' },
    { label: { ko: 'Scope 3', en: 'Scope 3', es: 'Scope 3' }, href: '/scope3' },
    { label: { ko: 'Hana.eco AI', en: 'Hana.eco AI', es: 'Hana.eco AI' }, href: '/hana-ai' },
    { label: { ko: '탄소회계', en: 'Carbon Accounting', es: 'Contabilidad de Carbono' }, href: '/platform' },
    { label: { ko: '기후경영', en: 'Climate Strategy', es: 'Estrategia Climática' }, href: '/solution' },
];

type HeroCopy = {
    heading: string;
    description: string;
    navAriaLabel: string;
};

const copy: Record<AppLocale, HeroCopy> = {
    ko: {
        heading: 'Carbon management platform',
        description: '하나루프의 탄소경영 플랫폼 Hana.eco와 다양한 솔루션을 확인해보세요.',
        navAriaLabel: '연관 페이지 이동',
    },
    en: {
        heading: 'Carbon management platform',
        description: "Discover HanaLoop's carbon management platform Hana.eco and our range of solutions.",
        navAriaLabel: 'Related pages',
    },
    es: {
        heading: 'Carbon management platform',
        description: 'Descubra la plataforma de gestión de carbono Hana.eco de HanaLoop y nuestras soluciones.',
        navAriaLabel: 'Páginas relacionadas',
    },
};

export function CbamHeroSection({ locale }: CbamHeroSectionProps) {
    const text = copy[locale];

    return (
        <section className="relative h-[330px] overflow-hidden text-white lg:h-[420px] xl:h-[480px]" aria-label="CBAM Hero">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/revamp/cbam-hero.png')" }} />
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center px-4 text-center">
                <h1 className="text-[42px] font-semibold leading-none tracking-[-0.02em] lg:text-[56px] 2xl:text-[64px]">{text.heading}</h1>
                <p className="mt-4 text-[16px] font-medium leading-[1.45] text-white/95 lg:text-[18px]">{text.description}</p>

                <nav className="gradient-border mt-12 flex h-[52px] items-center rounded-full bg-white/12 px-8 backdrop-blur-[8px]" aria-label={text.navAriaLabel}>
                    {relatedLinks.map((item, index) => (
                        <div key={item.href} className="flex items-center">
                            {item.current ? (
                                <span className="inline-flex h-8 min-w-0 items-center justify-center rounded-full border border-white/35 px-5 text-[21px] font-semibold tracking-[-0.25px] text-white" aria-current="page">
                                    {item.label[locale]}
                                </span>
                            ) : (
                                <Link href={withLocalePath(locale, item.href)} className="inline-flex h-8 items-center text-[21px] tracking-[-0.25px] text-white/95 transition hover:text-white">
                                    {item.label[locale]}
                                </Link>
                            )}
                            {index < relatedLinks.length - 1 ? <span className="mx-4 text-white/55">|</span> : null}
                        </div>
                    ))}
                </nav>
            </div>
        </section>
    );
}
