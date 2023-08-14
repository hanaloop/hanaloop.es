---
title: "하나루프 파트너십 프로스램 - Partnership Program"
description: "HanaLoop Partner Program은 함께 더 큰 성공을 목표로 하는 상호 신뢰를 기반으로 하는 신뢰할 수 있는 파트너십 프로스램을 제공합니다."
keywords: "파트너십 프로스램을"

publishedAt: "2023-08-10"

headerBackground:
  imageUrl: "/images/bg-hero_partnership.jpeg"
hero:
  header: "파트너십"
  tagline: ["연결의 시너지로 함께 성장합니다"]
---
import SectionBlock from "../components/theme/SectionBlock";
import { contextualPath } from "../libs/content.util"
import data from "../content/pages/partnership.data";

<SectionBlock title='Partnership' >
  <>
  <div className="my-5 border border-2 rounded-lg grid grid-cols-1  md:grid-cols-2 gap-2">
    <div className="p-4 group hover:bg-slate-100">
      <div className="text-lg font-bold group-hover:text-primary-700">SaaS Solution Partner Program</div>
      <div>
      **WHAT IS IT**
Program that enables companies to offer Hana.eco SaaS solution to their customers and receive commision on sales.<br />
**FOR WHOM**
Consulting service providers such as Business & Environment consulting firms, and Accounting and Law Firms.
      </div>
    </div>
    <div className="p-4 group hover:bg-slate-100">
      <div className="text-lg font-bold group-hover:text-primary-700">Technology Partner Program</div>
      <div>
      **WHAT IS IT**
Program that enables companies to offer Hana.eco OnPrem system to their customers as standalone or part of their solution suite.<br />
**FOR WHOM**
Solution providers with IT product that want to incorporate hana.eco to their solution suite.
      </div>
    </div>
  </div>
  <div>
  </div>
  </>
</SectionBlock>

<SectionBlock title='Strategic Alliances' containerStyle='bg-gray-100 flex justify-center'>
  <div className="text-left">
  - Korea Carbon Project (Project organized by SNU and sponsored by KEITI)
  - [NetZero 2050](http://netzero2050.or.kr/)
  - [International Centre for Hydropower (ICH)](https://ich.no/)
  </div>
</SectionBlock>


<div className="flex justify-center" >
<img src={contextualPath(siteConfig,"/images/banners/pyeongchanggun-windfarm.jpeg")} />
</div>
