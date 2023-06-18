---
title: "Hana.eco (하나에코), 데이터기반 지속가능성 솔루션"
description: "hana.eco(하나에코) 데이터기반 지속가능성 솔루션, 데이터를 통해 전략적 인사이트를 제공하는 솔루션, 온실가스 관리 플랫폼, 데이터 수집 자동화 및 분석, 가치사슬망 관리, 공급망 관리, 스코프3 관리, 중소기업을 위한 지속가능성 솔루션, OpenAPI 제공으로 지속가능성 생태계 가속화"
keywords: "온실가스 관리 플랫폼, hana.eco, 하나에코, EcoLoop, 데이터기반 지속가능성 솔루션, 데이터 자동화 및 분석, 가치사슬망 관리, 공급망 관리, 스코프3 관리, 중소기업을 위한 지속가능성 솔루션, 탄소관리 OpenAPI, Carbon Accounting OpenAPI"

publishedAt: "2022-10-06"

headerBackground:
  imageUrl: "/images/bg-hero_mangrove.jpeg"
  imageDescription: "사진: Mangrove. Termed “blue carbon” ecosystems (BCE), these habitats occupy a relatively small area of the global ocean (∼0.2%), but are major contributors to marine sediment organic carbon burial"
hero:
  header: "솔루션"
  tagline: ["자원은 유한하지만 잠재력은 무한합니다"]
---
import SectionBlock from "../components/theme/SectionBlock";
import { contextualPath } from "../libs/content.util"
import data from "../content/pages/solution.data";

<SectionBlock title='친환경 디지털화' >
  <div className="my-5 border border-2 rounded-lg grid grid-cols-1  md:grid-cols-2 gap-2">
    <div className="p-4 group hover:bg-slate-100">
      <div className="text-lg font-bold group-hover:text-primary-700">지속가능한 디지털 전환 </div><span className="text-base">Sustainable Digital Transformation</span>
      <div>
      급변하는 비즈니스 환경과 시장 요구에 맞추어 디지털 기술로 고객의 잠재력과 비즈니스 가치를 극대화합니다. 기술뿐만 아니라 기업 문화를 향상시켜 고객 조직의 만족도와 생산력을 높입니다.
      </div>
    </div>
    <div className="p-4 group hover:bg-slate-100">
      <div className="text-lg font-bold group-hover:text-primary-700">친환경 하나에코 플랫폼 기반 솔루션</div>
      <div>
      플랫폼은 환경 규제에 대한 지침과 시장에 대한 통찰력을 제공하고 신속한 친환경 기술 검색 및 거래를 가능하게 하여 더욱 깨끗한 가치사슬을 생성시킴으로써 고객이 지속가능한 방식으로 성장할 수 있도록 도와줍니다. 결과적으로 보다 책임있고 윤리적인 산업으로 발전하는데 기여합니다.
      </div>
    </div>
  </div>
</SectionBlock>


<SectionBlock title='데이터가 보이면 전략이 보입니다!' containerStyle='bg-gray-100'>
  <div className="my-5 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-2">
    {data.benefits.map(benefit => 
    <div className="text-center" key={benefit.title}> 
      <div className="font-extrabold text-lg text-secondary text-left">{benefit.title}</div>
      <div className="h-32 text-gray-600 bg-white text-left border border-secondary-100 rounded-b-md">
        {benefit.description}
      </div>
    </div>
    )}
  </div>
</SectionBlock>

<div className="flex justify-center" >
<img src={contextualPath(siteConfig,"/images/banner-carbon_disclosure.jpeg")} />
</div>
