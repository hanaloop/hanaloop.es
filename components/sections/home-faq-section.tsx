'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import type { AppLocale } from '@/lib/locales';
import faqItems from '@/lib/data/home-faqs.json';

type HomeFaqSectionProps = {
    locale: AppLocale;
};

type FaqItem = {
    id: string;
    question: Record<AppLocale, string>;
    answer: Record<AppLocale, string>;
};

type SectionCopy = {
    eyebrow: string;
    heading: string;
};

const copy: Record<AppLocale, SectionCopy> = {
    ko: {
        eyebrow: '많이 묻는 질문들의 내용을 확인해보세요.',
        heading: 'Common questions',
    },
    en: {
        eyebrow: 'Explore answers to frequently asked questions.',
        heading: 'Common questions',
    },
    es: {
        eyebrow: 'Consulta respuestas a las preguntas mas frecuentes.',
        heading: 'Common questions',
    },
};

function FaqRow({ question, answer, expanded, onToggle }: { question: string; answer: string; expanded: boolean; onToggle: () => void }) {
    return (
        <article className="border-b border-[rgba(255,255,255,0.2)] px-11">
            <button type="button" className="flex w-full cursor-pointer items-center justify-between gap-5 py-6 text-left lg:py-7" onClick={onToggle} aria-expanded={expanded}>
                <h3 className="text-[18px] font-semibold leading-[1.5] tracking-[0.5px] text-white">{question}</h3>
                <Image src={expanded ? '/icons/revamp/minus.png' : '/icons/revamp/plus.png'} alt={expanded ? 'collapse' : 'expand'} width={16} height={16} className="w-4 shrink-0" />
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <p className="pb-6 text-[17px] font-normal leading-[1.68] tracking-[0.5px] text-[rgba(255,255,255,0.9)] lg:pb-7 lg:pr-8">{answer}</p>
                </div>
            </div>
        </article>
    );
}

export function HomeFaqSection({ locale }: HomeFaqSectionProps) {
    const text = copy[locale];
    const items = faqItems as FaqItem[];
    const [openDesktop, setOpenDesktop] = useState<string | null>(null);
    const [openMobile, setOpenMobile] = useState<string | null>(items[3]?.id ?? null);

    const [leftItems, rightItems] = useMemo(() => {
        const half = Math.ceil(items.length / 2);
        return [items.slice(0, half), items.slice(half)];
    }, [items]);

    return (
        <section className="mt-28 px-0 pb-5 pt-0 md:px-8 md:pb-8 lg:px-0 lg:pb-10">
            <div className="mx-auto w-full max-w-[1440px] overflow-hidden rounded-t-[34px] bg-[var(--color-mobile-dark-bg)] px-6 md:px-11 pb-9 pt-[62px] md:rounded-t-[42px] lg:pb-[58px] lg:pt-[92px]">
                <header className="text-center lg:text-left px-11">
                    <p className="text-[21px] font-semibold leading-[1.3] tracking-[0.5px] text-white">{text.eyebrow}</p>
                    <h2 className="mt-1 text-[56px] font-medium leading-[1.08] tracking-[-1px] text-white lg:text-[64px]">{text.heading}</h2>
                </header>

                <div className="mt-9 lg:mt-10" />

                <div className="mt-0 lg:hidden">
                    <article className="border-b border-[rgba(255,255,255,0.2)] px-11">tet</article>
                    {items.map((item) => {
                        const expanded = openMobile === item.id;
                        return <FaqRow key={item.id} question={item.question[locale]} answer={item.answer[locale]} expanded={expanded} onToggle={() => setOpenMobile(expanded ? null : item.id)} />;
                    })}
                </div>

                <div className="mt-0 hidden grid-cols-2 gap-[50px] lg:grid">
                    <div>
                        <article className="border-b border-[rgba(255,255,255,0.2)] px-11">tet</article>
                        {leftItems.map((item) => {
                            const expanded = openDesktop === item.id;
                            return <FaqRow key={item.id} question={item.question[locale]} answer={item.answer[locale]} expanded={expanded} onToggle={() => setOpenDesktop(expanded ? null : item.id)} />;
                        })}
                    </div>
                    <div>
                        <article className="border-b border-[rgba(255,255,255,0.2)] px-11">tet</article>
                        {rightItems.map((item) => {
                            const expanded = openDesktop === item.id;
                            return <FaqRow key={item.id} question={item.question[locale]} answer={item.answer[locale]} expanded={expanded} onToggle={() => setOpenDesktop(expanded ? null : item.id)} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
