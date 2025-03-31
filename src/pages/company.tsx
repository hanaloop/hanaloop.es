import useBaseUrl from "@docusaurus/useBaseUrl";
import { translate } from "@docusaurus/Translate";
import Hero from "../components/hanaloop/Hero";
import SectionBlock from "../components/theme/SectionBlock";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import SynergyIcon from "../../static/svg/Synergy.svg";
import BoldIcon from "../../static/svg/Bold.svg";
import ReliableIcon from "../../static/svg/Reliable.svg";
import { motion } from "framer-motion";
import LinkedInIcon from "../../static/svg/LinkedIn.svg";
import Link from "@docusaurus/Link";

export default function Home(): JSX.Element {
  
  const { siteConfig, i18n } = useDocusaurusContext();

  const data = require(`../data/company_${i18n.currentLocale}.data`);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: i * 0.8, // 아이템마다 0.3초 간격으로 등장
      },
    }),
  };

  return (
    <Layout
      title={`${siteConfig.title} | ${data.content.meta_title}`}
      description={data.content.meta_tagline}
    >
      <Hero
        background={{
          imageUrl: useBaseUrl("/images/bg-hero-company.jpg"),
        }}
        header={data.content.hero_title}
        tagline={data.content.hero_tagline}
        button={{
          href: "/demo_request",
          label: translate({ message: "request_demo" }),
        }}
      />

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
        <SectionBlock
          title={'Our Mission'}
          containerStyle="flex justify-center"
        >
          <div className="w-full h-full flex justify-center items-center">
            <div className="md:w-[70%] w-[90%] rounded-md bg-gray-50 flex md:flex-row items-center flex-col-reverse gap-10 p-10">
              <div className="md:w-[80%] w-[90%] text-start">
                {data.content.hanaloop_body}
              </div>
              <div className="flex items-center ">
                <img src="/images/who-we-are/logo.png" height="150px" width="150px"/>
              </div>
            </div>
          </div>
          
        </SectionBlock>
      </motion.div> 

      <motion.div
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        className="flex justify-center"
      >
        <SectionBlock
          title={'Our Values'}
          containerStyle="flex justify-center bg-gray-50"
        >
          <div className="w-full h-full flex justify-center items-center">
            <div className="md:w-[90%] w-[90%] rounded-md flex bg-white items-center flex-col gap-10 p-10 justify-center">
              <div className="flex md:flex-row flex-col justify-between gap-10">
                {
                    data.content.corevalues_body.map((item, i) => (
                      <motion.div
                        key={item.title}
                        custom={i}
                        variants={fadeInUp}
                        className="flex flex-col items-center gap-2 text-center"
                      >
                        {item.icon}
                        <span className="font-bold text-xl">{item.title}</span>
                        <span dangerouslySetInnerHTML={{ __html: item.description }} />
                      </motion.div>
                    )
                  )
                }
              </div>
            </div>
          </div>
        </SectionBlock>
      </motion.div>

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
        <SectionBlock title="Our Team">
          <div className="p-4 w-full flex justify-center">
            <div className="md:w-[70%] w-[90%]">
              <div className="my-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {Object.values(data.members).map((m: any) => (
                  <figure
                    className="bg-gray-50 rounded-md my-4 p-10"
                    key={m.name}
                  >
                    <div className="w-auto flex justify-center">
                      <img
                        className="h-40 lg:h-32 rounded-full block grayscale"
                        src={useBaseUrl(m.image_url)}
                        alt=""
                      />
                    </div>
                    <div className="pt-6 space-y-4 block">
                      <figcaption className="font-medium text-center">
                        <div className="fond-semibold">
                          <a
                            className="no-underline  space-x-1"
                            href={m.profile_url}
                          >
                            <span className="whitespace-nowrap">{m.name}</span>
                            <span className="whitespace-nowrap text-sm text-slate-700">
                              {m.name_alt}
                            </span>
                          </a>
                        </div>
                        <div className="text-sm text-primary-dark flex items-center justify-center gap-1">
                          <Link href={m.linkedin}>
                            <LinkedInIcon/>
                          </Link>
                          {m.title}
                        </div>
                        <div className="mt-2 text-xs text-slate-500">
                          {m.education}
                        </div>
                      </figcaption>
                      <p className="text-sm">{m.description}</p>
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </SectionBlock>
      </motion.div>
    </Layout>
  );
}
