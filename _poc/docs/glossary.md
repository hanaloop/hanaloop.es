---
title: "환경용어사전"
description: "환경분야에서 사용되는 용어들 정의"
publishedAt: "2022-10-11"
summary: "환경분야에서 자주 사용되는 용어들을 설명합니다."
authors: ['hykim']
tags: [환경용어사전]
image: /images/bg-hero_book.jpeg
---

import * as data from "./glossary.data";

## 환경 용어

<div className="[word-break:keep-all]">

<div className="text-left space-y-4 text-sm ">
{
  data.termsKo.map(term => 
  <div className="flex align-top bg-gray-100 border hover:border-lime-600" key={term.title}>
    <div className="p-2 flex-initial w-64">{term.title}</div>
    <div className="p-2 flex-1 bg-white">{term.description}
      {term.source && <span className="text-xs">
      [출저: <a href={term.sourceUrl}>{term.source}</a>]
      </span>} 
    </div>
  </div>
)}
</div>

<div className="mt-4 text-left space-y-4 text-sm ">
{data.termsEn.map(term => 
  <div className="flex align-top bg-gray-100 border hover:border-lime-600" key={term.title}>
    <div className="p-2 flex-initial w-64">{term.title}</div>
    <div className="p-2 flex-1 bg-white">{term.description}
      {term.source && <span className="text-xs">
      [출저: <a href={term.sourceUrl}>{term.source}</a>]
      </span>} 
    </div>
  </div>
)}
</div>

</div>
