import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import { ContactCtaButton } from '@/components/ui/contact-cta-button';
import type { AppLocale } from '@/lib/locales';

type SolutionMatrixItem = {
    from: string;
    to: string;
};

function MatrixBox({ children }: { children: string }) {
    return (
        <div
            className="flex h-[clamp(90px,calc(69.252px+5.607vw),150px)] w-[var(--matrix-box-width)] items-center justify-center rounded-full px-4 text-center"
            style={{ background: 'linear-gradient(90deg, rgba(31, 189, 125, 0.1) 0%, rgba(1, 148, 255, 0.1) 100%)' }}
        >
            <span className="text-gradient-brand whitespace-pre-line [font-size:clamp(14px,calc(10.542px+0.935vw),24px)] font-bold leading-[1.45] tracking-[-0.3px]">{children}</span>
        </div>
    );
}

function MatrixArrow() {
    return (
        <div className="flex h-[clamp(90px,calc(69.252px+5.607vw),150px)] w-[41px] items-center justify-center">
            <Image src="/site/icons/ic-arrow-right-color.png" alt="" aria-hidden="true" width={41} height={12} />
        </div>
    );
}

export async function OverviewSolutionMatrixSection() {
    const t = await getTranslations('OverviewSolutionMatrix');
    const locale = (await getLocale()) as AppLocale;
    const items = t.raw('items') as SolutionMatrixItem[];

    const rows: SolutionMatrixItem[][] = [];
    for (let i = 0; i < items.length; i += 2) {
        rows.push(items.slice(i, i + 2));
    }

    return (
        <section className="pb-16 pt-7 md:pt-10 lg:pb-[90px] lg:pt-0" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-11">
                <h2 className="text-black [font-size:clamp(20px,calc(14.467px+1.495vw),36px)] font-bold leading-[1.2] tracking-[-0.25px]">{t('title')}</h2>

                <div className="[--matrix-box-width:clamp(140px,calc(91.589px+13.084vw),280px)] lg:[--matrix-box-width:min(clamp(140px,calc(91.589px+13.084vw),280px),calc(25vw-68.5px))] mt-[26px] md:mt-10 lg:mt-11">
                    <div className="grid grid-cols-[var(--matrix-box-width)_41px_var(--matrix-box-width)] justify-center gap-x-[9px] gap-y-4 md:hidden">
                        {items.map((item) => (
                            <div key={`${item.from}-${item.to}`} className="contents">
                                <MatrixBox>{item.from}</MatrixBox>
                                <MatrixArrow />
                                <MatrixBox>{item.to}</MatrixBox>
                            </div>
                        ))}
                    </div>

                    <div className="hidden flex-col items-center gap-y-4 md:flex lg:hidden">
                        {items.map((item) => (
                            <div key={`${item.from}-${item.to}`} className="flex items-center gap-x-[9px]">
                                <MatrixBox>{item.from}</MatrixBox>
                                <MatrixArrow />
                                <MatrixBox>{item.to}</MatrixBox>
                            </div>
                        ))}
                    </div>

                    <div className="hidden flex-col gap-y-[30px] lg:flex">
                        {rows.map((row, rowIndex) => (
                            <div key={rowIndex} className="flex justify-between gap-x-2">
                                {row.map((item) => (
                                    <div key={`${item.from}-${item.to}`} className="flex items-center gap-x-6">
                                        <MatrixBox>{item.from}</MatrixBox>
                                        <MatrixArrow />
                                        <MatrixBox>{item.to}</MatrixBox>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-[26px] flex justify-center md:mt-10 lg:justify-start">
                    <ContactCtaButton
                        locale={locale}
                        className="h-[clamp(48px,calc(45.234px+0.7477vw),56px)] w-[clamp(196px,calc(166.953px+7.851vw),280px)] justify-between px-[clamp(17px,calc(13.543px+0.935vw),27px)] text-[clamp(14px,calc(12.617px+0.3738vw),18px)]"
                        iconClassName="h-[clamp(9px,calc(6.926px+0.561vw),15px)] w-[clamp(9px,calc(6.926px+0.561vw),15px)]"
                        iconWidth={15}
                        iconHeight={15}
                    />
                </div>
            </div>
        </section>
    );
}
