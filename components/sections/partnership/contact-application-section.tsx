import Image from 'next/image';
import Link from 'next/link';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

type PartnershipContactApplicationSectionProps = {
    locale: AppLocale;
};

type ContactCopy = {
    slogan: string;
    address: string[];
    contactPrefix: string;
    companyIntroLink: string;
    localAddress: string[];
    formLabel: string;
    placeholders: {
        name: string;
        email: string;
        phone: string;
        inquiry: string;
    };
    agreePrivacy: string;
    submit: string;
};

const gradientTextClassName = 'bg-[linear-gradient(90deg,#1FBD7D_0%,#0194FF_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]';

const copy: Record<AppLocale, ContactCopy> = {
    ko: {
        slogan: 'Reliable and Agile Sustainability Partner',
        address: ['4F, 545, Bongcheon-ro, Gwanak-gu, Seoul, Republic of Korea'],
        contactPrefix: 'CONTACT :',
        companyIntroLink: 'Download a company introduction',
        localAddress: ['서울특별시 관악구 봉천로 545,', '서울창업센터 관악 4층 (08789)'],
        formLabel: '기업 / 기관명',
        placeholders: {
            name: '신청자 이름 (부서/직급)',
            email: '이메일',
            phone: '전화번호',
            inquiry: '하나루프의 기후규제대응 Hana.eco 플랫폼을 통해 받고 싶은 서비스는 어떤 것입니까?',
        },
        agreePrivacy: 'I agree with the privacy policy.',
        submit: 'Send',
    },
    en: {
        slogan: 'Reliable and Agile Sustainability Partner',
        address: ['4F, 545, Bongcheon-ro, Gwanak-gu, Seoul, Republic of Korea'],
        contactPrefix: 'CONTACT :',
        companyIntroLink: 'Download a company introduction',
        localAddress: ['4F, Seoul Startup Center Gwanak,', '545 Bongcheon-ro, Gwanak-gu, Seoul (08789)'],
        formLabel: 'Company / Organization Name',
        placeholders: {
            name: 'Requester name (Department / Role)',
            email: 'Email',
            phone: 'Phone number',
            inquiry: 'What services are you looking for through HanaLoop climate regulation response platform, Hana.eco?',
        },
        agreePrivacy: 'I agree with the privacy policy.',
        submit: 'Send',
    },
    es: {
        slogan: 'Socio de Sostenibilidad Confiable y Agil',
        address: ['4F, 545, Bongcheon-ro, Gwanak-gu, Seul, Republica de Corea'],
        contactPrefix: 'CONTACTO :',
        companyIntroLink: 'Descargar presentacion de la empresa',
        localAddress: ['4F, Seoul Startup Center Gwanak,', '545 Bongcheon-ro, Gwanak-gu, Seul (08789)'],
        formLabel: 'Nombre de Empresa / Institucion',
        placeholders: {
            name: 'Nombre del solicitante (Departamento / Cargo)',
            email: 'Correo electronico',
            phone: 'Numero de telefono',
            inquiry: 'Que servicios desea recibir a traves de Hana.eco, la plataforma de respuesta a regulaciones climaticas de HanaLoop?',
        },
        agreePrivacy: 'Estoy de acuerdo con la politica de privacidad.',
        submit: 'Enviar',
    },
};

export function PartnershipContactApplicationSection({ locale }: PartnershipContactApplicationSectionProps) {
    const text = copy[locale];

    return (
        <section aria-label="Partnership Contact Application">
            <div className="mx-auto w-full max-w-[1440px] px-6 pb-24 pt-14 lg:px-11 lg:pb-80 lg:pt-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_551px] lg:gap-[78px]">
                    <div>
                        <Image src="/images/revamp/partnership/logo.png" alt="HanaLoop logo" width={180} height={30} className="h-[30px] w-auto" />

                        <h2 className={`mt-9 text-[28px] font-medium leading-[1.24] tracking-[-0.02em] ${gradientTextClassName}`}>{text.slogan}</h2>

                        <p className={`mt-16 text-[18px] font-medium leading-[1.52] tracking-[-0.02em] ${gradientTextClassName}`}>
                            {text.address.join(' ')}
                            <br />
                            {text.contactPrefix}{' '}
                            <a href="mailto:info@hanaloop.com" className="underline-offset-2 hover:underline">
                                info@hanaloop.com
                            </a>
                        </p>

                        <Link href={withLocalePath(locale, '/company_profile_request')} className={`mt-28 inline-flex flex-col text-[21px] font-medium leading-[1.25] tracking-[-0.02em] ${gradientTextClassName}`}>
                            <span>{text.companyIntroLink}</span>
                            <Image src="/images/revamp/partnership/line.png" alt="" width={420} height={18} className="h-auto w-[420px]" style={{ marginTop: '-10px' }} />
                        </Link>

                        <p className={`mt-11 text-[18px] font-normal leading-[1.52] tracking-[-0.02em] ${gradientTextClassName}`}>
                            {text.localAddress[0]}
                            <br />
                            {text.localAddress[1]}
                        </p>
                    </div>

                    <form className="flex min-h-[520px] flex-col">
                        <label className={`text-[16px] font-medium leading-[1.45] tracking-[-0.02em] ${gradientTextClassName}`}>{text.formLabel}</label>
                        <div className="mt-3 h-px w-full bg-[linear-gradient(90deg,#1FBD7D_0%,#0194FF_100%)]" />
                        <input
                            type="text"
                            className="mt-8 h-10 w-full border-b border-[#CFCFCF] bg-transparent pb-2 text-[16px] font-medium tracking-[-0.02em] text-[#999] outline-none placeholder:text-[#999]"
                            placeholder={text.placeholders.name}
                        />
                        <input
                            type="email"
                            className="mt-[18px] h-10 w-full border-b border-[#CFCFCF] bg-transparent pb-2 text-[16px] font-medium tracking-[-0.02em] text-[#999] outline-none placeholder:text-[#999]"
                            placeholder={text.placeholders.email}
                        />
                        <input
                            type="tel"
                            className="mt-[18px] h-10 w-full border-b border-[#CFCFCF] bg-transparent pb-2 text-[16px] font-medium tracking-[-0.02em] text-[#999] outline-none placeholder:text-[#999]"
                            placeholder={text.placeholders.phone}
                        />
                        <textarea
                            className="mt-[18px] h-[178px] w-full resize-none border-b border-[#CFCFCF] bg-transparent pb-3 text-[16px] font-medium tracking-[-0.02em] text-[#999] outline-none placeholder:text-[#999]"
                            placeholder={text.placeholders.inquiry}
                        />

                        <div className="mt-auto flex items-end justify-between pt-16">
                            <label className="inline-flex items-center gap-2 text-[16px] font-medium leading-[1.4] tracking-[-0.02em] text-[#9A9A9A]">
                                <input type="checkbox" className="h-4 w-4 rounded-none border-[#B8B8B8]" />
                                <span>{text.agreePrivacy}</span>
                            </label>

                            <button type="submit" className="inline-flex items-center gap-3 text-[24px] font-medium leading-none tracking-normal">
                                <span className={gradientTextClassName}>{text.submit}</span>
                                <Image src="/images/revamp/partnership/right.png" alt="" width={27} height={18} className="h-auto w-[27px]" />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="relative mt-14 h-[260px] overflow-hidden rounded-[22px] lg:mt-[66px] lg:h-[410px]">
                    <Image src="/images/revamp/partnership/bg.png" alt="Wind turbines" fill sizes="(min-width: 1024px) 1440px, 100vw" className="object-cover object-center" />
                </div>
            </div>
        </section>
    );
}
