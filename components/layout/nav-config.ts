import { getNavbarMessage } from '@/lib/translations';
import type { AppLocale } from '@/lib/locales';

export type MenuItem = {
    label: string;
    href: string;
    external?: boolean;
};

export type MenuGroup = {
    label: string;
    items: MenuItem[];
};

const navGroupLabels: Record<AppLocale, { platform: string; insight: string; about: string }> = {
    ko: { platform: 'Our Platform', insight: 'Insight & Blog', about: 'About Us' },
    en: { platform: 'Our Platform', insight: 'Insight & Blog', about: 'About Us' },
    es: { platform: 'Nuestra Plataforma', insight: 'Insight & Blog', about: 'Nosotros' },
};

export function buildMenus(locale: AppLocale): MenuGroup[] {
    const g = navGroupLabels[locale];
    return [
        {
            label: g.platform,
            items: [
                { label: getNavbarMessage(locale, 'item.label.CBAM', 'CBAM'), href: '/cbam' },
                { label: getNavbarMessage(locale, 'item.label.ProductCarbonFootprint', 'PCF'), href: '/pcf' },
                { label: getNavbarMessage(locale, 'item.label.Scope3', 'Scope3'), href: '/scope3' },
                { label: getNavbarMessage(locale, 'item.label.HanaecoAI', 'Hanaeco.AI'), href: '/hana-ai' },
                { label: getNavbarMessage(locale, 'item.label.CarbonAccounting', 'Carbon Accounting'), href: '/platform' },
                { label: getNavbarMessage(locale, 'item.label.ClimateManagement', 'Climate Management'), href: '/solution' },
            ],
        },
        {
            label: g.insight,
            items: [
                { label: getNavbarMessage(locale, 'item.label.Insight', 'Insight'), href: '/insight' },
                { label: getNavbarMessage(locale, 'item.label.Blog', 'Blog'), href: '/blog' },
            ],
        },
        {
            label: g.about,
            items: [
                { label: getNavbarMessage(locale, 'item.label.Partnership', 'Partnership'), href: '/partnership' },
                { label: getNavbarMessage(locale, 'item.label.Company', 'Company'), href: '/company' },
                { label: getNavbarMessage(locale, 'item.label.Recruit', 'Recruit'), href: '/recruit' },
            ],
        },
    ];
}
