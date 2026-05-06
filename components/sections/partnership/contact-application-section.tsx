import Image from 'next/image';

const gradientTextClassName = 'bg-[linear-gradient(90deg,#1FBD7D_0%,#0194FF_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]';

export function PartnershipContactApplicationSection() {
    return (
        <section aria-label="Partnership Contact Application">
            <div className="mx-auto w-full max-w-[1440px] px-6 pb-24 pt-14 lg:px-11 lg:pb-[128px] lg:pt-[84px]">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_551px] lg:gap-[78px]">
                    <div>
                        <Image src="/images/revamp/partnership/logo.png" alt="HanaLoop logo" width={180} height={30} className="h-[30px] w-auto" />

                        <h2 className={`mt-9 text-[28px] font-medium leading-[1.24] tracking-[-0.02em] ${gradientTextClassName}`}>Reliable and Agile Sustainability Partner</h2>

                        <p className={`mt-16 text-[18px] font-medium leading-[1.52] tracking-[-0.02em] ${gradientTextClassName}`}>
                            4F, 545, Bongcheon-ro, Gwanak-gu, Seoul, Republic of Korea
                            <br />
                            CONTACT :{' '}
                            <a href="mailto:info@hanaloop.com" className="underline-offset-2 hover:underline">
                                info@hanaloop.com
                            </a>
                        </p>

                        <a href="/company_profile_request" className={`mt-28 inline-flex flex-col text-[21px] font-medium leading-[1.25] tracking-[-0.02em] ${gradientTextClassName}`}>
                            <span>Download a company introduction</span>
                            <Image src="/images/revamp/partnership/line.png" alt="" width={420} height={18} className="h-auto w-[420px]" style={{ marginTop: '-10px' }} />
                        </a>

                        <p className={`mt-11 text-[18px] font-normal leading-[1.52] tracking-[-0.02em] ${gradientTextClassName}`}>
                            서울특별시 관악구 봉천로 545,
                            <br />
                            서울창업센터 관악 4층 (08789)
                        </p>
                    </div>

                    <form className="flex min-h-[520px] flex-col">
                        <label className={`text-[16px] font-medium leading-[1.45] tracking-[-0.02em] ${gradientTextClassName}`}>기업 / 기관명</label>
                        <input
                            type="text"
                            className="mt-12 h-10 w-full border-b border-[#CFCFCF] bg-transparent pb-2 text-[16px] font-medium tracking-[-0.02em] text-[#999] outline-none placeholder:text-[#999]"
                            placeholder="신청자 이름 (부서/직급)"
                        />
                        <input type="email" className="mt-[18px] h-10 w-full border-b border-[#CFCFCF] bg-transparent pb-2 text-[16px] font-medium tracking-[-0.02em] text-[#999] outline-none placeholder:text-[#999]" placeholder="이메일" />
                        <input type="tel" className="mt-[18px] h-10 w-full border-b border-[#CFCFCF] bg-transparent pb-2 text-[16px] font-medium tracking-[-0.02em] text-[#999] outline-none placeholder:text-[#999]" placeholder="전화번호" />
                        <textarea
                            className="mt-[18px] h-[178px] w-full resize-none border-b border-[#CFCFCF] bg-transparent pb-3 text-[16px] font-medium tracking-[-0.02em] text-[#999] outline-none placeholder:text-[#999]"
                            placeholder="하나루프의 기후규제대응 Hana.eco 플랫폼을 통해 받고 싶은 서비스는 어떤 것입니까?"
                        />

                        <div className="mt-auto flex items-end justify-between pt-16">
                            <label className="inline-flex items-center gap-2 text-[16px] font-medium leading-[1.4] tracking-[-0.02em] text-[#9A9A9A]">
                                <input type="checkbox" className="h-4 w-4 rounded-none border-[#B8B8B8]" />
                                <span>I agree with the privacy policy.</span>
                            </label>

                            <button type="submit" className="inline-flex items-center gap-3 text-[24px] font-medium leading-none tracking-normal">
                                <span className={gradientTextClassName}>Send</span>
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
