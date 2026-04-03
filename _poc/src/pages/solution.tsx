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
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';
import Hero from '../components/hanaloop/Hero';
import SectionBlock from "../components/theme/SectionBlock";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { motion } from "framer-motion";
import GlobeIcon from "../../static/svg/Globe.svg"; 
import FlagIcon from "../../static/svg/Flag.svg"; 
import SproutIcon from "../../static/svg/Sprout.svg"; 
import HandshakeIcon from "../../static/svg/Handshake.svg"; 

export default function Home(): React.JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();

  const data = require(`../data/solution_${i18n.currentLocale}.data`);
  const section3_svgs = {
    section3_svg_1: <GlobeIcon />,
    section3_svg_2: <FlagIcon />,
    section3_svg_3: <HandshakeIcon />,
    section3_svg_4: <SproutIcon />,
  };

  return (
    <Layout wrapperClassName='text-gray-700 dark:text-gray-100'
      title={`${translate({message: "solution.meta_title"})}`}
      description={translate({message: "solution.meta_description"})}>

      <Hero background={{
          imageUrl: useBaseUrl('/images/bg-hero-solution.jpg'),
        }} 
        header={translate({message: "solution.hero_header"})}
        tagline={translate({message: "solution.hero_tagline"})}
        button={
          {href: '/demo_request', label: translate({message: "request_demo"})}
        }
      />

      <div className="w-screen flex justify-center">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 60 }} 
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
        >
          <SectionBlock title={data.intro.title}>
            <div className="px-10 w-full flex justify-center">
              <div className="md:w-[55%] w-full flex flex-col gap-10 items-center">
                {data.intro.items.map((item, ndx) => {
                  const svgKey = `section3_svg_${ndx + 1}`;
                  const SvgComponent = section3_svgs[svgKey];

                  // const lines = item.description as string[];
                  return (
                    <div
                      className="group rounded-xl hover:border-primary-700 mb-4 py-5 bg-white dark:bg-gray-800 shadow-sm flex justify-center"
                      key={ndx}
                    >
                      <div className="mb-2 flex flex-col justify-start items-start text-left gap-3 h-full w-[90%]">
                        <div className='flex lg:flex-row flex-col-reverse items-center gap-4'>
                          <div className='flex flex-col items-start'>
                            <div className='flex items-center xl:text-xl text-lg font-bold'>
                              <div className="w-12 h-12 rounded-md p-2">{SvgComponent}</div>
                              <h3 className="py-2 inline ">{item.title}</h3>
                            </div>
                            <div className="[word-break:keep-all] w-full">
                              <h4 className="pb-2 text-md font-semibold text-gray-500 text-left">{item.description}</h4>
                            </div>
                          </div>
                          <div className='w-[200px] h-[200px] flex-shrink-0 rounded-md flex justify-center items-center'>
                            <img src={`/images/solution_${ndx+1}.png`} height="200px" width="200px" className='rouneded-md' />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </SectionBlock>
        </motion.div>
      </div>

      <div className="w-screen flex justify-center bg-gray-50 dark:bg-gray-900">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 60 }} 
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
        >
          <SectionBlock title={data.benefits.title}>
            <div className="px-10 ">
              <div className="xl:grid xl:grid-cols-2 gap-10">
                {data.benefits.items.map((item, ndx) => {
                  const svgKey = `section3_svg_${ndx + 1}`;
                  const SvgComponent = section3_svgs[svgKey];

                  // const lines = item.description as string[];
                  return (
                    <div
                      className="group w-full rounded-xl hover:border-primary-700 mb-4 py-7 bg-white dark:bg-gray-700 shadow-sm flex justify-center"
                      key={ndx}
                    >
                      <div className="mb-2 flex flex-col justify-start items-start text-left gap-3 h-full w-[80%]">
                        <div className="w-12 h-12 rounded-md p-2">{SvgComponent}</div>
                        <div className="xl:text-xl text-lg font-bold">
                          <div className="flex mr-1 items-baseline group-hover:text-primary-700 justify-center">
                            <h3 className="py-2 inline ">{item.title}</h3>
                          </div>
                        </div>
                        <div className="[word-break:keep-all] w-full">
                          <ul className="list-none xl:text-md text-sm text-left">
                            {item.description?.map((expect, ndx: number) => (
                              <li className="flex gap-2 items-center" key={ndx}><div className="w-1 h-1 rounded-full bg-blue-500"></div><div>{expect}</div></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </SectionBlock>
        </motion.div>
      </div>
    </Layout>
  );
}
