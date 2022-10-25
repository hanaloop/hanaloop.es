---
title: "하나루프 | 자료"
description: "환경관련 자료, 환경이슈, 환경정보"
publishedAt: "2022-01-10"
summary: "환경관련 자료, 환경이슈, 환경정보 목차"
image: "/images/pexels-photo-414798.jpeg"
tags:
  - Document
---
import {Tags} from "../components/Tags";
import docsCollection from "../content/docs/_content-collection.json";

export const docsSorted = docsCollection.sort((a, b) => b.meta.publishedAt.localeCompare(a.meta.publishedAt));

## 환경 관련 자료


<div className="my-5 space-y-2">
  {
    docsSorted.map(item => 
      <div className="space-y-4 " key={item.slug}>
        <a className="no-underline hover:no-underline" href={item.slug}>
        <div className="px-4 text-left items-center border-l-4 hover:border-lime-500">
          <h3 className="py-2 hover:text-primary no-underline">{item.meta.title}</h3>
          <div className="text-sm text-gray-500">
            <div className="text-xs">{item.meta.publishedAt}</div>
            <div>{item.meta.summary}</div>
            <Tags tags={item.meta.tags} />
          </div>
        </div>
        </a>
      </div>
    )
  }  
</div>
