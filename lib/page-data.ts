import * as cbamKo from '@/src/data/cbam_ko.data';
import * as cbamEn from '@/src/data/cbam_en.data';
import * as cbamEs from '@/src/data/cbam_es.data';
import * as companyKo from '@/src/data/company_ko.data';
import * as companyEn from '@/src/data/company_en.data';
import * as companyEs from '@/src/data/company_es.data';
import * as hanaAiKo from '@/src/data/hana-ai_ko.data';
import * as hanaAiEn from '@/src/data/hana-ai_en.data';
import * as hanaAiEs from '@/src/data/hana-ai_es.data';
import * as indexKo from '@/src/data/index_ko.data';
import * as indexEn from '@/src/data/index_en.data';
import * as indexEs from '@/src/data/index_es.data';
import * as partnershipKo from '@/src/data/partnership_ko.data';
import * as partnershipEn from '@/src/data/partnership_en.data';
import * as partnershipEs from '@/src/data/partnership_es.data';
import * as pcfKo from '@/src/data/pcf_ko.data';
import * as pcfEn from '@/src/data/pcf_en.data';
import * as pcfEs from '@/src/data/pcf_es.data';
import * as platformKo from '@/src/data/platform_ko.data';
import * as platformEn from '@/src/data/platform_en.data';
import * as platformEs from '@/src/data/platform_es.data';
import * as recruitKo from '@/src/data/recruit_ko.data';
import * as recruitEn from '@/src/data/recruit_en.data';
import * as recruitEs from '@/src/data/recruit_es.data';
import * as scope3Ko from '@/src/data/scope3_ko.data';
import * as scope3En from '@/src/data/scope3_en.data';
import * as scope3Es from '@/src/data/scope3_es.data';
import * as solutionKo from '@/src/data/solution_ko.data';
import * as solutionEn from '@/src/data/solution_en.data';
import * as solutionEs from '@/src/data/solution_es.data';
import type { AppLocale } from './locales';

const pageData = {
  index: { ko: indexKo, en: indexEn, es: indexEs },
  cbam: { ko: cbamKo, en: cbamEn, es: cbamEs },
  company: { ko: companyKo, en: companyEn, es: companyEs },
  'hana-ai': { ko: hanaAiKo, en: hanaAiEn, es: hanaAiEs },
  partnership: { ko: partnershipKo, en: partnershipEn, es: partnershipEs },
  pcf: { ko: pcfKo, en: pcfEn, es: pcfEs },
  platform: { ko: platformKo, en: platformEn, es: platformEs },
  recruit: { ko: recruitKo, en: recruitEn, es: recruitEs },
  scope3: { ko: scope3Ko, en: scope3En, es: scope3Es },
  solution: { ko: solutionKo, en: solutionEn, es: solutionEs },
} as const;

export type PageDataKey = keyof typeof pageData;

export function getPageData<T extends PageDataKey>(key: T, locale: AppLocale) {
  return pageData[key][locale] as (typeof pageData)[T][AppLocale];
}
