import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { RoundedArrowButton } from '@/components/ui/rounded-arrow-button';

type InsightItem = {
    id: string;
    title: string;
    subtitle: string;
    body: string;
    href: string;
};

export async function CbamInsightCardsSection() {
    const t = await getTranslations('CbamInsightCards');
    const locale = (await getLocale()) as AppLocale;
    const items = t.raw('items') as InsightItem[];

    return (
        <section className="lg:px-5 py-10 lg:py-16 md:px-8 lg:px-0 lg:pb-[120px] lg:pt-[92px]" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-11">
                <h2 className="text-center text-black [font-size:clamp(24px,calc(15.70px+2.24vw),48px)] font-medium leading-[1.25] tracking-[-1px]">{t('heading')}</h2>

                <div className="mt-10 lg:mt-20 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-[28px]">
                    {items.map((item) => (
                        <Link key={item.id} href={withLocalePath(locale, item.href)} className="group relative flex w-full flex-col rounded-[14px] bg-[#07090c] px-[22px] pb-[26px] pt-[28px] transition hover:brightness-110">
                            <h3 className="[font-size:clamp(18px,calc(16.96px+0.28vw),21px)] font-semibold leading-[1.45] tracking-[-0.25px] text-white">{item.title}</h3>
                            <p className="mt-[2px] [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] font-semibold leading-[1.45] tracking-[-0.25px] text-white">{item.subtitle}</p>

                            <div className="mt-[16px] h-px w-full bg-white/80" />

                            <p className="mt-[22px] pr-6 [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] font-medium leading-[1.45] tracking-[-0.25px] text-white/78 [display:-webkit-box] [-webkit-line-clamp:4] [-webkit-box-orient:vertical] overflow-hidden text-ellipsis">
                                {item.body}
                            </p>

                            <Image src="/site/icons/right.png" alt="" aria-hidden="true" width={10} height={20} className="absolute bottom-[24px] right-[16px] h-[20px] w-[10px] object-contain transition group-hover:translate-x-[1px]" />
                        </Link>
                    ))}
                </div>

                <div className="mt-[34px] flex justify-center">
                    <RoundedArrowButton href={withLocalePath(locale, '/blog')} label={t('moreInsightLabel')} />
                </div>
            </div>
        </section>
    );
}
