---
title: "하나루프 | 지속가능한 세상으로의 전환 - 지속가능성 임팩트 프로젝트 EcoLoop 에코루프"
description: "주식회사 하나루프 설립 이유, 하나루프의 비전, 하나루프의 미션, 하나루프의 고객과의 약속, 하나루프의 문화, 하나루프의 리더십, 하나루프 이름의 배경, 하나루프의 의미, 에코루프의 의미 소개, 지속가능성 임팩트 프로젝트, 비전은 깨끗하고 지속가능한 세상으로의 전환으로 홍익인간 이념의 실현, 미션은 기술 융합을 통한 지속가능한 생태계 형성으로 고객의 가치를 높이고 산업의 탄력성을 향상시키는 것, 건강한 지구로 환경을 회복시키며 인류의 번영에 기여할 것을 약속"
keywords: "하나루프, (주)하나루프, 하나루프 설립 이유, 하나루프 비전, 하나루프 미션, 하나루프의 고객과의 약속, 하나루프의 문화, 하나루프의 리더십, 하나루프 이름의 배경, 하나루프의 의미, 에코루프 이름의 배경, 에코루프의 의미, 지속가능성 임팩트 프로젝트, HanaLoop vision, HanaLoop mission, HanaLoop culture, HanaLoop leadership, HanaLoop Name meaning, EcoLoop"

publishedAt: "2022-10-06"

headerBackground:
  imageUrl: "/images/bg-hero_pando.jpeg"
  imageDescription: "Pando is believed to be the largest, most dense organism ever found. Photo from Wikipedia"
hero:
  header: "하나루프"
  tagline: "든든하고 민첩한 파트너"

---
import SectionBlock from "../components/theme/SectionBlock";
import members from "../content/members";
import { contextualPath } from "../libs/content.util"
export const memberList = Object.values(members).filter(m => m.type !== 'system');

<div className=""> 

  <SectionBlock title='지속가능성을 위한 도전에 하나루프가 함께 합니다' containerStyle="flex justify-center" >
    <div className="p-4 text-lg max-w-3xl">
    기후 변화의 주요 원인인 온실가스 배출로 무너져내린 지구 환경을 되살리기 위해 전세계, 국가, 사회가 필수불가결한 합의를 도출하는 등 우리 모두가 전방위적으로 힘을 모으고 있습니다. 그러나 구체적인 대안이나 해결 방법을 찾기란 쉽지 않습니다.

특히 이윤의 창출과 지속적인 성장에 주요 가치를 두는 기업에게 정부, 투자자와 고객, 구성원 등 사회가 요구하는 환경 정책과 엄격한 규제는 이 시대에 피할 수 없는 중요 과제가 되었습니다.
사회적 통념을 넘어 이제는 경제논리로도 환경을 대하는 태도가 진심으로 변화하고 있기 때문입니다.

기업과 기관의 지속가능한 성장을 위해 하나루프가 함께 합니다.

    </div>
  </SectionBlock>


  <SectionBlock title='비전' containerStyle='bg-gray-100'>
    <div className="p-4">
      <span className="text-lg">하나루프의 비전은 깨끗하고 지속가능한 세상으로의 전환으로 홍익인간의 이념을 실현하는 것입니다.</span>
      
    </div>
  </SectionBlock>

  <SectionBlock title='미션' >
    <div className="p-4">
    <span className="text-lg">하나루프의 미션은 기술 융합을 통한 지속가능한 생태계 형성으로 고객의 가치를 높이고 산업의 탄력성을 향상시키는 것입니다.</span>
    </div>
  </SectionBlock>

  <SectionBlock title='고객과의 약속' containerStyle='bg-gray-100'>
    <div className="p-4">
      <span className="text-lg">하나루프는 건강한 지구로 환경을 회복시키며 인류의 번영에 기여하겠습니다.</span>
    </div>
  </SectionBlock>

  <SectionBlock title='핵심가치' >
    <div className="p-4 w-auto flex justify-center ">
    <div className="w-60 text-left text-lg">
      - 탁월함 추구
      - 진정한 가치 창출
      - 오래 지속되는 신뢰 구축
      - 지속 가능한 성장
    </div>
    </div>
  </SectionBlock>

  <SectionBlock title='문화' containerStyle='bg-gray-100'>
    <div className="p-4">
      <span className="text-lg">
      하나루프는 모든 세대가 건강한 지구와 공생하기 위해, 현세의 가장 어려운 문제를 기술로 해결하기 위해 모인 사람들의 유기체입니다. 문제를 파악하고 해결 방법을 연구하며 최고의 기술로 최고의 효과를 내는 솔루션을 제공하기 위해 끊임없이 성장합니다. 우리가 속한 사회의 건강한 변화를 주도합니다. 
      </span>
    </div>
  </SectionBlock>

  <SectionBlock title='리더십' >
    <div className="p-4">
      <div className="my-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {
          memberList.map(m => (
            <figure className="bg-gray-100 rounded-md my-4 p-4 shadow " key={m.name}>
              <div className="w-auto flex justify-center">
              <img className="h-40 lg:h-32 rounded-full block" src={ contextualPath(siteConfig, m.image_url) } alt="" />
              </div>
              <div className="pt-6 space-y-4 block">
                <figcaption className="font-medium text-center">
                  <div className="fond-semibold">
                    <a className="no-underline  space-x-1" href={ m.profile_url }><span className="whitespace-nowrap">{ m.name }</span>
                    <span className="whitespace-nowrap text-sm text-slate-700">{ m.name_alt }</span></a>
                  </div>
                  <div className="text-sm text-primary-dark">{ m.title }</div>
                  <div className="mt-2 text-xs text-slate-500">{ m.education }</div>
                </figcaption>
                <p className="text-sm">
                  { m.description }
                </p>
              </div>
            </figure>
            )
          )
        }
      </div>
    </div>
  </SectionBlock>

  <SectionBlock title='하나루프 이름의 배경' containerStyle="flex justify-center" >
    <div className="px-4">
      <span className="text-xl">
      하나루프 (Hana+Loop)
      </span>
    <div className="max-w-3xl">
      우주가 생긴 이래,
      우리를 둘러싼 자연환경은 끊임없이 서로 순환하며 조화를 이루고 있습니다.
      그런데 이 길고 긴 역사에서 뒤늦게 출현한 인류가 ‘문명과 개발’이라는 명목하에
      이 아름답고 선한 순환의 고리, 즉 자연의 무한 루프를 끊으려 하고 있습니다.

      **하나루프는**
      자연의 지혜로운 선순환을 되살리고
      사람도 그 무한의 루프 속으로 되돌아가서
      자연과 조화를 이루며 하나가 되자는 의미를 담고 있습니다. 

      Hana is,<br/>
      “하나와 일치” in Korean<br/>
      “Grace” in French, Jewish and Christian<br/>
      “Flower, 花 はな ” in Persian and Japanese<br/>
      “Happiness” in Arabic <br/>
      “Craft” in Hawaiian <br/>
      “give out love” in Maori<br/>
      “Hope” in Kurdish<br/>

      <span className="text-xl">
      에코루프 (Eco+Loop)
      </span>
      영어 에콜로지(Ecology)에서 유래한 '환경', '생태'의 뜻을 가진 접두사 ‘에코(Eco)’와
      자연의 진화 속성인 무한 루프의 ‘루프(Loop)’가 만났습니다.
    </div>
    </div>
  </SectionBlock>

</div>
