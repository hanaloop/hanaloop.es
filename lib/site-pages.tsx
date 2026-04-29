import type { ComponentType } from 'react';
import HomePage from '@/legacy/site-pages/index';
import CbamPage from '@/legacy/site-pages/cbam';
import CompanyPage from '@/legacy/site-pages/company';
import HanaAiPage from '@/legacy/site-pages/hana-ai';
import PartnershipPage from '@/legacy/site-pages/partnership';
import PcfPage from '@/legacy/site-pages/pcf';
import PlatformPage from '@/legacy/site-pages/platform';
import RecruitPage from '@/legacy/site-pages/recruit';
import Scope3Page from '@/legacy/site-pages/scope3';
import SolutionPage from '@/legacy/site-pages/solution';
import CompanyProfileRequestPage from '@/legacy/content/standalone-pages/company_profile_request.mdx';
import CreditsPage from '@/legacy/content/standalone-pages/credits.mdx';
import DemoRequestPage from '@/legacy/content/standalone-pages/demo_request.mdx';
import PrivacyPage from '@/legacy/content/standalone-pages/privacy.mdx';
import RecruitApplyPage from '@/legacy/content/standalone-pages/recruit_apply.md';

const legacyPages = {
  cbam: CbamPage,
  company: CompanyPage,
  'hana-ai': HanaAiPage,
  partnership: PartnershipPage,
  pcf: PcfPage,
  platform: PlatformPage,
  recruit: RecruitPage,
  scope3: Scope3Page,
  solution: SolutionPage,
} satisfies Record<string, ComponentType>;

const standalonePages = {
  company_profile_request: {
    component: CompanyProfileRequestPage,
    title: '회사소개서 요청',
    description: '회사소개서 요청',
  },
  credits: {
    component: CreditsPage,
    title: 'Credits',
    description: 'Credits',
  },
  demo_request: {
    component: DemoRequestPage,
    title: '데모 요청',
    description: '데모 요청',
  },
  privacy: {
    component: PrivacyPage,
    title: '개인정보 처리방침',
    description: '하나루프 개인정보 처리방침',
  },
  recruit_apply: {
    component: RecruitApplyPage,
    title: '지원',
    description: '하나루프 채용 지원',
  },
} satisfies Record<
  string,
  {
    component: ComponentType<any>;
    title: string;
    description: string;
  }
>;

export const homePage = HomePage;
export const marketingPageSlugs = Object.keys(legacyPages);
export const standalonePageSlugs = Object.keys(standalonePages);
export const routePageSlugs = [...marketingPageSlugs, ...standalonePageSlugs];

export function getMarketingPage(slug: string) {
  return legacyPages[slug as keyof typeof legacyPages];
}

export function getStandalonePage(slug: string) {
  return standalonePages[slug as keyof typeof standalonePages];
}
