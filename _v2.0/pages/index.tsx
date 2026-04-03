import { useContext, useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link';
import SiteContext from '../components/SiteContext';
import Hero from '../components/Hero';
import SectionBlock from '../components/theme/SectionBlock';
import Image from "../components/theme/Image";
import { DisplayItem } from '../libs/types';

import { contextualPath } from '../libs/content.util';
import siteConfig from '../next-portal.config';
import docsCollection from '../content/docs/_content-collection.json'
import { Tags } from '../components/Tags';

// For HTML meta & SEO 
const frontMatter = {
  title: `탄소중립 플랫폼 및 솔루션`,
  description: "기후규제 대응 탄소관리 온실가스관리 플랫폼. EU 탄소국경조정제도(CBAM, Carbon Border Adjustment Mechanism) 1차 보고서 작성",
  keywords: "CBAM, 공급망 탄소 관리, 스코프3 관리, 온실가스 관리, 탄소 관리, 오염물질 관리, 탄소중립 플랫폼, GRI, SASB, TCFD, SBTi, IFRS, 기후 디지털 변환, 환경규제 대응, 환경규제대응 DT, 환경규제대응 디지털 전환, 온실가스 관리 솔루션, 탄소관리 솔루션, 탄소중립 전략, 넷제로 전략, 공급망 내 기업들 간 탄소데이터 교환, 공급망 내 기업들 간 탄소발자국 교환, 환경 플랫폼, 원스톱 탄소관리 플랫폼, 탄소 회계, Platform, HanaLoop, Sustainability, Digital Transformation, EcoLoop, hana.eco"
}

const MAX_DOCS = 4;
const docsSorted = docsCollection.sort((a, b) => b.meta.publishedAt.localeCompare(a.meta.publishedAt)).slice(0, MAX_DOCS);

// let announcement: any | undefined;
const announcement = {
  initialOpen: true,
  title: "2023년 12월 '하나루프와 기후 인사이트 수요일' 등록하기",
  link: "https://docs.google.com/forms/d/e/1FAIpQLSev-ubKKT32aD-gqLHy0k56xyv-iBwiA5Z6jnMtqekdYmIcdA/viewform",
  image: "/images/blog/HanaLoop_climate_insight_wednesdays.jpg",
  dimensions: `w-[500px] md:w-[600px]`,
};

const elements: DisplayItem[] = [
  {
    title: "EU 탄소국경조정제도 (CBAM)",
    subtitle: "Carbon Border Adjustment Mechanism",
    imageUrl: "/images/platform/card-cbam_pic.jpeg",
    description: [
      <span key="1"><b>제품 관리</b> - CBAM에 해당되는 CN코드 및 파라미터를 관리하고, 제품 내재배출 (원단위)을 산정합니다. (Embedded Emission).</span>,
      <span key="2"><b>원부자재 공급 관리</b> - 공급사의 전구물질(Precursor) SEE를 관리합니다.</span>,
      <span key="3"><b>CBAM 보고서 내용</b> - 2024년 1월부터 분기별로 제출해야할 데이터를 체계적으로 관리하며 쉽게 보고합니다.</span>,
      <span key="3"><b>배출계수 관리</b> - 기본값(Default values)을 관리합니다.</span>
    ]
  },
  {
    title: "IFRS(TCFD) / CDP / GRI",
    subtitle: "Climate normatives, frameworks and standards",
    imageUrl: "/images/platform/card-standards_pic.jpeg",
    description: [
      <span key="1"><b>표준 보고서에서 요구되는 리포팅</b> - 사업장 별, Scope 1, 2, 3별 에너지 사용량 등 데이터를 체계적으로 관리합니다.</span>,
      <span key="2"><b>리스크 관리</b> - IFRS/TCFD에서 권장하는 리스크 관리가 용이합니다.</span>,
      <span key="3"><b>시나리오 분석</b> - 배출원의 변경에 대해 What-if 시나리오 분석으로 전략적으로 기후리스크를 관리하고 준비할 수 있습니다.</span>
    ] 
  },
  {
    title: "ESG & 스코프 3 관리",
    subtitle: "Make impact",
    imageUrl: "/images/platform/card-scope3_pic.jpeg",
    description: [
      <span key="1"><b>정성적인 데이터 관리</b> - 질문에 응답하는 형태의 정성적인 데이터 관리가 가능해집니다.</span>,
      <span key="2"><b>협력사 관리</b> - Scope 3에 해당되는 공급자들의 탄소 배출 현황을 안전하게 관리할 수 있습니다.</span>,
      <span key="3"><b>제품 관리</b> - 제품의 원단위를 파악하여 고객사와의 커뮤니케이션에 능동적으로 참여할 수 있습니다.</span>,
      <span key="4"><b>Scope 3용 산업 표준 배출계수</b> - 실 데이터가 없을 경우에도 배출량 산정이 가능합니다.</span>,
    ] 
  },
]

// https://icons.getbootstrap.com/
const features: DisplayItem[] = [
  {
    icon: <svg className="h-8 text-secondary " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 5H7V7H17V5Z" fill="currentColor" /><path d="M7 9H9V11H7V9Z" fill="currentColor" /><path d="M9 13H7V15H9V13Z" fill="currentColor" /><path d="M7 17H9V19H7V17Z" fill="currentColor" /><path d="M13 9H11V11H13V9Z" fill="currentColor" /><path d="M11 13H13V15H11V13Z" fill="currentColor" /><path d="M13 17H11V19H13V17Z" fill="currentColor" /><path d="M15 9H17V11H15V9Z" fill="currentColor" /><path d="M17 13H15V19H17V13Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3 3C3 1.89543 3.89543 1 5 1H19C20.1046 1 21 1.89543 21 3V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V3ZM5 3H19V21H5V3Z" fill="currentColor" /></svg>,
    title: "탄소 어카운팅",
    description: "기업의 활동으로 인해 발생하는 온실가스 배출량과 감축량을 탄소로 환산합니다. 데이터 수집은 가능한 자동화, 휴먼에러 방지 등 실무자 편의를 제공합니다." 
  },
  {
    // https://fonts.google.com/icons?icon.query=diversity&icon.set=Material+Icons
    icon: <svg className="h-8 text-secondary " stroke="currentColor" strokeWidth="1" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" >
    <path d="M1.2 41.4v-8.5q0-1.65 1.175-2.825Q3.55 28.9 5.15 28.9h7.2q.9 0 1.6.375.7.375 1.2 1.075 1.5 2.15 3.85 3.35 2.35 1.2 5 1.2t5-1.2q2.35-1.2 3.9-3.35.45-.7 1.15-1.075t1.65-.375h7.15q1.65 0 2.825 1.175Q46.85 31.25 46.85 32.9v8.5H32.9v-6.15q-1.85 1.5-4.125 2.35-2.275.85-4.775.85-2.45 0-4.725-.825Q17 36.8 15.15 35.25v6.15ZM24 31.5q-1.65 0-3.175-.775T18.35 28.55q-.9-1.3-2.175-2T13.4 25.6q1.65-1.45 4.775-2.3 3.125-.85 5.825-.85 2.75 0 5.875.85t4.825 2.3q-1.55.25-2.825.95-1.275.7-2.175 2-.95 1.4-2.475 2.175Q25.7 31.5 24 31.5ZM8 24.6q-2.35 0-4.025-1.7Q2.3 21.2 2.3 18.85q0-2.35 1.675-4.025Q5.65 13.15 8 13.15q2.4 0 4.075 1.675Q13.75 16.5 13.75 18.85q0 2.35-1.675 4.05Q10.4 24.6 8 24.6Zm32 0q-2.35 0-4.025-1.7-1.675-1.7-1.675-4.05 0-2.35 1.675-4.025Q37.65 13.15 40 13.15q2.4 0 4.075 1.675Q45.75 16.5 45.75 18.85q0 2.35-1.675 4.05Q42.4 24.6 40 24.6Zm-16-6.5q-2.35 0-4.025-1.7-1.675-1.7-1.675-4.05 0-2.35 1.675-4.025Q21.65 6.65 24 6.65q2.4 0 4.075 1.675Q29.75 10 29.75 12.35q0 2.35-1.675 4.05Q26.4 18.1 24 18.1Z"/></svg>,
    title: "협업",
    description: "기업의 환경안전팀, ESG전략팀 등 관리자와 실무자, 컨설턴트과 검증심사관과의 원활한 협업을 가능하게 합니다."
  },
  {
    icon: <svg className="h-8 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="4" stroke="currentColor" fill="none" ><path d="M17.94 54.81a.1.1 0 01-.14 0c-1-1.11-11.69-13.23-11.69-21.26 0-9.94 6.5-12.24 11.76-12.24 4.84 0 11.06 2.6 11.06 12.24 0 8.29-10.06 20.17-10.99 21.26z"></path><circle cx="17.52" cy="31.38" r="4.75"></circle><path d="M49.58 34.77a.11.11 0 01-.15 0c-.87-1-9.19-10.45-9.19-16.74 0-7.84 5.12-9.65 9.27-9.65 3.81 0 8.71 2 8.71 9.65 0 6.49-7.82 15.78-8.64 16.74z"></path><circle cx="49.23" cy="17.32" r="3.75"></circle><path d="M17.87 54.89a28.73 28.73 0 003.9.89"></path><path d="M24.68 56.07c2.79.12 5.85-.28 7.9-2.08 5.8-5.09 2.89-11.25 6.75-14.71a16.72 16.72 0 014.93-3" strokeDasharray="7.8 2.92"></path><path d="M45.63 35.8a23 23 0 013.88-.95"></path></svg>,
    title: "전략",
    description: "온실가스 배출량의 전략적 시각화를 통해 인사이트를 제공하고, 통계 모델, 인공지능을 통해 목표를 관리합니다. 경제성 분석에 따른 감축전략 추천 및 실행 상황을 모니터링합니다."
  },
  {
    icon: <svg className="h-8 text-secondary"  fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" >
    <path d="M2.273 9.53a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.547Zm9.467-4.984a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546ZM7.4 13.108a5.535 5.535 0 0 1-3.775-2.88 3.273 3.273 0 0 1-1.944.24 7.4 7.4 0 0 0 5.328 4.465c.53.113 1.072.169 1.614.166a3.253 3.253 0 0 1-.666-1.9 5.639 5.639 0 0 1-.557-.091Zm3.828 2.285a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546Zm3.163-3.108a7.436 7.436 0 0 0 .373-8.726 3.276 3.276 0 0 1-1.278 1.498 5.573 5.573 0 0 1-.183 5.535 3.26 3.26 0 0 1 1.088 1.693ZM2.098 3.998a3.28 3.28 0 0 1 1.897.486 5.544 5.544 0 0 1 4.464-2.388c.037-.67.277-1.313.69-1.843a7.472 7.472 0 0 0-7.051 3.745Z"/>
  </svg>,
    title: "가치사슬 관리",
    description: "스코프 1, 2와 원자재의 생산부터 유통, 폐기까지 모든 가치사슬 상에서 발생하는 배출인 스코프 3을 고려합니다."
  }
]

const reasons: DisplayItem[] = [
  {
    // Heroicon
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
  </svg>,  
    title: '환경규제 대응'
  },
  { 
    // Material icon
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
  </svg>,
    title: '투자자 요청'
  },
  {
    // https://uxwing.com/svg-icon-editor/
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
  </svg>,
    title: '비즈니스 위험 완화'
  },
  { 
    // Material icon
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ><g><rect fill="none" height="24" width="24"/></g><g><g><circle cx="12" cy="6" r="2"/><path d="M21,16v-2c-2.24,0-4.16-0.96-5.6-2.68l-1.34-1.6C13.68,9.26,13.12,9,12.53,9h-1.05c-0.59,0-1.15,0.26-1.53,0.72l-1.34,1.6 C7.16,13.04,5.24,14,3,14v2c2.77,0,5.19-1.17,7-3.25V15l-3.88,1.55C5.45,16.82,5,17.48,5,18.21C5,19.2,5.8,20,6.79,20H9v-0.5 c0-1.38,1.12-2.5,2.5-2.5h3c0.28,0,0.5,0.22,0.5,0.5S14.78,18,14.5,18h-3c-0.83,0-1.5,0.67-1.5,1.5V20h7.21 C18.2,20,19,19.2,19,18.21c0-0.73-0.45-1.39-1.12-1.66L14,15v-2.25C15.81,14.83,18.23,16,21,16z"/></g></g></svg>,
    title: '고객사와 소비자의 요구'
  },
]

const customers: DisplayItem[] = [
  {
    title: "이마트",
    sourceUrl: "https://emartdt.ai/",
    imageUrl: "/images/partners/partner-emart_logo.png",
    description: "고객사 | ESG경영 선도기업 이마트"
  },
  {
    title: "벽산",
    sourceUrl: "http://www.byucksan.com/",
    imageUrl: "/images/partners/byucksan-logo.png",
    description: "고객사 | 늘 푸른 산처럼 아름다운 생활공간을 창조 | 지속가능경영 혁신기업"
  },
  {
    title: "서경빌딩",
    sourceUrl: "https://naver.me/FKKMDLip",
    imageUrl: "/images/partners/seokyungbuildng-logo.png",
    description: "고객사 | 고객의 윤택(潤澤)함을 책임지는 산업 건물"
  },
  // {
  //   title: "플랜닥스",
  //   sourceUrl: "https://plandocs.kr/",
  //   imageUrl: "/images/partners/plandocs-logo.png",
  //   description: "고객사 | 플랜닥스는 의료기기 및 의약품, 의료기구, 의료용품 등 다양한 미용성형 전문 제품 및 서비스를 제공하는 플랫폼 기업."
  // },
  
];

const partners: DisplayItem[] = [
  {
    title: "NET ZERO 2050 기후재단",
    sourceUrl: "http://netzero2050.or.kr/",
    imageUrl: "/images/partners/netzero2050_climatefoundation-logo.png",
    description: "협력사 | 2050년까지 이산화탄소 배출을 완전히 제거하여 탄소중립을 달성하기 위한 국제사회, 정부와 기업, 지구촌 시민사회의 노력을 적극 지원하고 실천 동기를 부여하고 있음"
  },
  {
    title: "로엔 컨설팅",
    sourceUrl: "http://www.roenconsulting.com/main/index.html",
    imageUrl: "/images/partners/partner-roen_logo.png",
    description: "파트너사 | 환경 토탈솔루션 컨설팅 | 정책 연구, 온실가스 감축, 탄소자산관리, 신재생에너지사업 등 기후변화 대응 컨설팅"
  },
  {
    title: "한 컨설팅 그룹",
    sourceUrl: "https://hcg.kr",
    imageUrl: "/images/partners/partner-hanconsulting_logo.png",
    description: "파트너사 | ESG 경영 성공파트너 | 차별화된 ESG경영 컨설팅과 탄소중립 컨설팅"
  }
]

const Home: NextPage = () => {

  const siteContext = useContext(SiteContext);
  const [fabActive, setFabActive] = useState<Boolean>(announcement?.initialOpen ?? false);

  // TODO: add meta description
  
  return (
    <div className="">
      <Hero background={{
          imageUrl: contextualPath(siteConfig, '/images/bg-hero_jungle_coast.jpg'),
        }} 
        header="기후규제 대응 탄소관리 솔루션"
        tagline="CBAM 보고서 함께 작성해드립니다."
        button={
          {href: '/demo_request', label: '데모 요청'}
        }
      />
      {/* Climate strategy is essential */}
      <SectionBlock title='오늘날 기업에게 탄소관리는 필수입니다' containerStyle='bg-gray-100'>
        <div className="px-10  my-5 grid lg:grid-cols-4 grid-cols-1 gap-4  ">
          {
            reasons.map(item => 
              <div className="border border-green-600 rounded-lg text-center text-gray-700" key={item.title}>
                <div className="flex justify-center items-center text-sm">
                  <div className="flex mr-1">{item.icon}</div>
                  <h3 className="text-xl py-2">{item.title}</h3>
                </div>
              </div>)
          }
        </div>
      </SectionBlock>
      <SectionBlock title='Trusted by 고객 및 파트너' containerStyle="" >
        <div className="space-y-10">
          <div className="mt-4 text-center items-center space-y-8 ">
            <div className="flex justify-center space-x-6 ">
              {
                customers.map(item => 
                  <div className="group" key={item.title}>
                    <Link href={item.sourceUrl!} passHref><a target="_blank" ><Image className="h-8 grayscale group-hover:grayscale-0 duration-200" src={item.imageUrl!} alt={item.title} /></a></Link>
                    <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-50 border-lime-700 hidden group-hover:block absolute tooltip-text">{item.description}</span>
                  </div>)
              }
            </div>
            <div className="flex justify-center space-x-6 ">
              {
                partners.map(item => 
                  <div className="group" key={item.title}>
                    <Link href={item.sourceUrl!} passHref><a target="_blank" ><Image className="h-8 rounded-md grayscale group-hover:grayscale-0 duration-200" src={item.imageUrl!} alt={item.title} /></a></Link>
                    <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-60 border-lime-700 hidden group-hover:block absolute tooltip-text">{item.description}</span>
                  </div>)
              }
            </div>
            <div className="space-y-2">
              <div className="flex justify-center space-x-6 ">
                <Image className="h-8 " src="/images/partners/korea-mss-gov.png" alt="중소벤처기업부" />
                <Image className="h-8 " src="/images/partners/korea-tipa-gov.gif" alt="중소기업기술정보진흥원" />
                <Link href={`https://svhc.or.kr/`}><a><Image className="h-8 " src="/images/partners/seoulsocialventurehub-logo2.png" alt="서울소셜벤처허브" /></a></Link>
              </div>
              <div className='text-xs'>창업성장기술개발 R&D사업 선정 기업</div>
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title='' containerStyle="bg-gray-100" >
        <div className="px-10 space-y-20 ">
          <div >
            <div className="text-xl font-bold">
            협업형 온실가스 관리로 귀사와 공급망의 온실가스 배출을 효율적으로 관리, 분석하고 감축하고 공시하세요!
            </div>
            <div className="mt-10 border border-primary-500 rounded p-2 hover:bg-primary-600 hover:text-gray-100">
              <Link href={'https://docs.google.com/presentation/d/1FBvBwSz998JR_S_CKMQOPVkr3QXXQEjGyqLADDncrS8/edit?usp=sharing'}><a className='text-sx '>협업형 스코프3 포함 탄소중립 플랫폼 <span className="font-bold">하나.에코</span> 소개</a></Link>
            </div>  
          </div>
          
          <div className='text-left space-y-7 '>
          {
            elements.map((item, ndx) => {
              const lines = item.description as string[];
              return (
                
              <div className="group mt-3 pl-2 rounded-md border-l-4 hover:border-primary-700 lg:flex" key={ndx}>
                <div className="lg:w-[500px] flex-none mb-2">
                  <div className="text-3xl font-bold">
                    <div className="flex mr-1 items-baseline text-gray-700 group-hover:text-primary-700">
                      
                      <span className="pr-4">{ndx + 1}.</span>
                        <h4 className=" py-2 inline">{item.title}</h4>
                    </div>
                  </div>
                  <div className="text-xs text-gray-700 [word-break:keep-all] ml-10" >
                    <div className="pb-2 text-base font-bold  text-gray-400">{item.subtitle}</div>
                    <ul className="ml-3 list-disc space-y-2">
                      {lines.map((line, ndx: number) => 
                        <li key={ndx}>{line}</li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="flex-1 p-4">
                  {item.imageUrl && <Image className="object-cover object-top h-60 w-full border group-hover:border-gray-300" src={item.imageUrl} alt={item.title} />}
                </div>
              </div>)
            })
          }
          </div>
        </div>
      </SectionBlock>
      {/* Features */}
      <SectionBlock >
        <div className="px-10">
        <h2 className="pb-10 text-4xl font-extrabold text-center text-gray-400 hover:text-sky-700 duration-200">
          <Link href={'/platform'}><a>SaaS형 지속가능성 플랫폼 Hana.eco</a></Link>
        </h2>
        <div className="p-6 border-2 border-secondary rounded-lg grid md:grid-cols-4 grid-cols-1 gap-4  ">
          {
            features.map(item => 
              <div className="text-center" key={item.title}>
                <div className="flex justify-center items-center">
                  <div className="flex mr-1">{item.icon}</div>
                  <h3 className="text-xl font-semibold py-2 ">{item.title}</h3>
                </div>
                <div className="text-xs text-gray-700 [word-break:keep-all]" >{item.description}</div>
              </div>)
          }
        </div>
        </div>
      </SectionBlock>
      {/* Resources */}
      <SectionBlock title='자료' >
        <>
        <div className="px-10 my-6 grid md:grid-cols-2 grid-cols-1 gap-6  ">
          {
            docsSorted.map(item => 
              <div className="border rounded text-gray-700 drop-shadow-md" key={item.slug}>
                <Link href={item.slug} passHref><a >
                <div className="text-left items-center">
                  <h3 className="px-4 py-2 hover:text-primary">{item.meta.title}</h3>
                  {item.meta.image && <Image className="object-cover h-40 w-full bg-center " src={item.meta.image} alt={item.meta.title} />}
                  
                  <div className="px-4 py-2 text-sm text-gray-500">
                    <div className="text-xs">{item.meta.publishedAt}</div>
                    <div>{item.meta.summary}</div>
                    <Tags tags={item.meta.tags} />
                  </div>
                  
                </div>
                </a></Link>
              </div>)
          }  
        </div>
        <Link href="/docs" passHref><a >자료 더 보기</a></Link>
        </>
      </SectionBlock>

      {announcement && <div className="fixed bottom-4 right-4">
        <div className={`${fabActive ?  `` : ` h-[150px]` } p-2 rounded-sm bg-white border border-gray-200 shadow-lg transition-all ease-in-out delay-150`}>
          <div className='flex justify-between' >
            <div><a href={announcement.link} className='hover:underline'>{announcement.title}</a></div>
            <div onClick={() => {setFabActive(!fabActive)}}>
              <ChevronDown className={`rounded-full bg-yellow-300 h-5 ${!fabActive ? 'rotate-180' : '' }`} />
            </div>
          </div>
          <a href={announcement.link}>
            <img className={`${announcement.dimensions} border-2 border-white`} src={announcement.image} />
          </a>
        </div>
      </div>}
    </div>
  )
}

export default Home;


export async function getStaticProps() {
  return { 
    props: { frontMatter } 
  };
}

function ChevronDown(props: {className: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  )
}