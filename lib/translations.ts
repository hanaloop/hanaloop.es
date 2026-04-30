import type { AppLocale } from './locales';

type MessageRecord = Record<string, { message?: string }>;

const bundles: Record<AppLocale, { code: MessageRecord; navbar: MessageRecord; footer: MessageRecord }> = {
  ko: { code: {}, navbar: {}, footer: {} },
  en: { code: {}, navbar: {}, footer: {} },
  es: { code: {}, navbar: {}, footer: {} },
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
