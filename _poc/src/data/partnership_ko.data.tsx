import { DisplayItem, PageSection } from "../libs/types"

export const content: PageSection = {
  title: "파트너십",
  items: [{
      title: "SaaS Solution Partner Program",
      description: <><b>내용 -</b> &nbsp;
        기업이 Hana.eco SaaS 솔루션을 고객에게 제공하고 판매 수수료를 받을 수 있도록 하는 프로그램입니다.<br />
          <b>대상 -</b> &nbsp;
          비즈니스 및 환경 컨설팅 회사, 회계 및 법률 회사와 같은 컨설팅 서비스 제공자.
        </>,
    }, {
      title: "Technology Partner Program",
      description: <><b>내용 -</b> &nbsp;
        기업이 Hana.eco OnPrem 시스템을 고객에게 독립형 또는 솔루션 제품군의 일부로 제공할 수 있도록 하는 프로그램입니다.<br />
          <b>대상 -</b> &nbsp;
          hana.eco를 솔루션 제품군에 통합하려는 IT 제품을 제공하는 솔루션 제공업체입니다.
        </>,
    }]
}

export const partners_tech: PageSection = {
  title: "",
  items: [{
    title: "켐토피아",
    sourceUrl: "http://www.roenconsulting.com/main/index.html",
    imageUrl: "/images/partners/partner-chemtopia_logo.png",
    description: "파트너사 | 환경 토탈솔루션 컨설팅 | 정책 연구, 온실가스 감축, 탄소자산관리, 신재생에너지사업 등 기후변화 대응 컨설팅"
  }]
}

export const partners_saas: PageSection = {
  title: "",
  items: [{
    title: "로엔 컨설팅",
    sourceUrl: "http://www.roenconsulting.com/main/index.html",
    imageUrl: "/images/partners/partner-roen_logo.png",
    description: "파트너사 | 환경 토탈솔루션 컨설팅 | 정책 연구, 온실가스 감축, 탄소자산관리, 신재생에너지사업 등 기후변화 대응 컨설팅"
  },
  {
    title: "한 컨설팅 그룹",
    sourceUrl: "https://hcg.kr",
    imageUrl: "/images/partners/partner-hanconsulting_logo.png",
    description: "파트너사 | ESG 경영 성공파트너 | 차별화된 ESG경영 컨설팅과 탄소중립 컨설팅"
  }]
}

export const alliances: PageSection = {
  title: "Strategic Alliances",
  items: [{
    title: "Korea Carbon Project (Project organized by SNU and sponsored by KEITI)",
    // sourceUrl: "http://www.roenconsulting.com/main/index.html",
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
