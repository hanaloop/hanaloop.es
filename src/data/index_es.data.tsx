import { PageSection } from "../libs/types";

export const hero = {
  title_1 : <h1>Gestione eficientemente su huella de carbono, mitigue riesgos y reduzca costos.</h1>,
  title_2: "Plataforma de carbono ",
  // title_3 : <h1 className="inline">¡gestión inteligente!</h1>,
  title_link : "Hanaeco",
  subtitle_1 : "Prepararse es ser más competitivo.",
  subtitle_2 : "Nuestra plataforma hana.eco le ayuda a simplificar y gestionar la complejidad de las normativas climáticas y de ESG, al tiempo que reduce sus costos energéticos.",
  // news : "Diagnóstico del informe CBAM",
  news_link : "https://docs.google.com/forms/d/e/1FAIpQLSct04RcNKwwkGC1DKiqhXgzLG77tXjetV1NJL9prE4pJ-vpnw/viewform",
  button_1 : "Ver solución",
  link_1: "https://docs.google.com/presentation/d/1ls5SeHrzYIVvFOO5HsMhSdKr-yGZf8BPmF6mqPgS9CY/present",
  button_2 : "Solicitar info",
  link_2: "/demo_request",
}

export const carbon_buddy: PageSection = {
  title : "Nuestra plataforma con Inteligencia Artificial facilita el acceso a información precisa y sencilla sobre sus emisiones",
  items : [
    {
      title : "Comprensión rápida y adaptación a regulaciones",
      description : "Con IA generativa, identifique y adáptese ágilmente a las últimas normativas climáticas y de sostenibilidad.",
    },
    {
      title : "Análisis de datos intuitivo",
      description : "A través de deep learning, interprete y utilice sus datos con facilidad para una mejor toma de decisiones.",
    },
    {
      title : "Creación facil de informes",
      description : "Genere los informes que necesita en tiempo real, de forma sencilla y eficiente.",
    },
  ]
}

export const why_need: PageSection = {
  title: "¿Mi empresa también necesita gestionar carbono?",
  items: [{
      title: "Si está sujeta a regulaciones climáticas globales",
      subtitle: "Es imprescindible para cumplir con normativas nacionales e internacionales cada vez más exigentes.",
      imageUrl: "/images/platform/card-cbam_pic.jpeg",
      description: [
          <b>Régimen de comercio de emisiones (ETS), o impuestos de carbon</b>,
          <b>CBAM de la UE, regulación de baterías, Ecodesign de la UE (ESPR)</b>,
          <b>Diligencia debida en la cadena de suministro (CSDDD)</b>
      ],
    },
    {
      title: "Si su cliente es líder en ESG y carbono neutral",
      subtitle: "Necesario para mantener relaciones comerciales sólidas cuando su cliente gestiona el desempeño de su cadena de suministro.",
      imageUrl: "/images/platform/card-standards_pic.jpeg",
      description: [
          <b>Alcances 1, y 2</b>,
          <b>Alcances 3 y datos de la cadena de valor</b>,
          <b>Huella de carbono del producto (PCF)</b>,
      ],
    },
    {
      title: "Si sus inversores exigen divulgación de carbono",
      subtitle: "Indispensable para gestionar riesgos financieros y cumplir requisitos de transparencia en sostenibilidad.",
      imageUrl: "/images/platform/card-scope3_pic.jpeg",
      description: [
          <b>Estándares IFRS S1, S2</b>,
          <b>CDP</b>,
          <b>Informes de sostenibilidad bajo GRI</b>,
      ],
    },
    {
      title: "Si desea liderar en sostenibilidad y ser mas competitivo",
      subtitle: "Clave para responder a consumidores conscientes y al llamado urgente por el planeta.",
      imageUrl: "/images/platform/card-products.jpeg",
      description: [
          <b>Divulgación transparente de impactos ambientales</b>,
          <b>Reporte de indicadores de sostenibilidad</b>,
          <b>Informes de sostenibilidad corporativa y de huella de carbono del producto</b>,
      ],
    },
  ]
};

export const reliable: PageSection = {
  title: "Hana.eco, reconocido por su confiabilidad y cumplimiento normativo",
  subtitle: "Somos la primera empresa en Asia en certificar la conformidad con el CBAM de la UE y el K-ETS, verificados por LRQA.",
  items: [{
      title: "Cumplimiento con CBAM (UE)",
      subtitle: "Carbon Border Adjustment Mechanism",
      imageUrl: "/images/platform/card-cbam_pic.jpeg",
      description: [
          <b>Gestión de productos</b>,
          <b>Gestión de suministro de materias primas</b>,
          <b>Generación de informes CBAM</b>,
          <b>Provisión de factores de emisión</b>,
      ],
    },
    {
      title: "Cumplimiento con Comercio de Emisiones",
      subtitle: "Korea Emissions Trading System",
      imageUrl: "/images/platform/card-standards_pic.jpeg",
      description: [
          <b>Gestión de emisiones auditables y verificables</b>,
          <b>Establecimiento de objetivos climáticos y análisis de escenarios</b>,
          <b>Informe por alcances, fuentes, tipos, regiones</b>
      ],
    },
    {
      title: "Cumplimiento IFRS (TCFD) / CDP / GRI",
      subtitle: "Normativas, marcos y estándares climáticos",
      imageUrl: "/images/platform/card-scope3_pic.jpeg",
      description: [
          <b>Reportes conforme a estándares requeridos</b>,
          <b>Gestión de riesgos</b>,
          <b>Análisis de escenarios de emisiones y su impacto financiero</b>,
      ],
    },
    {
      title: "Gestión ESG y Scope 3",
      subtitle: "Datos ESG incluyendo la cadena de valor",
      imageUrl: "/images/platform/card-products.jpeg",
      description: [
          <b>Gestión cualitativa y cuantitativa de datos</b>,
          <b>Gestión de proveedores y evaluación de la cadena de suministro</b>,
          <b>Provisión de factores de emisión estándar para Alcance 3</b>,
      ],
    },
    {
      title: "Gestión de huella de carbono del producto",
      subtitle: "Product Carbon Footprint",
      imageUrl: "/images/platform/card-products.jpeg",
      description: [
          <b>Cálculo LCA en la categoría de calentamiento global</b>,
          <b>Evaluación de emisiones incorporadas en procesos y materiales</b>,
          <b>Gestión de emisiones incorporadas en materias primas</b>,
          <b>Análisis de eficiencia de costos</b>,
      ],
    },
  ]
}

export const journey: PageSection = {
  title : <p>HanaLoop, su aliado en cada paso hacia la neutralidad de carbono.</p>,
  subtitle : <p>Las regulaciones ambientales y las exigencias de divulgación en sostenibilidad son cada vez más estrictas. ¡Pero no se preocupe! Nuestro equipo experto en transformación digital industrial, junto con la red de especialistas ambientales de HanaLoop, le ayudará a integrar la sostenibilidad de forma adecuada y estratégica para su empresa.</p>,
  items : [
      {
        title: "IFRS S1, S2",
        subtitle: "El ISSB, bajo la Fundación IFRS, ha establecido los estándares IFRS S1 (divulgación general) y S2 (divulgación climática) para regular la transparencia en sostenibilidad a nivel global. Las empresas deben desarrollar estrategias claras para gestionar riesgos y cumplir objetivos de reducción conforme a estos estándares.",
        link: "https://www.hanaloop.com/docs/x20_environment-general/2023-07-31-IFRS-ISSB-sustainability-disclosure-standards",
        imageUrl: "/images/directory_1.png",
      },
      {
        title: "CBAM",
        subtitle: "La UE ha implementado el CBAM para evitar la fuga de carbono y alcanzar la neutralidad climática en 2050. Con países como EE. UU., Reino Unido y Japón evaluando sistemas similares, medir y reducir emisiones se vuelve indispensable para mantener la competitividad en el comercio internacional.",
        link: "https://www.hanaloop.com/docs/x20_environment-general/2024-01-20-cbam-compliance",
        imageUrl: "/images/directory_2.png",
      },
      {
        title: "Scope 3",
        subtitle: "La gestión de emisiones ya no se limita a la propia empresa: abarca toda la cadena de valor, incluyendo proveedores y clientes. Cumplir con ESG, PCAF, IFRS, CDP y CSDDD requiere calcular y gestionar el Scope 3, que ahora es un requisito imprescindible.",
        link: "https://brunch.co.kr/@hanaloop/3",
        imageUrl: "/images/directory_3.png",
      },
    ],
}

export const features: PageSection = {
  title: "¿Por qué usar nuestra plataforma Hana.eco?",
  items: [{
      icon: "",
      title: "Contabilidad de carbono precisa y automatizada",
      description:
        [<p>Transforma las emisiones y reducciones de GEI en equivalentes de carbono. <br />Automatiza la recopilación de datos, previene errores humanos y genera informes con facilidad para cumplir requisitos regulatorios y de negocio.</p>],
    },
    {
      icon: "",
      title: "Colaboración eficiente",
      description: "Facilita una colaboración fluida entre equipos ambientales, ESG, consultores y auditores de verificación, asegurando una gestión integrada y transparente.",
    },
    {
      icon: "",
      title: "Estrategia basada en IA",
      description:
        [<p>Visualiza emisiones y gestiona objetivos climáticos con el apoyo de la Inteligencia Artificial. <br/>Recibe recomendaciones estratégicas de reducción y monitorea el progreso con un enfoque económico y sostenible.</p>],
    },
    {
      icon: "",
      title: "Gestión integral de la cadena de valor",
      description: "Gestiona emisiones en Alcance 1, 2 y 3, abarcando desde la producción de materias primas hasta la distribución y disposición final, para una visión completa de su impacto ambiental.",
    },
  ]
};


export const partner = [
  {
    title: "Korea ESG COMMITTEE",
    imageUrl: "/images/partners/koreaESGcommittee.png",
    imgHeight: 'h-[75px]'
  },
  {
    title: "MarinaChain",
    sourceUrl: "https://www.marinachain.io/ko",
    imageUrl: "/images/partners/MarinaChain.png",
    imgHeight: 'h-[25px]'
  },
  {
    title: "서울대학교 기후테크센터",
    sourceUrl: "https://climate-tech.kr/",
    imageUrl: "/images/partners/ClimateTechCenter.png",
    imgHeight: 'h-[35px]'
  },
  {
    title: "carbonaccountingalliance",
    sourceUrl: "https://www.carbonaccountingalliance.com/",
    imageUrl: "/images/partners/CAA.jpeg",
    description: "파트너사 | We founded the Carbon Accounting Alliance as a place for alignment and collaboration in the carbon accounting industry. In the ethos of “collaboration over competition” we believe that our industry working together is critical for us to collectively solve the climate crisis. ",
    imgHeight: 'h-[65px]'
  },
  {
    title: "Futuris Consulting",
    sourceUrl: "https://futurisconsulting.com/",
    imageUrl: "/images/partners/Futuris-logo.png",
    description: "파트너사 | Futuris Consulting is a sustainability consulting company that provides services for Latin America in environmental, social, health, and safety matters.",
    imgHeight: 'h-[25px]'
  },
  {
    title: "OPUS M",
    sourceUrl: "https://www.opusm.io/",
    imageUrl: "/images/partners/OPUSM.jpeg",
    description: "파트너사 | 국내 유일의 범용 블록체인 미들웨어 솔루션인 LedgerMaster3.0부터 토큰증권 플랫폼까지, Web3 기반의 다양한 블록체인 솔루션과 서비스를 제공합니다. ",
    imgHeight: 'h-[45px]'
  },
  {
    title: "컴퓨매스에이아이",
    sourceUrl: "https://www.compumathai.com/",
    imageUrl: "https://www.compumathai.com/images/ci_kr.svg",
    description: "파트너사 | AI, Chatbot, and Data Analysis Products Service. Revolutionizing the Future. concept. A symbol of practice AI. Practice AI. A symbol of build AI. Build AI.",
    imgHeight: 'h-[15px]'
  },
  {
    title: "넷제로 2050 기후재단",
    sourceUrl: "http://netzero2050.or.kr/",
    imageUrl: "/images/partners/netzero2050_climatefoundation-logo.png",
    description: "파트너사 | 2050년까지 이산화탄소 배출을 완전히 제거하여 탄소중립을 달성하기 위한 국제사회, 정부와 기업, 지구촌 시민사회의 노력을 적극 지원하고 실천 동기를 부여하고 있음",
    imgHeight: 'h-[30px]'
  },
  {
    title: "(주)켐토피아",
    sourceUrl: "http://www.chemtopia.net/",
    imageUrl: "/images/partners/partner-chemtopia_logo.png",
    description: "파트너사 | Korea's Leading Regulatory compliance company",
    imgHeight: 'h-[25px]'
  },
  {
    title: "로엔컨설팅",
    sourceUrl: "http://www.roenconsulting.com/main/index.html",
    imageUrl: "/images/partners/partner-roen_logo.png",
    description: "파트너사 | 환경 토탈솔루션 컨설팅 | 정책 연구, 온실가스 감축, 탄소자산관리, 신재생에너지사업 등 기후변화 대응 컨설팅",
    imgHeight: 'h-[35px]'
  },
  {
    title: "한컨설팅그룹",
    sourceUrl: "https://hcg.kr",
    imageUrl: "/images/partners/partner-hanconsulting_logo.png",
    description: "파트너사 | ESG 경영 성공파트너 | 차별화된 ESG경영 컨설팅과 탄소중립 컨설팅",
    imgHeight: 'h-[20px]'
  },
  {
    title: "ICH(International Centre for Hydropower)",
    sourceUrl: "https://ich.no/",
    imageUrl: "https://www.norwep.com/partners/international-centre-for-hydropower-ich/_/image/b4146fa1-b991-4341-948a-f27eea36d681:30fc4c589b594ed01e0afba64b7bfe16ea1804ee/width-340/International-Centre-for-Hydropower-ICH_large.png",
    description: "파트너사 | The purpose of ICH is to raise the standards of competence of the industry personnel and promote the sustainable development of hydropower.",
    imgHeight: 'h-[40px]'
  },
  {
    title: "지속가능발전경영센터",
    sourceUrl: "http://k-sdmi.co.kr/",
    imageUrl: "/images/partners/SDMI.jpeg",
    description: "파트너사 | 지속가능발전에 관한 정책과 기업의 지속가능성장에 필요한 컨설팅 제공",
    imgHeight: 'h-[30px]'
  },
  {
    title: "미래이앤아이",
    sourceUrl: "http://www.fa119.com/main",
    imageUrl: "/images/partners/FA119.png",
    description: "파트너사 | 공장자동제어 센서신호처리 분야의 전문 제조업체",
    imgHeight: 'h-[30px]'
  },
  {
    title: "아이이에스지",
    sourceUrl: "https://i-esg.io/",
    imageUrl: "/images/partners/IESG-logo.png",
    description: "파트너사 | 데이터 기반 ESG 특화 통합 디지털 솔루션 제공",
    imgHeight: 'h-[20px]'
  },
  {
    title: "슬록",
    sourceUrl: "http://www.sloc.or.kr/",
    imageUrl: "/images/partners/SLOC.png",
    description: "파트너사 | 뷰티기업 지속가능성 검증 및 컨설팅 제공",
    imgHeight: 'h-[18px]'
  },
  {
    title: "샘물터",
    sourceUrl: "https://saemmulter.com/",
    imageUrl: "https://saemmulter.com/images/logo.svg",
    description: "파트너사 | 지하수 솔루션 전문 회사",
    imgHeight: 'h-[35px]'
  },
  {
    title: "휙페이",
    sourceUrl: "https://hwikpay.com/",
    imageUrl: "/images/partners/hwikpay.png",
    description: "파트너사 | 스마트 공유 경제 플랫폼인 TAGLO는 멀티 레이어를 통해 휙 생태계를 확장합니다",
    imgHeight: 'h-[35px]'
  },
  {
    title: "디토이에스지",
    sourceUrl: "https://www.ditoesg.ai/",
    imageUrl: "/images/partners/DITOESG.jpeg",
    description: "파트너사 | 사회적 가치와 재무적 성과를 연계한 ESG 솔루션 제공",
    imgHeight: 'h-[35px]'
  },
  {
    title: "로이드인증원",
    sourceUrl: "https://www.lrqa.com/ko-kr/",
    imageUrl: "/images/partners/LRQA.jpg",
    description: "파트너사 | 글로벌 인증 및 검증 서비스를 제공",
    imgHeight: 'h-[20px]'
  },
  {
    title: "중소벤처기업부",
    sourceUrl: "https://www.mss.go.kr/site/smba/main.do",
    imageUrl: "/images/partners/korea-mss-gov.png",
    description: "지원 기관 | 활력 중소기업, 함께 잘사는 나라",
    imgHeight: 'h-[20px]'
  },
  {
    title: "중소기업기술정보진흥원",
    sourceUrl: "https://www.tipa.or.kr/",
    imageUrl: "/images/partners/TIPA.png",
    description: "지원 기관 | 중소기업의 R&D 파트너",
    imgHeight: 'h-[40px]'
  },
  {
    title: "서울소셜벤처허브",
    sourceUrl: "https://svhc.or.kr/",
    imageUrl: "/images/partners/seoulsocialventurehub-logo.png",
    description: "지원 기관 | 소셜벤처를 지원",
    imgHeight: 'h-[25px]'
  },
  {
    title: "하이서울기업협회",
    sourceUrl: "https://www.hiseoulbiz.org/",
    imageUrl: "/images/partners/hiseoulbizassoc-logo.png",
    description: "협력 기관 | 기업 성장 지원",
    imgHeight: 'h-[40px]'
  }
]

export const customers: PageSection = {
  title: "Clientes y partners que confían en nosotros para impulsar su transición sostenible",
  subtitle:"",
  items: [{
      title: "이마트",
      sourceUrl: "https://store.emart.com/main/main.do",
      imageUrl: "/images/partners/partner-emart_logo.png",
      description: "고객사 | ESG경영 선도기업 이마트",
      imgHeight: 'h-[20px]'
    },
    {
      title: "벽산",
      sourceUrl: "http://www.byucksan.com/",
      imageUrl: "/images/partners/byucksan-logo.png",
      description: "고객사 | 늘 푸른 산처럼 아름다운 생활공간을 창조 | 지속가능경영 혁신기업",
      imgHeight: 'h-[25px]'
    },
    {
      title: "두산에너지빌리티",
      sourceUrl: "https://www.doosanenerbility.com/kr",
      imageUrl: "/images/partners/DOOSAN_Enerbility.png",
      description: "고객사 | 산업의 기초 소재인 주단조에서부터 원자력, 화력 등의 발전 설비, 해수 담수화 플랜트, 환경 설비, 운반 설비 등을 제작하여 국내외 플랜트 시장에 공급",
      imgHeight: 'h-[40px]'
    },
    {
      title: "서경빌딩",
      sourceUrl: "https://naver.me/FKKMDLip",
      imageUrl: "/images/partners/seokyungbuildng-logo.png",
      description: "고객사 | 고객의 윤택(潤澤)함을 책임지는 산업 건물",
      imgHeight: 'h-[20px]'
    },
    {
      title: "삼아알미늄",
      sourceUrl: "https://www.sama-al.com/",
      imageUrl: "/images/partners/samaalminum-logo.png",
      description: "고객사 | 고품질의 알루미늄 호일 및 포장재 생산 기술",
      imgHeight: 'h-[18px]'
    },
    {
      title: "대호에이엘",
      sourceUrl: "http://www.daeho-al.com/",
      imageUrl: "/images/partners/daehoal-logo.png",
      description: "고객사 | 알루미늄, 철도자량, 청정환기시스템",
      imgHeight: 'h-[18px]'
    },
    {
      title: "삼양스틸",
      sourceUrl: "https://www.samyangchem.co.kr/better/steel.php",
      imageUrl: "https://www.samyangchem.co.kr/images/common/logo.svg",
      description: "고객사 | 고품질 라미네이팅 강판 생산",
      imgHeight: 'h-[18px]'
    },
    {
      title: "동인화학",
      sourceUrl: "https://www.donginchem.co.kr/",
      imageUrl: "https://www.donginchem.co.kr/imz/mainlogo2.jpg?v=1",
      description: "고객사 | 항공우주 산업 및 위성사업",
      imgHeight: 'h-[25px]'
    },
    {
      title: "경기환경에너지진흥원",
      sourceUrl: "https://www.ggeea.or.kr/index.php",
      imageUrl: "https://www.ggeea.or.kr/theme/ggeea/img/logo.png",
      description: "고객사 | 환경분야 전문 기관 설립을 통한 환경 사업의 공공성과 도민에게 제공되는 환경서비스 질 제고",
      imgHeight: 'h-[25px]'
    },
    {
      title: "아폴로산업",
      sourceUrl: "https://www.apolloind.co.kr/beauty/kor/main/",
      imageUrl: "/images/partners/apollo.png",
      description: "고객사 | 4대 주요 펌프인 Foaming, Dispenser, Mist, Trigger 생산",
      imgHeight: 'h-[20px]'
    },
    {
      title: "동일알루미늄",
      sourceUrl: "https://www.dongilal.com/main/main.php",
      imageUrl: "/images/partners/dongilal.jpeg",
      description: "고객사 | 식품, 약품 포장재, 냉동공조용 알루미늄 호일 및 차세대 배터리인 2차 전지용 알루미늄 생산",
      imgHeight: 'h-[40px]'
    },
    {
      title: "JKC",
      sourceUrl: "https://www.jkccorp.co.kr/main",
      imageUrl: "/images/partners/JKC-logo.png",
      description: "고객사 | ISO 9001/14001 certified manufacturer, specializes in producing a diverse range of film products with fully owned facilities and a hands-on approach to manufacturing and converting",
      imgHeight: 'h-[40px]'
    },
    {
      title: "SHL",
      sourceUrl: "https://www.smarthl.co.kr/",
      imageUrl: "/images/partners/SHL-logo.png",
      description: "고객사 | 2차전지, 반도체 검사 설비 및 자동화 설비를 개발·생산하며 고객 맞춤형 솔루션 제공",
      imgHeight: 'h-[20px]'
    },
    
  ]
}

export const request = {
  title : "Gestione su huella de carbono de manera sistemática y efectiva con Hana.eco",
  button_1 : "Ver solución",
  button_2 : "Contacto",
}

