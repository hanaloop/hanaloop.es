import Image from 'next/image';
import type { CSSProperties } from 'react';

export type AlternatingImageProcessCard = {
    index: string;
    title: string;
    description: string | string[];
    imageSrc: string;
    imageAlt: string;
};

type AlternatingImageProcessSectionProps = {
    ariaLabel: string;
    title: string;
    subtitle: string;
    cards: AlternatingImageProcessCard[];
    className?: string;
};

const TITLE_STYLE: CSSProperties = {
    fontSize: 'clamp(34px, 2.5vw, 48px)',
    fontWeight: 700,
    letterSpacing: '-1px',
    lineHeight: 1.2,
};

const SUBTITLE_STYLE: CSSProperties = {
    fontSize: 'clamp(16px, 2.5vw, 21px)',
    fontWeight: 600,
    letterSpacing: '0.5px',
    lineHeight: 1.5,
};

const INDEX_STYLE: CSSProperties = {
    fontSize: 'clamp(24px, 2.5vw, 28px)',
    fontWeight: 600,
    letterSpacing: '-0.25px',
    lineHeight: 1.35,
};

const CARD_TITLE_STYLE: CSSProperties = {
    fontSize: 'clamp(28px, 2.5vw, 36px)',
    fontWeight: 700,
    letterSpacing: '-0.25px',
    lineHeight: 1.35,
};

const CARD_BODY_STYLE: CSSProperties = {
    fontSize: 'clamp(16px, 2.5vw, 20px)',
    fontWeight: 400,
    letterSpacing: '-0.25px',
    lineHeight: 1.6,
};

export function AlternatingImageProcessSection({ ariaLabel, title, subtitle, cards, className = 'mt-10 md:py-20 lg:mt-30' }: AlternatingImageProcessSectionProps) {
    return (
        <section className={className} aria-label={ariaLabel}>
            <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-11">
                <header>
                    <h2 style={TITLE_STYLE}>
                        {title}
                    </h2>
                    <p className="mt-4 text-[#4C4C4C]" style={SUBTITLE_STYLE}>
                        {subtitle}
                    </p>
                </header>

                <div className="mt-14 space-y-12 lg:mt-26 lg:space-y-24">
                    {cards.map((card, index) => {
                        const isImageLeft = index % 2 === 0;

                        return (
                            <article key={card.index} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-[80px]">
                                <div className={isImageLeft ? 'order-2 lg:px-11' : 'order-2 lg:order-1 lg:px-11'}>
                                    <p className="text" style={INDEX_STYLE}>
                                        {card.index}
                                    </p>
                                    <h3 className="mt-1" style={CARD_TITLE_STYLE}>
                                        {card.title}
                                    </h3>

                                    {Array.isArray(card.description) ? (
                                        <ul className="mt-4 list-disc space-y-1 pl-8" style={CARD_BODY_STYLE}>
                                            {card.description.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="mt-4" style={CARD_BODY_STYLE}>
                                            {card.description}
                                        </p>
                                    )}
                                </div>

                                <div className={isImageLeft ? 'order-1' : 'order-1 lg:order-2'}>
                                    <div className="relative overflow-hidden rounded-[24px]">
                                        <Image src={card.imageSrc} alt={card.imageAlt} width={700} height={280} className="h-auto w-full" sizes="(min-width: 1920px) 700px, (min-width: 1024px) calc((100vw - 240px) / 2), 100vw" />
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
