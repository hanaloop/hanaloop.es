import { DisplayItem } from "../libs/types"

export const content = {
  section1_title: "Data-driven decision-making is essential for success",
  section1_body: <>Climate change is the greatest crisis facing humanity. <br />
  Greenhouse gases are the culprit, but they are invisible. <br />
  Hana Eco can help us to visualize them and take action.<br />
  </>,
  section1_quote: <>If You Can't Measure It, You Can't Improve It</>,
  section1_highlight: <><span className="font-bold text-lg">Hana.eco, the Cloud-based Climate Compliance Platform</span>,<br /> 
    efficiently oversees carbon emission activities, 
    conducts comprehensive calculations, and 
    analyzes emissions data. 
    <br />
    This platform empowers corporations to adhere to climate-related regulations, 
    mitigate climate risks, lower energy consumption, and enhance their ESG portfolio. 
    <br />
    Ultimately, it plays a pivotal role in reducing carbon footprints and contributing to the global effort to address the climate crisis.

</>,
  section2_title: "Hana.eco Features",
  section3_title: "Standard supported by Hana.eco",
  section4_title: "Benefits",
}

export const features: DisplayItem[] = [
  {
    title: "Carbon Accounting",
    subtitle: "Flexible, Easy, Accurate",
    imageUrl: "/images/platform/ecoloop_accounting_scrn.png",
    description: [<>
      Hana.eco simplifies the entire process of managing carbon emissions by providing a user-friendly platform that facilitates effortless collection, precise calculation, rigorous verification, and streamlined reporting. 
        <ul>
        <li>Compliance Assurance</li>
        <li>AI-assisted data analytics. Bring climate insight to your fingertips</li>
        <li>Automation and Integration</li>
        </ul>
      </>]
  },
  {
    title: "Collaboration",
    subtitle: "Increasing Team Productivity",
    imageUrl: "/images/platform/ecoloop_collab_scrn.png",
    description: [<>
      Personnel across diverse units and hierarchical levels can effortlessly exchange and convey climate insights and strategies, fostering collaborative action.
      <ul>
      <li>Role and permission management</li>
      <li>Communication tool</li>
      <li>Customizable tools and options</li>
      </ul>
      </>]
  },
  {
    title: "Strategy",
    subtitle: "Decarbonization",
    imageUrl: "/images/platform/ecoloop_strategy_scrn.png",
    description: [<>
      Hana.eco facilitates companies on their path to carbon neutrality by leveraging advanced data analysis. Our platform enables the efficient implementation of reduction projects for a more effective and sustainable impact.
      <ul>
      <li>Energy consumption and carbon emission prediction</li>
      <li>Climate Risk management</li>
      <li>What-if scenario analysis</li>
      </ul>
    </>]
  },
  {
    title: "Value Chain Management",
    subtitle: "Effectively managed Scope 3",
    imageUrl: "/images/platform/ecoloop_valuechain_scrn.png",
    description: [<>We establish links across the value chain by analyzing emission intensity with industry average data. Our platform's multilingual support ensures seamless usability for overseas partners.    </>]
  }
]

export const benefits: DisplayItem[] = [
  {
    title: "Cost Reduction",
    subtitle: "1",
    description: [<>
      <ul>
      <li>Up to ~70% operational efficiency managing climate data</li>
      <li>Up to ~15% energy savings</li>
      </ul>
    </>]
  },
  {
    title: "Risk Reduction",
    subtitle: "2",
    description: [<>
      <ul>
      <li>Responsive agility in addressing climate regulations</li>
      <li>Optimized strategies for buying and selling emissions permits</li>
      </ul>
    </>]
  }, 
  {
    title: "Enhanced corporate image",
    subtitle: "3",
    description:[ <>
      <ul>
      <li>Higher ESG level</li>
      <li>Better partner management</li>
      </ul>
    </>]
  },
]

export const tcfd_topics: DisplayItem[] = [
  {
    title: "Strategy",
    description: [
      "A) Describe the climate-related risks and opportunities the organization has identified over the short, medium, and long term.",
      "B) Describe the impact of climate-related risks and opportunities on the organization’s businesses, strategy, and financial planning."
    ]
  },
  {
    title: "Metrics and Targets",
    description: [
      "a) Disclose the metrics used by the company to assess climate-related risks and opportunities in line with its strategy and risk management process.",
      "b) Disclose Scope 1, Scope 2, and, if appropriate, Scope 3 greenhouse gas (GHG) emissions, and the related risks.",
      "c) Describe the targets used by the company to manage climate-related risks and opportunities and performance against targets."
    ]
  }
]

export const cdp_topics: DisplayItem[] = [
  {
    title: "C4 Targets and performance",
    description: [
      "C4.1: Emissions targets", 
      "C4.3: Emissions reduction initiatives"
    ]
  },
  {
    title: "C6 Emissions data",
    description: [
      "C6.1: Scope 1 emissions data",
      "C6.2: Scope 2 emissions reporting",
      "C6.3: Scope 2 emissions data",
      "C6.7: Biogenic carbon data",
      "C6.7a: Biogenic carbon data",
      "C6.10: Emissions intensities",
    ]
  },
  {
    title: "C7 Emissions breakdown",
    description: [
      "C7.1: Scope 1 breakdown: GHGs",
      "C7.2: Scope 1 breakdown: country/area/region",
      "C7.3: Scope 1 breakdown: business breakdown",
      "C7.5: Scope 2 breakdown: country/area/region",
      "C7.6: Scope 2 breakdown: business breakdowns",
      "C7.9: Emissions performance"
    ]
  },
  {
    title: "C8 Energy",
    description: [
      "C8.2: Energy-related activities"
    ]
  }
]

export const gri_topics: DisplayItem[] = [
  {
    title: "GRI 302: Energy 2016",
    description: [
      "Disclosure 302-1: Energy consumption within the organization",
      "Disclosure 302-2: Energy consumption outside of the organization (2022-Q4)",
      "Disclosure 302-3: Energy intensity",
      "Disclosure 302-4: Reduction of energy consumption"
    ]
  },
  {
    title: "GRI 305: Emissions",
    description: [
      "Disclosure 305-1: Direct (Scope 1) GHG emissions",
      "Disclosure 305-2: Energy indirect (Scope 2) GHG emissions",
      "Disclosure 305-3: Other indirect (Scope 3) GHG emissions (2023-Q2)",
      "Disclosure 305-4: GHG emissions intensity",
      "Disclosure 305-5: Reduction of GHG emissions",
      "Disclosure 305-6: Emissions of ozone-depleting substances (ODS)",
      "Disclosure 305-7: Nitrogen oxides (NOx), sulfur oxides (SOx), and other significant air emissions",
    ]
  }
]

export const topics: DisplayItem[][] = [
  tcfd_topics, gri_topics, cdp_topics
]