import { docsKo, docsEn, docsEs } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { docsRoute } from './shared';
import { defaultLocale, getLocale, type AppLocale } from './locales';

const docsSources = {
  ko: loader({
    baseUrl: docsRoute,
    source: docsKo.toFumadocsSource(),
    plugins: [],
  }),
  en: loader({
    baseUrl: '/en/docs',
    source: docsEn.toFumadocsSource(),
    plugins: [],
  }),
  es: loader({
    baseUrl: '/es/docs',
    source: docsEs.toFumadocsSource(),
    plugins: [],
  }),
} satisfies Record<AppLocale, ReturnType<typeof loader>>;

export const source = docsSources[defaultLocale];

export function getDocsSource(locale?: string) {
  return docsSources[getLocale(locale)];
}
