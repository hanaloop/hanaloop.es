import koCode from '@/i18n/ko/code.json';
import enCode from '@/i18n/en/code.json';
import esCode from '@/i18n/es/code.json';
import koNavbar from '@/i18n/ko/docusaurus-theme-classic/navbar.json';
import enNavbar from '@/i18n/en/docusaurus-theme-classic/navbar.json';
import esNavbar from '@/i18n/es/docusaurus-theme-classic/navbar.json';
import koFooter from '@/i18n/ko/docusaurus-theme-classic/footer.json';
import enFooter from '@/i18n/en/docusaurus-theme-classic/footer.json';
import esFooter from '@/i18n/es/docusaurus-theme-classic/footer.json';
import type { AppLocale } from './locales';

type MessageRecord = Record<string, { message?: string }>;

const bundles: Record<AppLocale, { code: MessageRecord; navbar: MessageRecord; footer: MessageRecord }> = {
  ko: { code: koCode, navbar: koNavbar, footer: koFooter },
  en: { code: enCode, navbar: enNavbar, footer: enFooter },
  es: { code: esCode, navbar: esNavbar, footer: esFooter },
};

function readMessage(messages: MessageRecord, key: string, fallback: string) {
  return messages[key]?.message ?? fallback;
}

export function getMessage(locale: AppLocale, key: string, fallback = key) {
  return readMessage(bundles[locale].code, key, fallback);
}

export function getNavbarMessage(locale: AppLocale, key: string, fallback = key) {
  return readMessage(bundles[locale].navbar, key, fallback);
}

export function getFooterMessage(locale: AppLocale, key: string, fallback = key) {
  return readMessage(bundles[locale].footer, key, fallback);
}
