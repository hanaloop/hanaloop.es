import koCode from '@/legacy/i18n/ko/code.json';
import enCode from '@/legacy/i18n/en/code.json';
import esCode from '@/legacy/i18n/es/code.json';
import koNavbar from '@/legacy/i18n/ko/docusaurus-theme-classic/navbar.json';
import enNavbar from '@/legacy/i18n/en/docusaurus-theme-classic/navbar.json';
import esNavbar from '@/legacy/i18n/es/docusaurus-theme-classic/navbar.json';
import koFooter from '@/legacy/i18n/ko/docusaurus-theme-classic/footer.json';
import enFooter from '@/legacy/i18n/en/docusaurus-theme-classic/footer.json';
import esFooter from '@/legacy/i18n/es/docusaurus-theme-classic/footer.json';
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
