'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Swiper as SwiperType } from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslations, useLocale } from 'next-intl';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './CollaborationSlider.css';

type CollaborationItem = {
    id: string;
    title: string;
    subtitle: string;
    summary: string;
    points: string[];
    cardImage: string;
    logoImage: string;
};

type CollaborationTranslation = {
    subtitle: string;
    summary: string;
    points: string[];
};

type LoopSlide = {
    item: CollaborationItem;
    sourceIndex: number;
    fixedIndex: number;
};

const partnerLogos = [
    { id: 'slot-01-samyang', name: 'SAMYANG', logo: '/site/home/collaboration/samyang.png' },
    { id: 'slot-02', name: 'Partner 2', logo: '/site/home/collaboration/partner-logos/2.png' },
    { id: 'slot-03-doosan', name: 'DOOSAN', logo: '/site/home/collaboration/doosan.png' },
    { id: 'slot-04', name: 'Partner 4', logo: '/site/home/collaboration/partner-logos/4.png' },
    { id: 'slot-05', name: 'Partner 5', logo: '/site/home/collaboration/partner-logos/5.png' },
    { id: 'slot-06', name: 'Partner 6', logo: '/site/home/collaboration/partner-logos/6.png' },
    { id: 'slot-07-daehoal', name: 'DAEHOAL', logo: '/site/home/collaboration/daehoal.png' },
    { id: 'slot-08', name: 'Partner 8', logo: '/site/home/collaboration/partner-logos/8.png' },
    { id: 'slot-09', name: 'Partner 9', logo: '/site/home/collaboration/partner-logos/9.png' },
    { id: 'slot-10-sama', name: 'SamA', logo: '/site/home/collaboration/sama.png' },
    { id: 'slot-11', name: 'Partner 11', logo: '/site/home/collaboration/partner-logos/11.png' },
    { id: 'slot-12', name: 'Partner 12', logo: '/site/home/collaboration/partner-logos/12.png' },
    { id: 'slot-13', name: 'Partner 13', logo: '/site/home/collaboration/partner-logos/13.png' },
    { id: 'slot-14', name: 'Partner 14', logo: '/site/home/collaboration/partner-logos/14.png' },
    { id: 'slot-15', name: 'Partner 15', logo: '/site/home/collaboration/partner-logos/15.png' },
] as const;

const staticCollaborations = [
    { id: 'sama', title: 'SamA', cardImage: '/site/home/collaboration/sama-img.png', logoImage: '/site/home/collaboration/sama.png' },
    { id: 'daehoal', title: 'DAEHOAL', cardImage: '/site/home/collaboration/daehoal-img.png', logoImage: '/site/home/collaboration/daehoal.png' },
    { id: 'samyang', title: 'SAMYANG', cardImage: '/site/home/collaboration/samyang-img.png', logoImage: '/site/home/collaboration/samyang.png' },
    { id: 'doosan', title: 'DOOSAN', cardImage: '/site/home/collaboration/doosan-img.png', logoImage: '/site/home/collaboration/doosan.png' },
] as const;

function makeSlides(collaborations: CollaborationItem[], sourceIndices: number[]): LoopSlide[] {
    return sourceIndices.map((sourceIndex, fixedIndex) => ({
        item: collaborations[sourceIndex],
        sourceIndex,
        fixedIndex,
    }));
}

export function HomeCollaborationSection() {
    const t = useTranslations('HomeCollaboration');
    const locale = useLocale() as AppLocale;
    const collaborationTranslations = t.raw('collaborations') as CollaborationTranslation[];

    const collaborations: CollaborationItem[] = staticCollaborations.map((item, i) => ({
        ...item,
        subtitle: collaborationTranslations[i]?.subtitle ?? '',
        summary: collaborationTranslations[i]?.summary ?? '',
        points: collaborationTranslations[i]?.points ?? [],
    }));

    const cardSwiperRef = useRef<SwiperType | null>(null);
    const [viewportMode, setViewportMode] = useState<'mobile' | 'lg' | 'desktop'>('desktop');

    const desktopSlides = useMemo(() => makeSlides(collaborations, [0, 1, 2, 3, 0, 1, 2]), [collaborations]);
    const mobileSlides = useMemo(() => makeSlides(collaborations, [0, 1, 2, 3, 0]), [collaborations]);
    const lgSlides = useMemo(() => makeSlides(collaborations, [0, 1, 2, 3]), [collaborations]);

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
        cardSwiperRef.current?.slideTo(centerIndex);
    }, [centerIndex]);

    return (
        <section className="home-collaboration-section px-5 pb-12 pt-10 md:px-8 md:pb-16 md:pt-16 lg:px-[64px] lg:pb-20 lg:pt-18 overflow-hidden">
            <div className="mx-auto w-full max-w-[1440px]">
                <div className="mx-auto text-center">
                    <div className="mb-5 flex justify-center lg:hidden">
                        <span className="home-collaboration-badge">{t('badge')}</span>
                    </div>
                    <h2 className="mx-auto font-medium leading-[1.14] tracking-[-0.02em] text-black [font-size:clamp(22px,calc(13.01px+2.43vw),48px)] lg:mx-0">
                        {(t.raw('titleLines') as string[]).map((line: string) => (
                            <span key={line} className="block">
                                {line}
                            </span>
                        ))}
                    </h2>
                    <p className="mx-auto mt-4 font-medium leading-[1.5] text-[var(--color-text-eyebrow)] lg:mx-0 [font-size:clamp(13px,calc(7.12px+1.59vw),30px)]">
                        {(t('description') as string).split('\n').map((line: string, i: number) => (
                            <span key={i} className="block">
                                {line}
                            </span>
                        ))}
                    </p>
                </div>

                <div className="collaboration-center-stack">
                    <div className="mt-10 lg:mt-16">
                        <Swiper
                            modules={[EffectCoverflow, Pagination]}
                            className="collaboration-card-swiper"
                            initialSlide={centerIndex}
                            centeredSlides
                            slidesPerView="auto"
                            spaceBetween={viewportMode === 'mobile' ? -28 : viewportMode === 'lg' ? -60 : -160}
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
                            }}
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
                </div>
                <div className="mt-12 lg:mt-16">
                    <div className="partner-logo-grid">
                        {partnerLogos.map((logo) => (
                            <div key={logo.id} className="partner-logo-item">
                                <Image src={logo.logo} alt={logo.name} width={240} height={72} sizes="(max-width: 1023px) 140px, (max-width: 1440px) 12vw, 180px" className="partner-logo-image" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-18 flex justify-center">
                    <div className="collaboration-cta-group">
                        <Link href={withLocalePath(locale, '/cases')} className="collaboration-cta-text [font-size:clamp(15px,calc(13.27px+0.47vw),20px)]">
                            <span>{t('viewMore')}</span>
                        </Link>
                        <Link href={withLocalePath(locale, '/cases')} className="collaboration-cta-arrow" aria-label="Open collaboration">
                            <Image src="/site/icons/ic-arrow-right-black.png" alt="" aria-hidden="true" width={20} height={20} className="h-4 w-4 shrink-0 lg:h-5 lg:w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
