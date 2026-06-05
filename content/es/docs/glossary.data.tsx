export type GlossaryTerm = {
  title: string;
  description: string;
  source?: string;
  sourceUrl?: string;
};

const termsKo_: GlossaryTerm[] = [
  {
    title: '대표농도경로(RCP, Representative Concentration Pathway) 시나리오',
    description:
      'RCP 시나리오는 인간 활동이 대기에 미치는 복사불균형량으로 온실가스 농도를 정의한 경로 시나리오입니다. RCP8.5는 감축 없이 현재 추세를, RCP2.6은 강한 감축 경로를 의미합니다.',
    source: '환경부',
    sourceUrl:
      'http://www.me.go.kr/home/web/dictionary/read.do?pagerOffset=340&maxPageItems=10&maxIndexPages=10&searchKey=&searchValue=&menuId=10448&orgCd=&boardMasterId=&dicSeq=347&decorator=',
  },
  {
    title: '탄소 어카운팅(Carbon Accounting)',
    description: '기업의 사업활동으로 인해 발생하는 온실가스 배출량과 감축량을 탄소로 환산하는 과정을 말합니다.',
    source: '요다위키',
    sourceUrl: 'https://yoda.wiki/wiki/Carbon_accounting',
  },
  {
    title: '온실가스 배출권거래제',
    description:
      '정부가 사업장에 배출권을 할당하고, 실 배출량에 따라 배출권을 거래하도록 하는 제도로 기업의 감축 활동을 유도합니다.',
    source: '한국환경공단',
    sourceUrl: 'https://www.keco.or.kr/kr/business/climate/contentsid/1520/index.do',
  },
  {
    title: '온실가스',
    description:
      '지구온난화를 유발하는 대기 중 기체 물질로, 이산화탄소(CO2), 메탄(CH4), 아산화질소(N2O) 등이 대표적입니다.',
    source: '환경부',
    sourceUrl:
      'https://www.me.go.kr/home/web/dictionary/read.do?pagerOffset=0&maxPageItems=10&maxIndexPages=10&searchKey=&searchValue=&menuId=10448&orgCd=&condition.createDeptName=%EC%98%A8%EC%8B%A4%EA%B0%80%EC%8A%A4&boardMasterId=&dicSeq=896&decorator',
  },
  {
    title: '탄소중립',
    description:
      '배출량을 최대한 줄이고 남은 배출량을 흡수·제거해 순배출량을 0으로 만드는 상태(Net Zero)를 의미합니다.',
    source: '탄소중립 녹색성장위원회',
    sourceUrl: 'https://www.2050cnc.go.kr/base/contents/view?contentsNo=9&menuLevel=2&menuNo=11',
  },
];

const termsEn_: GlossaryTerm[] = [
  {
    title: 'CBAM (Carbon Border Adjustment Mechanism)',
    description:
      'A policy by the EU that applies a carbon price to certain imported goods to prevent carbon leakage and ensure fair competition.',
    source: 'European Commission',
    sourceUrl: 'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en',
  },
  {
    title: 'CCUS (Carbon Capture, Utilization, and Storage)',
    description:
      'Technologies that capture carbon dioxide from emission sources, then utilize it or store it underground to reduce atmospheric release.',
    source: 'Korea Policy Briefing',
    sourceUrl: 'https://www.korea.kr/news/visualNewsView.do?newsId=148886348',
  },
  {
    title: 'PPM (parts per million)',
    description: 'A unit expressing concentration as one part per one million parts of the whole.',
  },
  {
    title: 'IPCC (Intergovernmental Panel on Climate Change)',
    description:
      'A UN body that assesses climate change science, impacts, and response options for policymakers worldwide.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Intergovernmental_Panel_on_Climate_Change',
  },
  {
    title: 'Business as Usual (BAU)',
    description:
      'A baseline scenario that assumes no additional climate policy intervention beyond current measures.',
  },
];

export const termsKo = termsKo_.sort((a, b) => a.title.localeCompare(b.title));
export const termsEn = termsEn_.sort((a, b) => a.title.localeCompare(b.title));
