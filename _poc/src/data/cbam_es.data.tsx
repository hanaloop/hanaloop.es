export const hero = {
    title : 'Hana.eco Scope3',
    subtitle : 'Gestione de forma eficiente el Scope 3 de su empresa con la solución Hana.eco',
    link_1: "/company_profile_request",
    link_2: "/demo_request",
    second_title: "Solución CBAM de HanaLoop"
}

export const section_title = {
    process: "Procedimiento para la implementación de la solución CBAM",
    features: "Solución CBAM certificada por conformidad",
    articles: "Colección de insights de HanaLoop para entender CBAM",
    plan: "Plan CBAM de Hana.eco",
    features_subtitle: "Primera empresa en Asia en obtener la verificación oficial de conformidad para comercio de emisiones y CBAM de la UE, otorgada por LRQA",
}

export const features_1 = [
    {
        title: 'Gestión sencilla de grandes volúmenes de datos de actividad',
        imageUrl: '/images/cbam-feature-1.png',
        descriptions: [
            {
                subTitle: "Actualización masiva de datos de actividad",
                content: "Permite clasificar categorías, mapear factores de emisión, convertir unidades y calcular emisiones para grandes volúmenes de datos de actividad.",
            },
            {
                subTitle: "Gestión agrupada de actividades similares",
                content: "Agrupa actividades similares para optimizar la gestión y seguimiento de factores de emisión.",
            },
        ]
    },
    {
        title: 'Visualización de tendencias de emisiones con criterios diversos',
        imageUrl: '/images/scope3-feature-2.png',
        descriptions: [
            {
                subTitle: "Comprensión intuitiva de flujos de emisiones",
                content: "Visualiza fácilmente flujos de emisiones con diferentes criterios como grupos de actividades, métodos de cálculo y emisiones por proveedor.",
            },
            {
                subTitle: "Identificación de áreas de alta emisión y estrategias de reducción",
                content: "Las estadísticas Scope 3 permiten identificar tendencias de emisiones en toda la cadena de suministro y extraer estrategias de reducción.",
            }
        ]
    },
] 

export const features_2 = [
    {
        title: '¿Qué es CBAM?',
        descriptions: [
            'CBAM (Mecanismo de Ajuste en Frontera por Carbono) es un sistema de la UE que aplica un coste basado en las emisiones de carbono incorporadas en los productos importados. Es esencial gestionar con precisión los datos de emisiones de carbono.'
        ],
        img_url: "/images/cbam-shipping.jpg"
    },
    {
        title: 'Consultoría y solución CBAM',
        descriptions: [
            'HanaLoop ofrece consultoría especializada en CBAM y la solución Hana.eco para apoyar la respuesta eficiente de las empresas. La solución CBAM de Hana.eco automatiza datos complejos, facilitando la elaboración de informes y el cumplimiento normativo.'
        ],
        img_url: "/images/cbam-consulting.png"
    },
]

export const features_3 = [
    {
        title: 'Gestión de productos y precursoras (gestión de códigos CN)',
        descriptions: [
            'Gestiona integralmente productos y sustancias precursoras, registrando y rastreando de manera sistemática los códigos CN requeridos por CBAM. Esto permite obtener datos básicos necesarios para análisis y reportes de emisiones por producto.'
        ]
    },
    {
        title: 'Configuración de instalaciones y gestión de procesos',
        descriptions: [
            'Permite configurar y gestionar información de cada instalación y el flujo de procesos de producción. Esto es clave para garantizar precisión en la información de emisiones y en los cálculos de emisiones por proceso requeridos en los informes CBAM.'
        ],
    },
    {
        title: 'Cálculo y análisis de emisiones incorporadas en productos',
        descriptions: [
            'Calcula las emisiones directas e indirectas generadas durante la producción por unidad de producto. Con los resultados, puede analizar la intensidad de carbono por producto, identificar puntos críticos y definir estrategias de reducción.'
        ],
    },
    {
        title: 'Generación de informes CBAM',
        descriptions: [
            'Genera automáticamente informes conformes con CBAM basados en los datos de actividad y emisiones recopilados. Esto apoya el cumplimiento eficiente de las obligaciones de reporte de exportadores a Europa sin interpretación manual compleja.'
        ],
    },
]

export const plans = [
    {
        title: 'Estándar',
        color: 'bg-green-500',
        descriptions: [
            'Dirigido a empresas siderúrgicas y de aluminio que deben cumplir con CBAM',
            'Gestión del carbono en una o múltiples plantas y gestión de la huella de carbono de productos según CBAM'
        ]
    },
    {
        title: 'Cadena de suministro - LITE',
        color: 'bg-blue-500',
        descriptions: [
            'Para centros de distribución sujetos a CBAM',
            'Recopilación, seguimiento y gestión de emisiones incorporadas de múltiples proveedores'
        ],
    },
    {
        title: 'Cadena de suministro - ENTERPRISE',
        color: 'bg-red-500',
        descriptions: [
            'Cumplimiento CBAM para empresas con decenas de proveedores',
            'Incluye funciones de LITE y Estándar'
        ],
    },
]

export const articles = [
    {
        title: 'Explicación de la propuesta de reforma CBAM del paquete Omnibus de la UE',
        description: 'La Comisión Europea anunció una propuesta para simplificar el CBAM como parte del paquete Omnibus 2025. Aunque busca mejorar la eficiencia, algunos temen que pueda impactar negativamente en los objetivos climáticos. Este artículo resume los puntos clave en formato problema-solución, junto con el análisis de HanaLoop.',
        link: '/docs/x20_environment-general/CBAM/2025-02-27-CBAM-Omnibus'
    },
    {
        title: '¿Cómo preparar los certificados CBAM?',
        description: 'Documento traducido del sitio web oficial de CBAM, publicado el 17 de diciembre de 2024. Se recomienda a las empresas de acero, aluminio y otras industrias metálicas estar al tanto de las actualizaciones. Fuente: Carbon Border Adjustment Mechanism (CBAM), Questions and Answers, 17 December 2024',
        link: '/docs/x20_environment-general/CBAM/2025-01-16-cbam-faq'
    },
    {
        title: 'Preguntas frecuentes sobre el Mecanismo de Ajuste en Frontera por Carbono (CBAM)',
        description: 'Documento traducido del sitio web oficial de CBAM, publicado el 24 de octubre de 2024. Se recomienda a empresas siderúrgicas, de aluminio y otras industrias metálicas revisar las actualizaciones. Fuente: Carbon Border Adjustment Mechanism (CBAM), Questions and Answers, 24 October 2024',
        link: '/docs/x20_environment-general/CBAM/2024-10-24-CBAM-Questions-and-Answers'
    },
    {
        title: 'Responder rápidamente al CBAM de la UE con Hana.eco',
        description: 'Empresas de industrias intensivas en carbono como acero y aluminio deben prepararse para el CBAM de la UE. Hana.eco ya apoya a empresas sujetas al sistema coreano de comercio de emisiones y está optimizado para CBAM. Gracias a un sistema integrado de gestión de carbono y cumplimiento regulatorio como Hana.eco, las empresas pueden simplificar sus procesos.',
        link: '/docs/x20_environment-general/CBAM/2024-01-20-cbam-compliance'
    },
    {
        title: 'Contenido esencial para incluir en los informes CBAM',
        description: 'A partir del 1 de octubre, empresas exportadoras de cemento, electricidad, fertilizantes, hierro y acero, aluminio e hidrógeno a la UE deben reportar obligatoriamente sus emisiones de carbono. Aquí se resumen los principales elementos que deben incluirse en los informes.',
        link: '/docs/x20_environment-general/CBAM/2023-09-28-CBAM-reporting'
    },
    {
        title: 'Consultoría del primer informe CBAM y preguntas frecuentes de clientes | CBAM Q&A',
        description: 'Resumen compartido en el evento de networking "CBAM Day" de HanaLoop el 28 de febrero de 2024. Compartimos la primera parte del Q&A para empresas sujetas a CBAM, basada en preguntas recibidas durante y después del informe.',
        link: '/docs/x20_environment-general/CBAM/2023-02-28-CBAM-qna'
    },
    {
        title: 'Resumen de regulación CBAM para gerentes y responsables',
        description: 'Hace poco se cumplió el plazo para la presentación del primer informe durante el período transitorio del CBAM. HanaLoop resume aquí los puntos clave basados en experiencias prácticas para ayudar a gerentes y responsables a comprender y gestionar la regulación CBAM.',
        link: '/docs/x20_environment-general/CBAM/2023-01-05-CBAM-for-managers'
    },
    {
        title: 'Lo que las empresas deben saber sobre el CBAM',
        description: 'El 13 de diciembre de 2022, el Parlamento Europeo y el Consejo de la UE alcanzaron un acuerdo sobre aspectos clave para establecer el CBAM como parte del paquete "Fit for 55". El CBAM asegura que los productos importados paguen el mismo precio de carbono que los producidos en la UE bajo su sistema de comercio de emisiones.',
        link: '/docs/x20_environment-general/CBAM/2022-12-14-CBAM'
    },
]

export const management_process = [
    {
        title: '1. Análisis de situación y consultoría',
        descriptions: [
            "Asignación de límites de producto",
            "Identificación de puntos de monitoreo de datos",
            "Evaluación del estado de recopilación de datos y análisis de mejoras de proceso",
            "Análisis de integridad y precisión del inventario de plantas",
        ]
    },
    {
        title: '2. Configuración de la plataforma',
        descriptions: [
            "Recopilación de datos",
            "Definición de fuentes de emisión según procesos",
            "Normalización de datos recopilados",
            "Ingreso de datos históricos",
            "Definición de procesos",
        ]
    },
    {
        title: '3. Instalación y conexión de medidores',
        descriptions: [
            "Personalización para recolección automática de datos de medición",
            "Discusión y provisión de conectores para usar datos de sistemas ERP, MES"
        ]
    },
    {
        title: '4. Implementación',
        descriptions: [
            "Provisión de manuales de usuario",
            "Formación al personal para la integración del proceso en la operación diaria"
        ]
    },
]

export const request = {
    title : "Desde la consultoría CBAM hasta la gestión, comience con Hana.eco",
    button_1 : "Ver solución",
    button_2 : "Contacto",
}
