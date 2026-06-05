import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

const gradientTextClassName = 'bg-[linear-gradient(90deg,#1FBD7D_0%,#0194FF_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]';

type Placeholders = {
    name: string;
    email: string;
    phone: string;
    inquiry: string;
};

export async function PartnershipContactApplicationSection() {
    const locale = (await getLocale()) as AppLocale;
    const t = await getTranslations('PartnershipContact');
    const localAddressLines = t.raw('localAddressLines') as string[];
    const placeholders = t.raw('placeholders') as Placeholders;

    return (
        <section aria-label="Partnership Contact Application">
            <div className="mx-auto w-full max-w-[1440px] px-6 pb-[120px] pt-14 lg:px-11 lg:pb-40 lg:pt-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_551px] lg:gap-[78px]">
                    <div>
                        <img src="/site/partnership/logo.png" alt="HanaLoop logo" width={180} height={30} className="h-[30px] w-auto" />

                        <h2 className={`mt-9 text-[28px] font-medium tracking-[-0.02em] ${gradientTextClassName}`}>{t('slogan')}</h2>

                        <p className={`mt-16 [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] font-medium tracking-[-0.02em] ${gradientTextClassName}`}>
                            {t('address')}
                            <br />
                            {t('contactPrefix')}{' '}
                            <a href="mailto:info@hanaloop.com" className="underline-offset-2 hover:underline">
                                info@hanaloop.com
                            </a>
                        </p>

                        <Link href={withLocalePath(locale, '/company_profile_request')} className={`mt-28 flex-col text-[21px] font-medium tracking-[-0.02em] hidden lg:inline-flex ${gradientTextClassName}`}>
                            <span>{t('companyIntroLink')}</span>
                            <img src="/site/partnership/line.png" alt="" width={420} height={18} className="h-auto w-[420px]" style={{ marginTop: '-10px' }} />
                        </Link>

                        <p className={`mt-11 [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] font-normal tracking-[-0.02em] ${gradientTextClassName}`}>
                            {localAddressLines[0]}
                            <br />
                            {localAddressLines[1]}
                        </p>
                    </div>

                    <form className="flex min-h-[520px] flex-col">
                        <label className={`[font-size:clamp(14px,calc(10.62px+0.37vw),16px)] font-medium tracking-[-0.02em] ${gradientTextClassName}`}>{t('formLabel')}</label>
                        <div className="mt-3 h-px w-full bg-[linear-gradient(90deg,#1FBD7D_0%,#0194FF_100%)]" />
                        <input
                            type="text"
                            className="mt-8 h-10 w-full border-b border-[#CFCFCF] bg-transparent pb-2 [font-size:clamp(14px,calc(10.62px+0.37vw),16px)] font-medium tracking-[-0.02em] text-[#999] outline-none placeholder:text-[#999]"
                            placeholder={placeholders.name}
                        />
                        <input
                            type="email"
                            className="mt-[18px] h-10 w-full border-b border-[#CFCFCF] bg-transparent pb-2 [font-size:clamp(14px,calc(10.62px+0.37vw),16px)] font-medium tracking-[-0.02em] text-[#999] outline-none placeholder:text-[#999]"
                            placeholder={placeholders.email}
                        />
                        <input
                            type="tel"
                            className="mt-[18px] h-10 w-full border-b border-[#CFCFCF] bg-transparent pb-2 [font-size:clamp(14px,calc(10.62px+0.37vw),16px)] font-medium tracking-[-0.02em] text-[#999] outline-none placeholder:text-[#999]"
                            placeholder={placeholders.phone}
                        />
                        <textarea
                            className="mt-[18px] h-[178px] w-full resize-none border-b border-[#CFCFCF] bg-transparent pb-3 [font-size:clamp(14px,calc(10.62px+0.37vw),16px)] font-medium tracking-[-0.02em] text-[#999] outline-none placeholder:text-[#999]"
                            placeholder={placeholders.inquiry}
                        />

                        <div className="mt-auto flex flex-col items-start gap-8 lg:flex-row lg:items-end justify-between pt-16 lg:gap-0">
                            <label className="inline-flex items-center gap-2 [font-size:clamp(14px,calc(10.62px+0.37vw),16px)] font-medium tracking-[-0.02em] text-[#9A9A9A]">
                                <input type="checkbox" className="h-4 w-4 rounded-none border-[#B8B8B8]" />
                                <span>{t('agreePrivacy')}</span>
                            </label>

                            <button type="submit" className="inline-flex items-center gap-3 [font-size:clamp(18px,calc(15.93px+0.56vw),24px)] font-medium leading-none tracking-normal">
                                <span className={gradientTextClassName}>{t('submit')}</span>
                                <img src="/site/partnership/right.png" alt="" width={27} height={18} className="h-auto w-[27px]" />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="relative mt-14 h-[160px] md:h-[260px] overflow-hidden rounded-[22px] lg:mt-[66px] lg:h-[410px]">
                    <Image src="/site/partnership/bg.png" alt="Wind turbines" fill sizes="(min-width: 1024px) 1440px, 100vw" className="object-cover object-center" />
                </div>
            </div>
        </section>
    );
}
