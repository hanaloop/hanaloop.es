// ---
// title: "하나루프 | 지속가능한 세상으로의 전환 - 지속가능성 임팩트 플랫폼 hana.eco (하나에코)"
// description: "주식회사 하나루프 설립 이유, 하나루프의 비전, 하나루프의 미션, 하나루프의 고객과의 약속, 하나루프의 문화, 하나루프의 리더십, 하나루프 이름의 배경, 하나루프의 의미, 에코루프의 의미 소개, 지속가능성 임팩트 프로젝트, 비전은 깨끗하고 지속가능한 세상으로의 전환으로 홍익인간 이념의 실현, 미션은 기술 융합을 통한 지속가능한 생태계 형성으로 고객의 가치를 높이고 산업의 탄력성을 향상시키는 것, 건강한 지구로 환경을 회복시키며 인류의 번영에 기여할 것을 약속"
// tags: [하나루프, (주)하나루프, 하나루프 설립 이유, 하나루프 비전, 하나루프 미션, 하나루프의 고객과의 약속, 하나루프의 문화, 하나루프의 리더십, 하나루프 이름의 배경, 하나루프의 의미, 에코루프 이름의 배경, 에코루프의 의미, 지속가능성 임팩트 프로젝트, HanaLoop vision, HanaLoop mission, HanaLoop culture, HanaLoop leadership, HanaLoop Name meaning, EcoLoop]

// date: "2022-10-06"

// headerBackground:
//   imageUrl: "/images/bg-hero_pando.jpeg"
//   imageDescription: "Pando is believed to be the largest, most dense organism ever found. Photo from Wikipedia"
// hero:
//   header: "HanaLoop"
//   tagline: "Your trustworthy sustainability partner"

// ---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';
import Hero from '../components/hanaloop/Hero';
import SectionBlock from "../components/theme/SectionBlock";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();

  const data = require(`../data/company_${i18n.currentLocale}.data`);

  return (
    <Layout
      title={`${siteConfig.title} | ${data.content.meta_title}`}
      description={data.content.meta_tagline}>

      <Hero background={{
          imageUrl: useBaseUrl('/images/bg-hero_pando.jpeg'),
        }} 
        header={data.content.hero_title}
        tagline={data.content.hero_tagline}
        button={
          {href: '/demo_request', label: translate({message: "request_demo"})}
        }
      />

      <SectionBlock title={data.content.hanaloop_title} containerStyle="flex justify-center" >
        <div className="p-4 text-lg max-w-3xl">
        {data.content.hanaloop_body}
        </div>
      </SectionBlock>


      <SectionBlock title={data.content.vision_title} containerStyle='bg-gray-100'>
        <div className="p-4">
          <span className="text-lg">{data.content.vision_body}
          </span>
          
        </div>
      </SectionBlock>

      <SectionBlock title={data.content.mission_title} >
        <div className="p-4">
        <span className="text-lg">{data.content.mission_body}</span>
        </div>
      </SectionBlock>

      <SectionBlock title={data.content.commitment_title} containerStyle='bg-gray-100'>
        <div className="p-4">
          <span className="text-lg">{data.content.commitment_body}</span>
        </div>
      </SectionBlock>

      <SectionBlock title={data.content.corevalues_title} >
        <div className="p-4 w-auto flex justify-center ">
          <div className="w-96 text-left text-lg">
          {data.content.corevalues_body}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title={data.content.culture_title} containerStyle='bg-gray-100'>
        <div className="p-4">
          <span className="text-lg">
          {data.content.culture_body}
          </span>
        </div>
      </SectionBlock>

      <SectionBlock title={data.content.team} >
        <div className="p-4">
          <div className="my-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {
              Object.values(data.members).map((m: any) => (
                <figure className="bg-gray-100 rounded-md my-4 p-4 shadow " key={m.name}>
                  <div className="w-auto flex justify-center">
                  <img className="h-40 lg:h-32 rounded-full block grayscale" src={ useBaseUrl(m.image_url) } alt="" />
                  </div>
                  <div className="pt-6 space-y-4 block">
                    <figcaption className="font-medium text-center">
                      <div className="fond-semibold">
                        <a className="no-underline  space-x-1" href={ m.profile_url }><span className="whitespace-nowrap">{ m.name }</span>
                        <span className="whitespace-nowrap text-sm text-slate-700">{ m.name_alt }</span></a>
                      </div>
                      <div className="text-sm text-primary-dark">{ m.title }</div>
                      <div className="mt-2 text-xs text-slate-500">{ m.education }</div>
                    </figcaption>
                    <p className="text-sm">
                      { m.description }
                    </p>
                  </div>
                </figure>
                )
              )
            }
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title='하나루프 이름의 배경' containerStyle="flex justify-center" >
        <div className="px-4">
          <span className="text-xl">
          하나루프 (Hana+Loop)
          </span>
        <div className="max-w-3xl">
          {data.content.hanaloop_name}
        </div>
        </div>
      </SectionBlock>

  </Layout>
  );
}


