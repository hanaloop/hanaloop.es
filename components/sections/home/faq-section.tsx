'use client';

import { useMemo, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import faqItems from '@/lib/data/home-faqs.json';

type FaqItem = {
    id: string;
    question: Record<string, string>;
    answer: Record<string, string>;
};

function FaqRow({ question, answer, expanded, onToggle }: { question: string; answer: string; expanded: boolean; onToggle: () => void }) {
    return (
        <article className="border-b border-[rgba(255,255,255,0.2)] lg:px-11">
            <button type="button" className="flex w-full cursor-pointer items-center justify-between gap-5 py-6 text-left lg:py-7" onClick={onToggle} aria-expanded={expanded}>
                <h3 className="text-[18px] font-semibold leading-[1.5] tracking-[0.5px] text-white">{question}</h3>
                <img src={expanded ? '/site/icons/minus.png' : '/site/icons/plus.png'} alt={expanded ? 'collapse' : 'expand'} width={11} height={11} className="shrink-0" />
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <p className="pb-6 text-[17px] font-normal leading-[1.68] tracking-[0.5px] text-[rgba(255,255,255,0.9)] lg:pb-7 lg:pr-8">{answer}</p>
                </div>
            </div>
        </article>
    );
}

export function HomeFaqSection() {
    const t = useTranslations('HomeFaq');
    const locale = useLocale();
    const items = faqItems as FaqItem[];
    const [openDesktop, setOpenDesktop] = useState<string | null>(null);
    const [openMobile, setOpenMobile] = useState<string | null>(items[3]?.id ?? null);

    const [leftItems, rightItems] = useMemo(() => {
        const half = Math.ceil(items.length / 2);
        return [items.slice(0, half), items.slice(half)];
    }, [items]);

    return (
        <section className="mt-10 lg:mt-20 px-0 pb-5 pt-0 md:px-8 md:pb-8 lg:px-0 lg:pb-10">
            <div className="mx-auto w-full max-w-[1440px] overflow-hidden rounded-t-[34px] bg-[var(--color-mobile-dark-bg)] px-6 md:px-11 pb-9 pt-[62px] md:rounded-t-[42px] lg:pb-[58px] lg:pt-[92px]">
                <header className="text-center lg:text-left lg:px-11">
                    <p className="[font-size:clamp(13px,calc(10.23px+0.75vw),21px)] font-semibold leading-[1.3] tracking-[0.5px] text-white">{t('eyebrow')}</p>
                    <h2 className="mt-1 lg:font-medium leading-[1.08] tracking-[-1px] text-white [font-size:clamp(28px,calc(15.55px+3.36vw),64px)]">{t('heading')}</h2>
                </header>

                <div className="mt-9 lg:mt-10" />

                <div className="mt-0 lg:hidden">
                    {items.map((item) => {
                        const expanded = openMobile === item.id;
                        return <FaqRow key={item.id} question={item.question[locale] ?? item.question.ko} answer={item.answer[locale] ?? item.answer.ko} expanded={expanded} onToggle={() => setOpenMobile(expanded ? null : item.id)} />;
                    })}
                </div>

                <div className="mt-0 hidden grid-cols-2 gap-[50px] lg:grid">
                    <div>
                        {leftItems.map((item) => {
                            const expanded = openDesktop === item.id;
                            return <FaqRow key={item.id} question={item.question[locale] ?? item.question.ko} answer={item.answer[locale] ?? item.answer.ko} expanded={expanded} onToggle={() => setOpenDesktop(expanded ? null : item.id)} />;
                        })}
                    </div>
                    <div>
                        {rightItems.map((item) => {
                            const expanded = openDesktop === item.id;
                            return <FaqRow key={item.id} question={item.question[locale] ?? item.question.ko} answer={item.answer[locale] ?? item.answer.ko} expanded={expanded} onToggle={() => setOpenDesktop(expanded ? null : item.id)} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
