import { DisplayItems } from "../../libs/types"

const features: DisplayItems[] = [
  {
    title: "탄소 어카운팅",
    subtitle: "Carbon Accounting",
    description: <>에코루프는 기업의 활동으로 인해 발생하는 온실가스 배출량과 감축량을 손쉽고 정확하게 탄소로 환산합니다.
        기업의 직접 활동에 따른 직접 배출(스코프1)과 구매한 전기, 가스 등에 따른 간접 배출(스코프2), 원자재의 생산부터 유통, 폐기까지 모든 가치사슬 상에서 발생하는 배출(스코프3)까지 고려합니다.
        <ul>
        <li>휴먼에러 최소화</li>
        <li>한전과 연동 - 전력사용량 수집 자동화</li>
        <li>인공지능 기반 데이터 분석 및 시각화</li>
  
        </ul>
      </>
  },
  {
    title: "협업",
    subtitle: "Collaboration & Productivity",
    description: <>에코루프는 1차적으로 기업의 환경안전팀, ESG전략팀 등 관리자와 실무자, 컨설턴트 간의 협업 환경을 제공합니다. 2차적으로 검증 기관과의 원활한 검증 과정 진행을 통해 탄소중립 효율성을 극대화합니다. 
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
    description: <>에코루프는 기업의 탄소중립으로의 여정을 데이터 분석으로 지원합니다.
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
    description: <>산업 평균치 데이터 활용 및 Divide & Conquer 전략으로 가치사슬망 배출원단위를 연결합니다. </>
  }
]

const benefits: DisplayItems[] = [
  {
    title: "비용 절감",
    subtitle: "1",
    description: <>
      <ul>
      <li>환경관리 소요 인건비 절감 ~70%</li>
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

module.exports = {
  features,
  benefits
}
