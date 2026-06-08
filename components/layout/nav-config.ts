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
