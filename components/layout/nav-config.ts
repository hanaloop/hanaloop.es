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

export function buildMenus(locale: AppLocale, t: (key: string) => string): MenuGroup[] {
    return [
        {
            label: t('platform'),
            items: [
                { label: t('items.Overview'), href: '/overview' },
                { label: t('items.carbonAccounting'), href: '/platform' },
                { label: t('items.CBAM'), href: '/cbam' },
                { label: t('items.ProductCarbonFootprint'), href: '/pcf' },
                { label: t('items.SupplyChain'), href: '/supply' },
                { label: t('items.HanaecoAI'), href: '/hana-ai' },
                { label: t('items.Cases'), href: '/cases' },
            ],
        },
        {
            label: t('insight'),
            items: [
                { label: t('items.Insight'), href: '/docs/intro' },
                { label: t('items.CBAMGuides'), href: '/docs/x20_environment-general/CBAM/2026-02-01-CBAM-implementing-regulations-definitive-period' },
                { label: t('items.EURegulations'), href: '/docs/x20_environment-general/EU-regulations/2025-02-27-EU-omnibus-CSRD-CSDDD-CBAM-taxonomy' },
                { label: t('items.GlobalRegulations'), href: '/docs/x20_environment-general/global-regulations/2025-07-08-CCA-SB253' },
                { label: t('items.Scope3Guides'), href: '/docs/x20_environment-general/Scope 3/2024-09-18-scope3-reporting-stages' },
                { label: t('items.Blog'), href: '/blog' },
            ],
        },
        {
            label: t('about'),
            items: [
                { label: t('items.Partnership'), href: '/partnership' },
                { label: t('items.Company'), href: '/company' },
            ],
        },
    ];
}
