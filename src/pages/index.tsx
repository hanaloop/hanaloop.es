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
        {/* Climate strategy is essential */}
        <SectionBlock title={data.content.section1_title} containerStyle='bg-gray-100'>
          <div className="px-10  my-5 grid lg:grid-cols-4 grid-cols-1 gap-4  ">
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
              <div className="flex justify-center space-x-6 ">
                {
                  data.customers.map(item => 
                    <div className="group" key={item.title}>
                      <Link href={item.sourceUrl!} ><a target="_blank" ><img className="h-8 grayscale group-hover:grayscale-0 duration-200" src={useBaseUrl(item.imageUrl!)} alt={item.title} /></a></Link>
                      <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-50 border-lime-700 hidden group-hover:block absolute tooltip-text">{item.description}</span>
                    </div>)
                }
              </div>
              <div className="flex justify-center space-x-6 ">
                {
                  data.partners.map(item => 
                    <div className="group" key={item.title}>
                      <Link href={item.sourceUrl!}><a target="_blank" ><img className="h-8 rounded-md grayscale group-hover:grayscale-0 duration-200" src={useBaseUrl(item.imageUrl!)} alt={item.title} /></a></Link>
                      <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-60 border-lime-700 hidden group-hover:block absolute tooltip-text">{item.description}</span>
                    </div>)
                }
              </div>
              <div className="space-y-2">
                <div className="flex justify-center space-x-6 ">
                  <img className="h-8 " src={useBaseUrl("/images/partners/korea-mss-gov.png")} alt="중소벤처기업부" />
                  <img className="h-8 " src={useBaseUrl("/images/partners/korea-tipa-gov.gif")} alt="중소기업기술정보진흥원" />
                  <Link href={`https://svhc.or.kr/`}><a><img className="h-8 " src={useBaseUrl("/images/partners/seoulsocialventurehub-logo2.png")} alt="서울소셜벤처허브" /></a></Link>
                </div>
                <div className='text-xs'>{data.content.section2_subtitle}</div>
              </div>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock title='' containerStyle="bg-gray-100" >
          <div className="px-10 space-y-20 ">
            <div >
              <div className="text-xl font-bold">
              {data.content.section3_title}
              </div>
              <div className="mt-10 border border-primary-500 rounded p-2 hover:bg-primary-600 hover:text-gray-100">
                <Link href={'https://docs.google.com/presentation/d/1FBvBwSz998JR_S_CKMQOPVkr3QXXQEjGyqLADDncrS8/edit?usp=sharing'}>
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
