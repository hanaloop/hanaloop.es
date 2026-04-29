import { DisplayItem } from "../libs/types"

export const content = {
  section1_title: "데이터가 보이면 전략이 보입니다",
  section1_body: <>인류가 대면하고 있는 가장 큰 위기, 기후변화 <br/> 
    그의 주범인 온실가스 <br/>
    하지만 눈에 보이지 않는 온실가스를 <br/> 
    하나루프의 <b>SaaS형 지속가능성 플랫폼 하나에코</b>가 보여드리겠습니다.</>,
  section1_quote: <>“측정할 수 없으면 관리할 수 없고, 관리할 수 없으면 개선시킬 수도 없다”</>,
  section1_highlight: <><span className="font-bold text-lg">SaaS형 지속가능성 플랫폼 하나에코</span>는<br /> 
    온실가스 배출활동을 관리하며, 배출량을 계산하고 분석합니다. <br/>  
    <ul>
    하나에코를 통해 기관/기업은 <br/>
    기후관련 규제에 대응하고, <br/>
    기후 리스크를 줄이며,<br/> 
    에너지 소비를 줄이고, <br/>
    ESG 포트폴리오를 향상시킬 수 있습니다. <br/>
    궁극적으로 탄소발자국을 줄이며, 기후위기 완화에 기여할 수 있습니다.
    </ul></>,

section2_title: "Hana.eco Features",
section3_title: "Hana.eco가 지원하는 표준 보고 항목",
section4_title: "기대 효과",
}

export const features: DisplayItem[] = [
  { 
    title: "탄소 어카운팅",
    subtitle: "Carbon Accounting",
    imageUrl: "/images/platform/ecoloop_accounting_scrn.png",
    description: [<>기업의 활동으로 인해 발생하는 온실가스 배출량과 감축량을 <br/> 손쉽고 정확하게 탄소로 환산합니다. 
      </>],
    expected: [
      'Scope 1, Scope 2, Scope 3 고려',
      '인공지능 기반 데이터 분석, 휴먼에러 최소화',
      '한전과 연동 - 전력사용량 수집 자동화',
      '손쉬운 증빙자료 관리'
    ]
  },
  {
    title: "협업",
    subtitle: "Collaboration & Productivity",
    imageUrl: "/images/platform/ecoloop_collab_scrn.png",
    description: [<>관리자와 실무자, 컨설턴트 간의 협업 환경을 제공합니다. <br/>검증 기관과의 원활한 검증 과정 진행을 통해 탄소중립 효율성을 극대화합니다. </>],
    expected: [
      '사용자 권한에 따른 허용업무 관리',
      '사용자간 메시지 관리',
      '사용자 맞춤형 보고기능'
    ]
  },
  {
    title: "전략",
    subtitle: "Decarbonization & Action",
    imageUrl: "/images/platform/ecoloop_strategy_scrn.png",
    description: [<>기업의 탄소중립으로의 여정을 데이터 분석으로 지원합니다. <br/>감축사업을 효과적으로 이행하실 수 있습니다. </>],
    expected: [
      '온실가스 배출량의 전략적 시각화',
      '통계 모델, AI를 통한 목표 관리',
      '경제성 분석에 따른 감축전략 추천 및 실행 상황 모니터링'
    ]
  },
  {
    title: "가치사슬 관리",
    subtitle: "Value Chain Emission Management",
    imageUrl: "/images/platform/ecoloop_valuechain_scrn.png",
    description: [<>산업 평균치 데이터 활용 및 Divide & Conquer 전략으로 가치사슬망 배출원단위를 연결합니다.<br/> 다국어 지원으로 해외 파트너사도 쉽게 사용 가능합니다.</>],
    expected: []
  }
]

export const benefits: DisplayItem[] = [
  {
    title: "비용 절감",
    subtitle: "1",
    description: [<>
      <ul>
      <li>환경관리 업무효율 향상 ~70%</li>
      <li>누출 에너지 발견 등 에너지 절감 ~5%</li>
      </ul>
    </>]
  },
  {
    title: "위험요소 감소",
    subtitle: "2",
    description:[ <>
      <ul>
      <li>민첩한 환경 규제 대응</li>
      <li>배출권 매도 매입에 관한 전략</li>
      </ul>
    </>]
  }, 
  {
    title: "기업 이미지 및 경쟁력 향상",
    subtitle: "3",
    description:[ <>
      <ul>
      <li>ESG 지수 상승</li>
      <li>파트너 선정 시 이점</li>
      </ul>
    </>]
  },
]


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