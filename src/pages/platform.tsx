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
import { DisplayItem } from '../libs/types';

export default function Home(): React.JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();

  const data = require(`../data/platform_${i18n.currentLocale}.data`);
  
  const section3_svgs = {
    section3_svg_1: <GlobeIcon />,
    section3_svg_2: <FlagIcon />,
    section3_svg_3: <HandshakeIcon />,
    section3_svg_4: <SproutIcon />,
  };
  

  return (
    <Layout wrapperClassName='text-gray-700 dark:text-gray-100'
      title={`${siteConfig.title} | ${translate({message: "platform.meta_title"})}`}
      description={translate({message: "platform.meta_description"})}>

      <Hero background={{
          imageUrl: useBaseUrl('/images/platform/banner.jpg'),
        }} 
        header={translate({message: "platform.hero_header"})}
        tagline={translate({message: "platform.hero_tagline"})}
        button={
          {href: '/demo_request', label: translate({message: "request_demo"})}
        }
      />

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
          <SectionBlock title={data.content.section2_title}>
            <div className="px-10 ">
              <div className="xl:grid xl:grid-cols-2 gap-10">
                {data.features?.map((item, ndx) => {
                  const svgKey = `section3_svg_${ndx + 1}`;
                  const SvgComponent = section3_svgs[svgKey];

                  // const lines = item.description as string[];
                  return (
                    <div
                      className="group rounded-xl hover:border-primary-700 mb-4 py-7 bg-white dark:bg-gray-700 shadow-sm flex justify-center"
                      key={ndx}
                    >
                      <div className="mb-2 flex flex-col justify-start items-start text-left gap-3 h-full w-[80%]">
                        <div className='flex items-center'>
                          <div className="w-12 h-12 rounded-md p-2">{SvgComponent}</div>
                          <h3 className="py-2 inline  xl:text-xl text-lg font-bold">{item.title}</h3>
                        </div>
                        <div className="[word-break:keep-all] w-full">
                          <h4 className="pb-2 text-md font-semibold text-gray-500 text-left">{item.description}</h4>
                          <ul className="list-none xl:text-md text-sm text-left">
                            {item.expected?.map((expect, ndx: number) => (
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
    <div className='w-screen flex justify-center bg-white dark:bg-gray-800'>
      <SectionBlock title={data.content.section3_title} >
        <div className='w-full flex justify-center'>
          <div className='lg:w-[55%] w-[80%] items-center flex-wrap justify-center gap-10 flex flex-col'>
            {
              data.topics?.map((topic: DisplayItem[], index) => {
                return(
                  <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 60 }} 
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1 },
                    }}
                  >
                    <div className='w-full flex lg:flex-row flex-col gap-6  p-10 rounded-lg bg-gray-100 dark:bg-gray-700 lg:items-start items-center'>
                      <img src={useBaseUrl(`/images/standards/logo-0${index+1}.png`)} className="p-5 sm:w-[200px] sm:h-[200px] w-[185px] h-[185px] object-contain rounded-lg bg-white dark:bg-gray-600 " alt="standard logo"/>
                      <div className='w-full flex flex-wrap text-left gap-6 bg-white dark:bg-gray-600 rounded-md p-4'>
                        {topic?.map(element=>
                          <div>
                            <h3 className='font-bold sm:text-xl text-lg'>{element.title}</h3>
                            <ul className='text-left'>
                            {Array.isArray(element.description) ? element.description.map((d, idx) =>
                              <li key={idx} className='sm:text-base text-sm'>{d}</li>
                            ) : null}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ) 
              })
            }
            </div>
          </div>
      </SectionBlock>
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
          <SectionBlock title={data.content.section4_title}>
            <div className="px-10 ">
              <div className="flex justify-center gap-10 flex-wrap">
                {data.benefits?.map((benefit, ndx) => {
                  const svgKey = `section3_svg_${ndx + 1}`;
                  const SvgComponent = section3_svgs[svgKey];

                  // const lines = item.description as string[];
                  return (
                    <div
                      className="group min-w-[400px] rounded-xl hover:border-primary-700 mb-4 py-7 bg-white dark:bg-gray-700 shadow-sm flex justify-center"
                      key={ndx}
                    >
                      <div className="mb-2 flex flex-col justify-start items-start text-left gap-3 h-full w-[80%]">
                        <div className="xl:text-xl text-lg font-bold">
                          <div className="flex mr-1 gap-3 group-hover:text-primary-700 justify-center items-center">
                            <div className=' flex justify-center items-center w-5 h-5 rounded-md text-sm bg-blue-500 text-white p-3'>{benefit.subtitle}</div>
                            <h3 className="py-2 inline ">{benefit.title}</h3>
                          </div>
                        </div>
                        <div className="[word-break:keep-all] w-full">
                          <span className="list-none lg:text-base text-sm text-left">
                            {benefit.description}
                          </span>
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
