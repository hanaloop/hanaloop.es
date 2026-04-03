import { DisplayItem, PageSection } from "../libs/types"

export const content: PageSection = {
  title: "Partnership",
  items: [{
      title: "SaaS Solution Partner Program",
      description: <><b>WHAT IS IT</b> &nbsp;
        Program that enables companies to offer Hana.eco SaaS solution to their customers and receive commission on sales.<br />
          <b>FOR WHOM</b> &nbsp;
          Consulting service providers such as Business & Environment consulting firms, and Accounting and Law Firms.
        </>,
    },  {
      title: "Technology Partner Program",
      description: <><b>WHAT IS IT</b> &nbsp;
      Program that enables companies to offer Hana.eco OnPrem system to their customers as standalone or part of their solution suite.<br />
        <b>FOR WHOM</b> &nbsp;
        Solution providers with IT product that want to incorporate hana.eco to their solution suite.
      </>,
    }]
}
export const partners: DisplayItem[] = [
  {
    title: "Roen Consulting",
    sourceUrl: "http://www.roenconsulting.com/main/index.html",
    imageUrl: "/images/partners/partner-roen_logo.png",
    description: "Partner | 환경 토탈솔루션 컨설팅 | 정책 연구, 온실가스 감축, 탄소자산관리, 신재생에너지사업 등 기후변화 대응 컨설팅"
  },
  {
    title: "Han Consulting Group",
    sourceUrl: "https://hcg.kr",
    imageUrl: "/images/partners/partner-hanconsulting_logo.png",
    description: "파트너사 | ESG 경영 성공파트너 | 차별화된 ESG경영 컨설팅과 탄소중립 컨설팅"
  }
]

export const alliances: PageSection = {
  title: "Strategic Alliances",
  items: [{
    title: "Korea Carbon Project (Project organized by SNU and sponsored by KEITI)",
    sourceUrl: "http://www.roenconsulting.com/main/index.html",
    description: "Korea's nation-wide GHG Inventory Project"
  },
  {
    title: "NET ZERO 2050 기후재단",
    sourceUrl: "http://netzero2050.or.kr/",
    imageUrl: "/images/partners/netzero2050_climatefoundation-logo.png",
    description: "협력사 | 2050년까지 이산화탄소 배출을 완전히 제거하여 탄소중립을 달성하기 위한 국제사회, 정부와 기업, 지구촌 시민사회의 노력을 적극 지원하고 실천 동기를 부여하고 있음"
  },
  {
    title: "International Centre for Hydropower (ICH)",
    sourceUrl: "https://ich.no/",
    description: "The purpose of ICH is to raise the standards of competence of the industry personnel and promote the sustainable development of hydropower"
  }]
}



export const tcfd_topics: DisplayItem[] = [
  {
    title: "Strategy",
    description: [
      "A) Describe the climate-related risks and opportunities the organization has identified over the short, medium, and long term.",
      "B) Describe the impact of climate-related risks and opportunities on the organization’s businesses, strategy, and financial planning."
    ]
  },
  {
    title: "Metrics and Targets",
    description: [
      "a) Disclose the metrics used by the company to assess climate-related risks and opportunities in line with its strategy and risk management process.",
      "b) Disclose Scope 1, Scope 2, and, if appropriate, Scope 3 greenhouse gas (GHG) emissions, and the related risks.",
      "c) Describe the targets used by the company to manage climate-related risks and opportunities and performance against targets."
    ]
  }
]

export const cdp_topics: DisplayItem[] = [
  {
    title: "C4 Targets and performance",
    description: [
      "C4.1: Emissions targets", 
      "C4.3: Emissions reduction initiatives"
    ]
  },
  {
    title: "C6 Emissions data",
    description: [
      "C6.1: Scope 1 emissions data",
      "C6.2: Scope 2 emissions reporting",
      "C6.3: Scope 2 emissions data",
      "C6.7: Biogenic carbon data",
      "C6.7a: Biogenic carbon data",
      "C6.10: Emissions intensities",
    ]
  },
  {
    title: "C7 Emissions breakdown",
    description: [
      "C7.1: Scope 1 breakdown: GHGs",
      "C7.2: Scope 1 breakdown: country/area/region",
      "C7.3: Scope 1 breakdown: business breakdown",
      "C7.5: Scope 2 breakdown: country/area/region",
      "C7.6: Scope 2 breakdown: business breakdowns",
      "C7.9: Emissions performance"
    ]
  },
  {
    title: "C8 Energy",
    description: [
      "C8.2: Energy-related activities"
    ]
  }
]

export const gri_topics: DisplayItem[] = [
  {
    title: "GRI 302: Energy 2016",
    description: [
      "Disclosure 302-1: Energy consumption within the organization",
      "Disclosure 302-2: Energy consumption outside of the organization (2022-Q4)",
      "Disclosure 302-3: Energy intensity",
      "Disclosure 302-4: Reduction of energy consumption"
    ]
  },
  {
    title: "GRI 305: Emissions",
    description: [
      "Disclosure 305-1: Direct (Scope 1) GHG emissions",
      "Disclosure 305-2: Energy indirect (Scope 2) GHG emissions",
      "Disclosure 305-3: Other indirect (Scope 3) GHG emissions (2023-Q2)",
      "Disclosure 305-4: GHG emissions intensity",
      "Disclosure 305-5: Reduction of GHG emissions",
      "Disclosure 305-6: Emissions of ozone-depleting substances (ODS)",
      "Disclosure 305-7: Nitrogen oxides (NOx), sulfur oxides (SOx), and other significant air emissions",
    ]
  }
]

export const topics: DisplayItem[][] = [
  tcfd_topics, gri_topics, cdp_topics
]