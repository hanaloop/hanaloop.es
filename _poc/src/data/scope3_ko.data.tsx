

export const hero = {
    title : 'Hana.eco Scope3',
    subtitle : '기업의 Scope3 관리 Hana.eco 솔루션으로 효율적으로 관리하세요.',
    link_1: "/company_profile_request",
    link_2: "/demo_request",
    second_title: "Scope3 관리, 왜 필요할까요?"
}

export const section_title = {
    process: "Scope3 관리 프로세스",
    features: "Scope3 솔루션 주요 기능",
    articles: "Scope3 이해를 위한 하나루프의 인사이트 모음",
    features_subtitle: "하나에코 Sopce3 솔루션을 통해 활동데이터와 배출계수 매핑 및 Scope3 카테고리 별 배출량 산정을 간편하게 관리하세요.",
}

export const features_1 = [
    {
        title: '대량의 활동데이터 간편한 관리',
        imageUrl: '/images/scope3-feature-1.png',
        descriptions: [
            {
                subTitle: "활동데이터 일괄 업데이트",
                content: "대량의 활동 데이터에 대해 범주 분류, 배출계수 매핑, 단위 변환, 배출량 산정을 지원합니다.",
            },
            {
                subTitle: "유사활동 그룹화 관리",
                content: "유사활동 항목을 그룹화하여 배출계수 관리 및 추적을 효율화합니다.",
            },
        ]
    },
    {
        title: '다양한 기준의 배출량 추이 시각화',
        imageUrl: '/images/scope3-feature-2.png',
        descriptions: [
            {
                subTitle: "직관적인 탄소배출 흐름 파악",
                content: '활동데이터 그룹, 산정 방식, 공급사별 배출량 등 다양한 분석 기준으로 시각화하여 탄소배출의 흐름을 손쉽게 파악할 수 있습니다.',
            },
            {
                subTitle: "고배출 파트 식별과 감축 전략 도출",
                content: 'Scope3 배출 통계를 통해 공급망 전반의 탄소 배출 경향과 고배출 파트를 식별하고 감축활동을 도출할 수 있습니다.',
            }
        ]
    },
] 

export const features_2 = [
    {
        title: '기후규제와 고객사 대응',
        descriptions: [
            'IFRS S2, TCFD, CDP, SBTi 등 Scope3 배출량공개를 요구하는  글로벌 공시 표준이 있습니다. 또한 글로벌 고객사는 납품업체의 Scope 3 데이터 제공을 요구하고 있습니다.'
        ]
    },
    {
        title: '그린워싱 방지 및 투명성 강화',
        descriptions: [
            'Scope 3 배출량을 제대로 관리하지 않으면 불완전하거나 왜곡된 정보로 인해 그린워싱 논란이 발생할 수 있습니다.SBTi, CDP 등 글로벌 평가기관은 Scope 3의 공개 여부와 정합성을 기업의 투명성 및 신뢰도 평가의 핵심 기준으로 삼고 있습니다.'
        ]
    },
    {
        title: '가치사슬에서 발생하는 리스크 관리',
        descriptions: [
            'Scope 3는 공급망 내의 간접배출을 포함하므로 다양한 리스크로 이어질 수 있습니다. 기후 리스크에 선제적으로 대응하기 위해서는 가치사슬 전반의 탄소배출 현황을 체계적으로 파악하고 관리하는 것이 중요합니다.'
        ]
    }
]

export const articles = [
    {
        title: 'Scope 3 업스트림부터 다운스트림까지',
        description: '기업의 가치사슬을 파악하고 관리하기 위해서는 Scope 3의 파악이 중요합니다. 기업의 전체 배출에서 Scope 3에서의 배출이 70~90% 이상을 차지한다는 사실을 감안할 때, 스코프3 관리는 배출량 감축 목표를 달성하기 위해서는 어떻게든 관리를 해야하는 범위입니다. 이번 시리즈에서는 가치사슬 내 온실가스 관리와 관련된 Scope 3의 개념, 용어 정의, 산정 방법을 설명합니다. 관리자는 지속가능성 보고서를 이해하고, 감축 전략과 위험 관리에 이를 적용하는 데 필요한 지식을 얻게 될 것입니다. 실무자는 Scope 3 배출을 관리하는 구체적인 방법을 이해할 수 있을 것입니다.',
        link: '/docs/x20_environment-general/Scope%203/2024-09-18-scope3-stream'
    },
    {
        title: '탄소관리의 필요성 및 Scope 3 보고단계',
        description: 'Scope 3는 공급망 전반의 탄소배출을 포함하는 중요한 범주로, 효과적인 탄소중립 전략 수립을 위해 반드시 관리되어야 합니다. 이 문서에서는 탄소관리의 중요성과 함께 Scope 3 보고 단계에 대해 단계별로 설명합니다.',
        link: '/docs/x20_environment-general/Scope%203/2024-09-18-scope3-reporting-stages'
    },
    {
        title: 'Scope 3 카테고리별 산정 방법',
        description: '카테고리별 산정방법 표 Scope 3 산정 방법에는 공급원별, 하이브리드, 평균데이터, 지출기반, 연료기반, 거리기반, 시나리오 방법이 있습니다. 각 산정방법의 특징과 조건 그리고 산정 시 필요한 데이터에 대해 알아보겠습니다.',
        link: '/docs/x20_environment-general/Scope%203/2024-09-18-scope3-calc-methods'
    },
    {
        title: '기업의 탄소관리: Scope3 배출량 산정 및 전략 수립',
        description: '탄소 중립을 향한 글로벌 흐름 속에서 기업의 탄소 배출 관리 역량이 점점 더 중요해지고 있습니다. 특히, 공급망과 연관된 Scope3 배출량의 산정 및 감축은 지속가능경영의 핵심 과제입니다. 하나루프는 기업이 체계적으로 Scope3 배출량을 산정하고 감축 전략을 수립할 수 있도록 지원하는 탄소 관리 플랫폼을 운영하고 있습니다.',
        link: '/blog/2025/20250221-scope3-management'
    },
    {
        title: '「Scope 3 온실가스 배출량 산정 및 보고 가이드라인」 공청회',
        description: '최근 글로벌 기업들이 ESG(환경·사회·지배구조) 경영을 강화하고 탄소중립 실현 요구가 높아지면서 기업 가치사슬의 Scope 3 온실가스 배출량 산정이 필수 과제로 떠오르고 있습니다. Scope 3는 기업의 공급망 전반과 조직 경계 밖에서 발생하는 온실가스를 포함하며, 이는 CDP 및 다양한 ESG 공시 요건에서도 점점 더 중요하게 다뤄지고 있습니다. 특히 EU의 CBAM(탄소국경조정제도) 등 글로벌 규제 강화로 인해 Scope 3 정보의 투명성과 정확성 확보가 더욱 강조되고 있습니다.',
        link: '/blog/2025/20250123-scope3-public-hearing'
    },
]


export const management_process = [
    {
        title: '1. Scope3 관리 역량 진단',
        descriptions: [
            "기업의 내부 역량 분석",
            "기업이 관리할 수 있는 Scope3 배출 카테고리 범위 정의"
        ]
    },
    {
        title: '2. Scope3 배출량 산정',
        descriptions: [
            "데이터 수집부터 산정",
            "산정 결과 검증",
            "기업 맞춤형 Scope3 배출 산정 프로세스 수립"
        ]
    },
    {
        title: '3. Scope3 배출량 및 리스크 예비 분석',
        descriptions: [
            "Scope3 배출 집약도 및 주요 배출원 분석",
            "카테고리별 배출 기여도 평가",
            "공급망 기반 리스크 예비 분석"
        ]
    },
    {
        title: '4. 규제 대응 전략, 리스크 관리 방안',
        descriptions: [
            "고객사 및 이해관계자 요구대응 방안",
            "IFRS, CDP 등 글로벌 보고 표준 적용 방안",
            "리스크 관리 방안"
        ]
    },
]

export const request = {
    title : "Scope3 컨설팅부터 관리까지, 하나에코와 시작하세요",
    button_1 : "솔루션 소개",
    button_2 : "문의하기",
  }
  