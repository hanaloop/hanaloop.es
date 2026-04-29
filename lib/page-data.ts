import * as cbamKo from '@/legacy/data/cbam_ko.data';
import * as cbamEn from '@/legacy/data/cbam_en.data';
import * as cbamEs from '@/legacy/data/cbam_es.data';
import * as companyKo from '@/legacy/data/company_ko.data';
import * as companyEn from '@/legacy/data/company_en.data';
import * as companyEs from '@/legacy/data/company_es.data';
import * as hanaAiKo from '@/legacy/data/hana-ai_ko.data';
import * as hanaAiEn from '@/legacy/data/hana-ai_en.data';
import * as hanaAiEs from '@/legacy/data/hana-ai_es.data';
import * as indexKo from '@/legacy/data/index_ko.data';
import * as indexEn from '@/legacy/data/index_en.data';
import * as indexEs from '@/legacy/data/index_es.data';
import * as partnershipKo from '@/legacy/data/partnership_ko.data';
import * as partnershipEn from '@/legacy/data/partnership_en.data';
import * as partnershipEs from '@/legacy/data/partnership_es.data';
import * as pcfKo from '@/legacy/data/pcf_ko.data';
import * as pcfEn from '@/legacy/data/pcf_en.data';
import * as pcfEs from '@/legacy/data/pcf_es.data';
import * as platformKo from '@/legacy/data/platform_ko.data';
import * as platformEn from '@/legacy/data/platform_en.data';
import * as platformEs from '@/legacy/data/platform_es.data';
import * as recruitKo from '@/legacy/data/recruit_ko.data';
import * as recruitEn from '@/legacy/data/recruit_en.data';
import * as recruitEs from '@/legacy/data/recruit_es.data';
import * as scope3Ko from '@/legacy/data/scope3_ko.data';
import * as scope3En from '@/legacy/data/scope3_en.data';
import * as scope3Es from '@/legacy/data/scope3_es.data';
import * as solutionKo from '@/legacy/data/solution_ko.data';
import * as solutionEn from '@/legacy/data/solution_en.data';
import * as solutionEs from '@/legacy/data/solution_es.data';
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
