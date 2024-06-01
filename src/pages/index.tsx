import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Translate, {translate} from '@docusaurus/Translate';

import Hero from '../components/hanaloop/Hero';
import useBaseUrl from '@docusaurus/useBaseUrl';
import SectionBlock from '../components/theme/SectionBlock';
import useGlobalData from '@docusaurus/useGlobalData';

// import { customers, elements, features, partners, reasons } from '../data/index.data';


// let announcement: any | undefined;
const announcement = {
  initialOpen: true,
  title: "2023년 12월 '하나루프와 기후 인사이트 수요일' 등록하기",
  link: "https://docs.google.com/forms/d/e/1FAIpQLSev-ubKKT32aD-gqLHy0k56xyv-iBwiA5Z6jnMtqekdYmIcdA/viewform",
  image: "/images/blog/HanaLoop_climate_insight_wednesdays.jpg",
  dimensions: `w-[500px] md:w-[600px]`,
};

export default function Home(): JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();
  const globalData = useGlobalData();

  // console.log(JSON.stringify(globalData, null, 2));

  const data = require(`../data/index_${i18n.currentLocale}.data`);

  return (
    <Layout
      wrapperClassName='text-gray-700 dark:text-red-400'
      title={`${siteConfig.title} | ${translate({message: "index.meta_title"})}`}
      description={translate({message: "index.meta_description"})}>
      <Hero background={{
          imageUrl: useBaseUrl('/images/bg-hero_jungle_coast.jpg'),
        }} 
        header={translate({message: "index.hero_header"})}
        tagline={translate({message: "index.hero_tagline"})}
        button={
          {href: '/demo_request', label: translate({message: "request_demo"})}
        }
      />
      <main>
        <SectionBlock title={data.content.section0_title} containerStyle='bg-white'>
          <div className="flex px-10 my-4 text-left">
            <div className='flex-none w-64' ><img src="/images/partners/lrqa-logo.png" /></div>
            <div className='w-full space-y-2'>
              <h2 className='text-3xl font-bold'>로이드인증원(LRQA) 배출권거래제 및 EU 탄소국경조정제도 플랫폼 적합성 국내 첫 검증의견서 획득</h2>
              <div className='text-lg' >(2024.05.30) 탄소관리 선도기업 ㈜하나루프는 자사의 기후규제 대응 탄소중립 플랫폼인 하나에코가 지난달 30일 국제공인 인증기관인 로이드인증원(LRQA)으로부터 
                한국 배출권거래제 및 유럽연합(EU)의 탄소국경조정제도(CBAM) 지침에 부합한 것으로 적합성을 인정받았다고 밝혔다. 이는 국내 최초로 하나에코가 국내외적으로 신뢰할 수 있는 탄소관리 솔루션임을 공식 인정받은 것이다.</div>
            </div>
          </div>
        </SectionBlock>

        {/* Climate strategy is essential */}
        <SectionBlock title={data.content.section1_title} containerStyle='bg-gray-100'>
          <div className="px-10 my-4 grid lg:grid-cols-4 grid-cols-1 gap-4  ">
            {
              data.reasons.map(item => 
                <div className="border border-green-600 rounded-lg text-center text-gray-700" key={item.title}>
                  <div className="flex justify-center items-center text-sm">
                    <div className="flex mr-1">{item.icon}</div>
                    <h3 className="text-xl py-2">{item.title}</h3>
                  </div>
                </div>)
            }
          </div>
        </SectionBlock>

        <SectionBlock title={data.content.section2_title} containerStyle="" >
          <div className="space-y-10">
            <div className="mt-4 text-center items-center space-y-8 ">
              {/* CUSTOMERS */}
              <div className="flex justify-center space-x-6 ">
                {
                  data.customers.map(item => 
                    <span className="group" key={item.title}>
                      <Link href={item.sourceUrl!} ><a target="_blank" ><img className="h-8 grayscale group-hover:grayscale-0 duration-200" src={useBaseUrl(item.imageUrl!)} alt={item.title} /></a></Link>
                      <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-50 border-lime-700 hidden group-hover:block absolute tooltip-text">{item.description}</span>
                    </span>)
                }
              </div>
              {/* PARTNERS */}
              <div className="flex justify-center space-x-6 ">
                {
                  data.partners.map(item => 
                    <div className="group" key={item.title}>
                      <Link href={item.sourceUrl!}><a target="_blank" ><img className="h-8 rounded-md grayscale group-hover:grayscale-0 duration-200" src={useBaseUrl(item.imageUrl!)} alt={item.title} /></a></Link>
                      <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-60 border-lime-700 hidden group-hover:block absolute tooltip-text">{item.description}</span>
                    </div>)
                }
              </div>
              <div>
                <div className="flex justify-center space-x-6 ">
                  {
                    data.programs.map(item => 
                      <div className="group" key={item.title}>
                        <Link href={item.sourceUrl!}><a target="_blank" ><img className="h-8 rounded-md grayscale group-hover:grayscale-0 duration-200" src={useBaseUrl(item.imageUrl!)} alt={item.title} /></a></Link>
                        <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-60 border-lime-700 hidden group-hover:block absolute tooltip-text">{item.description}</span>
                      </div>)
                  }
                </div>
                <div className='text-xs'>{data.content.section2_subtitle}</div>
              </div>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock title='' containerStyle="bg-gray-100" >
          <div className="px-10 space-y-20 ">
            <div >
              <h3 className="text-xl font-bold">
              {data.content.section3_title}
              </h3>
              <div className="mt-10 border border-primary-500 rounded p-2 hover:bg-primary-600 hover:text-gray-100">
                <Link href={data.content.section3_href}>
                  <a className='text-sx '>{data.content.section3_link}</a>
                </Link>
              </div>  
            </div>
            
            <div className='text-left space-y-7 '>
            {
              data.elements.map((item, ndx) => {
                const lines = item.description as string[];
                return (
                  
                <div className="group mt-3 pl-2 rounded-md border-l-4 hover:border-primary-700 lg:flex" key={ndx}>
                  <div className="lg:w-[500px] flex-none mb-2">
                    <div className="text-3xl font-bold">
                      <div className="flex mr-1 items-baseline text-gray-700 group-hover:text-primary-700">
                        <span className="pr-4">{ndx + 1}.</span>
                        <h3 className=" py-2 inline">{item.title}</h3>
                      </div>
                    </div>
                    <div className="text-gray-700 [word-break:keep-all] ml-10" >
                      <h4 className="pb-2 text-lg font-bold  text-gray-400">{item.subtitle}</h4>
                      <ul className="ml-3 list-disc space-y-2">
                        {lines.map((line, ndx: number) => 
                          <li key={ndx}>{line}</li>
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="flex-1 p-4">
                    {item.imageUrl && <img className="object-cover object-top h-60 w-full border group-hover:border-gray-300" src={useBaseUrl(item.imageUrl)} alt={item.title} />}
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
            {/* <Link href={'/platform'}><a>SaaS형 지속가능성 플랫폼 Hana.eco</a></Link> */}
          </h2>
          <div className="p-6 border-2 border-secondary rounded-lg grid md:grid-cols-4 grid-cols-1 gap-4  ">
            {
              data.features.map(item => 
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

        
      </main>
    </Layout>
  );
}
