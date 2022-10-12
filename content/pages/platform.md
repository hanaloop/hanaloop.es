---
title: "EcoLoop by 하나루프 | SaaS형 데이터기반 지속가능성 플랫폼 | 공급망 탄소관리 플랫폼 | 에코루프"
description: "SaaS형 온실가스 관리 플랫폼, EcoLoop(에코루프)는 온실가스 배출활동을 관리하며, 배출량을 계산하고 분석합니다. EcoLoop (에코루프)를 통해 기관, 기업은 기후관련 규제에 대응하고, 기후 리스크를 줄이며, 에너지 소비를 줄이고, ESG 포트폴리오를 향상시킬 수 있습니다. 궁극적으로 기관, 기업은 탄소발자국을 줄이며, 기후위기 완화에 기여할 수 있습니다. 탄소 어카운팅, 환경 업무 협업, 탄소 전략, 전략적 시각화, 가치사슬 탄소관리, 스코프3 관리, 공급망 탄소 관리, 온실가스를 보여주는 지속가능성 플랫폼, 환경데이터 관리 비용 절감, 환경위험요소 감소, 기업 이미지 및 경쟁력 향상"
keywords: "에코루프, EcoLoop, SaaS형 지속가능성 플랫폼, 공급망 탄소관리 플랫폼, 스코프3 관리 플랫폼, 가치사슬 탄소관리 플랫폼, 온실가스 관리, 탄소 관리, 탄소중립 플랫폼, 넷제로 플랫폼, ESG 향상 플랫폼, 환경데이터 관리 비용 절감, 환경위험요소 감소, 기업이미지 향상, 기업 경쟁력 향상"

publishedAt: "2022-10-06"

headerBackground:
  imageUrl: "/images/bg-hero_platform.jpeg"
hero:
  header: "데이터기반 지속가능성 플랫폼 EcoLoop"
  tagline: "온실가스 오염물질 환경데이터 관리"
---
import SectionBlock from "../components/theme/SectionBlock";
import data from "../content/pages/platform.data";


<SectionBlock title='데이터가 보이면 전략이 보입니다' containerStyle='bg-gray-100'>
<div className="text-center">
  인류가 대면하고 있는 가장 큰 위기, 기후변화 <br/> 
  그의 주범인 온실가스 <br/>
  하지만 눈에 보이지 않는 온실가스를 <br/> 
  하나루프의 **SaaS형 지속가능성 플랫폼 EcoLoop**가 보여드리겠습니다.
<br/>
<br/>
  <div className="flex justify-center">
    <div className="w-4/5 ">
      <div className="text-center text-2xl italic  ">“측정할 수 없으면 관리할 수 없고, 
      관리할 수 없으면 개선시킬 수도 없다”</div>
      <div className="text-right text-sm text-gray-600  whitespace-nowrap">- 피터 드러커 (Peter Drucker)</div>
    </div>
  </div>
  <br/>
  <br/>

  <div className="md:flex justify-center ">
    <div className="p-6 rounded border border-secondary md:flex items-center">
      <div className="flex-1">
        <div className="p-6">
        <span className="font-bold text-lg">SaaS형 지속가능성 플랫폼 EcoLoop</span>는<br /> 
        온실가스 배출활동을 관리하며, 배출량을 계산하고 분석합니다. <br/>  
        <ul>
        EcoLoop를 통해 기관/기업은 <br/>
        기후관련 규제에 대응하고, <br/>
        기후 리스크를 줄이며,<br/> 
        에너지 소비를 줄이고, <br/>
        ESG 포트폴리오를 향상시킬 수 있습니다. <br/>
        궁극적으로 탄소발자국을 줄이며, 기후위기 완화에 기여할 수 있습니다.
        </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <img className="w-96 h-64 drop-shadow" src="/images/product-ecoloop.jpeg" />
      </div>

    </div>
  </div>
</div>
</SectionBlock>

<SectionBlock title='EcoLoop Features' >
  <div className="flex justify-center">
  <div className="text-left max-w-4xl space-y-6">
    {data.features.map(feature => 
    <div className="md:flex rounded-lg border border-slate-200" key={feature.title}>
      <img className="h-64 w-64 rounded-full drop-shadow mx-auto md:rounded-none md:drop-shadow-none" src={feature.imageUrl} />
      <div className="p-6 border-primary" >
        <h3 className="text-3xl font-bold inline">{feature.title}</h3>
        <span className="ml-1 inline text-gray-600 text-sm">{feature.subtitle}</span>
        <div className="text-sm text-gray-600">
          {feature.description}
        </div>
      </div>
    </div>
    )}
  </div>
  </div>
</SectionBlock>




<SectionBlock title='기대 효과' containerStyle='bg-gray-100'>
<div className="text-left flex justify-center">
  <div className="space-y-4 ">
  {data.benefits.map( (benefit, idx) => 
  <div className="block relative w-[38rem] " key={idx}> 
    <div className="p-2 min-w-0 rounded-l-full rounded-r-lg bg-primary-600 flex items-center">
      <div className="pl-20 text-2xl w-64 flex-none text-white ">{benefit.title}</div>
      <div className="flex-1 rounded-md bg-white text-left">
        {benefit.description}
      </div>
    </div>
    <div className="py-5 absolute left-1 top-1 w-20 h-20 rounded-full bg-secondary text-4xl font-bold text-gray-50 items-center inline-block text-center"><div>{benefit.subtitle}</div></div>
  </div>
  )}
  </div>
</div>
</SectionBlock>

