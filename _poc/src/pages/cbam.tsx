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



export default function CBAM(): React.JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();
  const data = require(`../data/cbam_${i18n.currentLocale}.data`);
  const truncate = (str:string, limit_length: number) => {
    return str.length > limit_length ? str.substring(0, limit_length) + '...' : str;
}

  return (
    <Layout wrapperClassName='text-gray-700 dark:text-gray-100'
      title={`${siteConfig.title} | ${translate({message: "cbam.meta_title"})}`}
      description={translate({message: "cbam.meta_description"})}>
      <Hero background={{
          imageUrl: useBaseUrl('/images/bg-hero-cbam.jpg'),
        }}
        header={translate({message: "cbam.hero_header"})}
        tagline={translate({message: "cbam.hero_tagline"})}
        button={
          {href: '/demo_request', label: translate({message: "request_demo"})}
        }
      />
      <main className="break-keep">
        <div className="w-full flex justify-center dark:bg-gray-800 ">
            <div className='w-screen'>
              {/* HanaLoop CBAM 솔루션 */}
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
                        <div className="md:w-[60%] w-[90%] gap-10 flex flex-col md:justify-center items-center">
                            {data.features_2.map((item, ndx) => {
                              const svgKey = `svg_${ndx + 1}`;
                              const SvgComponent = svgs[svgKey];
                              return (
                                <div
                                  className="group lg:flex-row flex-col-reverse rounded-md hover:border-primary-700 mb-4 bg-gray-100 dark:bg-gray-900 shadow-sm flex justify-center items-start w-full h-full"
                                  key={ndx}
                                >
                                  <div className="mb-2 flex flex-col justify-start items-start gap-3 h-full w-full p-8">
                                    <div className='flex items-center'>
                                      <div className="w-12 h-12 rounded-md p-2">{SvgComponent} </div>
                                      <h3 className="py-2 inline font-bold text-lg">{item.title}</h3>
                                    </div>
                                    <div className="flex flex-col mr-1 items-baseline group-hover:text-primary-700">
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
                                  <div className='lg:h-full lg:w-[55%] w-full lg:rounded-r-md '>
                                    <img src={item.img_url} className='lg:lg:rounded-r-md object-cover w-full lg:h-full h-[180px]' />
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SectionBlock>
                {/* CBAM 인프라 도입 절차 */}
                <SectionBlock title={data.section_title.process} containerStyle='bg-gray-50 dark:bg-gray-900'>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1 },
                        }}
                        className="w-full flex justify-center"
                    >
                      <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 lg:w-[70%] w-[90%]'>
                        {
                          data.management_process.map((process, idx) => (
                                <div className='w-full rounded-md p-2 flex flex-col bg-white dark:bg-gray-800 px-4'>
                                    <span className='font-bold text-lg  h-[50px] break-keep flex items-center text-start'>{process.title}</span>
                                    <div className="h-[0.5px] w-full bg-blue-500 my-2"></div>
                                    <div className="xs:text-sm break-keep text-start flex flex-col justify-start mt-2">{
                                      process.descriptions.map((description, idx) => (
                                        <li className="flex gap-2 items-center" key={idx}><div className="w-1 h-1 rounded-full bg-blue-500"></div><div>{description}</div></li>
                                      ))
                                      }
                                    </div>
                                </div>
                            
                          ))                        
                        }
                      </div>
                    </motion.div>
                </SectionBlock>
                {/* 적합성 인증받은 CBAM 솔루션 */}
                <SectionBlock title={data.section_title.features} subtitle={data.section_title.features_subtitle}>
                <motion.div
                      viewport={{ once: true }}
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1 },
                      }}
                  >
                      <div className="flex justify-center w-full">
                          <div className='flex justify-center md:w-full w-[90%] flex-col'>
                            <div className={`h-[450px] rounded-md bg-contain bg-center bg-no-repeat z-10`} style={{backgroundImage: `url(${useBaseUrl('/images/cbam-feature-1.png')})`}}></div>
                            <div className='flex w-full justify-center'>
                              <div className='sm:w-[70%] w-[90%] flex justify-center'>
                                <div className="xl:grid xl:grid-cols-2 gap-10 mt-10">
                                  {data.features_3.map((item, ndx) => {
                                    const svgKey = `section2_svg_${ndx + 1}`;
                                    const SvgComponent = section2_svgs[svgKey];

                                    // const lines = item.description as string[];
                                    return (
                                      <div
                                        className="group rounded-xl hover:border-primary-700 mb-4 py-7 bg-gray-50 dark:bg-gray-900 shadow-sm flex justify-center"
                                        key={ndx}
                                      >
                                        <div className="mb-2 flex flex-col justify-start items-start text-left gap-3 h-full w-[80%]">
                                          <div className='flex items-center text-lg font-bold2'>
                                            <div className="w-12 h-12 rounded-md p-2">{SvgComponent}</div>
                                            <h3 className="py-2 inline font-bold">{item.title}</h3>
                                          </div>
                                          <div className="[word-break:keep-all] w-full">
                                            <ul className="list-none xl:text-md text-sm text-left">
                                              {item.descriptions?.map((description, ndx: number) => (
                                                <li className="flex gap-2 items-center" key={ndx}><div>{description}</div></li>
                                              ))}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                  </motion.div>
                </SectionBlock>
                {/* CBAM Plan */}
                <SectionBlock title={data.section_title.plan} containerStyle='bg-gray-50 dark:bg-gray-900'>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1 },
                        }}
                        className="w-full flex justify-center"
                    >
                      <div className='sm:w-[80%] w-[90%] flex justify-center'>
                        <div className='grid lg:gap-10 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                          {
                            data.plans.map((plan, idx) => (
                                  <div className='lg:w-[400px] w-full h-[200px] rounded-md p-2 flex flex-col bg-white dark:bg-gray-800 justify-between px-4'>
                                      <span className='font-bold text-lg h-[50px] break-keep flex items-center text-start'>{plan.title}</span>
                                      <div className={`h-[0.5px] w-full my-2 ${plan.color}`}></div>
                                      <div className="h-[100px] xs:text-sm break-keep text-start">{
                                        plan.descriptions.map((description, idx) => (
                                          <li className="flex gap-2 items-center" key={idx}><div className={`w-1 h-1 rounded-full ${plan.color}`}></div><div>{description}</div></li>
                                        ))
                                        }
                                      </div>
                                  </div>
                              
                            ))                        
                          }
                        </div>
                      </div>
                    </motion.div>
                </SectionBlock>
                {/* 인사이트 모음 */}
                <SectionBlock title={data.section_title.articles}>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1 },
                        }}
                        className="w-full flex justify-center"
                    >
                      <div className=' grid lg:grid-cols-3 lg:gap-10 sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center sm:w-[80%] w-[90%]'>
                      {
                        data.articles.map((article, idx) => (
                              <div className='xs:w-full w-[90%] rounded-md p-2 flex flex-col bg-gray-50 dark:bg-gray-900 justify-between px-4'>
                                  <span className='font-bold h-[50px] break-keep flex items-center text-start'>{article.title}</span>
                                  <div className="h-[0.5px] w-full bg-black dark:bg-gray-400 my-2"></div>
                                  <div className="xs:text-sm break-keep text-start">{truncate(article.description, 100)}</div>
                                  <div className='w-full flex justify-end'>
                                      <Link to={article.link} aria-label={`Go to TEST posting`}>
                                          <button aria-label={`Go to TEST posting`} className=' border-none w-[80px] h-[40px] rounded-md cursor-pointer hover:bg-blue-400 dark:hover:bg-blue-600 transition-all ease-linear duration-100 bg-white dark:bg-gray-700'><ArrowIcon width={20} height={20}/></button>
                                      </Link>
                                  </div>
                              </div>
                          
                        ))                        
                      }
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

