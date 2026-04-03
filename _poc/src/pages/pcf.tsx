import React from 'react';
import {translate} from '@docusaurus/Translate';
import SectionBlock from "../components/theme/SectionBlock";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { motion } from "framer-motion";
import Board from "../../static/svg/Board.svg";
import { CardMediaImage } from '../components/theme/CardMedia';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Hero from '../components/hanaloop/Hero';
import Link from '@docusaurus/Link';
import ArrowIcon from "../../static/svg/Arrow.svg";
import ClipboardCheckIcon from "../../static/svg/ClipboardCheck.svg"; 
import ListCheckIcon from "../../static/svg/ListCheck.svg"; 
import GlobeIcon from "../../static/svg/Globe.svg"; 
import FlagIcon from "../../static/svg/Flag.svg"; 
import SproutIcon from "../../static/svg/Sprout.svg"; 
import HandshakeIcon from "../../static/svg/Handshake.svg"; 
import FileCheckIcon from "../../static/svg/FileCheck.svg"; 
import LayerIcon from "../../static/svg/Layer.svg"; 
import SearchIcon from "../../static/svg/Search.svg"; 


const svgs = {
  svg_1: <Board />,
  svg_2: <ClipboardCheckIcon />,
  svg_3: <ListCheckIcon />,
};

const section3_svgs = {
  section3_svg_1: <GlobeIcon />,
  section3_svg_2: <FlagIcon />,
  section3_svg_3: <HandshakeIcon />,
  section3_svg_4: <SproutIcon />,
};

const section2_svgs = {
  section2_svg_1 : <ClipboardCheckIcon/>,
  section2_svg_2 : <FileCheckIcon/>,
  section2_svg_3 : <ListCheckIcon/>,
  section2_svg_4: <LayerIcon />,
  section2_svg_5: <SearchIcon />,
}



export default function PCF(): React.JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();
  const data = require(`../data/pcf_${i18n.currentLocale}.data`);
  const truncate = (str:string, limit_length: number) => {
    return str.length > limit_length ? str.substring(0, limit_length) + '...' : str;
}

  return (
    <Layout wrapperClassName='text-gray-700 dark:text-gray-100'
      title={`${siteConfig.title} | ${translate({message: "pcf.meta_title"})}`}
      description={translate({message: "pcf.meta_description"})}>
      <Hero background={{
          imageUrl: useBaseUrl('/images/bg-hero-pcf.jpg'),
        }}
        header={translate({message: "pcf.hero_header"})}
        tagline={translate({message: "pcf.hero_tagline"})}
        button={
          {href: '/demo_request', label: translate({message: "request_demo"})}
        }
      />
      <main className="break-keep">
        <div className="w-full flex justify-center dark:bg-gray-800">
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
                  <div className='w-screen flex justify-center'>
                    <div className='flex justify-center flex-col w-[70%] items-center'>
                      <div className={`h-[100px] sm:w-[550px] w-[400px] rounded-md bg-contain bg-center bg-no-repeat z-10`} style={{backgroundImage: `url(${useBaseUrl('/images/pcf-orders.png')})`}}></div>
                      <span>{data.section1.descriptin}</span>
                    </div>
                  </div>
                </motion.div>
              </SectionBlock>
              <SectionBlock title={data.section_title.section_2} containerStyle='bg-gray-50 dark:bg-gray-900'>
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
                      <div className="sm:w-[70%] w-[90%] gap-10 flex xl:flex-row flex-col md:justify-center">
                          {data.section_2.map((item, ndx) => {
                            const svgKey = `svg_${ndx + 1}`;
                            const SvgComponent = svgs[svgKey];
                            return (
                              <div
                                className="group rounded-xl hover:border-primary-700 mb-4 py-8 bg-gray-100 dark:bg-gray-800 shadow-sm flex justify-center items-start w-full"
                                key={ndx}
                              >
                                <div className="mb-2 flex flex-col justify-start items-start gap-3 h-full sm:w-[80%] w-[90%]">
                                  <div className='flex items-center'>
                                    <div className="w-12 h-12 rounded-md p-2">{SvgComponent} </div>
                                    <h3 className="py-2 inline font-bold text-lg">{item.title}</h3>
                                  </div>
                                  <div className="flex flex-col mr-1 items-baseline group-hover:text-primary-700 ">
                                    {
                                      item.descriptions.map((description) => {
                                        return (
                                          <div className='flex gap-4 items-center'>
                                            <span className="text-left text-sm">{description}</span>
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

            <SectionBlock title={data.section_title.section_3}>
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
                  <div className='w-screen flex justify-center'>
                    <div className='flex justify-center flex-col w-[70%] items-center gap-10'>
                      <div className={`h-[500px] w-[450px] rounded-md bg-contain bg-center bg-no-repeat z-10`} style={{backgroundImage: `url(${useBaseUrl('/images/pcf-feature.png')})`}}></div>
                      <span className='w-[80%]'>{data.section_3.description}</span>
                    </div>
                  </div>
                </motion.div>
              </SectionBlock>
            </div>
        </div>

        <div className="w-full h-[300px] text-center bg-blue-50 dark:bg-gray-900 flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col sm:w-[80%] w-[95%] justify-center items-center">
            <span className="text-2xl md:text-3xl xl:text-4xl font-semibold  whitespace-normal break-keep">{data.request.title}</span>
            <div className="flex gap-3 justify-center my-8 xl:justify-start">
              <a href={data.hero.link_1} target="_blank">
                <button className="rounded-lg py-3 w-[120px] font-bold text-white bg-[#0094ff] hover:bg-[#017cd4]">
                  {data.request.button_1}
                </button>
              </a>
              <a href={data.hero.link_2}>
                <button className="rounded-lg py-3 w-[120px] font-bold text-white bg-[#0094ff] hover:bg-[#017cd4]">
                  {data.request.button_2}
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

