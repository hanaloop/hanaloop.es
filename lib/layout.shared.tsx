import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';
import type { AppLocale } from './locales';
import { getNavbarMessage } from './translations';
import { withLocalePath } from './locales';

export function baseOptions(locale: AppLocale): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },
    links: [
      {
        type: 'menu',
        text: getNavbarMessage(locale, 'item.label.Solution', 'Solution'),
        items: [
          { text: getNavbarMessage(locale, 'item.label.CBAM', 'CBAM'), url: withLocalePath(locale, '/cbam') },
          { text: getNavbarMessage(locale, 'item.label.ProductCarbonFootprint', 'PCF'), url: withLocalePath(locale, '/pcf') },
          { text: getNavbarMessage(locale, 'item.label.Scope3', 'Scope3'), url: withLocalePath(locale, '/scope3') },
          { text: getNavbarMessage(locale, 'item.label.HanaecoAI', 'Hanaeco.AI'), url: withLocalePath(locale, '/hana-ai') },
          { text: getNavbarMessage(locale, 'item.label.CarbonAccounting', 'Carbon Accounting'), url: withLocalePath(locale, '/platform') },
          { text: getNavbarMessage(locale, 'item.label.ClimateManagement', 'Climate Management'), url: withLocalePath(locale, '/solution') },
        ],
      },
      {
        type: 'menu',
        text: getNavbarMessage(locale, 'item.label.Resources', 'Resources'),
        items: [
          { text: getNavbarMessage(locale, 'item.label.Resources', 'Resources'), url: withLocalePath(locale, '/docs/intro') },
          { text: getNavbarMessage(locale, 'item.label.Blog', 'Blog'), url: withLocalePath(locale, '/blog') },
        ],
      },
      {
        type: 'menu',
        text: getNavbarMessage(locale, 'item.label.Company', 'Company'),
        items: [
          { text: getNavbarMessage(locale, 'item.label.Partnership', 'Partnership'), url: withLocalePath(locale, '/partnership') },
          { text: getNavbarMessage(locale, 'item.label.Company', 'Company'), url: withLocalePath(locale, '/company') },
          { text: getNavbarMessage(locale, 'item.label.Recruit', 'Recruit'), url: withLocalePath(locale, '/recruit') },
        ],
      },
      {
        text: 'Hana.eco',
        url: 'https://www.hana.eco',
        external: true,
      },
    ],
  };
}
