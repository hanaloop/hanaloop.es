import Image from 'next/image';

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

export function AlternatingImageProcessSection({ ariaLabel, title, subtitle, cards, className = 'pt-10 md:py-20 lg:pt-30' }: AlternatingImageProcessSectionProps) {
    return (
        <section className={className} aria-label={ariaLabel}>
            <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-11">
                <header>
                    <h2 className="[font-size:clamp(24px,calc(15.70px+2.24vw),48px)] font-bold tracking-[-1px] leading-[1.2]">{title}</h2>
                    <p className="mt-4 text-[var(--color-text-subtle)] [font-size:clamp(14px,calc(11.58px+0.65vw),21px)] font-semibold tracking-[0.5px] leading-[1.5]">{subtitle}</p>
                </header>

                <div className="mt-14 space-y-12 lg:mt-26 lg:space-y-24">
                    {cards.map((card, index) => {
                        const isImageLeft = index % 2 === 0;

                        return (
                            <article key={card.index} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-[80px]">
                                <div className={isImageLeft ? 'order-2 lg:px-11' : 'order-2 lg:order-1 lg:px-11'}>
                                    <p className="text [font-size:clamp(24px,calc(22.62px+0.37vw),28px)] font-semibold tracking-[-0.25px] leading-[1.35]">{card.index}</p>
                                    <h3 className="mt-1 [font-size:clamp(24px,calc(21.23px+0.75vw),32px)] font-bold tracking-[-0.25px] leading-[1.35]">{card.title}</h3>

                                    {Array.isArray(card.description) ? (
                                        <ul className="mt-4 list-disc space-y-1 pl-8 [font-size:clamp(14px,calc(11.93px+0.56vw),20px)] font-normal tracking-[-0.25px] leading-[1.6]">
                                            {card.description.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="mt-4 [font-size:clamp(14px,calc(11.93px+0.56vw),20px)] font-normal tracking-[-0.25px] leading-[1.6]">{card.description}</p>
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
