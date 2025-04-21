import Marquee from "react-fast-marquee";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import SectionBlock from "../components/theme/SectionBlock";
import useGlobalData from "@docusaurus/useGlobalData";
import { motion } from "framer-motion";
import ArrowIcon from "../../static/svg/Arrow.svg";
import StrategyIcon from "../../static/svg/Strategy.svg";
import ChartIcon from "../../static/svg/Chart.svg";
import Chain from "../../static/svg/Chain.svg";
import Board from "../../static/svg/Board.svg";
import ClipboardCheckIcon from "../../static/svg/ClipboardCheck.svg"; 
import FileCheckIcon from "../../static/svg/FileCheck.svg"; 
import ListCheckIcon from "../../static/svg/ListCheck.svg"; 
import LayerIcon from "../../static/svg/Layer.svg"; 
import SearchIcon from "../../static/svg/Search.svg"; 
import GlobeIcon from "../../static/svg/Globe.svg"; 
import FlagIcon from "../../static/svg/Flag.svg"; 
import SproutIcon from "../../static/svg/Sprout.svg"; 
import HandshakeIcon from "../../static/svg/Handshake.svg"; 

// let announcement: any | undefined;
const announcement = {
  initialOpen: true,
  title: "2023년 12월 '하나루프와 기후 인사이트 수요일' 등록하기",
  link: "https://docs.google.com/forms/d/e/1FAIpQLSev-ubKKT32aD-gqLHy0k56xyv-iBwiA5Z6jnMtqekdYmIcdA/viewform",
  image: "/images/blog/HanaLoop_climate_insight_wednesdays.jpg",
  dimensions: `w-[500px] md:w-[600px]`,
};

const section2_svgs = {
  section2_svg_1 : <ClipboardCheckIcon/>,
  section2_svg_2 : <FileCheckIcon/>,
  section2_svg_3 : <ListCheckIcon/>,
  section2_svg_4: <LayerIcon />,
  section2_svg_5: <SearchIcon />,
}

const section3_svgs = {
  section3_svg_1: <GlobeIcon />,
  section3_svg_2: <FlagIcon />,
  section3_svg_3: <HandshakeIcon />,
  section3_svg_4: <SproutIcon />,
};

const section5_svgs = {
  section5_svg_1: <ChartIcon />,
  section5_svg_2: <StrategyIcon />,
  section5_svg_3: <Board />,
  section5_svg_4: <Chain />,
};

export default function Home(): JSX.Element {
  const { siteConfig, i18n } = useDocusaurusContext();
  const globalData = useGlobalData();

  // console.log(JSON.stringify(globalData, null, 2));
  const data = require(`../data/index_${i18n.currentLocale}.data`);

  return (
    <Layout
      wrapperClassName="text-black dark:text-red-400"
      title={`${siteConfig.title} | ${translate({
        message: "index.meta_title",
      })}`}
      description={translate({ message: "index.meta_description" })}
    >
      <main className="break-keep">
        {/* 1. Hero Section */}
        <div className="w-screen py-5 flex min-h-screen justify-center items-center relative">
            <div className="-z-30 w-full h-full absolute left-0 top-0 bg-[url('/images/bg-hero-main.webp')] bg-center bg-cover bg-blend-overlay bg-[#193233] opacity-90"></div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1 },
              }}
              className="flex justify-center"
          >
                <div className="xl:w-[85%] flex gap-10 xl:flex-row items-center flex-col w-[90%]">
                  <div className="px-1 flex flex-col items-start">
                    <div className="flex flex-col gap-3 xl:text-left text-center">
                      <p className="text-2xl sm:text-4xl xl:text-4.5xl font-bold text-white">
                        {data.hero.title_1}
                        {data.hero.title_2}
                        <h1 className="text-[#0094ff] font-bold inline">
                          <a href="https://www.hana.eco/">{data.hero.title_link}</a>
                        </h1>
                        {data.hero.title_3}
                      </p>
                      <p className="text-sm md:text-lg text-white whitespace-normal ">
                        {data.hero.subtitle_1}<br/>
                        {data.hero.subtitle_2}
                      </p>
                      { data.hero.news && <div className="pt-4">
                        <a className="px-5 font-bold py-3 text-gray-800 rounded-lg bg-yellow-300 hover:text-gray-800 hover:bg-yellow-400" href={data.hero.news_link}>{data.hero.news} </a>
                      </div>}
                      
                    </div>
                    <div className="flex gap-3 justify-center my-8 w-full xl:justify-start">
                      <a href={data.hero.link_1} target="_blank">
                        <button className="rounded-lg py-3 w-[120px] font-bold text-white bg-[#0094ff] hover:bg-[#017cd4] ">
                          {data.hero.button_1}
                        </button>
                      </a>
                      <a href={data.hero.link_2}>
                        <button className="rounded-lg py-3 w-[120px] font-bold text-white bg-[#0094ff] hover:bg-[#017cd4]">
                          {data.hero.button_2}
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="w-[80%] md:w-[70%] xl:w-full flex flex-col items-center justify-center">
                    <div className="flex flex-col text-left shadow-lg rounded-md items-center">
                      <div className="">
                        <img src="https://www.hana.eco/images/hanaeco_dashboard1.png" height="100px" alt="hana.eco main" className="rounded-md" />
                      </div>
                    </div>
                  </div>
            </div>
          </motion.div>
        </div>

        {/* 2. PARTNERS Section */}
        <div className="w-screen bg-gray-50 justify-center flex">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            }}
            className="flex justify-center"
          >
            <SectionBlock title={data.customers.title}>
              <div className="w-full justify-center flex">
                <div className="text-center items-center w-full md:w-[75%] flex flex-col gap-3 justify-center">
                  {/* CUSTOMERS */}
                  <Marquee
                    pauseOnHover={true}
                    gradient={true}
                    gradientColor="rgb(248 251 253)"
                    gradientWidth={200}
                  >
                    <div className="flex justify-center gap-3 flex-wrap h-[75px]">
                      {data.customers.items.map((item) => (
                        <span className="group flex justify-center" key={item.title}>
                          <div className="flex justify-center items-center border border-gray-200 p-1 rounded-lg shadow-sm w-[150px] ">
                            <Link href={item.sourceUrl!}>
                              <a target="_blank">
                                <img className={`${item.imgHeight} duration-200`} src={useBaseUrl(item.imageUrl!)} alt={item.title} />
                              </a>
                            </Link>
                          </div>
                        </span>
                      ))}
                    </div>
                  </Marquee>
                  <Marquee
                    gradient={true}
                    gradientColor="rgb(248 251 253)"
                    gradientWidth={200}
                    delay={1.5}
                    pauseOnHover={true}
                  >
                    <div className="flex justify-center gap-3 flex-wrap h-[75px]">
                      {data.partner.map((item) => (
                        <span className="group flex justify-center" key={item.title}>
                          <div className="flex justify-center items-center border border-gray-200 p-1 rounded-lg shadow-sm w-[150px]">
                            <Link href={item.sourceUrl!}>
                              <a target="_blank">
                                <img className={`${item.imgHeight} duration-200`} src={useBaseUrl(item.imageUrl!)} alt={item.title} />
                              </a>
                            </Link>
                          </div>
                        </span>
                      ))}
                    </div>
                  </Marquee>
                  <div className="text-xs">{data.customers.subtitle}</div>
                </div>
              </div>
            </SectionBlock>
          </motion.div>
        </div>

        {/* // 챗봇 */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
        >
          <div className="flex justify-center">
            <SectionBlock title={data.carbon_buddy.title}>
              <div className="flex justify-center">
                      <div
                        className="w-[85%] group rounded-xl hover:border-primary-700 mb-4 py-7 flex justify-between items-center"
                      >
                        <div className="mb-2 flex flex-col gap-5 justify-around sm:flex-row items-center text-left h-full w-full">
                          <img className="h-[600px] duration-200" src="/images/chatbot_1.png" alt="carbon buddy" />
                          <div className="flex flex-col gap-5">
                            {
                              data.carbon_buddy.items.map((item, ndx) => {
                                const svgKey = `section2_svg_${ndx + 2}`;
                                const SvgComponent = section2_svgs[svgKey];
                                return (
                                  <div className="border border-gray-200 p-7 rounded-lg flex gap-2 items-start flex-col"> 
                                    <div className="w-6 rounded-md">{SvgComponent}</div>
                                    <div className="flex flex-col items-start justify-center">
                                      <span className="inline xl:text-xl text-lg font-bold">{item.title}</span>
                                      <div>{item.description}</div>
                                    </div>
                                  </div>
                              )})
                            }
                          </div>
                        </div>
                      </div>

              </div>
            </SectionBlock>
          </div>
        </motion.div>

        {/* 3. 우리 회사도 탄소관리 필요할까요? */}
        <div className="w-screen flex justify-center bg-gray-50">
          <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
        >
              <SectionBlock title={data.why_need.title}>
                <div className="px-10 ">
                  <div className="xl:grid xl:grid-cols-2 gap-10">
                    {data.why_need.items.map((item, ndx) => {
                      const svgKey = `section3_svg_${ndx + 1}`;
                      const SvgComponent = section3_svgs[svgKey];

                      const lines = item.description as string[];
                      return (
                        <div
                          className="group rounded-xl hover:border-primary-700 mb-4 py-7 bg-white shadow-sm xl:h-[300px] flex justify-center"
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
                              <h4 className="pb-2 text-md font-semibold text-gray-500 text-left">{item.subtitle}</h4>
                              <ul className="list-none xl:text-md text-sm text-left">
                                {lines.map((line, ndx: number) => (
                                  <li className="flex items-center gap-2" key={ndx}><div className="w-1 h-1 rounded-full bg-blue-500"></div><div>{line}</div></li>
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
        
        {/* 4. 하나에코가 지원합니다. */}
        
        <div className="w-screen">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            }}
          >
            <SectionBlock title={data.reliable.title}>
              <>
              <div className="px-10 mb-10 text-left">
                <div className='mb-4' ><img className="w-48 mx-auto" src="/images/partners/lrqa-logo.png" /></div>
                <div className='w-full space-y-2'>
                  <h2 className='text-xl text-center'>{data.reliable.subtitle}</h2>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex flex-wrap gap-10 justify-center w-[85%]">
                  {data.reliable.items.map((item, ndx) => {
                    const svgKey = `section2_svg_${ndx + 1}`;
                    const SvgComponent = section2_svgs[svgKey];
                    const lines = item.description as string[];
                    return (
                      <div
                        className="group rounded-xl hover:border-primary-700 mb-4 py-7 bg-gray-50 shadow-sm xl:h-[300px] w-[400px] flex justify-center"
                        key={ndx}
                      >
                        <div className="mb-2 flex flex-col justify-start items-start gap-3 h-full w-[80%]">
                          <div className="w-12 h-12 rounded-md p-2">{SvgComponent}</div>
                          <div className="xl:text-xl text-lg font-bold">
                            <div className="flex mr-1 items-baseline group-hover:text-primary-700 justify-center text-start">
                              <h3 className="py-2 inline">{item.title}</h3>
                            </div>
                          </div>
                          <div className="[word-break:keep-all] w-full">
                            <h4 className="pb-2 text-md font-semibold text-gray-500 text-left">{item.subtitle}</h4>
                            <ul className="list-none xl:text-md text-sm text-left">
                              {lines.map((line, ndx: number) => (
                                <li className="flex items-center gap-2" key={ndx}><div className="w-1 h-1 rounded-full bg-[#3B82F6]"></div><div>{line}</div></li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              </>
            </SectionBlock>
          </motion.div>
        </div>
        

        {/* 5. 하나루프가 함께합니다. */}
          <SectionBlock title={""}>
            <div className="px-1">
              <div className="w-full flex flex-col items-center justify-center bg-gray-50 py-[100px]">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                >
                  <div className="flex flex-col items-center w-full justify-center gap-10">
                    <div className="flex w-[80%] text-left gap-5 flex-col xl:flex-row">
                      <div className="xl:w-[40%] h-full flex-shrink-0 w-full">
                        <h1 className="xl:text-3xl text-2xl font-semibold xl:leading-12 leading-8 ">{data.journey.title}</h1>
                      </div>
                      <p className="text-lg sm:text-lg">
                        {data.journey.subtitle}
                      </p>
                    </div>
                    <div className="w-[80%] grid xl:grid-cols-3 gap-5 md:grid-cols-2">
                      {data.journey.items.map((item, ndx) => {
                        return (
                          <div className="bg-white p-5 rounded-lg flex flex-col justify-between gap-5" key={ndx}>
                            <div className="flex items-center justify-around flex-1">
                              <div className="text-left w-[80%] h-full">
                                <div className="text-2xl font-semibold text-start mb-1">{item.title}</div>
                                <p className="text-md text-gray-500">{item.subtitle}</p>
                              </div>
                              <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center hover:bg-[#0094ff] hover:cursor-pointer transition duration-500 ease-in-out">
                                <Link href={item.link}><ArrowIcon width={15} height={15} /></Link>
                              </div>
                            </div>
                            <div className="w-full h-[150px] bg-white rounded-lg flex justify-center items-center">
                              <img src={item.imageUrl} className="rounded-lg max-w-full max-h-full object-contain" alt={`${item.title} logo image`}/>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </SectionBlock>
        

        {/* 6. 하나에코와 함께하세요 */}
        <div className="w-screen">
          <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1 },
              }}
              className="w-full justify-center flex"
            >
            <SectionBlock title={data.features.title}>
              <div className="px-10 w-full justify-center flex">
                <div className="xl:grid xl:grid-cols-2 gap-16 md:w-[75%]">
                  {data.features.items.map((item, ndx) => {
                    const svgKey = `section5_svg_${ndx + 1}`;
                    const SvgComponent = section5_svgs[svgKey];

                    const lines = item.description as string[];
                    return (
                      <div
                        className="group rounded-xl hover:border-primary-700 mb-4 py-8 bg-gray-50 shadow-sm flex h-[300px] justify-center items-start"
                        key={ndx}
                      >
                        <div className="mb-2 flex flex-col justify-start items-start gap-3 h-full w-[80%]">
                          <div className="w-12 h-12 rounded-md p-2">{SvgComponent}</div>
                          <div className="flex flex-col mr-1 items-baseline group-hover:text-primary-700 ">
                            <h3 className="py-2 inline font-bold">{item.title}</h3>
                            <span className="text-md text-left">{item.description}</span>
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
        <div className="w-full h-[300px] text-center bg-blue-50 flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col w-[80%] justify-center items-center">
            <span className="text-2xl md:text-3xl xl:text-4xl font-semibold  whitespace-normal break-keep">{data.request.title}</span>
            <div className="flex gap-3 justify-center my-8 xl:justify-start">
              <a href={data.hero.link_1} target="_blank">
                <button className="rounded-lg py-3 w-[120px] font-bold text-white bg-[#0094ff] hover:bg-[#017cd4]">
                  {data.hero.button_1}
                </button>
              </a>
              <a href={data.hero.link_2}>
                <button className="rounded-lg py-3 w-[120px] font-bold text-white bg-[#0094ff] hover:bg-[#017cd4]">
                  {data.hero.button_2}
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}


// file ID : 1tXsGFdsumpS7bB7SPkwSGpS4-9GcVWlGzMjRTCZRvNw
