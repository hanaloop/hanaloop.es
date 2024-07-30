import { DisplayItem } from "../libs/types";

export const content = {
  title_1 : "디지털 파트너 하나루프는 귀사의 탄소중립 여정에 힘을 실어드립니다.",
  title_2 : "우리 회사도 탄소관리 필요할까요?",
  title_3 : <h1>적합성을 인정받은 하나에코가 지원합니다.</h1>,
  subtitle_3: "로이드인증원(LRQA)으로부터 배출권거래제와 EU 탄소국경조정제도 적합성 국내 첫 검증의견서 획득",
  title_4: "탄소관리 하나에코와 함께하세요.",
};

export const hero = {
  title_1 : <h1>기업 활동 중 발생하는 온실가스</h1>,
  title_2: "AI기반 ",
  title_3 : <h1 className="inline">로 스마트하게 관리하세요!</h1>,
  title_link : "하나에코",
  subtitle_1 : "오늘날 체계적인 탄소 관리는 기업의 경쟁력입니다.",
  subtitle_2 : "EU CBAM, IFRS ISSB S1 S2 규제, EU 배터리 규제, ESG 공시 의무 등 지속적으로 강화되고 있는 국내외 기후 규제와 공시 의무를 신속히 준수하며 에너지 비용을 감축하고 기후 리스크를 완화시킬 수 있습니다.",
  button_1 : "솔루션 소개",
  button_2 : "문의하기",
  link_1: "https://drive.google.com/file/d/1i9ygnqL38AJ_A3w9m4fEOyQUpT4VmpM6/view",
  link_2: "/demo_request",
}

export const carbon_buddy = {
  title : "AI 기술을 활용하여 탄소 관리를 보다 직관적으로 할 수 있도록 돕습니다.",
  contents : [
    {
      sub_title : "빠른 규제 이해와 대응",
      sub_description : "생성형 AI를 통해 최신 규제를 신속하게 파악하고 대응할 수 있습니다.",
    },
    {
      sub_title : "직관적인 데이터 분석",
      sub_description : "딥러닝 기반의 분석으로 데이터를 쉽게 이해하고 활용할 수 있습니다.",
    },
    {
      sub_title : "간편한 리포트 생성",
      sub_description : "실시간으로 필요한 리포트를 간편하게 생성할 수 있습니다.",
    },
  ]
}

export const directory = {
  title : <p>차근차근 준비해 가는 탄소중립 여정에 <br/>하나루프가 함께합니다.</p>,
  subtitle : <p>지속적으로 강화되고 있는 기후환경규제와 공시 요구. 겁내지 마세요! <br/> 하나루프의 산업 디지털 전환 전문팀과 환경 전문가 네트워크가 함께 기업의 형편에 맞게 <br/> 지속가능성을 내재화하실 수 있도록 힘을 실어드리겠습니다.</p>,
  contents : [
      {
        title: "IFRS S1, S2",
        subtitle: "국제재무보고기준재단(IFRS) 산하 ISSB는 IFRS S1(일반)과 S2(기후)를 통해 글로벌 지속가능성 공시 규제를 확정했습니다. 기업은 공시기준에 따라 지속가능성 관련 위험을 관리하고 감축 목표를 달성하기 위한 전략 수립과 이행이 필요합니다.",
        link: "https://www.hanaloop.com/docs/x20_environment-general/2023-07-31-IFRS-ISSB-sustainability-disclosure-standards",
        img: "/images/directory_1.jpg",
      },
      {
        title: "CBAM",
        subtitle: "유럽연합(EU)은 2050년 탄소중립 실현을 목표로 탄소 누출 방지를 위해 탄소국경조정제도(CBAM)를 발효했습니다. EU를 필두로 미국, 영국, 일본 등 다수 국가에서 유사한 제도 도입을 고려하고 있어, 탄소 배출량의 분석과 감축은 국제시장 거래에 필수가 되었습니다.",
        link: "https://www.hanaloop.com/docs/x20_environment-general/2024-01-20-cbam-compliance",
        img: "/images/directory_2.jpg",
      },
      {
        title: "Scope 3",
        subtitle: "기업 활동의 탄소배출관리 범위가 가치사슬망으로 확대되었습니다. 이제는 협력사와 공급망, 고객의 탄소 배출까지 고려해야 합니다. ESG, PCAF, IFRS, CDP, CSDDD 등 탄소 감축을 목표로 하는 다양한 규제와 공시 요구에 응하기 위해 Scope 3 배출량 산정은 선택이 아닌 필수 과제입니다.",
        link: "https://brunch.co.kr/@hanaloop/3",
        img: "/images/directory_3.jpg",
      },
    ],
}

export const request = {
  title : "체계적인 탄소관리, 하나에코와 시작하세요.",
  button_1 : "솔루션 소개",
  button_2 : "문의하기",
}

export const elements: DisplayItem[] = [
  {
    title: "글로벌 기후환경 규제권 안에 있다면",
    subtitle: "지속적으로 강력해지고 있는 국내외 규제를 준수하기 위해 필요합니다.",
    imageUrl: "/images/platform/card-cbam_pic.jpeg",
    description: [
      <span key="1">
        <b>배출권거래제, 목표관리제</b>
      </span>,
      <span key="2">
        <b>EU 탄소국경조정제도, 배터리 규제</b>
      </span>,
      <span key="3">
        <b>공급망 실사 CSDDD</b>{" "}
      </span>
    ],
  },
  {
    title: "고객사가 ESG, 탄소중립에 선도적인 기업이라면",
    subtitle: "고객사가 협력사를 관리하고 있다면 원활한 사업 관계를 위해 필요합니다.",
    imageUrl: "/images/platform/card-standards_pic.jpeg",
    description: [
      <span key="1">
        <b>Scope 1, Scope 2</b>{" "}
      </span>,
      <span key="2">
        <b>Scope 3</b>
      </span>,
      <span key="3">
        <b>제품 탄소발자국</b>{" "}
      </span>,
    ],
  },
  {
    title: "투자자로부터  탄소 공시 요구를 받고 있다면",
    subtitle: "회사의 리스크를 관리하며 지속가능성 관련 정보 공시 요구에 응하기 위해 필요합니다.",
    imageUrl: "/images/platform/card-scope3_pic.jpeg",
    description: [
      <span key="1">
        <b>CDP</b>
      </span>,
      <span key="2">
        <b>IFRS S1, S2</b>{" "}
      </span>,
      <span key="3">
        <b>지속가능성보고서, GRI</b>
      </span>,
    ],
  },
  {
    title: "친환경, 지속가능성을 선도하는 기업이라면",
    subtitle: "지구환경에 의식 있는 소비자와 지구의 외침에 응답하기 위해 필요합니다.",
    imageUrl: "/images/platform/card-products.jpeg",
    description: [
      <span key="0">
        <b>투명한 환경영향 공시</b>
      </span>,
      <span key="1">
        <b>지속가능성 지표 공시</b>{" "}
      </span>,
      <span key="2">
        <b>지속가능성 보고서</b>{" "}
      </span>,
    ],
  },
];

export const elements_2: DisplayItem[] = [
  {
    title: "EU 탄소국경조정제도 (CBAM) 준수",
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
    title: "배출권거래제, 목표관리제 준수",
    subtitle: "Korea Emissions Trading System",
    imageUrl: "/images/platform/card-standards_pic.jpeg",
    description: [
      <span key="1">
        <b>검증 수준의 데이터 관리</b>{" "}
      </span>,
      <span key="2">
        <b>배출권 장부 관리</b>
      </span>,
      <span key="3">
        <b>배출량 목표 설정과 배출 시나리오 분석</b>{" "}
      </span>,
    ],
  },
  {
    title: "IFRS(TCFD) / CDP / GRI 준수",
    subtitle: "Climate Normatives, Frameworks and Standards",
    imageUrl: "/images/platform/card-scope3_pic.jpeg",
    description: [
      <span key="1">
        <b>표준 보고서에서 요구되는 리포팅</b>
      </span>,
      <span key="2">
        <b>리스크 관리</b>{" "}
      </span>,
      <span key="3">
        <b>배출 시나리오 분석</b>
      </span>,
    ],
  },
  {
    title: "ESG & 스코프 3 관리",
    subtitle: "ESG Data Encompassing the Supply Chain",
    imageUrl: "/images/platform/card-products.jpeg",
    description: [
      <span key="0">
        <b>정성적인 데이터 관리</b>
      </span>,
      <span key="1">
        <b>협력사, 공급망 관리</b>{" "}
      </span>,
      <span key="2">
        <b>Scope 3용 산업 표준 배출계수 제공</b>{" "}
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
        <b>공정 과정 탄소 내재 배출 산정</b>{" "}
      </span>,
      <span key="2">
        <b>원부자재 내재 배출 관리</b>{" "}
      </span>,
      <span key="3">
        <b>비용 효율성 분석</b>{" "}
      </span>,
    ],
  },
];

export const features: DisplayItem[] = [
  {
    icon: "",
    title: "탄소 회계",
    description:
      <p>온실가스 배출량과 감축량을 탄소로 환산합니다. <br/>데이터 수집 자동화, 휴먼에러 방지, 보고서 출력 등 실무자의 편의를 제공합니다.</p>,
  },
  {
    icon: "",
    title: "협업",
    description: "기업의 환경안전팀, ESG 전략팀 등 관리자와 실무자, 컨설턴트과 검증심사관 간 원활한 협업이 가능해집니다.",
  },
  {
    icon: "",
    title: "전략",
    description:
      <p>온실가스 배출량 시각화 및 인공지능을 통해 목표를 관리합니다.<br/> 경제성 분석에 따른 감축 전략 추천 및 실행 상황을 모니터링합니다.</p>,
  },
  {
    icon: "",
    title: "가치사슬 관리",
    description: "Scope 1, 2와 원자재의 생산부터 유통, 폐기까지 모든 가치사슬 상에서 발생하는 배출인 Scope 3를 고려합니다.",
  },
];

export const customers: DisplayItem[] = [
  {
    title: "이마트",
    sourceUrl: "https://store.emart.com/main/main.do",
    imageUrl: "/images/partners/partner-emart_logo.png",
    description: "고객사 | ESG경영 선도기업 이마트",
    imgHeight: 4
  },
  {
    title: "벽산",
    sourceUrl: "http://www.byucksan.com/",
    imageUrl: "/images/partners/byucksan-logo.png",
    description: "고객사 | 늘 푸른 산처럼 아름다운 생활공간을 창조 | 지속가능경영 혁신기업",
    imgHeight: 6
  },
  {
    title: "서경빌딩",
    sourceUrl: "https://naver.me/FKKMDLip",
    imageUrl: "/images/partners/seokyungbuildng-logo.png",
    description: "고객사 | 고객의 윤택(潤澤)함을 책임지는 산업 건물",
    imgHeight: 6
  },
  {
    title: "삼아알미늄",
    sourceUrl: "https://www.sama-al.com/",
    imageUrl: "/images/partners/samaalminum-logo.png",
    description: "고객사 | 고품질의 알루미늄 호일 및 포장재 생산 기술",
    imgHeight: 4
  },
  {
    title: "대호에이엘",
    sourceUrl: "http://www.daeho-al.com/",
    imageUrl: "/images/partners/daehoal-logo.png",
    description: "고객사 | 알루미늄, 철도자량, 청정환기시스템",
    imgHeight: 4
  },
  {
    title: "삼양스틸",
    sourceUrl: "https://www.samyangchem.co.kr/better/steel.php",
    imageUrl: "https://www.samyangchem.co.kr/images/common/logo.svg",
    description: "고객사 | 고품질 라미네이팅 강판 생산",
    imgHeight: 4
  },
  {
    title: "동인화학",
    sourceUrl: "https://www.donginchem.co.kr/",
    imageUrl: "https://www.donginchem.co.kr/imz/mainlogo2.jpg?v=1",
    description: "고객사 | 항공우주 산업 및 위성사업",
    imgHeight: 6
  },
  {
    title: "경기환경에너지진흥원",
    sourceUrl: "https://www.ggeea.or.kr/index.php",
    imageUrl: "https://www.ggeea.or.kr/theme/ggeea/img/logo.png",
    description: "고객사 | 환경분야 전문 기관 설립을 통한 환경 사업의 공공성과 도민에게 제공되는 환경서비스 질 제고",
    imgHeight: 7
  },
  {
    title: "넷제로 2050 기후재단",
    sourceUrl: "http://netzero2050.or.kr/",
    imageUrl: "/images/partners/netzero2050_climatefoundation-logo.png",
    description: "파트너사 | 2050년까지 이산화탄소 배출을 완전히 제거하여 탄소중립을 달성하기 위한 국제사회, 정부와 기업, 지구촌 시민사회의 노력을 적극 지원하고 실천 동기를 부여하고 있음",
    imgHeight: 6
  },
  {
    title: "(주)켐토피아",
    sourceUrl: "http://www.chemtopia.net/",
    imageUrl: "/images/partners/partner-chemtopia_logo.png",
    description: "파트너사 | Korea's Leading Regulatory compliance company",
    imgHeight: 6
  },
  {
    title: "로엔컨설팅",
    sourceUrl: "http://www.roenconsulting.com/main/index.html",
    imageUrl: "/images/partners/partner-roen_logo.png",
    description: "파트너사 | 환경 토탈솔루션 컨설팅 | 정책 연구, 온실가스 감축, 탄소자산관리, 신재생에너지사업 등 기후변화 대응 컨설팅",
    imgHeight: 8
  },
  {
    title: "한컨설팅그룹",
    sourceUrl: "https://hcg.kr",
    imageUrl: "/images/partners/partner-hanconsulting_logo.png",
    description: "파트너사 | ESG 경영 성공파트너 | 차별화된 ESG경영 컨설팅과 탄소중립 컨설팅",
    imgHeight: 4
  },
  {
    title: "ICH(International Centre for Hydropower)",
    sourceUrl: "https://ich.no/",
    imageUrl: "https://www.norwep.com/partners/international-centre-for-hydropower-ich/_/image/b4146fa1-b991-4341-948a-f27eea36d681:30fc4c589b594ed01e0afba64b7bfe16ea1804ee/width-340/International-Centre-for-Hydropower-ICH_large.png",
    description: "파트너사 | The purpose of ICH is to raise the standards of competence of the industry personnel and promote the sustainable development of hydropower.",
    imgHeight: 12
  },
  {
    title: "지속가능발전경영센터",
    sourceUrl: "http://k-sdmi.co.kr/",
    imageUrl: "/images/partners/SDMI.jpeg",
    description: "파트너사 | 지속가능발전에 관한 정책과 기업의 지속가능성장에 필요한 컨설팅 제공",
    imgHeight: 6
  },
  {
    title: "미래이앤아이",
    sourceUrl: "http://www.fa119.com/main",
    imageUrl: "/images/partners/FA119.png",
    description: "파트너사 | 공장자동제어 센서신호처리 분야의 전문 제조업체",
    imgHeight: 8
  },
  {
    title: "아이이에스지",
    sourceUrl: "https://i-esg.io/",
    imageUrl: "/images/partners/IESG-logo.png",
    description: "파트너사 | 데이터 기반 ESG 특화 통합 디지털 솔루션 제공",
    imgHeight: 4
  },
  {
    title: "슬록",
    sourceUrl: "http://www.sloc.or.kr/",
    imageUrl: "/images/partners/SLOC.png",
    description: "파트너사 | 뷰티기업 지속가능성 검증 및 컨설팅 제공",
    imgHeight: 4
  },
  {
    title: "샘물터",
    sourceUrl: "https://saemmulter.com/",
    imageUrl: "https://saemmulter.com/images/logo.svg",
    description: "파트너사 | 지하수 솔루션 전문 회사",
    imgHeight: 10
  },
  {
    title: "휙페이",
    sourceUrl: "https://hwikpay.com/",
    imageUrl: "/images/partners/hwikpay.png",
    description: "파트너사 | 스마트 공유 경제 플랫폼인 TAGLO는 멀티 레이어를 통해 휙 생태계를 확장합니다. ",
    imgHeight: 8
  },
  {
    title: "디토이에스지",
    sourceUrl: "https://www.ditoesg.ai/",
    imageUrl: "/images/partners/DITOESG.jpeg",
    description: "파트너사 | 사회적 가치와 재무적 성과를 연계한 ESG 솔루션 제공",
    imgHeight: 8
  },
  {
    title: "로이드인증원",
    sourceUrl: "https://www.lrqa.com/ko-kr/",
    imageUrl: "/images/partners/LRQA.jpg",
    description: "파트너사 | 글로벌 인증 및 검증 서비스를 제공",
    imgHeight: 4
  },
  {
    title: "중소벤처기업부",
    sourceUrl: "https://www.mss.go.kr/site/smba/main.do",
    imageUrl: "/images/partners/korea-mss-gov.png",
    description: "지원 기관 | 활력 중소기업, 함께 잘사는 나라",
    imgHeight: 6
  },
  {
    title: "중소기업기술정보진흥원",
    sourceUrl: "https://www.tipa.or.kr/",
    imageUrl: "/images/partners/TIPA.png",
    description: "지원 기관 | 중소기업의 R&D 파트너",
    imgHeight: 10
  },
  {
    title: "서울소셜벤처허브",
    sourceUrl: "https://svhc.or.kr/",
    imageUrl: "/images/partners/seoulsocialventurehub-logo.png",
    description: "지원 기관 | 소셜벤처를 지원",
    imgHeight: 6
  },
  {
    title: "하이서울기업협회",
    sourceUrl: "https://www.hiseoulbiz.org/",
    imageUrl: "/images/partners/hiseoulbizassoc-logo.png",
    description: "협력 기관 | 기업 성장 지원",
    imgHeight: 10
  },
]
