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

  const data = require(`../data/${i18n.currentLocale}_index.data`);

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

      <SectionBlock title='Partnership' >
        <>
        <div className="my-5 border border-2 rounded-lg grid grid-cols-1  md:grid-cols-2 gap-2">
          <div className="p-4 group hover:bg-slate-100">
            <div className="text-lg font-bold group-hover:text-primary-700">SaaS Solution Partner Program</div>
            <div>
            **WHAT IS IT**
      Program that enables companies to offer Hana.eco SaaS solution to their customers and receive commision on sales.<br />
      **FOR WHOM**
      Consulting service providers such as Business & Environment consulting firms, and Accounting and Law Firms.
            </div>
          </div>
          <div className="p-4 group hover:bg-slate-100">
            <div className="text-lg font-bold group-hover:text-primary-700">Technology Partner Program</div>
            <div>
            **WHAT IS IT**
      Program that enables companies to offer Hana.eco OnPrem system to their customers as standalone or part of their solution suite.<br />
      **FOR WHOM**
      Solution providers with IT product that want to incorporate hana.eco to their solution suite.
            </div>
          </div>
        </div>
        <div>
        </div>
        </>
      </SectionBlock>

      <SectionBlock title='Strategic Alliances' containerStyle='bg-gray-100 flex justify-center'>
        <div className="text-left">
        - Korea Carbon Project (Project organized by SNU and sponsored by KEITI)
        - [NetZero 2050](http://netzero2050.or.kr/)
        - [International Centre for Hydropower (ICH)](https://ich.no/)
        </div>
      </SectionBlock>


      <div className="flex justify-center" >
        <img src={useBaseUrl("/images/banners/pyeongchanggun-windfarm.jpeg")} />
      </div>

    </Layout>
  );
}
