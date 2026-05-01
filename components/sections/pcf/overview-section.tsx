import Image from 'next/image';
import type { AppLocale } from '@/lib/locales';

type PcfOverviewSectionProps = {
    locale: AppLocale;
};

const processItems = [
    { label: 'Extraction', icon: '/images/revamp/pcf-process-icon1.png' },
    { label: 'Production', icon: '/images/revamp/pcf-process-icon2.png' },
    { label: 'Transportation', icon: '/images/revamp/pcf-process-icon3.png' },
    { label: 'Use', icon: '/images/revamp/pcf-process-icon4.png' },
    { label: 'Disposal', icon: '/images/revamp/pcf-process-icon5.png' },
];

const copy = {
    ko: {
        heading: 'Hana.eco CBAM 솔루션',
        subheading: '지속가능한 제품 개발을 위한 체계적인 탄소발자국 관리',
        title: '제품탄소발자국(PCF)이란 무엇인가?',
        imageAlt: '제품 탄소 발자국 프로세스 시각화',
        lead: '제품 탄소 발자국(Product Carbon Footprint, PCF)는 제품의 원자재 채굴부터\n생산, 유통, 사용, 처리까지 전 과정에서 발생하는 온실가스 배출량을 정량화한 지표입니다.',
        body: '이는 ISO 14067 및 온실가스 프로토콜(GHG Protocol)에 따른 국제 표준에 따라 산정되며,\n제품의 환경 영향을 투명하고 체계적으로 관리하는 데 필수적인 지표입니다.',
    },
    en: {
        heading: 'Hana.eco CBAM Solution',
        subheading: 'Systematic carbon footprint management for sustainable product development',
        title: 'What is Product Carbon Footprint (PCF)?',
        imageAlt: 'Product carbon footprint process overview',
        lead: 'Product Carbon Footprint (PCF) quantifies greenhouse gas emissions\nacross the full lifecycle from raw materials to disposal.',
        body: 'It is calculated under standards such as ISO 14067 and the GHG Protocol,\nand is essential for transparent environmental impact management.',
    },
    es: {
        heading: 'Solucion CBAM de Hana.eco',
        subheading: 'Gestion sistematica de huella de carbono para el desarrollo sostenible de productos',
        title: 'Que es la Huella de Carbono de Producto (PCF)?',
        imageAlt: 'Resumen del proceso de huella de carbono de producto',
        lead: 'La huella de carbono de producto (PCF) cuantifica las emisiones de GEI\nen todo el ciclo de vida del producto.',
        body: 'Se calcula con estandares como ISO 14067 y GHG Protocol,\ny es clave para una gestion ambiental transparente.',
    },
} as const;

export function PcfOverviewSection({ locale }: PcfOverviewSectionProps) {
    const text = copy[locale];

    return (
        <section className="bg-[#ebebeb] px-4 pb-16 pt-14 sm:px-6 md:px-8 lg:pb-[120px] lg:pt-[108px] xl:px-0" aria-label={text.title}>
            <div className="mx-auto w-full max-w-[1440px]">
                <h2
                    className="text-black"
                    style={{
                        fontSize: 'clamp(34px, calc(24.54px + 1.97vw), 60px)',
                        fontWeight: 500,
                        letterSpacing: '-1px',
                        lineHeight: 1.13,
                    }}
                >
                    {text.heading}
                </h2>
                <p
                    className="mt-5 text-[#4c4c4c]"
                    style={{
                        fontSize: 'clamp(16px, calc(13.81px + 0.46vw), 21px)',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        lineHeight: 1.48,
                    }}
                >
                    {text.subheading}
                </p>

                <h3 className="mt-20 lg:mt-30 text-[32px] font-bold leading-[1.22] tracking-[-0.25px] text-black lg:text-[48px]">{text.title}</h3>

                <div className="relative mt-[26px] hidden w-full overflow-hidden rounded-t-[14px] xl:block">
                    <Image src="/images/revamp/pcf-overview-bg.png" alt={text.imageAlt} width={1440} height={240} className="h-[240px] w-full object-cover" sizes="(min-width: 1440px) 1440px, 100vw" />

                    <div className="absolute inset-0 flex items-center justify-center px-[20px] py-5">
                        <div className="flex w-full items-center justify-center gap-[14px]">
                            {processItems.map((item, index) => (
                                <div key={item.label} className="flex items-center gap-[14px]">
                                    <div
                                        className="flex h-[104px] w-[232px] items-center rounded-[12px] px-5"
                                        style={{
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid #FFFFFF',
                                            background: 'rgba(255, 255, 255, 0.4)',
                                        }}
                                    >
                                        <Image src={item.icon} alt="" width={32} height={32} className="h-8 w-8 shrink-0" />
                                        <span className="flex-1 text-center text-[18px] font-semibold leading-[1.2] tracking-[-0.25px] text-white">{item.label}</span>
                                    </div>
                                    {index < processItems.length - 1 && <Image src="/images/revamp/pcf-process-right.png" alt="" width={6} height={19} className="h-[19px] w-[6px] shrink-0" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative mt-[26px] w-full overflow-hidden rounded-[14px] xl:hidden">
                    <Image src="/images/revamp/pcf-overview-bg.png" alt={text.imageAlt} fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10 flex flex-col justify-center px-3 py-5 sm:px-4 sm:py-6 md:px-8 md:py-8">
                        {processItems.map((item, index) => (
                            <div key={`mobile-${item.label}`} className="flex flex-col items-center">
                                <div
                                    className="flex h-[88px] w-[min(92%,420px)] items-center rounded-[12px] px-4"
                                    style={{
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid #FFFFFF',
                                        background: 'rgba(255, 255, 255, 0.4)',
                                    }}
                                >
                                    <Image src={item.icon} alt="" width={32} height={32} className="h-8 w-8 shrink-0" />
                                    <span className="flex-1 text-center text-[18px] font-semibold leading-[1.2] tracking-[-0.25px] text-white">{item.label}</span>
                                </div>
                                {index < processItems.length - 1 && <Image src="/images/revamp/pcf-process-right.png" alt="" width={6} height={19} className="my-2 h-[19px] w-[6px] rotate-90 shrink-0" />}
                            </div>
                        ))}
                    </div>
                </div>

                <p className="mt-[34px] whitespace-pre-line text-[21px] font-bold leading-[1.5] tracking-[-0.25px] text-[#1f1f1f]">{text.lead}</p>
                <p className="mt-[22px] whitespace-pre-line text-[21px] font-medium leading-[1.5] tracking-[-0.25px] text-[#3f3f3f]">{text.body}</p>
            </div>
        </section>
    );
}
