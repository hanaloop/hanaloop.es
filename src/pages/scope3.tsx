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

const svgs = {
  svg_1: <Board />,
  svg_2: <ClipboardCheckIcon />,
  svg_3: <ListCheckIcon />,
};


export default function Scope3(): JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();
  const data = require(`../data/scope3_${i18n.currentLocale}.data`);
  const truncate = (str:string, limit_length: number) => {
    return str.length > limit_length ? str.substring(0, limit_length) + '...' : str;
}

  return (
    <Layout wrapperClassName='text-gray-700 dark:text-gray-100'
      title={`${siteConfig.title} | ${translate({message: "scope3.meta_title"})}`}
      description={translate({message: "scope3-ai.meta_description"})}>
      <Hero background={{
          imageUrl: useBaseUrl('/images/banners/pyeongchanggun-windfarm.jpeg'),
        }} 
        header={translate({message: "scope3.hero_header"})}
        tagline={translate({message: "scope3.hero_tagline"})}
        button={
          {href: '/demo_request', label: translate({message: "request_demo"})}
        }
      />
      <main className="break-keep w-screen">
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
                        <div className="sm:w-[70%] w-[90%] gap-10 flex xl:flex-row flex-col md:justify-center">
                            {data.features_2.map((item, ndx) => {
                              const svgKey = `svg_${ndx + 1}`;
                              const SvgComponent = svgs[svgKey];
                              return (
                                <div
                                  className="group rounded-xl hover:border-primary-700 mb-4 py-8 bg-gray-100 shadow-sm flex justify-center items-start w-full"
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
                <SectionBlock title={data.section_title.process} containerStyle='bg-gray-50'>
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
                                <div className='w-full rounded-md p-2 flex flex-col bg-white justify-between px-4'>
                                    <span className='font-bold text-lg  h-[50px] break-keep flex items-center text-start'>{process.title}</span>
                                    <div className="h-[0.5px] w-full bg-blue-500 my-2"></div>
                                    <div className="h-[100px] xs:text-sm break-keep text-start">{
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
                <SectionBlock title={data.section_title.features} subtitle={data.section_title.features_subtitle}>
                  {
                    data.features_1.map((feature, idx) => (
                        <div key={idx}><CardMediaImage size="m" title={feature.title} descriptions={feature.descriptions} imageUrl={feature.imageUrl}/></div>
                    ))
                  }
                </SectionBlock>
                <SectionBlock title={data.section_title.articles} containerStyle='bg-gray-50'>
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
                       <div className='flex flex-col items-center gap-10'>
                        <div className=' grid lg:grid-cols-3 lg:gap-10 sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center sm:w-[80%] w-[90%]'>
                          {
                            data.articles.map((article, idx) => (
                              
                                  <div className='xs:w-full w-[90%] rounded-md p-2 flex flex-col bg-white justify-between px-4'>
                                      <span className='font-bold h-[50px] break-keep flex items-center text-start'>{article.title}</span>
                                      <div className="h-[0.5px] w-full bg-black my-2"></div>
                                      <div className="xs:text-sm break-keep text-start">{truncate(article.description, 100)}</div>
                                      <div className='w-full flex justify-end'>
                                          <Link to={article.link} aria-label={`Go to TEST posting`}>
                                              <button aria-label={`Go to TEST posting`} className=' border-none w-[80px] h-[40px] rounded-md cursor-pointer hover:bg-blue-400 transition-all ease-linear duration-100 bg-gray-50'><ArrowIcon width={20} height={20}/></button>
                                          </Link>
                                      </div>
                                  </div>
                              
                            ))                        
                          }
                        </div>
                        <div className='py-8 px-6 bg-white  sm:w-[80%] w-[90%] flex items-center justify-center word-breaks rounded-sm'>
                          <span>(재)한국품질재단, 서울대학교 환경계획학과, 하나루프가 공동으로 수행한 <a className='border-b border-blue-400 font-bold' target="_blank" href="https://ecolibrary.me.go.kr/nier/#/search/detail/5921697?offset=1">「Scope 3 온실가스 배출량 산정 및 보고 가이드라인(v1.0)」</a>이 발간되었습니다.</span>
                        </div>
                      </div>
                    </motion.div>
                </SectionBlock>
            </div>
        </div>

        <div className="w-full h-[300px] text-center bg-blue-50 flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col sm:w-[80%] w-[95%] justify-center items-center">
            <span className="text-2xl md:text-3xl xl:text-4xl font-semibold  whitespace-normal break-keep">{data.request.title}</span>
            <div className="flex gap-3 justify-center my-8 xl:justify-start mb-12">
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

