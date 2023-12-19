// ---
// title: "Hana.eco (하나에코), 데이터기반 지속가능성 솔루션"
// description: "hana.eco(하나에코) 데이터기반 지속가능성 솔루션, 데이터를 통해 전략적 인사이트를 제공하는 솔루션, 온실가스 관리 플랫폼, 데이터 수집 자동화 및 분석, 가치사슬망 관리, 공급망 관리, 스코프3 관리, 중소기업을 위한 지속가능성 솔루션, OpenAPI 제공으로 지속가능성 생태계 가속화"
// keywords: [온실가스 관리 플랫폼, hana.eco, 하나에코, EcoLoop, 데이터기반 지속가능성 솔루션, 데이터 자동화 및 분석, 가치사슬망 관리, 공급망 관리, 스코프3 관리, 중소기업을 위한 지속가능성 솔루션, 탄소관리 OpenAPI, Carbon Accounting OpenAPI]

// publishedAt: "2022-10-06"

// headerBackground:
//   imageUrl: "/images/bg-hero_mangrove.jpeg"
//   imageDescription: "사진: Mangrove. Termed “blue carbon” ecosystems (BCE), these habitats occupy a relatively small area of the global ocean (∼0.2%), but are major contributors to marine sediment organic carbon burial"
// hero:
//   header: "Solution"
//   tagline: ["Resources are finite, but potential is infinite"]
// ---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';
import Hero from '../components/hanaloop/Hero';
import SectionBlock from "../components/theme/SectionBlock";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();

  const data = require(`../data/solution_${i18n.currentLocale}.data`);

  return (
    <Layout
      title={`${siteConfig.title} | ${translate({message: "solution.meta_title"})}`}
      description={translate({message: "solution.meta_description"})}>

      <Hero background={{
          imageUrl: useBaseUrl('/images/bg-hero_mangrove.jpeg'),
        }} 
        header={translate({message: "solution.hero_header"})}
        tagline={translate({message: "solution.hero_tagline"})}
        button={
          {href: '/demo_request', label: translate({message: "request_demo"})}
        }
      />


      <SectionBlock title={data.content.section1_title} >
        <div className="my-5 border border-2 rounded-lg grid grid-cols-1  md:grid-cols-2 gap-2">
          {data.intro.map((item,idx) =>
            <div className="p-4 group hover:bg-slate-100">
              <div className="text-lg font-bold group-hover:text-primary-700">{item.title}</div>
                <span className="text-base">{item.subtitle}</span>
                <div>{item.description}</div>
            </div>
          )}
        </div>
      </SectionBlock>


      <SectionBlock title={data.content.section2_title} containerStyle='bg-gray-100'>
        <div className="my-5 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-2">
          {data.benefits.map(benefit => 
          <div className="text-center" key={benefit.title}> 
            <div className="font-extrabold text-lg text-secondary text-left">{benefit.title}</div>
            <article className="h-32 text-gray-600 bg-white text-left border border-secondary-100 rounded-b-md">
              {benefit.description}
            </article>
          </div>
          )}
        </div>
      </SectionBlock>

      <div className="flex justify-center" >
        <img src={useBaseUrl("/images/banner-carbon_disclosure.jpeg")} />
      </div>
    </Layout>
  );
}
