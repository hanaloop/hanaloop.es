import { DisplayItem } from "../libs/types"

export const content = {
  section1_title: "Si ves los datos, ves la estrategia",
  section1_body: <>La mayor crisis que enfrenta la humanidad: el cambio climático. <br/> 
    Su principal causa: los gases de efecto invernadero. <br/>
    Pero estos gases invisibles <br/> 
    <b>La plataforma SaaS de sostenibilidad Hana.eco</b> los hará visibles para usted.</>,
  section1_quote: <>“Lo que no se puede medir, no se puede gestionar; y lo que no se puede gestionar, no se puede mejorar.”</>,
  section1_highlight: <><span className="font-bold text-lg">La plataforma SaaS de sostenibilidad Hana.eco</span><br /> 
    gestiona actividades emisoras de GEI, calcula y analiza las emisiones. <br/>  
    <ul>
    A través de Hana.eco, las organizaciones y empresas pueden <br/>
    cumplir con regulaciones climáticas,<br/>
    reducir riesgos climáticos,<br/> 
    disminuir el consumo energético,<br/>
    y mejorar su cartera ESG. <br/>
    En última instancia, pueden reducir su huella de carbono y contribuir a mitigar la crisis climática.
    </ul></>,

  section2_title: "Funciones de Hana.eco",
  section3_title: "Elementos estándar de reporte compatibles con Hana.eco",
  section4_title: "Beneficios esperados",
}

export const features: DisplayItem[] = [
  { 
    title: "Contabilidad de carbono",
    subtitle: "Carbon Accounting",
    imageUrl: "/images/platform/ecoloop_accounting_scrn.png",
    description: [<>Convierte de forma sencilla y precisa las emisiones y reducciones de GEI derivadas de las actividades empresariales en equivalentes de carbono.
      </>],
    expected: [
      'Considera Scope 1, Scope 2 y Scope 3',
      'Análisis de datos basado en IA, minimización de errores humanos',
      'Integración con KEPCO: automatización de recolección de consumo eléctrico',
      'Gestión sencilla de documentación de respaldo'
    ]
  },
  {
    title: "Colaboración",
    subtitle: "Collaboration & Productivity",
    imageUrl: "/images/platform/ecoloop_collab_scrn.png",
    description: [<>Ofrece un entorno de colaboración entre administradores, operadores y consultores. <br/>Maximiza la eficiencia de carbono neutral mediante procesos de verificación fluida con organismos certificadores.</>],
    expected: [
      'Gestión de tareas según permisos de usuario',
      'Gestión de mensajes entre usuarios',
      'Funciones de reporte personalizadas'
    ]
  },
  {
    title: "Estrategia",
    subtitle: "Decarbonization & Action",
    imageUrl: "/images/platform/ecoloop_strategy_scrn.png",
    description: [<>Apoya el camino hacia la neutralidad de carbono mediante análisis de datos. <br/>Facilita la ejecución efectiva de iniciativas de reducción.</>],
    expected: [
      'Visualización estratégica de emisiones de GEI',
      'Gestión de objetivos mediante modelos estadísticos y IA',
      'Recomendación y seguimiento de estrategias de reducción basadas en análisis de rentabilidad'
    ]
  },
  {
    title: "Gestión de la cadena de valor",
    subtitle: "Value Chain Emission Management",
    imageUrl: "/images/platform/ecoloop_valuechain_scrn.png",
    description: [<>Conecta unidades de emisión de la cadena de valor utilizando datos promedio industriales y la estrategia Divide & Conquer.<br/> Compatible con múltiples idiomas para facilitar el uso a socios internacionales.</>],
    expected: []
  }
]

export const benefits: DisplayItem[] = [
  {
    title: "Reducción de costos",
    subtitle: "1",
    description: [<>
      <ul>
      <li>Mejora de eficiencia en gestión ambiental ~70%</li>
      <li>Ahorro energético (detección de fugas, etc.) ~5%</li>
      </ul>
    </>]
  },
  {
    title: "Reducción de riesgos",
    subtitle: "2",
    description:[ <>
      <ul>
      <li>Respuesta ágil a regulaciones ambientales</li>
      <li>Estrategias para compraventa de derechos de emisión</li>
      </ul>
    </>]
  }, 
  {
    title: "Mejora de imagen y competitividad empresarial",
    subtitle: "3",
    description:[ <>
      <ul>
      <li>Incremento en el índice ESG</li>
      <li>Ventajas al ser seleccionado como socio</li>
      </ul>
    </>]
  },
]

export const tcfd_topics: DisplayItem[] = [
  {
    title: "Estrategia",
    description: [
      "A) Describir los riesgos y oportunidades relacionados con el clima que la organización ha identificado a corto, medio y largo plazo.",
      "B) Describir el impacto de los riesgos y oportunidades relacionados con el clima en los negocios, la estrategia y la planificación financiera de la organización."
    ]
  },
  {
    title: "Métricas y objetivos",
    description: [
      "a) Divulgar las métricas utilizadas por la empresa para evaluar los riesgos y oportunidades relacionados con el clima, en línea con su estrategia y proceso de gestión de riesgos.",
      "b) Divulgar las emisiones de GEI de Alcance 1, Alcance 2 y, si corresponde, Alcance 3, y los riesgos relacionados.",
      "c) Describir los objetivos utilizados por la empresa para gestionar riesgos y oportunidades climáticas, y el rendimiento frente a dichos objetivos."
    ]
  }
]

export const cdp_topics: DisplayItem[] = [
  {
    title: "C4 Objetivos y desempeño",
    description: [
      "C4.1: Objetivos de emisiones", 
      "C4.3: Iniciativas de reducción de emisiones"
    ]
  },
  {
    title: "C6 Datos de emisiones",
    description: [
      "C6.1: Datos de emisiones Alcance 1",
      "C6.2: Reporte de emisiones Alcance 2",
      "C6.3: Datos de emisiones Alcance 2",
      "C6.7: Datos de carbono biogénico",
      "C6.7a: Datos de carbono biogénico",
      "C6.10: Intensidades de emisiones",
    ]
  },
  {
    title: "C7 Desglose de emisiones",
    description: [
      "C7.1: Desglose Alcance 1: Gases de efecto invernadero",
      "C7.2: Desglose Alcance 1: país/región",
      "C7.3: Desglose Alcance 1: unidades de negocio",
      "C7.5: Desglose Alcance 2: país/región",
      "C7.6: Desglose Alcance 2: unidades de negocio",
      "C7.9: Desempeño de emisiones"
    ]
  },
  {
    title: "C8 Energía",
    description: [
      "C8.2: Actividades relacionadas con energía"
    ]
  }
]

export const gri_topics: DisplayItem[] = [
  {
    title: "GRI 302: Energía 2016",
    description: [
      "Divulgación 302-1: Consumo de energía dentro de la organización",
      "Divulgación 302-2: Consumo de energía fuera de la organización (2022-Q4)",
      "Divulgación 302-3: Intensidad energética",
      "Divulgación 302-4: Reducción del consumo de energía"
    ]
  },
  {
    title: "GRI 305: Emisiones",
    description: [
      "Divulgación 305-1: Emisiones directas (Alcance 1) de GEI",
      "Divulgación 305-2: Emisiones indirectas de energía (Alcance 2) de GEI",
      "Divulgación 305-3: Otras emisiones indirectas (Alcance 3) de GEI (2023-Q2)",
      "Divulgación 305-4: Intensidad de emisiones de GEI",
      "Divulgación 305-5: Reducción de emisiones de GEI",
      "Divulgación 305-6: Emisiones de sustancias que agotan la capa de ozono (SAO)",
      "Divulgación 305-7: Emisiones significativas de NOx, SOx y otros contaminantes atmosféricos"
    ]
  }
]

export const topics: DisplayItem[][] = [
  tcfd_topics, gri_topics, cdp_topics
]
