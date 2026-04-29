import Image from 'next/image';
import Link from 'next/link';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

type HomeIntroSectionProps = {
    locale: AppLocale;
};

type IntroCopy = {
    eyebrowDesktop: string;
    eyebrowMobileLines: string[];
    titleDesktopLines: string[];
    titleMobileLines: string[];
    descriptionDesktop: string;
    descriptionMobileLines: string[];
    contactLabel: string;
    cards: Array<{ title: string; href: string }>;
    metrics: Array<{ value: string; label: string }>;
    footnote: string;
};

const introCopy: Record<AppLocale, IntroCopy> = {
    ko: {
        eyebrowDesktop: '디지털 파트너 하나루프는 귀사의 탄소중립 여정에 힘을 실어드립니다.',
        eyebrowMobileLines: ['디지털 파트너 하나루프는', '귀사의 탄소중립 여정에 힘을 실어드립니다.'],
        titleDesktopLines: ['HanaLoop supports and empowers your journey', 'toward carbon neutrality.'],
        titleMobileLines: ['HanaLoop supports', 'and empowers your journey', 'toward carbon neutrality.'],
        descriptionDesktop: 'CBAM 솔루션, PCF 탄소발자국 관리, Scope3 배출량 산정솔루션등 하나루프의 다양한 솔루션을 확인해보세요.',
        descriptionMobileLines: ['CBAM 솔루션, PCF 탄소발자국 관리,', 'Scope3 배출량 산정솔루션등', '하나루프의 다양한 솔루션을 확인해보세요.'],
        contactLabel: 'Contact Us',
        cards: [
            { title: 'CBAM Solution', href: '/cbam' },
            { title: 'PCF management', href: '/pcf' },
            { title: 'Scope3 Solution', href: '/scope3' },
        ],
        metrics: [
            { value: '4.0M+', label: '누적 탄소 관리 400만t CO2eq+' },
            { value: '87%+', label: '실무자 작업시간 단축' },
            { value: '15%+', label: '에너지 절약 (약 33억원)' },
            { value: '1598H', label: '연간 1,598시간 이상 절약' },
        ],
        footnote: '* 제조사 A 배출규모 9만톤CO2eq, 매출규모 3천억, 에너지사용료 220억원',
    },
    en: {
        eyebrowDesktop: 'HanaLoop supports your company as a digital partner on your carbon-neutral journey.',
        eyebrowMobileLines: ['HanaLoop supports your company as a digital partner', 'on your carbon-neutral journey.'],
        titleDesktopLines: ['HanaLoop supports and empowers your journey', 'toward carbon neutrality.'],
        titleMobileLines: ['HanaLoop supports', 'and empowers your journey', 'toward carbon neutrality.'],
        descriptionDesktop: 'Explore HanaLoop solutions for CBAM, PCF footprint management, and Scope 3 emissions quantification.',
        descriptionMobileLines: ['Explore HanaLoop solutions for CBAM,', 'PCF footprint management, and', 'Scope 3 emissions quantification.'],
        contactLabel: 'Contact Us',
        cards: [
            { title: 'CBAM Solution', href: '/cbam' },
            { title: 'PCF management', href: '/pcf' },
            { title: 'Scope3 Solution', href: '/scope3' },
        ],
        metrics: [
            { value: '4.0M+', label: 'Total carbon managed: 4M tCO2eq+' },
            { value: '87%+', label: 'Reduction in manual work time' },
            { value: '15%+', label: 'Energy savings (approx. KRW 3.3B)' },
            { value: '1598H', label: 'More than 1,598 hours saved yearly' },
        ],
        footnote: '* Manufacturer A: 90k tCO2eq emissions, KRW 300B revenue, KRW 22B energy cost',
    },
    es: {
        eyebrowDesktop: 'HanaLoop impulsa su camino hacia la neutralidad de carbono como socio digital.',
        eyebrowMobileLines: ['HanaLoop impulsa su camino hacia la neutralidad', 'de carbono como socio digital.'],
        titleDesktopLines: ['HanaLoop supports and empowers your journey', 'toward carbon neutrality.'],
        titleMobileLines: ['HanaLoop supports', 'and empowers your journey', 'toward carbon neutrality.'],
        descriptionDesktop: 'Descubra las soluciones de HanaLoop para CBAM, gestión de huella PCF y cálculo de emisiones Scope 3.',
        descriptionMobileLines: ['Descubra las soluciones de HanaLoop para CBAM,', 'gestión de huella PCF y cálculo de', 'emisiones Scope 3.'],
        contactLabel: 'Contact Us',
        cards: [
            { title: 'CBAM Solution', href: '/cbam' },
            { title: 'PCF management', href: '/pcf' },
            { title: 'Scope3 Solution', href: '/scope3' },
        ],
        metrics: [
            { value: '4.0M+', label: 'Carbono gestionado acumulado: 4M tCO2eq+' },
            { value: '87%+', label: 'Reducción del tiempo operativo' },
            { value: '15%+', label: 'Ahorro energético (aprox. KRW 3.3B)' },
            { value: '1598H', label: 'Más de 1,598 horas ahorradas al año' },
        ],
        footnote: '* Fabricante A: 90 mil tCO2eq, ingresos KRW 300 mil millones, costo energético KRW 22 mil millones',
    },
};

const desktopCardImages = ['/images/revamp/home-intro/pc1.png', '/images/revamp/home-intro/pc2.png', '/images/revamp/home-intro/pc3.png'] as const;
const mobileCardImages = ['/images/revamp/home-intro/mobile1.png', '/images/revamp/home-intro/mobile2.png', '/images/revamp/home-intro/mobile3.png'] as const;

function CardAction({ title }: { title: string }) {
    return (
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-center gap-2 xl:px-10 md:bottom-4 md:left-4 md:right-4">
            <div className="gradient-border relative flex w-[200px] h-10 md:flex-1 items-center justify-center rounded-full bg-black/10 px-4 text-[14px] font-medium leading-none text-white backdrop-blur-[4px] md:h-12 md:text-[20px]">
                {title}
            </div>
            <div className="gradient-border relative flex h-10 w-10 items-center justify-center rounded-full bg-black/10 backdrop-blur-[4px] md:h-12 md:w-12">
                <Image src="/icons/revamp/ic-arrow-up-right.png" alt="" aria-hidden="true" width={20} height={20} />
            </div>
        </div>
    );
}

export function HomeIntroSection({ locale }: HomeIntroSectionProps) {
    const copy = introCopy[locale];

    return (
        <section className="px-5 pb-10 pt-8 text-[#131313] md:px-8 md:pb-14 md:pt-10 lg:px-[64px] lg:pb-16 lg:pt-20">
            <div className="mx-auto w-full max-w-[1440px]">
                <div className="relative">
                    <p className="mx-auto max-w-[780px] text-center text-[13px] font-medium leading-[1.45] text-[var(--color-text-eyebrow)] md:text-[15px] lg:hidden">
                        {copy.eyebrowMobileLines.map((line) => (
                            <span key={line} className="block whitespace-nowrap">
                                {line}
                            </span>
                        ))}
                    </p>
                    <p className="mx-auto hidden max-w-[780px] text-center text-[21px] font-semibold leading-[1.4] text-[var(--color-text-eyebrow)] lg:block">
                        <span className="whitespace-nowrap">{copy.eyebrowDesktop}</span>
                    </p>

                    <h2 className="mx-auto mt-2 max-w-[1020px] text-center font-medium leading-[1.14] tracking-[-0.02em] text-black [font-size:clamp(22px,4vw,48px)] lg:mt-4">
                        <span className="lg:hidden">
                            {copy.titleMobileLines.map((line) => (
                                <span key={line} className="block whitespace-nowrap">
                                    {line}
                                </span>
                            ))}
                        </span>
                        <span className="hidden lg:block">
                            {copy.titleDesktopLines.map((line) => (
                                <span key={line} className="block whitespace-nowrap">
                                    {line}
                                </span>
                            ))}
                        </span>
                    </h2>

                    <Link
                        href={withLocalePath(locale, '/demo_request')}
                        className="absolute right-0 xl:bottom-30 2xl:bottom-12 hidden h-[128px] w-[128px] flex-col items-center justify-center rounded-full text-white xl:flex"
                        style={{ background: 'linear-gradient(149deg, #59c98a 0%, #3cb2ea 100%)' }}
                    >
                        <Image src="/icons/revamp/home-intro-arrow.png" alt="" aria-hidden="true" width={34} height={10} className="mb-2 h-auto w-[34px]" />
                        <span className="text-center text-[21px] font-medium leading-[1.05]">
                            {copy.contactLabel.split(' ').map((word) => (
                                <span key={word} className="block">{word}</span>
                            ))}
                        </span>
                    </Link>
                </div>

                <p className="mx-auto mt-9 hidden max-w-[1040px] text-center text-[13px] font-medium leading-[1.55] text-[var(--color-text-subtle)] md:text-[14px] lg:mt-16 lg:block lg:text-[16px]">
                    <span className="whitespace-nowrap">{copy.descriptionDesktop}</span>
                </p>

                <div className="mt-8 grid gap-3.5 lg:mt-6 lg:grid-cols-3 lg:gap-4">
                    {copy.cards.map((card, index) => (
                        <Link key={card.title} href={withLocalePath(locale, card.href)} className="relative block overflow-hidden rounded-[12px] lg:rounded-[18px]">
                            <Image src={desktopCardImages[index]} alt={card.title} width={920} height={540} className="hidden h-auto w-full object-cover lg:block" sizes="(min-width: 1440px) 430px, 30vw" />
                            <Image src={mobileCardImages[index]} alt={card.title} width={716} height={334} className="h-auto w-full object-cover lg:hidden" sizes="(max-width: 1023px) 100vw, 0px" />
                            <CardAction title={card.title} />
                        </Link>
                    ))}
                </div>

                <p className="mx-auto mt-9 max-w-[700px] text-center text-[13px] font-medium leading-[1.55] text-[var(--color-text-subtle)] md:text-[15px] lg:hidden">
                    {copy.descriptionMobileLines.map((line) => (
                        <span key={line} className="block whitespace-nowrap">
                            {line}
                        </span>
                    ))}
                </p>

                <div className="mt-14 hidden lg:grid lg:grid-cols-4">
                    {copy.metrics.map((metric, index) => (
                        <div key={metric.value} className={`px-11 py-3 ${index > 0 ? 'border-l border-black/15' : ''}`}>
                            <p className="text-[58px] leading-none tracking-[-0.02em] text-[var(--color-metric-value)]">{metric.value}</p>
                            <p className="mt-4 text-[16px] font-medium leading-[1.25] text-[var(--color-metric-label)]">{metric.label}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 lg:hidden">
                    {copy.metrics.map((metric) => (
                        <div key={metric.value} className="flex items-end justify-between border-b border-black/15 py-4">
                            <p className="text-[56px] leading-none tracking-[-0.02em] text-[var(--color-metric-value)] md:text-[62px]">{metric.value}</p>
                            <p className="max-w-[172px] text-right text-[14px] font-medium leading-[1.35] text-[var(--color-metric-label)] md:max-w-[240px] md:text-[16px]">{metric.label}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-3 text-center text-[12px] leading-[1.5] text-[var(--color-text-note)] lg:mt-8 lg:text-right lg:text-[14px]">{copy.footnote}</p>
                <div className="mt-8 border-b border-black/15 lg:mt-16" />
            </div>
        </section>
    );
}
