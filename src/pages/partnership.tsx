{/* ---
keywords: ["파트너십 프로그램"]
--- */}
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';
import Hero from '../components/hanaloop/Hero';
import SectionBlock from "../components/theme/SectionBlock";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();

  const data = require(`../data/partnership_${i18n.currentLocale}.data`);

  return (
    <Layout
      title={`${siteConfig.title} | ${translate({message: "partnership.meta_title"})}`}
      description={translate({message: "partnership.meta_description"})}>

      <Hero background={{
          imageUrl: useBaseUrl('/images/bg-hero_partnership.jpeg'),
        }} 
        header={translate({message: "partnership.hero_header"})}
        tagline={translate({message: "partnership.hero_tagline"})}
        button={
          {href: '/demo_request', label: translate({message: "request_demo"})}
        }
      />

      <SectionBlock title={data.content.section1_title} >
        <>
        <div className="my-5 border border-2 rounded-lg grid grid-cols-1  md:grid-cols-2 gap-2">
          <div className="p-4 group hover:bg-slate-100">
            <div className="text-lg font-bold group-hover:text-primary-700">SaaS Solution Partner Program</div>
            <article>
            {data.content.saas_partner}
            </article>
          </div>
          <div className="p-4 group hover:bg-slate-100">
            <div className="text-lg font-bold group-hover:text-primary-700">Technology Partner Program</div>
            <article>
            {data.content.technology_partner}
            </article>
          </div>
        </div>
        <div>
        </div>
        </>
      </SectionBlock>

      <SectionBlock title={data.content.section2_title} containerStyle='bg-gray-100 flex justify-center'>
        <article className="text-left">
        <ul>
          {data.alliances.map((item, idx) => 
            <li key={idx}>
              {item.sourceUrl ? <a href={item.sourceUrl}>{item.title}</a> : item.title}
            </li>
          )}
        </ul>
        </article>
      </SectionBlock>


      <div className="flex justify-center" >
        <img src={useBaseUrl("/images/banners/pyeongchanggun-windfarm.jpeg")} />
      </div>

    </Layout>
  );
}
