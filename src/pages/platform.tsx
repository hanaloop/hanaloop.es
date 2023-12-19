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
            <div className="text-center text-2xl italic">section1_quote</div>
            <div className="text-right text-sm text-gray-600  whitespace-nowrap">- 피터 드러커 (Peter Drucker)</div>
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
              <img className="w-96 h-64 drop-shadow" src={useBaseUrl("/images/product-ecoloop.jpeg")} />
            </div>

          </div>
        </div>
      </div>
      </SectionBlock>

      <SectionBlock title='Hana.eco Features' >
        <div className="flex justify-center">
        <div className="text-left max-w-4xl space-y-6">
          {data.features.map(feature => 
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

      <SectionBlock title='Hana.eco가 지원하는 표준 보고 항목' containerStyle='bg-gray-100 flex justify-center'>

      <article className="p-4 max-w-3xl text-left">

        <img src={useBaseUrl("/images/standards/tcfd-logo.png")} className="h-8" alt="TCFD logo"/>

        <h3>Strategy</h3>
        <ul>
          <li>A) Describe the climate-related risks and opportunities the organization has identified over the short, medium, and long term.</li>
          <li>B) Describe the impact of climate-related risks and opportunities on the organization’s businesses, strategy, and financial planning.</li>
        </ul>
            
        <h3>Metrics and Targets</h3>
        <ul>
          <li>a) Disclose the metrics used by the company to assess climate-related risks and opportunities in line with its strategy and risk management process.</li>
          <li>b) Disclose Scope 1, Scope 2, and, if appropriate, Scope 3 greenhouse gas (GHG) emissions, and the related risks.</li>
          <li>c) Describe the targets used by the company to manage climate-related risks and opportunities and performance against targets.</li>
        </ul>

        <hr />

        <img src={useBaseUrl("/images/standards/cdp-logo.png")} className="mt-4 h-16" alt="CDP logo"/>

        <h3 id="c4-targets-and-performance-목표-및-성과">C4	Targets and performance (목표 및 성과)</h3>
        <ul>
          <li>C4.1: Emissions targets</li>
          <li>C4.3: Emissions reduction initiatives</li>
        </ul>
        <h3 id="c6--emissions-data-배출량-데이터">C6 Emissions data (배출량 데이터)</h3>
        <ul>
          <li>C6.1:  Scope 1 emissions data</li>
          <li>C6.2:  Scope 2 emissions reporting</li>
          <li>C6.3:  Scope 2 emissions data</li>
          <li>C6.7:  Biogenic carbon data</li>
          <li>C6.7a: Biogenic carbon data</li>
          <li>C6.10: Emissions intensities</li>
        </ul>
        <h3 id="c7-emissions-breakdown-배출-내역">C7	Emissions breakdown (배출 내역)</h3>
        <ul>
          <li>C7.1: Scope 1 breakdown: GHGs</li>
          <li>C7.2: Scope 1 breakdown: country/area/region</li>
          <li>C7.3: Scope 1 breakdown: business breakdown</li>
          <li>C7.5: Scope 2 breakdown: country/area/region</li>
          <li>C7.6: Scope 2 breakdown: business breakdowns</li>
          <li>C7.9: Emissions performance</li>
        </ul>

        <h3 id="c8---energy-에너지">C8 Energy (에너지)</h3>
        <ul>
          <li>C8.2:	Energy-related activities</li>
        </ul>

        <hr />

        <img src={useBaseUrl("/images/standards/gri-logo.png")} className="mt-4 h-16" alt="GRI logo"/>

        <h3 id="gri-302-energy-2016-에너지">GRI 302: Energy 2016 (에너지)</h3>
        <ul>
          <li>Disclosure 302-1: Energy consumption within the organization </li>
          <li>Disclosure 302-2: Energy consumption outside of the organization <span className="p-1 text-xs rounded bg-slate-400 text-gray-100">(2022-Q4)</span></li>
          <li>Disclosure 302-3: Energy intensity </li>
          <li>Disclosure 302-4: Reduction of energy consumption</li>
        </ul>
        <h3 id="gri-305-emissions-배출-내역">GRI 305: Emissions (배출 내역)</h3>
        <ul>
          <li>Disclosure 305-1: Direct (Scope 1) GHG emissions</li>
          <li>Disclosure 305-2: Energy indirect (Scope 2) GHG emissions</li>
          <li>Disclosure 305-3: Other indirect (Scope 3) GHG emissions <span className="p-1 text-xs rounded bg-slate-400 text-gray-100">(2023-Q2)</span></li>
          <li>Disclosure 305-4: GHG emissions intensity</li>
          <li>Disclosure 305-5: Reduction of GHG emissions</li>
          <li>Disclosure 305-6: Emissions of ozone-depleting substances (ODS)</li>
          <li>Disclosure 305-7: Nitrogen oxides (NOx), sulfur oxides (SOx), and other significant air emissions</li>
        </ul>

      </article>
      </SectionBlock>


      <SectionBlock title='기대 효과'>
      <div className="text-left flex justify-center">
        <div className="space-y-4 ">
        {data.benefits.map( (benefit, idx) => 
        <div className="block " key={idx}> 
          <div className="p-2 min-w-0 rounded-l-full rounded-r-lg bg-primary-600 flex items-center">
            <div className="ml-0 w-20 h-20 rounded-full bg-secondary text-4xl font-bold text-gray-50 items-center inline-block text-center"><div className="pt-2">{benefit.subtitle}</div></div>
            <div className="pl-3 text-2xl w-40  flex-none text-white ">{benefit.title}</div>
            <div className="flex-1 py-1 rounded-md bg-white text-left">
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

