---
title: "HanaEco by 하나루프 | SaaS형 데이터기반 지속가능성 플랫폼 | 공급망 탄소관리 플랫폼"
description: "SaaS형 온실가스 관리 플랫폼, HanaEco(하나에코)는 온실가스 배출활동을 관리하며, 배출량을 계산하고 분석합니다. hana.eco를 통해 기관, 기업은 기후관련 규제에 대응하고, 기후 리스크를 줄이며, 에너지 소비를 줄이고, ESG 포트폴리오를 향상시킬 수 있습니다. 궁극적으로 기관, 기업은 탄소발자국을 줄이며, 기후위기 완화에 기여할 수 있습니다. 탄소 어카운팅, 환경 업무 협업, 탄소 전략, 전략적 시각화, 가치사슬 탄소관리, 스코프3 관리, 공급망 탄소 관리, 온실가스를 보여주는 지속가능성 플랫폼, 환경데이터 관리 비용 절감, 환경위험요소 감소, 기업 이미지 및 경쟁력 향상"
keywords: "에코루프, HanaEco, EcoLoop, SaaS형 지속가능성 플랫폼, 공급망 탄소관리 플랫폼, 스코프3 관리 플랫폼, 가치사슬 탄소관리 플랫폼, 온실가스 관리, 탄소 관리, 탄소중립 플랫폼, 넷제로 플랫폼, ESG 향상 플랫폼, 환경데이터 관리 비용 절감, 환경위험요소 감소, 기업이미지 향상, 기업 경쟁력 향상"

publishedAt: "2022-10-06"

headerBackground:
  imageUrl: "/images/bg-hero_platform.jpeg"
hero:
  header: "데이터기반 지속가능성 플랫폼 Hana.eco"
  tagline: "온실가스 및 대기오염 데이터 관리"
---
import SectionBlock from "../components/theme/SectionBlock";
import data from "../content/pages/platform.data";


<SectionBlock title='데이터가 보이면 전략이 보입니다' containerStyle='bg-gray-100'>
<div className="text-center">
  인류가 대면하고 있는 가장 큰 위기, 기후변화 <br/> 
  그의 주범인 온실가스 <br/>
  하지만 눈에 보이지 않는 온실가스를 <br/> 
  하나루프의 **SaaS형 지속가능성 플랫폼 하나에코**가 보여드리겠습니다.
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
        <span className="font-bold text-lg">SaaS형 지속가능성 플랫폼 하나에코</span>는<br /> 
        온실가스 배출활동을 관리하며, 배출량을 계산하고 분석합니다. <br/>  
        <ul>
        하나에코를 통해 기관/기업은 <br/>
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

<SectionBlock title='Hana.eco Features' >
  <div className="flex justify-center">
  <div className="text-left max-w-4xl space-y-6">
    {data.features.map(feature => 
    <div className="md:flex pt-2 rounded-lg border border-slate-200" key={feature.title}>
      <img className="h-64 w-64 rounded-lg drop-shadow mx-auto md:rounded-none md:drop-shadow-none" src={feature.imageUrl} />
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


<SectionBlock title='Hana.eco가 지원하는 표준 보고 항목' containerStyle='bg-gray-100 flex justify-center'>

<div className="p-4 max-w-3xl text-left">

<img src="/images/standards/tcfd-logo.png" className="h-8" alt="TCFD logo"/>

### Metrics and Targets

- a) Disclose the metrics used by the company to assess climate-related risks and opportunities in line with its strategy and risk management process.
- b) Disclose Scope 1, Scope 2, and, if appropriate, Scope 3 greenhouse gas (GHG) emissions, and the related risks.
- c) Describe the targets used by the company to manage climate-related risks and opportunities and performance against targets.

<hr />

<img src="/images/standards/cdp-logo.png" className="mt-4 h-16" alt="CDP logo"/>

### C4	Targets and performance (목표 및 성과)
- C4.1: 	Emissions targets
- C4.3: 	Emissions reduction initiatives

### C6		Emissions data (배출량 데이터)
- C6.1: 	Scope 1 emissions data
- C6.2: 	Scope 2 emissions reporting
- C6.3: 	Scope 2 emissions data
- C6.7: 	Biogenic carbon data
- C6.7a: 	Biogenic carbon data
- C6.10: 	Emissions intensities

### C7	Emissions breakdown (배출 내역)
- C7.1: 	Scope 1 breakdown: GHGs
- C7.2: 	Scope 1 breakdown: country/area/region
- C7.3: 	Scope 1 breakdown: business breakdown
- C7.5: 	Scope 2 breakdown: country/area/region
- C7.6: 	Scope 2 breakdown: business breakdowns
- C7.9: 	Emissions performance

### C8 		Energy (에너지)
- C8.2:	Energy-related activities

<hr />

<img src="/images/standards/gri-logo.png" className="mt-4 h-16" alt="GRI logo"/>

### GRI 302: Energy 2016 (에너지)

- Disclosure 302-1: Energy consumption within the organization 
- Disclosure 302-2: Energy consumption outside of the organization <span className="p:-1 text-xs rounded bg-slate-400 text-gray-100">(2022-Q4)</span>
- Disclosure 302-3: Energy intensity 
- Disclosure 302-4: Reduction of energy consumption 

### GRI 305: Emissions (배출 내역)

- Disclosure 305-1: Direct (Scope 1) GHG emissions
- Disclosure 305-2: Energy indirect (Scope 2) GHG emissions
- Disclosure 305-3: Other indirect (Scope 3) GHG emissions <span className="p-1 text-xs rounded: bg-slate-400 text-gray-100">(2023-Q2)</span>
- Disclosure 305-4: GHG emissions intensity
- Disclosure 305-5: Reduction of GHG emissions
- Disclosure 305-6: Emissions of ozone-depleting substances (ODS)
- Disclosure 305-7: Nitrogen oxides (NOx), sulfur oxides (SOx), and other significant air emissions
</div>
</SectionBlock>


<SectionBlock title='기대 효과'>
<div className="text-left flex justify-center">
  <div className="space-y-4 ">
  {data.benefits.map( (benefit, idx) => 
  <div className="block " key={idx}> 
    <div className="p-2 min-w-0 rounded-l-full rounded-r-lg bg-primary-600 flex items-center">
      <div className="ml-0 w-20 h-20 rounded-full bg-secondary text-4xl font-bold text-gray-50 items-center inline-block text-center"><div className="pt-2">{benefit.subtitle}</div></div>
      <div className="pl-3 text-2xl w-40  flex-none text-white ">{benefit.title}</div>
      <div className="flex-1 py-1 rounded-md bg-white text-left">
        {benefit.description}
      </div>
    </div>
    
  </div>
  )}
  </div>
</div>
</SectionBlock>

