---
title: "환경 자료"
description: "환경관련 자료"
publishedAt: "2022-01-11"
summary: "Document Home for demo purpose!"
image: "/images/pexels-photo-414798.jpeg"
author: "hykim"
tags:
  - Document
---
import docsCollection from "../content/docs/_content-collection.json";

export const docsSorted = docsCollection.sort((a, b) => b.meta.publishedAt.localeCompare(a.meta.publishedAt));

## 환경 관련 자료


<div className="my-5 ">
  {
    docsSorted.map(item => 
      <div className="space-y-4" key={item.slug}>
        <a className="no-underline" href={item.slug}>
        <div className="px-4 text-left items-center">
          <h3 className="py-2 hover:text-primary">{item.meta.title}</h3>
          
          <div className="text-sm text-gray-500">
            <div className="text-xs">{item.meta.publishedAt}</div>
            <div>{item.meta.summary}</div>
          </div>
        </div>
        </a>
      </div>)
  }  
</div>

> Note: the file name is `_index.md`
