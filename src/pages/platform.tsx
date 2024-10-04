// ---
// title: "HanaEco by 하나루프 | SaaS형 데이터기반 지속가능성 플랫폼 | 공급망 탄소관리 플랫폼"
// description: "SaaS형 온실가스 관리 플랫폼, HanaEco(하나에코)는 온실가스 배출활동을 관리하며, 배출량을 계산하고 분석합니다. hana.eco를 통해 기관, 기업은 기후관련 규제에 대응하고, 기후 리스크를 줄이며, 에너지 소비를 줄이고, ESG 포트폴리오를 향상시킬 수 있습니다. 궁극적으로 기관, 기업은 탄소발자국을 줄이며, 기후위기 완화에 기여할 수 있습니다. 탄소 어카운팅, 환경 업무 협업, 탄소 전략, 전략적 시각화, 가치사슬 탄소관리, 스코프3 관리, 공급망 탄소 관리, 온실가스를 보여주는 지속가능성 플랫폼, 환경데이터 관리 비용 절감, 환경위험요소 감소, 기업 이미지 및 경쟁력 향상"
// tags: [에코루프, HanaEco, EcoLoop, SaaS형 지속가능성 플랫폼, 공급망 탄소관리 플랫폼, 스코프3 관리 플랫폼, 가치사슬 탄소관리 플랫폼, 온실가스 관리, 탄소 관리, 탄소중립 플랫폼, 넷제로 플랫폼, ESG 향상 플랫폼, 환경데이터 관리 비용 절감, 환경위험요소 감소, 기업이미지 향상, 기업 경쟁력 향상]

// publishedAt: "2022-10-06"

// headerBackground:
//   imageUrl: "/images/bg-hero_platform.jpeg"
// hero:
//   header: "Hana.eco, a Flexible Sustainability Platform"
//   tagline: "Carbon and air pollution data management"
// ---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';
import Hero from '../components/hanaloop/Hero';
import SectionBlock from "../components/theme/SectionBlock";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();

  const data = require(`../data/platform_${i18n.currentLocale}.data`);

  return (
    <Layout wrapperClassName='text-gray-700 dark:text-gray-100'
      title={`${siteConfig.title} | ${translate({message: "platform.meta_title"})}`}
      description={translate({message: "platform.meta_description"})}>

      <Hero background={{
          imageUrl: useBaseUrl('/images/bg-hero_platform.jpeg'),
        }} 
        header={translate({message: "platform.hero_header"})}
        tagline={translate({message: "platform.hero_tagline"})}
        button={
          {href: '/demo_request', label: translate({message: "request_demo"})}
        }
      />

      <SectionBlock title={data.content.section1_title} containerStyle=' bg-gray-100'>
      <div className="text-center">
        {data.content.section1_body}
      <br/>
      <br/>
        <div className="flex justify-center">
          <div className="w-4/5 ">
            <div className="text-center text-2xl italic">{data.content.section1_quote}</div>
            <div className="text-right text-sm text-gray-600  whitespace-nowrap">- Peter Drucker (피터 드러커)</div>
          </div>
        </div>
        <br/>
        <br/>

        <div className="md:flex justify-center ">
          <div className="p-6 bg-white dark:bg-gray-600 rounded border border-secondary md:flex items-center">
            <div className="flex-1">
              <div className="p-6">
              {data.content.section1_highlight}
              </div>
            </div>
            <div className="flex justify-center">
              <img className="h-64 rounded-md drop-shadow-md" src={useBaseUrl("/images/product-ecoloop.jpg")} alt="Hana.eco dashboard" />
            </div>

          </div>
        </div>
      </div>
      </SectionBlock>

      <SectionBlock title={data.features.title} >
        <div className="flex justify-center">
        <div className="text-left max-w-4xl space-y-6">
          {data.features.items.map(feature => 
          <div className="md:flex pt-2 rounded-lg border border-slate-200" key={feature.title}>
            <img className="h-64 w-64 rounded-lg drop-shadow mx-auto md:rounded-none md:drop-shadow-none" src={useBaseUrl(feature.imageUrl)} />
            <div className="p-6 border-primary" >
              <h3 className="text-3xl font-bold inline">{feature.title}</h3>
              <span className="ml-1 inline text-gray-600 text-sm">{feature.subtitle}</span>
              <article className="text-sm text-gray-600">
                {feature.description}
              </article>
            </div>
          </div>
          )}
        </div>
        </div>
      </SectionBlock>

      <SectionBlock title={data.standards_title} containerStyle='bg-gray-100 flex justify-center'>
      <article className="p-4 max-w-3xl text-left">
        { data.standards.map((standard, idx) => 
        <>
        <img src={useBaseUrl(standard.imageUrl)} className="mt-4 h-16" alt={`${standard.title} logo`}/>

        {standard.items.map(item=>
          <>
          <h3>{item.title}</h3>
          <ul>
          {item.description.map(d=>
            <li>{d}</li>
          )}
          </ul>
          </>
        )}
        <hr />
        </>
        )}
      </article>
      </SectionBlock>


      <SectionBlock title={data.benefits.title}>
      <div className="text-left flex justify-center">
        <div className="space-y-4 ">
        {data.benefits.items.map( (benefit, idx) => 
        <div className="block " key={idx}> 
          <div className="p-2 min-w-0 rounded-l-full rounded-r-lg bg-sky-600 flex items-center">
            <div className="ml-0 w-20 h-20 rounded-full bg-gray-100 text-4xl font-bold text-gray-600 dark:text-gray-200  dark:bg-gray-600  items-center inline-block text-center">
              <div className="pt-3 ">{benefit.subtitle}</div>
            </div>
            <div className="pl-3 text-2xl w-40  flex-none text-white ">{benefit.title}</div>
            <div className="flex-1 p-3 rounded-md text-left bg-white  dark:bg-gray-600">
              {benefit.description}
            </div>
          </div>
        </div>
        )}
        </div>
      </div>
      </SectionBlock>

    </Layout>
  );
}

