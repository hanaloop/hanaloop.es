import { PlatformHero, type PlatformHeroCopy, type PlatformHeroRelatedLink } from '@/components/features/platform-hero';
import type { AppLocale } from '@/lib/locales';

type SolutionHeroSectionProps = {
    locale: AppLocale;
};

const relatedLinks: PlatformHeroRelatedLink[] = [
    { label: { ko: 'CBAM', en: 'CBAM', es: 'CBAM' }, href: '/cbam' },
    { label: { ko: '제품탄소발자국', en: 'PCF', es: 'PCF' }, href: '/pcf' },
    { label: { ko: 'Scope 3', en: 'Scope 3', es: 'Scope 3' }, href: '/scope3' },
    { label: { ko: 'Hana.eco AI', en: 'Hana.eco AI', es: 'Hana.eco AI' }, href: '/hana-ai' },
    { label: { ko: '탄소회계', en: 'Carbon Accounting', es: 'Contabilidad de Carbono' }, href: '/platform' },
    { label: { ko: '기후 경영', en: 'Climate Strategy', es: 'Estrategia Climatica' }, href: '/solution', current: true },
];

const copy: Record<AppLocale, PlatformHeroCopy> = {
    ko: {
        heading: 'Carbon management platform',
        description: '하나루프의 탄소경영 플랫폼 Hana.eco와 다양한 솔루션을 확인해보세요.',
        navAriaLabel: '관련 페이지 이동',
    },
    en: {
        heading: 'Carbon management platform',
        description: "Discover HanaLoop's carbon management platform Hana.eco and our range of solutions.",
        navAriaLabel: 'Related pages',
    },
    es: {
        heading: 'Carbon management platform',
        description: 'Descubra la plataforma de gestion de carbono Hana.eco de HanaLoop y nuestras soluciones.',
        navAriaLabel: 'Paginas relacionadas',
    },
};

export function SolutionHeroSection({ locale }: SolutionHeroSectionProps) {
    return (
        <PlatformHero
            locale={locale}
            ariaLabel="Solution Hero"
            backgroundImageUrl="/images/revamp/scope3-hero.png"
            copy={copy}
            relatedLinks={relatedLinks}
        />
    );
}
