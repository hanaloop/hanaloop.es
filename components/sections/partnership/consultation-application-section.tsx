export function PartnershipConsultationApplicationSection() {
    return (
        <section aria-label="Hana.eco Solution Consultation Application">
            <div className="mx-auto w-full max-w-[1440px] px-6 pt-16 sm:pt-20 lg:px-11 lg:pt-[78px]">
                <h2 className="text-[40px] font-medium leading-[1.04] tracking-[-1px] text-[#1FBD7D] sm:text-[52px] lg:text-[64px]">
                    Hana.eco Solution
                    <br />
                    Consultation Application
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-[54px] lg:grid-cols-[1fr_auto] lg:items-end">
                    <p className="text-[16px] font-medium leading-[1.6] tracking-[-0.02em] text-[#1FBD7D] lg:text-[18px]">
                        기업 현황에 맞추어 상담부터 해드립니다.
                        <br />
                        상담 신청하시는 기업/기관과 신청하시는 분을 소개해주세요.
                        <br />
                        빠른 시일 내에 연락 드리겠습니다.
                        <br />
                        <br />
                        감사합니다.
                    </p>

                    <div className="text-left lg:text-right">
                        <a
                            href="mailto:info@hanaloop.com"
                            className="block bg-[linear-gradient(90deg,#1FBD7D_0%,#0194FF_100%)] bg-clip-text text-[16px] font-medium leading-[1.6] tracking-[-0.02em] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] lg:text-[18px]"
                        >
                            info@hanaloop.com
                        </a>
                        <a
                            href="tel:+82050713379251"
                            className="mt-1 block bg-[linear-gradient(90deg,#1FBD7D_0%,#0194FF_100%)] bg-clip-text text-[16px] font-medium leading-[1.6] tracking-[-0.02em] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] lg:text-[18px]"
                        >
                            +82 0507-1337-9251
                        </a>
                    </div>
                </div>

                <div className="mt-10 h-px w-full bg-[#CFCFCF] lg:mt-[74px]" />
            </div>
        </section>
    );
}
