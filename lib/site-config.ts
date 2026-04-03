import type { AppLocale } from './locales';
import { getMessage } from './translations';

export const siteConfig = {
  title: 'HanaLoop',
  tagline: 'Carbon Management and Climate Compliance Platform',
  url: 'https://www.hanaloop.com',
  image: '/images/hanaloop-social-card_ko.jpg',
};

export function getHomeMetadataText(locale: AppLocale) {
  return {
    title: getMessage(locale, 'index.meta_title', siteConfig.title),
    description: getMessage(locale, 'index.meta_description', siteConfig.tagline),
  };
}
