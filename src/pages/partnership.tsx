{/* ---
keywords: ["파트너십 프로그램"]
--- */}
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';
import Hero from '../components/hanaloop/Hero';
import SectionBlock from "../components/theme/SectionBlock";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { motion } from "framer-motion";

export default function Home(): React.JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();

  const data = require(`../data/partnership_${i18n.currentLocale}.data`);

  return (
    <Layout wrapperClassName='text-gray-700 dark:text-gray-100'
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
          <SectionBlock title={data.content.title}>
            <div className="px-10 w-full flex justify-center">
              <div className="w-full flex flex-col gap-10 items-center">
                {data.content.items.map((item, ndx) => {
                  // const lines = item.description as string[];
                  return (
                    <div
                      className="group w-full rounded-xl hover:border-primary-700 mb-4 py-5 bg-white dark:bg-gray-700 shadow-sm flex justify-center"
                      key={ndx}
                    >
                      <div className="mb-2 flex flex-col justify-start items-start text-left gap-3 h-full w-[90%]">
                        <div className='flex lg:flex-row flex-col-reverse items-center gap-4'>
                          <div className='flex flex-col items-start'>
                            <div className="xl:text-xl text-lg font-bold">
                              <div className="flex mr-1 items-baseline group-hover:text-primary-700 justify-center">
                                <h3 className="py-2 inline">{item.title}</h3>
                              </div>
                            </div>
                            <div className="[word-break:keep-all] w-full">
                              <h4 className="pb-2 text-md font-semibold text-gray-500 text-left">{item.description}</h4>
                            </div>
                          </div>
                          <div className='w-[200px] h-[200px] flex-shrink-0 rounded-md flex justify-center items-center'>
                            <img src={`/images/partnership_${ndx+1}.png`} height="200px" width="200px" className='rouneded-md' />
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
    </Layout>
  );
}
