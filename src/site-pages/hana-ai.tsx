'use client';

import React from 'react';
import Link from '@docusaurus/Link';
import SectionBlock from "../components/theme/SectionBlock";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { motion } from "framer-motion";
import ChartIcon from "../../static/svg/Chart.svg";
import Board from "../../static/svg/Board.svg";
import { CardMediaImage } from '../components/theme/CardMedia';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Hero from '../components/hanaloop/Hero';
import { getPageData } from '@/lib/page-data';
import { useTranslate } from '@/lib/use-translate';

const svgs = {
  svg_1: <ChartIcon />,
  svg_2: <Board />,
};


export default function HanaAI(): React.JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();
  const t = useTranslate();
  const data = getPageData('hana-ai', i18n.currentLocale);

  return (
    <Layout wrapperClassName='text-gray-700 dark:text-gray-100'
      title={`${siteConfig.title} | ${t("hana-ai.meta_title")}`}
      description={t("hana-ai.meta_description")}>
      <Hero background={{
          imageUrl: useBaseUrl('/images/bg-hero_ai.webp'),
        }} 
        header={t("hana-ai.hero_header")}
        tagline={t("hana-ai.hero_tagline")}
        button={
          {href: '/demo_request', label: t("request_demo")}
        }
      />
      <main className="break-keep w-screen bg-gray-50 dark:bg-gray-800">
        <div className="w-full flex justify-center">
            <div className='w-screen'>
              <SectionBlock title={data.hero.second_title}>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1 },
                    }}
                    className="w-full justify-center"
                  >
                    <div className='w-screen'>
                      <div className='flex w-full justify-center'>
                        <div className="sm:w-[80%] w-[90%] gap-10 flex md:flex-row flex-col md:justify-center items-center">
                            {data.features_2.map((item, ndx) => {
                              const svgKey = `svg_${ndx + 1}`;
                              const SvgComponent = svgs[svgKey];
                              return (
                                <div
                                  className="group rounded-xl hover:border-primary-700 mb-4 py-8 bg-gray-100 dark:bg-gray-900 shadow-sm flex justify-center  md:w-[50%] w-full h-full"
                                  key={ndx}
                                >
                                  <div className="mb-2 flex flex-col justify-start items-start gap-3 h-full sm:w-[80%] w-[90%]">
                                    <div className='flex items-center'>
                                      <div className="w-12 h-12 rounded-md p-2">{SvgComponent}</div>
                                      <h3 className="py-2 inline font-bold text-lg">{item.title}</h3>
                                    </div>
                                    <div className="flex flex-col mr-1 items-baseline group-hover:text-primary-700">
                                      {
                                        item.descriptions.map((description, descriptionIndex) => {
                                          return (
                                            <div
                                              key={`${item.title}-${String(description)}-${descriptionIndex}`}
                                              className='flex gap-4 items-center'
                                            >
                                              <span className="lg:text-base text-left text-sm">{description}</span>
                                            </div>
                                          )
                                        })
                                      }
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SectionBlock>
                <SectionBlock title={'Hana.eco AI Features'} containerStyle='bg-gray-50 dark:bg-gray-900'>
                  {
                    data.features_1.map((feature, idx) => (
                        <div key={idx}><CardMediaImage size="m" title={feature.title} descriptions={feature.descriptions} imageUrl={feature.imageUrl}/></div>
                    ))
                  }
              </SectionBlock>
            </div>
        </div>
        <div className="w-full h-[300px] text-center bg-blue-50 dark:bg-gray-800 flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col sm:w-[80%] w-[95%] justify-center items-center">
            <span className="text-2xl md:text-3xl xl:text-4xl font-semibold  whitespace-normal break-keep">{data.request.title}</span>
            <div className="flex gap-3 justify-center my-8 xl:justify-start">
              <a href={data.hero.link_1} target="_blank">
                <button className="rounded-lg py-3 w-[120px] font-bold text-white bg-[#0094ff] hover:bg-[#017cd4]">
                  {data.request.button_1}
                </button>
              </a>
              <Link to={data.hero.link_2}>
                <button className="rounded-lg py-3 w-[120px] font-bold text-white bg-[#0094ff] hover:bg-[#017cd4]">
                  {data.request.button_2}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
