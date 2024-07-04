import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import SectionBlock from "../components/theme/SectionBlock";
import useGlobalData from "@docusaurus/useGlobalData";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import ArrowIcon from "../../static/svg/Arrow.svg";
import { directory } from "../data/index_ko.data";
import DBIcon from "../../static/svg/DB.svg";
import ReportIcon from "../../static/svg/Report.svg";
import TrackIcon from "../../static/svg/Track.svg";
import ManageIcon from "../../static/svg/Manage.svg";
import TeamIcon from "../../static/svg/Team.svg";
import StrategyIcon from "../../static/svg/Strategy.svg";
import ChartIcon from "../../static/svg/Chart.svg";
import Chain from "../../static/svg/Chain.svg";
import Board from "../../static/svg/Board.svg";
// import { customers, elements, features, partners, reasons } from '../data/index.data';

// let announcement: any | undefined;
const announcement = {
  initialOpen: true,
  title: "2023년 12월 '하나루프와 기후 인사이트 수요일' 등록하기",
  link: "https://docs.google.com/forms/d/e/1FAIpQLSev-ubKKT32aD-gqLHy0k56xyv-iBwiA5Z6jnMtqekdYmIcdA/viewform",
  image: "/images/blog/HanaLoop_climate_insight_wednesdays.jpg",
  dimensions: `w-[500px] md:w-[600px]`,
};

const section3_svgs = {
  section3_svg_1: <DBIcon />,
  section3_svg_2: <ReportIcon />,
  section3_svg_3: <ManageIcon />,
  section3_svg_4: <TrackIcon />,
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
      <main>
        <div className={styles.mainBanner}>
          <img src="/images/bg-hero-main.jpg" className="w-full h-full " />
        </div>
        <div className="w-screen h-[1500px] absolute top-0 left-0 bg-gray-100 -z-50"></div>
        {/* 1 */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
        >
          <div className="w-screen h-screen flex justify-center items-center ">
            <div className="lg:w-[80%] flex gap-10 lg:flex-row flex-col w-[70%]">
              <div className="px-1 flex flex-col items-start ">
                <div className="font-bold flex flex-col gap-3 lg:text-left text-center">
                  <p className="text-2xl md:text-3xl font-bold lg:text-4xl text-white">
                    기업활동 중 발생하는 온실가스
                    <br />{" "}
                    <span className="text-[#0094ff] font-bold">
                      <a href="https://www.hana.eco/">하나에코</a>
                    </span>
                    로 간편하게 관리하세요!
                  </p>
                  <p className="text-white whitespace-normal break-keep">
                    오늘날 탄소 관리는 기업의 경쟁력입니다. <br/>
                    CBAM, IFRS ISSB S1 S2, ESG, EU 배터리 규제를 신속히 준수하면 에너지 비용 감축과 기후 리스크를 완화할 수 있습니다.
                  </p>
                </div>
                <div className="flex gap-3 justify-center my-8 w-full lg:justify-start">
                  <button className="hover:no-underline  rounded-lg px-3 py-3 bg-[#0094ff] ">
                    <Link href={data.content.section1_href}>
                      <a>{data.content.section1_link1}</a>
                    </Link>
                  </button>
                  <button className=" rounded-lg px-3 py-3 bg-[#0094ff] ">
                    <Link href={data.content.section1_href}>
                      <a>{data.content.section1_link2}</a>
                    </Link>
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center">
                <div className="flex flex-col text-left shadow-lg rounded-md items-center">
                  <div className="">
                    <img src="https://www.hana.eco/images/hanaeco_dashboard1.png" width={800} height={500} alt="hanaeco" className="rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* 2 */}
        <div className="w-screen bg-gray-100">
          <SectionBlock title={data.content.section2_title}>
            <div className="px-10 mt-10">
              <div>
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                >
                  {/* <h3 className="text-5xl font-bold text-black mb-8">
                  Feature Heading
                </h3> */}
                </motion.div>
              </div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1 },
                }}
                className="w-full justify-center flex"
              >
                <div className="lg:grid lg:grid-cols-2 gap-10 ">
                  {data.elements.map((item, ndx) => {
                    const svgKey = `section3_svg_${ndx + 1}`;
                    const SvgComponent = section3_svgs[svgKey];

                    const lines = item.description as string[];
                    return (
                      <div
                        className="group rounded-xl hover:border-primary-700 mb-4 py-7 bg-white shadow-sm lg:h-[300px] flex justify-center"
                        key={ndx}
                      >
                        <div className="mb-2 flex flex-col justify-start items-start gap-3 h-full w-[80%]">
                          <div className="w-12 h-12 rounded-md p-2">{SvgComponent}</div>
                          <div className="lg:text-xl text-lg font-bold">
                            <div className="flex mr-1 items-baseline group-hover:text-primary-700 justify-center">
                              <h3 className="py-2 inline">{item.title}</h3>
                            </div>
                          </div>
                          <div className="[word-break:keep-all] w-full">
                            <h4 className="pb-2 text-md font-semibold text-gray-400 text-left">{item.subtitle}</h4>
                            <ul className="list-none lg:text-md text-sm text-left">
                              {lines.map((line, ndx: number) => (
                                <li key={ndx}>{line}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </SectionBlock>
        </div>

        {/* 3 */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
        >
          <SectionBlock title={""}>
            <div className="px-1 py-20">
              <div className="w-full flex flex-col items-center justify-center">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                >
                  <div className="flex flex-col items-center w-full justify-center gap-10">
                    <div className="flex w-[75%] text-left gap-5 flex-col lg:flex-row">
                      <div className="lg:w-[40%] h-full flex-shrink-0 w-full">
                        <h1 className="lg:text-4xl text-3xl font-semibold lg:leading-12 leading-8 ">기업의 지속 가능성<br/>다양한 규제에 효과적 대응</h1>
                      </div>
                      <p className="text-xl sm:text-lg">
                      하나에코 서비스는 기업의 탄소 배출을 체계적으로 관리하고, 규제 준수를 통한 지속 가능성을 보장합니다. 산업과 기업 환경에 필요한 맞춤형 제안과 안정적인 탄소 중립 매니지먼트 핵심 기술로 지속 가능한 생태계 구축을 위해 디지털 환경을 구현합니다.
                      </p>
                    </div>
                    <div className="w-[75%] grid lg:grid-cols-3 gap-5 md:grid-cols-2">
                      {directory.map((item, ndx) => {
                        return (
                          <div className="bg-gray-100 p-5 rounded-lg flex flex-col justify-between gap-5" key={ndx}>
                            <div className="flex items-center justify-around flex-1">
                              <div className="text-left w-[80%] h-full">
                                <div className="text-2xl font-semibold text-start mb-1">{item.title}</div>
                                <p className="text-md text-gray-500">{item.subtitle}</p>
                              </div>
                              <div className="w-10 h-10 rounded-full bg-gray-400 flex justify-center items-center hover:bg-[#0094ff] hover:cursor-pointer transition duration-500 ease-in-out">
                                <Link href={item.link}><ArrowIcon width={15} height={15} /></Link>
                              </div>
                            </div>
                            <div className="w-full h-[200px] bg-white rounded-lg">
                              <img src={item.img} className="w-full h-full rounded-lg" />
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
        </motion.div>

        {/* 4. Features */}

        <div className="w-screen bg-gray-100">
          <SectionBlock title={data.content.section4_title}>
            <div className="px-10 mt-10">
              <div>
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                >
                  {/* <h3 className="text-5xl font-bold text-black mb-8">
                  Feature Heading
                </h3> */}
                </motion.div>
              </div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1 },
                }}
                className="w-full justify-center flex"
              >
                <div className="lg:grid lg:grid-cols-2 gap-10">
                  {data.features.map((item, ndx) => {
                    const svgKey = `section5_svg_${ndx + 1}`;
                    const SvgComponent = section5_svgs[svgKey];

                    const lines = item.description as string[];
                    return (
                      <div
                        className="group rounded-xl hover:border-primary-700 mb-4 py-8 bg-white shadow-sm flex w-[350px] h-[300px] justify-center items-start"
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
              </motion.div>
            </div>
          </SectionBlock>
        </div>

        {/* 5. 인증서 */}
        <motion.div
          className="modal"
          initial={{ opacity: 0, y: 80 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
        >
          <SectionBlock title={data.content.section5_title} containerStyle="bg-whie">
              <div className="w-full justify-center flex">
                <Link href={'https://www.startupdaily.kr/news/articleView.html?idxno=4965'}>
                  <div className="flex flex-col my-10 text-left shadow-lg rounded-xl p-10 w-[350px] gap-5">
                    <div className="lg:flex-none">
                      <img className="w-40 mx-auto" src="/images/partners/lrqa-logo.png" />
                    </div>
                    <div className="w-full space-y-2 text-center">
                      <h2 className="text-xl font-bold text-center">로이드인증원(LRQA)</h2>
                      <p className="font-semibold text-gray-400 text-md">
                        배출권거래제 및 EU 탄소국경조정제도 플랫폼 적합성
                        <br />
                        국내 첫 검증의견서 획득
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
          </SectionBlock>
        </motion.div>

        {/*6. 고객사 */}
        <motion.div
          className="modal"
          initial={{ opacity: 0, y: 80 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
        >
          <SectionBlock title={data.content.section6_title}>
            <div className="space-y-10">
              <div className="mt-4 text-center items-center space-y-8 ">
                {/* CUSTOMERS */}
                <div className="flex justify-center gap-12">
                  {data.customers.map((item) => (
                    <span className="group" key={item.title}>
                      <Link href={item.sourceUrl!}>
                        <a target="_blank">
                          <img className="h-8 duration-200" src={useBaseUrl(item.imageUrl!)} alt={item.title} />
                        </a>
                      </Link>
                      <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-50 border-lime-700 hidden group-hover:block absolute tooltip-text">
                        {item.description}
                      </span>
                    </span>
                  ))}
                </div>
                {/* PARTNERS */}
                <div className="flex justify-center gap-16">
                  {data.partners.map((item) => (
                    <div className="group" key={item.title}>
                      <Link href={item.sourceUrl!}>
                        <a target="_blank">
                          <img className="h-8 rounded-md duration-200" src={useBaseUrl(item.imageUrl!)} alt={item.title} />
                        </a>
                      </Link>
                      <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-60 border-lime-700 hidden group-hover:block absolute tooltip-text">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex justify-center gap-12">
                    {data.programs.map((item) => (
                      <div className="group" key={item.title}>
                        <Link href={item.sourceUrl!}>
                          <a target="_blank">
                            <img className="h-8 rounded-md duration-200" src={useBaseUrl(item.imageUrl!)} alt={item.title} />
                          </a>
                        </Link>
                        <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-60 border-lime-700 hidden group-hover:block absolute tooltip-text">
                          {item.description}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs">{data.content.section2_subtitle}</div>
                </div>
              </div>
            </div>
          </SectionBlock>
        </motion.div>
      </main>
    </Layout>
  );
}
