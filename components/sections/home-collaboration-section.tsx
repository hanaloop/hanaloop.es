'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Swiper as SwiperType } from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './CollaborationSlider.css';

type HomeCollaborationSectionProps = {
    locale: AppLocale;
};

type CollaborationItem = {
    id: string;
    title: string;
    subtitle: string;
    summary: string;
    points: string[];
    cardImage: string;
    logoImage: string;
};

type IntroCopy = {
    badge: string;
    titleLines: [string, string];
    description: string;
    viewMore: string;
};

type LoopSlide = {
    item: CollaborationItem;
    sourceIndex: number;
    fixedIndex: number;
};

const introCopy: Record<AppLocale, IntroCopy> = {
    ko: {
        badge: 'Our Partners',
        titleLines: ['A lot of companies are', 'working together.'],
        description: '많은 기업들이 하나루프와 함께하고있습니다.',
        viewMore: 'View more collaboration',
    },
    en: {
        badge: 'Our Partners',
        titleLines: ['A lot of companies are', 'working together.'],
        description: 'Many companies are collaborating with HanaLoop.',
        viewMore: 'View more collaboration',
    },
    es: {
        badge: 'Our Partners',
        titleLines: ['A lot of companies are', 'working together.'],
        description: 'Muchas empresas colaboran con HanaLoop.',
        viewMore: 'View more collaboration',
    },
};

const collaborations: CollaborationItem[] = [
    {
        id: 'sama',
        title: 'SamA',
        subtitle: '',
        summary: '건설자재',
        points: ['배출권거래제', '다수 사업장 75% 노력 감축'],
        cardImage: '/images/revamp/collaboration/sama_img.png',
        logoImage: '/images/revamp/collaboration/sama.png',
    },
    {
        id: 'daehoal',
        title: 'DAEHOAL',
        subtitle: '',
        summary: '비철산업',
        points: ['배출권 거래제 대응', 'CBAM 대응'],
        cardImage: '/images/revamp/collaboration/daehoal_img.png',
        logoImage: '/images/revamp/collaboration/daehoal.png',
    },
    {
        id: 'samyang',
        title: 'SAMYANG',
        subtitle: '',
        summary: '금속산업',
        points: ['CBAM대상, 비전문가도 쉽게', '수출 사업장 대응'],
        cardImage: '/images/revamp/collaboration/samyang_img.png',
        logoImage: '/images/revamp/collaboration/samyang.png',
    },
    {
        id: 'doosan',
        title: 'DOOSAN',
        subtitle: '두산에너빌리티',
        summary: '재생에너지',
        points: ['스코프3 관리, 더 완전한 지속 가능성', '보고와 CDP 개선'],
        cardImage: '/images/revamp/collaboration/doosan_img.png',
        logoImage: '/images/revamp/collaboration/doosan.png',
    },
];

export function HomeCollaborationSection({ locale }: HomeCollaborationSectionProps) {
    const copy = introCopy[locale];
    const cardSwiperRef = useRef<SwiperType | null>(null);
    const [viewportMode, setViewportMode] = useState<'mobile' | 'lg' | 'desktop'>('desktop');
    const [activeIndex, setActiveIndex] = useState(3);

    const desktopSlides = useMemo<LoopSlide[]>(
        () => [
            { item: collaborations[0], sourceIndex: 0, fixedIndex: 0 },
            { item: collaborations[1], sourceIndex: 1, fixedIndex: 1 },
            { item: collaborations[2], sourceIndex: 2, fixedIndex: 2 },
            { item: collaborations[3], sourceIndex: 3, fixedIndex: 3 },
            { item: collaborations[0], sourceIndex: 0, fixedIndex: 4 },
            { item: collaborations[1], sourceIndex: 1, fixedIndex: 5 },
            { item: collaborations[2], sourceIndex: 2, fixedIndex: 6 },
        ],
        [],
    );

    const mobileSlides = useMemo<LoopSlide[]>(
        () => [
            { item: collaborations[0], sourceIndex: 0, fixedIndex: 0 },
            { item: collaborations[1], sourceIndex: 1, fixedIndex: 1 },
            { item: collaborations[2], sourceIndex: 2, fixedIndex: 2 },
            { item: collaborations[3], sourceIndex: 3, fixedIndex: 3 },
        ],
        [],
    );

    const lgSlides = useMemo<LoopSlide[]>(
        () => [
            { item: collaborations[0], sourceIndex: 0, fixedIndex: 0 },
            { item: collaborations[1], sourceIndex: 1, fixedIndex: 1 },
            { item: collaborations[2], sourceIndex: 2, fixedIndex: 2 },
            { item: collaborations[3], sourceIndex: 3, fixedIndex: 3 },
            { item: collaborations[0], sourceIndex: 0, fixedIndex: 4 },
        ],
        [],
    );

    const visibleSlides = useMemo(() => {
        if (viewportMode === 'mobile') return mobileSlides;
        if (viewportMode === 'lg') return lgSlides;
        return desktopSlides;
    }, [desktopSlides, lgSlides, mobileSlides, viewportMode]);

    const centerIndex = viewportMode === 'mobile' ? 1 : viewportMode === 'lg' ? 2 : 3;

    useEffect(() => {
        const onResize = () => {
            const width = window.innerWidth;
            if (width < 1024) {
                setViewportMode('mobile');
                return;
            }
            if (width < 1280) {
                setViewportMode('lg');
                return;
            }
            setViewportMode('desktop');
        };

        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        setActiveIndex(centerIndex);
        cardSwiperRef.current?.slideTo(centerIndex);
    }, [centerIndex]);

    const handleCardSlideChange = (swiper: SwiperType) => {
        const currentIndex = swiper.activeIndex;
        setActiveIndex(currentIndex);
    };

    const handleLogoClick = (targetFixedIndex: number) => {
        const cardSwiper = cardSwiperRef.current;
        if (!cardSwiper) {
            return;
        }

        if (cardSwiper.activeIndex !== targetFixedIndex) {
            cardSwiper.slideTo(targetFixedIndex);
        }
    };

    return (
        <section className="home-collaboration-section px-5 pb-12 pt-10 md:px-8 md:pb-16 md:pt-16 lg:px-[64px] lg:pb-20 lg:pt-18 overflow-hidden">
            <div className="mx-auto w-full max-w-[1440px]">
                <div className="px-11 mx-auto text-center lg:text-left">
                    <div className="mb-5 flex justify-center lg:hidden">
                        <span className="home-collaboration-badge">{copy.badge}</span>
                    </div>
                    <h2 className="mx-auto max-w-[680px] font-medium leading-[1.14] tracking-[-0.02em] text-black [font-size:clamp(22px,4vw,48px)] lg:mx-0 lg:text-left">
                        <span className="block whitespace-nowrap">{copy.titleLines[0]}</span>
                        <span className="block whitespace-nowrap">{copy.titleLines[1]}</span>
                    </h2>
                    <p className="mt-4 lg:text-[21px] font-medium leading-[1.5] text-[var(--color-text-eyebrow)] [font-size:clamp(13px,1.4vw,30px)]">{copy.description}</p>
                </div>

                <div className="collaboration-center-stack">
                    <div className="mt-10 lg:mt-16">
                        <Swiper
                            modules={[EffectCoverflow, Pagination]}
                            className="collaboration-card-swiper"
                            initialSlide={centerIndex}
                            centeredSlides
                            slidesPerView="auto"
                            spaceBetween={viewportMode === 'mobile' ? -28 : viewportMode === 'lg' ? -60 : -90}
                            effect="coverflow"
                            pagination={{ clickable: true }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 90,
                                modifier: 0.6,
                                slideShadows: false,
                            }}
                            onSwiper={(swiper) => {
                                cardSwiperRef.current = swiper;
                                setActiveIndex(swiper.activeIndex);
                            }}
                            onSlideChange={handleCardSlideChange}
                        >
                            {visibleSlides.map((slide) => (
                                <SwiperSlide key={`card-${slide.fixedIndex}-${slide.item.id}`}>
                                    <article className="collaboration-card">
                                        <Image src={slide.item.cardImage} alt={slide.item.title} fill className="collaboration-card-bg" sizes="(max-width: 1024px) 82vw, 420px" />
                                        <div className="collaboration-card-overlay" />
                                        <div className="collaboration-card-content">
                                            <Image src={slide.item.logoImage} alt={`${slide.item.title} logo`} width={110} height={34} className="collaboration-card-logo" />
                                            <p className="collaboration-card-subtitle">{slide.item.subtitle}</p>
                                            <div className="collaboration-card-copy">
                                                <p className="collaboration-card-summary">{slide.item.summary}</p>
                                                {slide.item.points.map((point) => (
                                                    <p key={`${slide.fixedIndex}-${point}`} className="collaboration-card-point">
                                                        {point}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="mt-3 lg:mt-14">
                        <div className="collaboration-logo-strip" role="tablist" aria-label="Collaboration logos">
                            {visibleSlides.map((slide) => {
                                const isActive = activeIndex === slide.fixedIndex;
                                return (
                                    <button
                                        key={`logo-${slide.fixedIndex}-${slide.item.id}`}
                                        type="button"
                                        className={`collaboration-logo-button${isActive ? ' is-active' : ''}`}
                                        onClick={() => handleLogoClick(slide.fixedIndex)}
                                        aria-label={`${slide.item.title} slide`}
                                        aria-selected={isActive}
                                        role="tab"
                                    >
                                        <Image src={slide.item.logoImage} alt={slide.item.title} width={148} height={34} className="collaboration-logo-image h-6 w-auto" />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-18 flex justify-center">
                        <div className="collaboration-cta-group">
                            <Link href={withLocalePath(locale, '/partnership')} className="collaboration-cta-text text-[15px] lg:text-[20px]">
                                <span>{copy.viewMore}</span>
                            </Link>
                            <Link href={withLocalePath(locale, '/partnership')} className="collaboration-cta-arrow" aria-label="Open collaboration">
                                <Image src="/icons/revamp/ic-arrow-right-black.png" alt="" aria-hidden="true" width={20} height={20} className="h-4 w-4 shrink-0 lg:h-5 lg:w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
