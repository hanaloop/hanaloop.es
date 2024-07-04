import { DisplayItem } from "../libs/types";

export const content = {
  section1_title: (
    <span>
      {/* 기업활동 중 발생하는 온실가스
      <br /> 하나에코로 간편하게 관리하세요! */}
    </span>
  ),
  section2_title: "탄소관리 왜 필요할까요?",
  section3_title: "Feature Heading3",
  section4_title: "탄소관리 하나에코와 함께하세요",
  section5_title: "국내 첫 검증의견서 획득",
  section6_title: "함께하는 고객사",
  section1_link1: (
    <div>
      <span className="font-bold text-white ">솔루션 소개</span>{" "}
    </div>
  ),
  section1_link2: (
    <div>
      <span className="font-bold text-white ">문의 하기</span>{" "}
    </div>
  ),
  section1_href: "/demo_request",
};

export const directory = [
  {
    title: "IFRS",
    subtitle: "IFRS S1,S2 공시기준에 따라 지속가능성 관련 위험을 관리하고 감축 목표를 달성하기 위한 전략 수립이 필요합니다. ",
    link: "https://www.hanaloop.com/docs/x20_environment-general/2023-07-31-IFRS-ISSB-sustainability-disclosure-standards",
    img: "/images/directory_1.jpg",
  },
  {
    title: "CBAM",
    subtitle: "탄소 배출량(Scope1,2,3)의 분석과 관리 및 파악은 EU 시장 거래에 필수입니다.",
    link: "https://www.hanaloop.com/docs/x20_environment-general/2024-01-20-cbam-compliance",
    img: "/images/directory_2.jpg",
  },
  {
    title: "Scope 3",
    subtitle: "ESG, PCAF, CBAM, IFRS[S2] 등 다양한 탄소감축을 목표로하는 규제에 Scope 3 배출량 산정은 선택이 아닌 필수 과제입니다.",
    link: "https://brunch.co.kr/@hanaloop/3",
    img: "/images/directory_3.jpg",
  },
];

export const elements: DisplayItem[] = [
  {
    title: "EU 탄소국경조정제도 (CBAM) 대응",
    subtitle: "Carbon Border Adjustment Mechanism",
    imageUrl: "/images/platform/card-cbam_pic.jpeg",
    description: [
      <span key="1">
        <b>제품 관리</b>
      </span>,
      <span key="2">
        <b>원부자재 공급 관리</b>
      </span>,
      <span key="3">
        <b>CBAM 보고서 출력</b>{" "}
      </span>,
      <span key="3">
        <b>배출계수 제공</b>{" "}
      </span>,
    ],
  },
  {
    title: "IFRS(TCFD) / CDP / GRI 준수",
    subtitle: "Climate Normatives, Frameworks and Standards",
    imageUrl: "/images/platform/card-standards_pic.jpeg",
    description: [
      <span key="1">
        <b>표준 보고서에서 요구되는 리포팅</b>{" "}
      </span>,
      <span key="2">
        <b>리스크 관리</b>
      </span>,
      <span key="3">
        <b>시나리오 분석</b>{" "}
      </span>,
    ],
  },
  {
    title: "ESG & 스코프 3 관리",
    subtitle: "ESG Data Encompassing the Supply Chain",
    imageUrl: "/images/platform/card-scope3_pic.jpeg",
    description: [
      <span key="1">
        <b>정성적인 데이터 관리</b>
      </span>,
      <span key="2">
        <b>협력사 관리</b>{" "}
      </span>,
      <span key="3">
        <b>Scope 3용 산업 표준 배출계수 제공</b>
      </span>,
    ],
  },
  {
    title: "제품 탄소발자국 관리",
    subtitle: "Product Carbon Footprint",
    imageUrl: "/images/platform/card-products.jpeg",
    description: [
      <span key="0">
        <b>지구 온난화 카테고리의 LCA 산정</b>
      </span>,
      <span key="1">
        <b>공정과정 탄소 내재배출 산정</b>{" "}
      </span>,
      <span key="2">
        <b>원부자재 내재배출 관리</b>{" "}
      </span>,
      <span key="3">
        <b>비용 효율성 분석</b>{" "}
      </span>,
    ],
  },
  // {
  //   title: "배출권거래제, 목표관리제 대응",
  //   subtitle: "Emissions Trading System",
  //   imageUrl: "/images/platform/card-ets.jpeg",
  //   description: [
  //     <span key="0">
  //       <b>검증 수준 데이터 관리 </b>
  //     </span>,
  //     <span key="1">
  //       <b>배출권 장부 관리 </b>{" "}
  //     </span>,
  //     <span key="2">
  //       <b>배출량 목표 설정 및 배출 시나리오 분석</b>
  //     </span>,
  //   ],
  // },
];

// https://icons.getbootstrap.com/
export const features: DisplayItem[] = [
  {
    icon: "",
    title: "탄소 회계",
    description:
      "기업의 활동으로 인해 발생하는 온실가스 배출량과 감축량을 탄소로 환산합니다. 데이터 수집 자동화, 휴먼에러 방지, 보고서 출력 등 실무자의 편의를 제공합니다.",
  },
  {
    // https://fonts.google.com/icons?icon.query=diversity&icon.set=Material+Icons
    icon: "",
    title: "협업",
    description: "기업의 환경안전팀, ESG전략팀 등 관리자와 실무자, 컨설턴트과 검증심사관 간 원활한 협업이 가능해집니다.",
  },
  {
    icon: "",
    title: "전략",
    description:
      "온실가스 배출량 시각화를 통해 인사이트를 제공하고, 통계 모델, 인공지능을 통해 목표를 관리합니다. 경제성 분석에 따른 감축전략 추천 및 실행 상황을 모니터링합니다.",
  },
  {
    icon: "",
    title: "가치사슬 관리",
    description: "Scope 1, 2와 원자재의 생산부터 유통, 폐기까지 모든 가치사슬 상에서 발생하는 배출인 Scope 3를 고려합니다.",
  },
];

export const reasons: DisplayItem[] = [
  {
    // Heroicon
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
        />
      </svg>
    ),
    title: "환경규제 대응",
  },
  {
    // Material icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
    title: "투자자 요청",
  },
  {
    // https://uxwing.com/svg-icon-editor/
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
        />
      </svg>
    ),
    title: "비즈니스 위험 완화",
  },
  {
    // Material icon
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <circle cx="12" cy="6" r="2" />
            <path d="M21,16v-2c-2.24,0-4.16-0.96-5.6-2.68l-1.34-1.6C13.68,9.26,13.12,9,12.53,9h-1.05c-0.59,0-1.15,0.26-1.53,0.72l-1.34,1.6 C7.16,13.04,5.24,14,3,14v2c2.77,0,5.19-1.17,7-3.25V15l-3.88,1.55C5.45,16.82,5,17.48,5,18.21C5,19.2,5.8,20,6.79,20H9v-0.5 c0-1.38,1.12-2.5,2.5-2.5h3c0.28,0,0.5,0.22,0.5,0.5S14.78,18,14.5,18h-3c-0.83,0-1.5,0.67-1.5,1.5V20h7.21 C18.2,20,19,19.2,19,18.21c0-0.73-0.45-1.39-1.12-1.66L14,15v-2.25C15.81,14.83,18.23,16,21,16z" />
          </g>
        </g>
      </svg>
    ),
    title: "고객사와 소비자의 요구",
  },
];

export const customers: DisplayItem[] = [
  {
    title: "이마트",
    sourceUrl: "https://emartdt.ai/",
    imageUrl: "/images/partners/partner-emart_logo.png",
    description: "고객사 | ESG경영 선도기업 이마트",
  },
  {
    title: "벽산",
    sourceUrl: "http://www.byucksan.com/",
    imageUrl: "/images/partners/byucksan-logo.png",
    description: "고객사 | 늘 푸른 산처럼 아름다운 생활공간을 창조 | 지속가능경영 혁신기업",
  },
  {
    title: "서경빌딩",
    sourceUrl: "https://naver.me/FKKMDLip",
    imageUrl: "/images/partners/seokyungbuildng-logo.png",
    description: "고객사 | 고객의 윤택(潤澤)함을 책임지는 산업 건물",
  },
  {
    title: "삼아알미늄",
    sourceUrl: "https://www.sama-al.com/",
    imageUrl: "/images/partners/samaalminum-logo.png",
    description: "고객사 | 고품질의 알루미늄 호일 및 포장재 생산 기술",
  },
  {
    title: "대호에이엘",
    sourceUrl: "http://www.daeho-al.com/",
    imageUrl: "/images/partners/daehoal-logo.png",
    description: "고객사 | 알루미늄, 철도자량, 청정환기시스템",
  },
  // {
  //   title: "플랜닥스",
  //   sourceUrl: "https://plandocs.kr/",
  //   imageUrl: "/images/partners/plandocs-logo.png",
  //   description: "고객사 | 플랜닥스는 의료기기 및 의약품, 의료기구, 의료용품 등 다양한 미용성형 전문 제품 및 서비스를 제공하는 플랫폼 기업."
  // },
];

export const partners: DisplayItem[] = [
  {
    title: "넷제로 2050 기후재단",
    sourceUrl: "http://netzero2050.or.kr/",
    imageUrl: "/images/partners/netzero2050_climatefoundation-logo.png",
    description:
      "협력사 | 2050년까지 이산화탄소 배출을 완전히 제거하여 탄소중립을 달성하기 위한 국제사회, 정부와 기업, 지구촌 시민사회의 노력을 적극 지원하고 실천 동기를 부여하고 있음",
  },
  {
    title: "(주)켐토피아",
    sourceUrl: "http://www.chemtopia.net/",
    imageUrl: "/images/partners/partner-chemtopia_logo.png",
    description: "Partner | Korea's Leading Regulatory compliance company",
  },
  {
    title: "로엔컨설팅",
    sourceUrl: "http://www.roenconsulting.com/main/index.html",
    imageUrl: "/images/partners/partner-roen_logo.png",
    description: "파트너사 | 환경 토탈솔루션 컨설팅 | 정책 연구, 온실가스 감축, 탄소자산관리, 신재생에너지사업 등 기후변화 대응 컨설팅",
  },
  {
    title: "한컨설팅그룹",
    sourceUrl: "https://hcg.kr",
    imageUrl: "/images/partners/partner-hanconsulting_logo.png",
    description: "파트너사 | ESG 경영 성공파트너 | 차별화된 ESG경영 컨설팅과 탄소중립 컨설팅",
  },
];

export const programs: DisplayItem[] = [
  {
    title: "중소벤처기업부",
    sourceUrl: "https://www.mss.go.kr/site/smba/main.do",
    imageUrl: "/images/partners/korea-mss-gov.png",
    description: "지원 기관 | 활력 중소기업, 함께 잘사는 나라",
  },
  {
    title: "중소기업기술정보진흥원",
    sourceUrl: "https://www.tipa.or.kr/",
    imageUrl: "/images/partners/korea-tipa-gov.gif",
    description: "지원 기관 | 중소기업의 R&D 파트너",
  },
  {
    title: "서울소셜벤처허브",
    sourceUrl: "https://svhc.or.kr/",
    imageUrl: "/images/partners/seoulsocialventurehub-logo.png",
    description: "지원 기관 | 소셜벤처를 지원",
  },
  {
    title: "하이서울기업협회",
    sourceUrl: "https://www.hiseoulbiz.org/",
    imageUrl: "/images/partners/hiseoulbizassoc-logo.png",
    description: "협력 기관 | 기업 성장 지원",
  },
];
