import { DisplayItem } from "../libs/types"

export const content = {
  section1_title: "데이터가 보이면 전략이 보입니다",
  section1_body: <>인류가 대면하고 있는 가장 큰 위기, 기후변화 <br/> 
    그의 주범인 온실가스 <br/>
    하지만 눈에 보이지 않는 온실가스를 <br/> 
    하나루프의 <b>SaaS형 지속가능성 플랫폼 하나에코</b>가 보여드리겠습니다.</>,
  section1_quote: <>“측정할 수 없으면 관리할 수 없고, 관리할 수 없으면 개선시킬 수도 없다”</>,
  section1_highlight: <><span className="font-bold text-lg">SaaS형 지속가능성 플랫폼 하나에코</span>는<br /> 
    온실가스 배출활동을 관리하며, 배출량을 계산하고 분석합니다. <br/>  
    <ul>
    하나에코를 통해 기관/기업은 <br/>
    기후관련 규제에 대응하고, <br/>
    기후 리스크를 줄이며,<br/> 
    에너지 소비를 줄이고, <br/>
    ESG 포트폴리오를 향상시킬 수 있습니다. <br/>
    궁극적으로 탄소발자국을 줄이며, 기후위기 완화에 기여할 수 있습니다.
    </ul></>
}

export const features: DisplayItem[] = [
  {
    title: "Carbon Accounting",
    subtitle: "Flexible, Easy, Accurate",
    imageUrl: "/images/platform/ecoloop_accounting_scrn.png",
    description: <>
      Hana.eco Makes it easy to collect, calculate, verify and report.
        <ul>
        <li>Compliance Assurance</li>
        <li>AI-assisted data analytics. Bring climate insight to your fingertips</li>
        <li>Automation and Integration</li>
        </ul>
      </>
  },
  {
    title: "Collaboration",
    subtitle: "Increasing Team Productivity",
    imageUrl: "/images/platform/ecoloop_collab_scrn.png",
    description: <>
      Personnel across diverse units and hierarchical levels can effortlessly exchange and convey climate insights and strategies, fostering collaborative action.
      <ul>
      <li>Role and permission management</li>
      <li>Communication tool</li>
      <li>Customizable tools and options</li>
      </ul>
      </>
  },
  {
    title: "Strategy",
    subtitle: "Decarbonization",
    imageUrl: "/images/platform/ecoloop_strategy_scrn.png",
    description: <>
      Hana.eco facilitates companies on their path to carbon neutrality by leveraging advanced data analysis. Our platform enables the efficient implementation of reduction projects for a more effective and sustainable impact.
      <ul>
      <li>Energy consumption and carbon emission prediction</li>
      <li>Climate Risk management</li>
      <li>What-if scenario analysis</li>
      </ul>
    </>
  },
  {
    title: "Value Chain Management",
    subtitle: "Scope 3 well-managed",
    imageUrl: "/images/platform/ecoloop_valuechain_scrn.png",
    description: <>We establish links across the value chain by analyzing emission intensity with industry average data. Our platform's multilingual support ensures seamless usability for overseas partners.    </>
  }
]

export const benefits: DisplayItem[] = [
  {
    title: "Cost Reduction",
    subtitle: "1",
    description: <>
      <ul>
      <li>Up to ~70% operational efficiency managing climate data</li>
      <li>Up to ~15% energy savings</li>
      </ul>
    </>
  },
  {
    title: "Risk Reduction",
    subtitle: "2",
    description: <>
      <ul>
      <li>Responsive agility in addressing climate regulations</li>
      <li>Optimized strategies for buying and selling emissions permits</li>
      </ul>
    </>
  }, 
  {
    title: "Improved corporate image and competitiveness",
    subtitle: "3",
    description: <>
      <ul>
      <li>Higher ESG level</li>
      <li>Better partner management</li>
      </ul>
    </>
  },
]
