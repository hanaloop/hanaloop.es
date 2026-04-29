import Image from 'next/image';
import type { AppLocale } from '@/lib/locales';

type HomeOurMissionSectionProps = {
    locale: AppLocale;
};

const BADGE = 'OUR MISSION';

type MissionCopy = {
    heading: string;
    desktopLead: string[];
    paragraphs: string[];
};

const copy: Record<AppLocale, MissionCopy> = {
    ko: {
        heading: '하나루프는 함께 살아가는 지구 환경을 위해 하나의 발걸음을 시작하였습니다.',
        desktopLead: [
            '우리는 산업과 기업 환경에 맞춘 탄소 중립 매니지먼트 기술과 디지털 혁신을 통해 지속가능한 생태계를',
            '구축합니다. 누구나 환경을 위한 기술에 쉽게 접근할 수 있도록, 환경과 산업에 필요한 디지털 솔루션을',
            '개발하며, 넷제로 실현을 앞당기고 있습니다. 하나루프는 사람과 자연에게 이로운 디지털 기술 서비스로',
            '모두의 삶이 지속가능하도록 하나의 연결로 더 큰 임팩트를 만들어가겠습니다.',
        ],
        paragraphs: [
            '우리는 산업과 기업 환경에 맞춘 탄소 중립 매니지먼트 기술과 디지털 혁신을 통해 지속가능한 생태계를 구축합니다. 누구나 환경을 위한 기술에 쉽게 접근할 수 있도록, 환경과 산업에 필요한 디지털 솔루션을 개발하며, 넷제로 실현을 앞당기고 있습니다.',
            '하나루프는 사람과 자연에게 이로운 디지털 기술 서비스로 모두의 삶이 지속가능하도록 하나의 연결로 더 큰 임팩트를 만들어가겠습니다.',
        ],
    },
    en: {
        heading: 'HanaLoop has taken the first step toward a sustainable planet where we live together.',
        desktopLead: [
            'We build sustainable ecosystems through carbon neutrality management technology and digital innovation',
            'tailored to industrial and corporate environments. We are developing digital solutions that make',
            'environmental technology accessible to everyone and accelerating net-zero implementation.',
            'HanaLoop will create greater impact through meaningful connections so everyone can live sustainably.',
        ],
        paragraphs: [
            'We build sustainable ecosystems through carbon neutrality management technology and digital innovation tailored to industrial and corporate environments. We are developing digital solutions that make environmental technology accessible to everyone and accelerating net-zero implementation.',
            'HanaLoop will create greater impact through meaningful connections so that everyone can live sustainably with digital services that benefit both people and nature.',
        ],
    },
    es: {
        heading: 'HanaLoop ha dado el primer paso hacia un planeta sostenible en el que vivimos juntos.',
        desktopLead: [
            'Construimos ecosistemas sostenibles mediante tecnología de gestión de neutralidad de carbono',
            'e innovación digital adaptadas a los entornos industriales y empresariales.',
            'Desarrollamos soluciones digitales que facilitan el acceso a tecnologías ambientales',
            'y aceleramos la implementación del net-zero.',
        ],
        paragraphs: [
            'Construimos ecosistemas sostenibles mediante tecnología de gestión de neutralidad de carbono e innovación digital adaptadas a los entornos industriales y empresariales. Desarrollamos soluciones digitales que facilitan el acceso a tecnologías ambientales y aceleramos la implementación del net-zero.',
            'HanaLoop generará un mayor impacto a través de conexiones significativas para que la vida de todos sea sostenible, con servicios digitales beneficiosos para las personas y la naturaleza.',
        ],
    },
};

export function HomeOurMissionSection({ locale }: HomeOurMissionSectionProps) {
    const { heading, desktopLead, paragraphs } = copy[locale];

    return (
        <section className="px-5 pb-12 pt-10 md:px-8 md:pb-16 md:pt-16 lg:px-[64px] lg:pb-20 lg:pt-28">
            <div className="mx-auto w-full max-w-[1440px]">
                <div className="px-11 grid gap-6 lg:grid-cols-[1fr_1.35fr] lg:items-start lg:gap-10">
                    <p className="mx-auto max-w-[680px] font-medium leading-[1.14] tracking-[-0.02em] text-black [font-size:clamp(22px,4vw,48px)] lg:mx-0 lg:text-left">{BADGE}</p>
                    <div className="space-y-5 lg:space-y-0">
                        <div className="inline-flex items-center rounded-full bg-[var(--gradient-badge)] px-3 py-1.5 text-[18px] font-semibold leading-none text-white lg:hidden">{BADGE}</div>
                        <h2 className="max-w-[660px] text-[42px] font-semibold leading-[1.35] tracking-[-0.02em] text-[var(--color-mission-text)] [font-size:clamp(22px,5vw,42px)] lg:hidden">{heading}</h2>
                        <div className="hidden max-w-[720px] space-y-2 text-[18px] font-medium leading-[1.9] text-[var(--color-text-muted)] lg:block">
                            <h2 className="whitespace-nowrap font-bold">{heading}</h2>
                            {desktopLead.map((line) => (
                                <p key={line} className="whitespace-nowrap">
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative mt-5 overflow-hidden rounded-[14px] md:mt-8 md:rounded-[18px] lg:mt-12 lg:h-[446px] lg:rounded-[22px]">
                    <Image
                        src="/images/revamp/mission/home-mission-img.jpg"
                        alt="Wind turbines by a road at sunset"
                        width={2048}
                        height={1152}
                        className="h-auto w-full object-cover object-bottom lg:h-full"
                        sizes="(max-width: 1024px) 100vw, 1440px"
                    />
                    <p className="pointer-events-none absolute bottom-1 left-7 text-[76px] font-medium leading-none tracking-[-0.02em] text-white/45 md:left-10 md:text-[84px] lg:hidden">OUR MISSION</p>
                </div>

                <div className="mt-8 space-y-6 text-[42px] font-medium leading-[1.6] text-[#434343] [font-size:clamp(18px,4vw,44px)] lg:hidden">
                    <p>{paragraphs[0]}</p>
                    <p>{paragraphs[1]}</p>
                </div>
            </div>
        </section>
    );
}
