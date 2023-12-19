import { DisplayItem } from "../libs/types";

export const content = {
  section1_title: "Effective carbon management is indispensable for contemporary businesses!",
  section2_title: "Trusted by Customers and Partners",
  section3_title: "Optimize the management, analysis, reduction, and disclosure of greenhouse gas emissions for your company and supply chain through collaborative greenhouse gas management!",
  section3_link: <div>Presentation deck introducing the <span className="font-bold">Hana.eco</span> platform</div>
}

export const elements: DisplayItem[] = [
  {
    title: "EU Carbon Border Adjustment Mechanism",
    subtitle: "CBAM Compliance",
    imageUrl: "/images/platform/card-cbam_pic.jpeg",
    description: [
      <span key="1"><b>Product Management</b> - Manage CN codes and parameters relevant to CBAM, and calculate specific (embedded) emissions of the product.</span>,
      <span key="2"><b>Supplier's Precursor Management</b> - Manage the supplier's specific embedded emissions (SEE)</span>,
      <span key="3"><b>CBAM Report</b> - Effectively organize and effortlessly generate the required quarterly reports starting from January 2024.</span>,
      <span key="3"><b>Default Values</b> - Manage default values</span>
    ]
  },
  {
    title: "IFRS(TCFD) / CDP / GRI",
    subtitle: "Climate Normatives, Frameworks, and Standards",
    imageUrl: "/images/platform/card-standards_pic.jpeg",
    description: [
      <span key="1"><b>Compliance with Standard Reporting Requirements</b> - Systematically oversee energy consumption data, classifying it by individual business units across Scope 1, 2, and 3 categories.</span>,
      <span key="2"><b>Risk Management</b> - Simplifies the recommended risk management practices outlined by IFRS/TCFD.</span>,
      <span key="3"><b>Scenario Analysis</b> - Proactively address climate risks by strategically managing and preparing for potential changes in emission sources through What-if scenario analysis.</span>
    ] 
  },
  {
    title: "Effective ESG and Scope 3 Management",
    subtitle: "Make Impact",
    imageUrl: "/images/platform/card-scope3_pic.jpeg",
    description: [
      <span key="1"><b>Effective Management of Qualitative Data</b> - Facilitating qualitative data management through structured responses to inquiries.</span>,
      <span key="2"><b>Effective Supplier Collaboration Management</b> - Effectively oversee the carbon emissions status of suppliers within Scope 3 in a secure manner</span>,
      <span key="3"><b>Product Management</b> - Proactively communicate with customers by gaining insight into the raw material components at the unit level of the product.</span>,
      <span key="4"><b>Scope 3 Emission Factors DB</b> - Estimating emissions is feasible even in the absence of actual data.</span>,
    ] 
  },
]

// https://icons.getbootstrap.com/
export const features: DisplayItem[] = [
  {
    icon: <svg className="h-8 text-secondary " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 5H7V7H17V5Z" fill="currentColor" /><path d="M7 9H9V11H7V9Z" fill="currentColor" /><path d="M9 13H7V15H9V13Z" fill="currentColor" /><path d="M7 17H9V19H7V17Z" fill="currentColor" /><path d="M13 9H11V11H13V9Z" fill="currentColor" /><path d="M11 13H13V15H11V13Z" fill="currentColor" /><path d="M13 17H11V19H13V17Z" fill="currentColor" /><path d="M15 9H17V11H15V9Z" fill="currentColor" /><path d="M17 13H15V19H17V13Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3 3C3 1.89543 3.89543 1 5 1H19C20.1046 1 21 1.89543 21 3V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V3ZM5 3H19V21H5V3Z" fill="currentColor" /></svg>,
    title: "Carbon Accounting",
    description: "All emission activities are tracked by source and analyzed. The data collection can be automated, and anomalies are detected." 
  },
  {
    // https://fonts.google.com/icons?icon.query=diversity&icon.set=Material+Icons
    icon: <svg className="h-8 text-secondary " stroke="currentColor" strokeWidth="1" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" >
    <path d="M1.2 41.4v-8.5q0-1.65 1.175-2.825Q3.55 28.9 5.15 28.9h7.2q.9 0 1.6.375.7.375 1.2 1.075 1.5 2.15 3.85 3.35 2.35 1.2 5 1.2t5-1.2q2.35-1.2 3.9-3.35.45-.7 1.15-1.075t1.65-.375h7.15q1.65 0 2.825 1.175Q46.85 31.25 46.85 32.9v8.5H32.9v-6.15q-1.85 1.5-4.125 2.35-2.275.85-4.775.85-2.45 0-4.725-.825Q17 36.8 15.15 35.25v6.15ZM24 31.5q-1.65 0-3.175-.775T18.35 28.55q-.9-1.3-2.175-2T13.4 25.6q1.65-1.45 4.775-2.3 3.125-.85 5.825-.85 2.75 0 5.875.85t4.825 2.3q-1.55.25-2.825.95-1.275.7-2.175 2-.95 1.4-2.475 2.175Q25.7 31.5 24 31.5ZM8 24.6q-2.35 0-4.025-1.7Q2.3 21.2 2.3 18.85q0-2.35 1.675-4.025Q5.65 13.15 8 13.15q2.4 0 4.075 1.675Q13.75 16.5 13.75 18.85q0 2.35-1.675 4.05Q10.4 24.6 8 24.6Zm32 0q-2.35 0-4.025-1.7-1.675-1.7-1.675-4.05 0-2.35 1.675-4.025Q37.65 13.15 40 13.15q2.4 0 4.075 1.675Q45.75 16.5 45.75 18.85q0 2.35-1.675 4.05Q42.4 24.6 40 24.6Zm-16-6.5q-2.35 0-4.025-1.7-1.675-1.7-1.675-4.05 0-2.35 1.675-4.025Q21.65 6.65 24 6.65q2.4 0 4.075 1.675Q29.75 10 29.75 12.35q0 2.35-1.675 4.05Q26.4 18.1 24 18.1Z"/></svg>,
    title: "Collaboration",
    description: "The collaborative features allows for different stakeholders to easily align in the decarbonization strategy"
  },
  {
    icon: <svg className="h-8 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="4" stroke="currentColor" fill="none" ><path d="M17.94 54.81a.1.1 0 01-.14 0c-1-1.11-11.69-13.23-11.69-21.26 0-9.94 6.5-12.24 11.76-12.24 4.84 0 11.06 2.6 11.06 12.24 0 8.29-10.06 20.17-10.99 21.26z"></path><circle cx="17.52" cy="31.38" r="4.75"></circle><path d="M49.58 34.77a.11.11 0 01-.15 0c-.87-1-9.19-10.45-9.19-16.74 0-7.84 5.12-9.65 9.27-9.65 3.81 0 8.71 2 8.71 9.65 0 6.49-7.82 15.78-8.64 16.74z"></path><circle cx="49.23" cy="17.32" r="3.75"></circle><path d="M17.87 54.89a28.73 28.73 0 003.9.89"></path><path d="M24.68 56.07c2.79.12 5.85-.28 7.9-2.08 5.8-5.09 2.89-11.25 6.75-14.71a16.72 16.72 0 014.93-3" strokeDasharray="7.8 2.92"></path><path d="M45.63 35.8a23 23 0 013.88-.95"></path></svg>,
    title: "Strategy",
    description: "온실가스 배출량의 전략적 시각화를 통해 인사이트를 제공하고, 통계 모델, 인공지능을 통해 목표를 관리합니다. 경제성 분석에 따른 감축전략 추천 및 실행 상황을 모니터링합니다."
  },
  {
    icon: <svg className="h-8 text-secondary"  fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" >
    <path d="M2.273 9.53a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.547Zm9.467-4.984a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546ZM7.4 13.108a5.535 5.535 0 0 1-3.775-2.88 3.273 3.273 0 0 1-1.944.24 7.4 7.4 0 0 0 5.328 4.465c.53.113 1.072.169 1.614.166a3.253 3.253 0 0 1-.666-1.9 5.639 5.639 0 0 1-.557-.091Zm3.828 2.285a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546Zm3.163-3.108a7.436 7.436 0 0 0 .373-8.726 3.276 3.276 0 0 1-1.278 1.498 5.573 5.573 0 0 1-.183 5.535 3.26 3.26 0 0 1 1.088 1.693ZM2.098 3.998a3.28 3.28 0 0 1 1.897.486 5.544 5.544 0 0 1 4.464-2.388c.037-.67.277-1.313.69-1.843a7.472 7.472 0 0 0-7.051 3.745Z"/>
  </svg>,
    title: "Supply Chain",
    description: "We manage the organization's upstream and downstre."
  }
]

export const reasons: DisplayItem[] = [
  {
    // Heroicon
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
  </svg>,  
    title: 'Regulation Compliance'
  },
  { 
    // Material icon
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
  </svg>,
    title: 'Investor Inquiries'
  },
  {
    // https://uxwing.com/svg-icon-editor/
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
  </svg>,
    title: 'Risk Mitigation'
  },
  { 
    // Material icon
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ><g><rect fill="none" height="24" width="24"/></g><g><g><circle cx="12" cy="6" r="2"/><path d="M21,16v-2c-2.24,0-4.16-0.96-5.6-2.68l-1.34-1.6C13.68,9.26,13.12,9,12.53,9h-1.05c-0.59,0-1.15,0.26-1.53,0.72l-1.34,1.6 C7.16,13.04,5.24,14,3,14v2c2.77,0,5.19-1.17,7-3.25V15l-3.88,1.55C5.45,16.82,5,17.48,5,18.21C5,19.2,5.8,20,6.79,20H9v-0.5 c0-1.38,1.12-2.5,2.5-2.5h3c0.28,0,0.5,0.22,0.5,0.5S14.78,18,14.5,18h-3c-0.83,0-1.5,0.67-1.5,1.5V20h7.21 C18.2,20,19,19.2,19,18.21c0-0.73-0.45-1.39-1.12-1.66L14,15v-2.25C15.81,14.83,18.23,16,21,16z"/></g></g></svg>,
    title: 'Customer Demands'
  },
]

export const customers: DisplayItem[] = [
  {
    title: "Emart",
    sourceUrl: "https://emartdt.ai/",
    imageUrl: "/images/partners/partner-emart_logo.png",
    description: "Customer | A leading retail company spearheading ESG"
  },
  {
    title: "Byucksan",
    sourceUrl: "http://www.byucksan.com/",
    imageUrl: "/images/partners/byucksan-logo.png",
    description: "Customer | Creating Beautiful Living Spaces Like Evergreen Mountains | A Pioneer in Sustainable Business Innovation"
  },
  {
    title: "Seokyung Building",
    sourceUrl: "https://naver.me/FKKMDLip",
    imageUrl: "/images/partners/seokyungbuildng-logo.png",
    description: "Customer | Building that Nurtures Customer Prosperity"
  },
  
];

export const partners: DisplayItem[] = [
  {
    title: "NET ZERO 2050 Foundation",
    sourceUrl: "http://netzero2050.or.kr/",
    imageUrl: "/images/partners/netzero2050_climatefoundation-logo.png",
    description: "Partner | Actively supporting and encouraging the international community, governments, businesses, and global civil society in their efforts to achieve carbon neutrality by completely eliminating carbon emissions by 2050"
  },
  {
    title: "Chemtopia",
    sourceUrl: "http://www.chemtopia.net/",
    imageUrl: "/images/partners/partner-chemtopia_logo.png",
    description: "Partner | Korea's Leading Regulatory compliance company"
  },
  {
    title: "Roen Consulting",
    sourceUrl: "http://www.roenconsulting.com/main/index.html",
    imageUrl: "/images/partners/partner-roen_logo.png",
    description: "Partner | Comprehensive Environmental Solutions Consulting"
  },
  {
    title: "Han Consulting Group",
    sourceUrl: "https://hcg.kr",
    imageUrl: "/images/partners/partner-hanconsulting_logo.png",
    description: "Partner | ESG Consulting"
  },
]
