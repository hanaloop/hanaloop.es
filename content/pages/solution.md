---
title: "에코르프 플랫폼"
description: "온시라스 관리 플랫폼 에코르프"
keywords: "온시라스 관리, 탄소 관리"

publishedAt: "2022-10-06"

headerBackground:
  imageUrl: "/images/bg-hero_mangrove.jpeg"
  imageDescription: "사진: Mangrove. Termed “blue carbon” ecosystems (BCE), these habitats occupy a relatively small area of the global ocean (∼0.2%), but are major contributors to marine sediment organic carbon burial"
hero:
  header: "솔루션"
  tagline: ["자원은 유한하지만 잠재력은 무한합니다"]
---
import SectionBlock from "../components/theme/SectionBlock";
import data from "../content/pages/solution.data";

<SectionBlock title='데이터가 보이면 전략이 보입니다.' containerStyle='bg-gray-100'>
  <div className="my-5 grid xl:grid-cols-4 grid-cols-2 gap-2">
    {data.benefits.map(benefit => 
    <div className="text-center "> 
      { /* <div className="text-lg text-white rounded-b-lg bg-secondary">{benefit.title}</div>*/ }
      <div className="font-extrabold text-lg text-secondary text-left">{benefit.title}</div>
      <div className="h-32 text-gray-600 bg-white text-left border border-secondary-100 rounded-b-md">
        {benefit.description}
      </div>
    </div>
    )}
  </div>
</SectionBlock>
