

export const hero = {
    title : 'Hana.eco Scope3',
    subtitle : '기업의 Scope3 관리 Hana.eco 솔루션으로 효율적으로 관리하세요',
    link_1: "/company_profile_request",
    link_2: "/demo_request",
    second_title: "HanaLoop CBAM 솔루션"
}

export const section_title = {
    process: "CBAM 인프라 도입 절차",
    features: "적합성 인증받은 CBAM 솔루션",
    articles: "CBAM 이해를 위한 하나루프의 인사이트 모음",
    plan: "Hana.eco CBAM Plan",
    features_subtitle: "로이드인증원(LRQA)으로부터 배출권거래제와 EU 탄소국경조정제도 적합성 국내 첫 검증의견서 획득",
}

export const features_1 = [
    {
        title: '대량의 활동데이터 간편한 관리',
        imageUrl: '/images/cbam-feature-1.png',
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
        title: 'CBAM 이란?',
        descriptions: [
            'CBAM(Carbon Border Adjustment Mechanism)은 EU의 탄소국경조정제도로, 수입 제품에 내재된 탄소배출량을 기준으로 비용을 부과합니다. 탄소배출 데이터를 정밀하게 관리하는 것이 중요합니다.'
        ],
        img_url: "/images/cbam-shipping.jpg"
    },
    {
        title: 'CBAM  컨설팅 및 솔루션',
        descriptions: [
            'HanaLoop는 CBAM 전문 컨설팅과 Hana.eco 솔루션을 통해, 기업의 효율적인 CBAM 대응을 지원합니다.Hana.eco의 CBAM 솔루션은 복잡한 데이터를 자동화하여,보고서 작성과 규제 대응을 간편하게 만들어 드립니다.'
        ],
        img_url: "/images/cbam-consulting.png"
    },
]

export const features_3 = [
    {
        title: '제품 및 전구물질 관리(CN 코드 관리)',
        descriptions: [
            '제품과 전구물질을 통합적으로 관리하고, CBAM 규제 대상 품목에 필요한 CN 코드를 체계적으로 등록 및 추적할 수 있습니다. 이를 통해 제품별 탄소배출 분석 및 보고에 필요한 기초 데이터를 손쉽게 확보할 수 있습니다.'
        ]
    },
    {
        title: 'Installation 설정, 공정 관리',
        descriptions: [
            '각 제조시설(Installation)의 정보와 생산 공정 흐름을 설정하고 관리할 수 있습니다. 이는 CBAM 보고서에 요구되는 배출 정보 및 공정별 배출 산정의 정확성을 높이는 데 중요한 역할을 합니다.'
        ],
    },
    {
        title: '제품 내재배출 산정 및 분석',
        descriptions: [
            '제품 생산 과정에서 발생하는 직접 및 간접 배출량을 제품 단위로 산정합니다. 산정 결과를 바탕으로 제품별 탄소 집약도, 고배출 요소, 개선 포인트 등을 분석할 수 있어, 규제 대응은 물론 탄소감축 전략 수립에도 유용합니다.'
        ],
    },
    {
        title: 'CBAM 보고서 생성',
        descriptions: [
            '수집된 활동 데이터와 배출 정보를 기반으로, CBAM 규정에 맞는 보고서를 자동 생성할 수 있습니다. 복잡한 규정 해석과 수작업 없이, 유럽 수출 기업의 CBAM 보고 의무 이행을 효율적으로 지원합니다.'
        ],
    },
]

export const plans = [
    {
        title: '스탠다드',
        color: 'bg-green-500',
        descriptions: [
            'CBAM 준수를 해야 하는 철강, 알루미늄 기업 대상',
            '단일 또는 다수 사업장의 탄소 관리 및 CBAM 기준 제품 탄소 발자국 관리'
        ]
    },
    {
        title: '공급망 - LITE',
        color: 'bg-blue-500',
        descriptions: [
            'CBAM 준수를 해야 하는 유통센터',
            '다수 협력사로부터 고유 내재배출량 수집, 추적, 관리'
        ],
    },
    {
        title: '공급망 - ENTERPRISE',
        color: 'bg-red-500',
        descriptions: [
            'CBAM 준수, 수십 개 공급사 보유',
            'LITE 기능 + 스탠다드 기능'
        ],
    },
]

export const articles = [
    {
        title: 'EU 옴니버스 패키지(Omnibus Package) CBAM 개편안 설명',
        description: '유럽연합 집행위원회(EU Commission)는 2025년 Omnibus 패키지의 일환으로 탄소국경조정제도(CBAM)의 간소화 제안을 발표하였습니다. 이번 개편안은 절차를 보다 효율적으로 만들기 위한 목적이지만, 일부에서는 이러한 변화가 기후 목표 달성에 악영향을 미칠 수 있다는 우려도 제기하고 있습니다. 본 기사에서는 문제-해결 형식으로 이번 제안의 핵심 내용을 정리하고, HanaLoop의 분석과 함께 주요 내용을 살펴봅니다.',
        link: '/docs/x20_environment-general/CBAM/2025-02-27-CBAM-Omnibus'
    },
    {
        title: 'CBAM(탄소국경조정제도) 인증서, 어떻게 준비해야하나요?',
        description: '본 문서는 2024년 12월 17일 CBAM 공식 웹사이트에 게재된 문서의 번역본입니다. 철강, 알루미늄 등 금속 산업에 종사하는 기업에서는 업데이트를 숙지하시기를 권장합니다. 출처: Carbon Border Adjustment Mechanism (CBAM), Questions and Answers, 17 December 2024',
        link: '/docs/x20_environment-general/CBAM/2025-01-16-cbam-faq'
    },
    {
        title: '탄소 국경 조정 메커니즘(CBAM) 질의응답 (FAQ)',
        description: '본 문서는 2024년 10월 24일 CBAM 공식 웹사이트에 게재된 문서의 번역본입니다. 철강, 알루미늄 등 금속 산업에 종사하는 기업에서는 업데이트를 숙지하시기를 권장합니다. 출처: Carbon Border Adjustment Mechanism (CBAM), Questions and Answers, 24 October 2024',
        link: '/docs/x20_environment-general/CBAM/2024-10-24-CBAM-Questions-and-Answers'
    },
    {
        title: 'EU CBAM(탄소국경조정제도)에 하나에코로 신속히 대응하기',
        description: '철강, 알루미늄 등 탄소다배출산업 기업들은 원활한 사업 영위을 위해 EU CBAM(탄소국경조정제도)에 준비되어 있어야 합니다. 하나에코 | Hana.eco는 이미 한국 배출권거래제/목표과리제 대상 기업을 지원하고 있으며 CBAM 대응을 위해 최적화되어 있습니다. 기업은 하나에코와 같은 기후규제대응 통합 시스템을 통해 기업의 탄소관리와 기후규제 준수 프로세스를 간편하게 할 수 있습니다.',
        link: '/docs/x20_environment-general/CBAM/2024-01-20-cbam-compliance'
    },
    {
        title: '탄소국격조정 매커니즘(CBAM) 보고서에서 포함할 내용',
        description: '올해 10월 1일부터 유럽연합(EU) 탄소국경조정 메커니즘(CBAM)시행에 따라 시멘트, 전기, 비료, 철 및 철강 제품, 알루미늄, 수소 등 6대 품목의 수출기업들은 탄소 배출량을 의무적으로 보고해야 합니다. 보고서에 포함할 내용을 간략히 짚어보겠습니다.',
        link: '/docs/x20_environment-general/CBAM/2023-09-28-CBAM-reporting'
    },
    {
        title: 'CBAM 첫 보고서 컨설팅과 솔루션 도입 중 고객들에게 받은 질문과 답변 | CBAM Q&A',
        description: '이 내용은 오늘(2024년 2월 28일) 있었던 하나루프의 넷제로 네트워킹 "CBAM데이"에서 공유했던 내용을 정리한 것입니다. 오늘 와주신 전문가 네트워크, 파트너분들도 공감하며 가장 유용했다고 말씀해주셨던 세션, CBAM 대상 기업 실무자 Q&A 1탄 소개합니다. 1탄은 During engagement, 2탄은 After report completed 로 나누어 소개하겠습니다.',
        link: '/docs/x20_environment-general/CBAM/2023-02-28-CBAM-qna'
    },
    {
        title: 'EU 탄소국경조정제도(CBAM) 규제 개요 - 관리자 및 실무자용',
        description: '안녕하세요? 하나루프와 기후 인사이트니다. 며칠 전 EU 탄소국경조정제도 (CBAM)의 전환기간 첫번째 보고서 제출 마감이 있었습니다. 하나루프의 고객사와 CBAM 보고서를 작성하고, 체계적으로 데이터를 관리하실 수 있도록 시스템을 도입해드린 경험을 농축하여 기업의 관리자, 실무자들을 위한 CBAM 규제 개요를 정리해드리도록 하겠습니다.',
        link: '/docs/x20_environment-general/CBAM/2023-01-05-CBAM-for-managers'
    },
    {
        title: '기업이 탄소국경조정제도(CBAM)에 대해 알아야 할 것',
        description: '2022년 12월 13일, 유럽의회와 EU 이사회는 "Fit for 55 패키지"의 일환으로 발표한 탄소국경조정제도(CBAM, Carbon Border Adjustment Mechanism) 를 설정하기 위한 일부 중요 쟁점에 대해 합의했습니다. CBAM은 EU 배출권거래제 하에서 생산되는 EU 제품과 수입품이 균등하게 탄소 가격을 지불하도록 할 것입니다.',
        link: '/docs/x20_environment-general/CBAM/2022-12-14-CBAM'
    },
]


export const management_process = [
    {
        title: '1. 현황분석-컨설팅',
        descriptions: [
            "제품 경계 할당",
            "데이터 모니터링 포인트 확인",
            "전체 데이터 수집 현황 파악 및  프로세스 개선 사항 분석",
            "사업장 인벤토리 완전성과 정확성 분석",
        ]
    },
    {
        title: '2. 플랫폼 셋업',
        descriptions: [
            "데이터 수집",
            "제품 공정에 따른 배출원 설정",
            "수집된 필요 데이터 정규화",
            "과거 데이터 입력",
            "프로세스 정의",
        ]
    },
    {
        title: '3. 계측기 설치 및 연동',
        descriptions: [
            "계측 데이터 자동수집 커스터마이징",
            "ERP, MES 시스템의 데이터 활용안 논의 및 커넥터 제공"
        ]
    },
    {
        title: '4. 전환',
        descriptions: [
            "사용 매뉴얼 제공",
            "실무자에게 플랫폼 활용 교육 제공으로 프로세스 내재화 "
        ]
    },
]

export const request = {
    title : "CBAM 컨설팅부터 관리까지, 하나에코와 시작하세요",
    button_1 : "솔루션 소개",
    button_2 : "문의하기",
  }
  