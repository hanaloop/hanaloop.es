// ---
// title: "채용 - 지속가능성 임팩트 플랫폼 최적 글로벌 일류 인재 채용"
// description: "임팩트 플랫폼 최적 글로벌 일류 인재 채용지속가능성 임팩트 프로젝트 합류, 하나루프는 지속가능한 세상의 디딤돌이 될 지속가능성 플랫폼 개발에 참여할 인재 채용. 다음 세대가 지금까지의 세대가 누렸던 모든 것들을 타협없이 누릴 수 있는 세상을 위한 임팩트 프로젝트 합류. 인류의 삶과 지구 환경을 위한 임팩트 프로젝트에 참여하며 함께 성장할 인재 채용. 글로벌 일류 인재로 합류"
// keywords: ["지속가능성 임팩트 프로젝트 최적 글로벌 일류 인재 채용", "하나루프 인재 채용", "인재 채용", "하나루프 개발자 채용", "풀스택 개발자 채용", "프런트엔드 개발자 채용", "백엔드 개발자 채용", "소프트웨어 엔지니어 채용", "하나루프 글로벌 일류 인재", "지속가능성 임팩트 프로젝트 합류"]

// date: 2022-10-06

// headerBackground:
//   imageUrl: "/images/bg-hero_workspace.jpeg"
// hero:
//   header: "Recruit"
//   tagline: "Join us, Be part of the Impact!"
// ---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';
import Hero from '../components/hanaloop/Hero';
import SectionBlock from "../components/theme/SectionBlock";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
  const {siteConfig, i18n} = useDocusaurusContext();

  const data = require(`../data/recruit_${i18n.currentLocale}.data`);

  return (
    <Layout
      title={`${siteConfig.title} | ${translate({message: "recruit.meta_title"})}`}
      description={translate({message: "recruit.meta_description"})}>

      <Hero background={{
          imageUrl: useBaseUrl('/images/bg-hero_workspace.jpeg'),
        }} 
        header={translate({message: "recruit.hero_header"})}
        tagline={translate({message: "recruit.hero_tagline"})}
        button={
          {href: '/demo_request', label: translate({message: "request_demo"})}
        }
      />

      <article className="p-4 [word-break:keep-all]">

      We are forging a sustainability platform poised to serve as a cornerstone for a sustainable world —
      an impactful initiative aimed at ensuring that the next generation can relish all the benefits enjoyed by previous generations without any compromises!
      <br />
      
      <b>Are you eager to grow collaboratively through impactful projects that contribute to both human life and the global environment?</b> 
      <br />
      Join us at <b>HanaLoop</b>!

      <div className="my-2 p-2 border text-center border-primary rounded-md ">
      "If you want to walk fast, walk alone. But if you want to walk far, walk together” - Ratan Tata
      </div>

      <SectionBlock title='복지' >
      <div className="text-left">
      <ul>
        <li>매월 유급 반차 제공</li>
        <li>업무 성격, 효율과 능력에 따라 원격업무 가능</li>
        <li>건강검진 지원</li>
        <li>각종 세미나, 포럼, 교육 참석 지원</li>
        <li>업무 관련 도서구매 지원</li>
        <li>3년 이상 함께하는 멤버에게 스톡옵션 지급</li>
      </ul>
      </div>
      </SectionBlock>

      <div className="my-1 ">
        <div className="p-2 border text-xl text-center border-primary rounded-md ">
        지구환경을 위해, 미래를 위해 글로벌 일류 인재들과 함께하세요! 
        </div>
      </div>

      <SectionBlock title='오픈 포지션' >

      <article className="text-left">
        <h3 id="플랫폼-웹-프론트엔드백엔드-sw-엔지니어">플랫폼 웹 프론트엔드/백엔드 (SW 엔지니어)</h3>
        <p>▶ 하나루프의 Full-stack 개발자는 전지구적 기후위기 대응 가속화에 비전을 품은 사람들과 함께, 공동의 목표로 함께 문제를 해결하고 솔루션을 구현합니다.</p>
        <h4 id="주-역할-및-책임">주 역할 및 책임</h4>
        <p>환경 플랫폼 프론트엔드/백엔드 개발 소프트웨어 프로덕트 개발 라이프사이클 세레모니 참여 프로덕트 매니저 및 CTO와 함께 프로덕트 개선에 참여</p>
        <h4 id="핵심-자격요건">핵심 자격요건</h4>
        <ul>
          <li>컴퓨터학과 졸업 혹은 2년 이상 웹 어플리케이션 개발 경험 있으신 분 </li>
          <li>빠르게 배우고 실천하는 마인드셋을 가지고 계신 분 </li>
          <li>프로덕트 구축에 대한 오너십과 책임감이 있으신 분 </li>
          <li>코드 품질에 기준이 높으신 분</li>
        </ul>
        <h4 id="우대-사항">우대 사항</h4>
        <ul>
          <li>외국어로의 소통 및 프레임워크 경험 있으신 분</li>
          <li>원활한 의사소통 능력을 겸비한 팀플레이어 대환영</li>
          <li>DevSecOps 실무 지식: gitops, docker, kubernetes 등에 익숙하신 분</li>
          <li>제품 설계/아키텍처 경험 있으신 분</li>
          <li>SQL 및 NoSQL 경험이 있으신 분</li>
          <li>클라우드 배포 및 플랫폼 경험이 있으신 분</li>
        </ul>
        <h4 id="기술-스택">기술 스택</h4>
        <ul>
          <li>TypeScript, Python</li>
          <li>Nextjs, Nestjs</li>
          <li>React</li>
          <li>Postgres, Redis, Elasticsearch</li>
        </ul>
        <h4 id="근무-형태">근무 형태</h4>
        <p>계약기간 3개월 후 정규직 전환</p>
        <h4 id="채용-절차">채용 절차</h4>
        <ul>
          <li>접수 기간 : 상시</li>
          <li>제출 서류 : 이력서, 경력기술서</li>
          <li>지원 방법 : 이메일 지원(<a href="mailto:&#106;&#x6f;&#105;&#110;&#x75;&#115;&#x40;&#104;&#x61;&#110;&#x61;&#108;&#x6f;&#111;&#112;&#46;&#x63;&#x6f;&#x6d;">&#106;&#x6f;&#105;&#110;&#x75;&#115;&#x40;&#104;&#x61;&#110;&#x61;&#108;&#x6f;&#111;&#112;&#46;&#x63;&#x6f;&#x6d;</a>)</li>
          <li>전형 절차 : 서류전형 &amp; 코딩테스트 &gt; 1차 인터뷰 &gt; 인성검사 &amp; 2차 인터뷰 &gt; 채용 건강검진 &gt; 입사</li>
          <li>전형 절차는 일정 및 상황에 따라 변동될 수 있습니다.</li>
          <li>진행 일정은 확정되는대로 지원자분들께 개별 안내 예정입니다.</li>
          <li>이메일 제목에 지원 포지션 명/ 지원자 명 꼭 넣어주세요.</li>
        </ul>

        <br />
        <div className="mt-4 p-2 border border-primary rounded inline text-lg">[지원하기](recruit_apply)</div>
      </article>
      </SectionBlock>

      email: joinus@hanaloop.com

      </article>
 </Layout>
  );
}

