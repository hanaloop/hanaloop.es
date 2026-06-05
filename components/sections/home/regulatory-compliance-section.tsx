'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import 'swiper/css';
import 'swiper/css/pagination';

type ComplianceCard = {
    title: string;
    subtitle: string;
    items: string[];
};

type Reason = {
    title: string;
    body: string;
    desktopLines?: string[];
};

export function HomeRegulatoryComplianceSection() {
    const t = useTranslations('HomeRegulatoryCompliance');
    const cards = t.raw('cards') as ComplianceCard[];
    const reasons = t.raw('reasons') as Reason[];
    const reasonHeading = t.raw('reasonHeading') as [string, string];

    return (
        <section className="mt-10 lg:mt-28 pb-6 lg:pb-10">
            <div className="relative min-h-[1000px] lg:min-h-[1200px] w-full overflow-hidden rounded-t-[50px]">
                <Image src="/site/home/regulatory-bg.jpg" alt="City buildings" fill className="object-cover" sizes="100vw" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(45,66,99,0.62)_0%,rgba(6,39,71,0.68)_56%,rgba(4,28,57,0.82)_100%)]" />

                <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-5">
                    <div className="relative z-[2] px-0 pb-[34px] pt-18 text-white lg:pb-[66px] lg:pt-[140px]">
                        <div className="lg:hidden">
                            <Image src="/site/home/lrqa.png" alt="LRQA" width={207} height={62} className="h-auto w-[110px]" />
                            <p className="mt-8 text-[13px] font-medium leading-[1.45]">{t('eyebrow')}</p>
                            <h2 className="mt-3 text-[28px] font-medium leading-[1.08] tracking-[-0.6px]">{t('heading')}</h2>
                        </div>

                        <div className="hidden items-start justify-between gap-0 lg:flex">
                            <div>
                                <p className="lg:max-w-none lg:text-[21px] lg:font-semibold lg:leading-[1.3] lg:tracking-[0.5px]">{t('eyebrow')}</p>
                                <h2 className="lg:mt-[7px] lg:max-w-none lg:text-[48px] lg:font-medium lg:leading-[1.2]">{t('heading')}</h2>
                            </div>
                            <Image src="/site/home/lrqa.png" alt="LRQA" width={207} height={62} className="lg:mt-1 lg:h-[52px] lg:w-auto" />
                        </div>

                        <div className="mt-4 block lg:hidden">
                            <Swiper
                                modules={[Pagination]}
                                slidesPerView={'auto'}
                                spaceBetween={12}
                                pagination={{ clickable: true }}
                                className="regulatory-mobile-swiper overflow-visible pb-12 [&_.swiper-pagination]:!-bottom-0.5 [&_.swiper-pagination-bullet]:!mx-[3px] [&_.swiper-pagination-bullet]:!h-[7px] [&_.swiper-pagination-bullet]:!w-[7px] [&_.swiper-pagination-bullet]:!rounded-full [&_.swiper-pagination-bullet]:!bg-[rgba(182,193,211,0.64)] [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:!transition-all [&_.swiper-pagination-bullet-active]:!w-[34px] [&_.swiper-pagination-bullet-active]:!bg-[rgba(198,213,238,0.95)]"
                            >
                                {cards.map((card, index) => (
                                    <SwiperSlide key={`mobile-${card.title}-${index}`} className="!w-[226px] pb-7">
                                        <article className="min-h-[268px] rounded-[14px] border border-white/20 bg-[rgba(228,236,245,0.2)] p-[14px_14px_12px] text-[#eaf1f7] backdrop-blur-[3px]">
                                            <h3 className="text-[18px] font-semibold leading-[1.45] tracking-[-0.01em]">{card.title}</h3>
                                            <p className="mt-1.5 text-[13px] font-medium leading-[1.5] opacity-90">{card.subtitle}</p>
                                            <ul className="mt-2 list-disc pl-[14px]">
                                                {card.items.map((item) => (
                                                    <li key={`${card.title}-${item}`} className="text-[13px] leading-[1.72]">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="mt-[62px] hidden gap-2 lg:grid lg:grid-cols-3 xl:grid-cols-5">
                            {cards.map((card, index) => (
                                <article
                                    key={`${card.title}-${index}`}
                                    className="group min-h-[290px] rounded-2xl border border-white/20 bg-[rgba(255,255,255,0.4)] p-[22px_22px_18px] text-[#eaf1f7] backdrop-blur-[8px] transition-colors duration-200 hover:bg-[rgba(238,241,246,0.6)] hover:text-[#23252b]"
                                >
                                    <h3 className="text-[clamp(18px,15.93px_+_0.5607vw,24px)] font-semibold leading-[1.34] tracking-[0.5px]">{card.title}</h3>
                                    <p className="mt-2 min-h-[82px] text-[clamp(13px,11.27px_+_0.4673vw,18px)] font-semibold leading-[1.45] tracking-[0.5px] opacity-60">{card.subtitle}</p>
                                    <ul className="mt-[14px] list-disc pl-[18px]">
                                        {card.items.map((item) => (
                                            <li key={`${card.title}-${item}`} className="text-[clamp(13px,11.96px_+_0.2804vw,16px)] font-semibold leading-[1.68] tracking-[0.5px]">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>

                        <div className="mt-14 lg:mt-[120px]">
                            <p className="[font-size:clamp(13px,calc(10.23px+0.75vw),21px)] leading-[1.5] lg:font-medium lg:leading-[1.3] lg:tracking-[0.5px]">{t('reasonEyebrow')}</p>
                            <h3 className="mt-[3px] [font-size:clamp(28px,calc(21.08px+1.87vw),48px)] font-medium leading-[1.1] tracking-[-0.015em] lg:mt-1.5 lg:leading-[1.14] lg:tracking-[-1px]">
                                <span className="block">{reasonHeading[0]}</span>
                                <span className="block">{reasonHeading[1]}</span>
                            </h3>

                            <div className="mt-[26px] grid grid-cols-1 gap-6 lg:mt-[58px] lg:grid-cols-3 lg:gap-10">
                                {reasons.map((reason) => (
                                    <article key={reason.title}>
                                        <h4 className="[font-size:clamp(18px,calc(15.93px+0.56vw),24px)] font-medium lg:leading-[1.3] lg:tracking-[-1px]">{reason.title}</h4>
                                        <div className="mt-2 h-px w-full bg-white/50 lg:mt-4" />
                                        <p className="mt-2 [font-size:clamp(12px,calc(10.62px+0.37vw),16px)] leading-[1.7] lg:mt-[10px] lg:font-medium lg:tracking-[0.5px]">
                                            <span className="lg:hidden">{reason.body}</span>
                                            <span className="hidden lg:block">
                                                {(reason.desktopLines ?? [reason.body, '', '']).map((line, idx) => (
                                                    <span key={`${reason.title}-line-${idx}`} className="block">
                                                        {line}
                                                    </span>
                                                ))}
                                            </span>
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
