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
    </ul></>
}

export const features: DisplayItem[] = [
  {
    title: "탄소 어카운팅",
    subtitle: "Carbon Accounting",
    imageUrl: "/images/platform/ecoloop_accounting_scrn.png",
    description: <>하나에코(hana.eco)는 기업의 활동으로 인해 발생하는 온실가스 배출량과 감축량을 손쉽고 정확하게 탄소로 환산합니다.
        기업의 직접 활동에 따른 직접 배출(스코프1)과 구매한 전기, 가스 등에 따른 간접 배출(스코프2), 원자재의 생산부터 유통, 폐기까지 모든 가치사슬 상에서 발생하는 배출(스코프3)까지 고려합니다.
        <ul>
        <li>인공지능 기반 데이터 분석, 휴먼에러 최소화</li>
        <li>한전과 연동 - 전력사용량 수집 자동화</li>
        <li>손쉬운 증빙자료 관리</li>
        </ul>
      </>
  },
  {
    title: "협업",
    subtitle: "Collaboration & Productivity",
    imageUrl: "/images/platform/ecoloop_collab_scrn.png",
    description: <>하나에코는 1차적으로 기업의 환경안전팀, ESG전략팀 등 관리자와 실무자, 컨설턴트 간의 협업 환경을 제공합니다. 2차적으로 검증 기관과의 원활한 검증 과정 진행을 통해 탄소중립 효율성을 극대화합니다. 
      <ul>
      <li>사용자 권한에 따른 허용업무 관리</li>
      <li>사용자간 메시지 관리</li>
      <li>사용자 맞춤형 보고기능</li>
      </ul>
      </>
  },
  {
    title: "전략",
    subtitle: "Decarbonization & Action",
    imageUrl: "/images/platform/ecoloop_strategy_scrn.png",
    description: <>하나에코는 기업의 탄소중립으로의 여정을 데이터 분석으로 지원합니다. 감축사업을 효과적으로 이행하실 수 있습니다.
      <ul>
      <li>온실가스 배출량의 전략적 시각화</li>
      <li>통계 모델, AI를 통한 목표 관리</li>
      <li>경제성 분석에 따른 감축전략 추천 및 실행 상황을 모니터링</li>
      </ul>
    </>
  },
  {
    title: "가치사슬 관리",
    subtitle: "Value Chain Emission Management",
    imageUrl: "/images/platform/ecoloop_valuechain_scrn.png",
    description: <>산업 평균치 데이터 활용 및 Divide & Conquer 전략으로 가치사슬망 배출원단위를 연결합니다. 다국어 지원으로 해외 파트너사도 쉽게 사용 가능합니다.</>
  }
]

export const benefits: DisplayItem[] = [
  {
    title: "비용 절감",
    subtitle: "1",
    description: <>
      <ul>
      <li>환경관리 업무효율 향상 ~70%</li>
      <li>누출 에너지 발견 등 에너지 절감 ~5%</li>
      </ul>
    </>
  },
  {
    title: "위험요소 감소",
    subtitle: "2",
    description: <>
      <ul>
      <li>민첩한 환경 규제 대응</li>
      <li>배출권 매도 매입에 관한 전략</li>
      </ul>
    </>
  }, 
  {
    title: "기업 이미지 및 경쟁력 향상",
    subtitle: "3",
    description: <>
      <ul>
      <li>ESG 지수 상승</li>
      <li>파트너 선정 시 이점</li>
      </ul>
    </>
  },
]
