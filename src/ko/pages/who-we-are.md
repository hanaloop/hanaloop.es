---
title: 회사 소개
---

# 회사 소개

위리는 인간이 창의력으로 유한한 자원을 윤리적으로 활용하여 풍요로운 세상을 이룰 수 있다는 것을 믿습니다.  

## 회사 미션
하나루프의 미션은 모든 세대가 자신의 유산을 자랑스럽게 여기고, 축적된 모든 기술들을 총동원하여 현 세대가 직면한 어려운 문제들을 함께 해결하도록 사회의 변화를 주도하는 것입니다.

## 기업 가치관

* 탁월함 추구
* 진정한 가치 창출
* 오래 지속되는 신뢰 구축
* 지속 가능한 성장

## 리더십

<div class="flex space-x-3">

  {% for teamMember in teamMembers  %}
  <figure class="bg-gray-100 rounded-md my-4 p-4 w-80 shadow">
    <img class="w-32 h-32 rounded-full mx-auto" src="{{ teamMember.photo  | url }}" alt="" width="384" height="512">
    <div class="pt-6 space-y-4">
      <figcaption class="font-medium text-center">
        <div class="fond-semibold">
          <a class="no-underline" href="{{ teamMember.profileUrl }}">{{ teamMember.name }}</a>
        </div>
        <div class="text-sm text-primary-dark">
          {{ teamMember.title }}
        </div>
      </figcaption>
      <p class="text-sm">
        {{ teamMember.description }}
      </p>
    </div>
  </figure>
  {% endfor %}
</div>

## "하나루프"의 의미

**"하나"** 는 한국어로 하나와 일치를 뜻합니다. 우리는 모든 것과 모든 사람이 연결되어있고 하나를 형성한다고 믿습니다. 

> **"하나"** 의 의미, Wikipedia에서:  
> **"Hana"** 가 이름으로 쓰일 때 여러 어원에서 다양한 뜻을 가지고 있다. 유대인, 프랑스인, 기독교인에게는 **"Hannah"** 의 변형으로 쓰이며, 신과 관련된 **"은혜"** 를 의미한다. 쿠르드 이름으로는 **"희망"**(هانا), 페르시아와 일본에서는 **"꽃"**(حَنا), 아랍에서는 **행복과 만족**(هَناء)으로 여겨지며, 한국에서는 **하나**를 의미하고, 하와이에서는 **"공작"** 또는 **"일"**, 마오리에서는 **"빛나는, 사랑과 광채를 주는 것"** 을 의미한다. 
