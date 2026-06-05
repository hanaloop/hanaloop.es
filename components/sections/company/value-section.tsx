import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const valueItems = [
    {
        key: 'synergistic',
        imageSrc: '/site/company/our-value-1.png',
        imageClassName: 'max-w-[220px]',
    },
    {
        key: 'bold',
        imageSrc: '/site/company/our-value-2.png',
        imageClassName: 'max-w-[280px]',
    },
    {
        key: 'reliable',
        imageSrc: '/site/company/our-value-3.png',
        imageClassName: 'max-w-[200px]',
    },
] as const;

export async function CompanyValueSection() {
    const t = await getTranslations('CompanyValue');

    return (
        <section className="pb-[72px] md:pb-[84px] xl:pb-[92px]" aria-label={t('title')}>
            <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10 xl:px-[108px]">
                <h2 className="inline-block text-gradient-brand [font-size:clamp(24px,calc(21.925px+0.5607vw),30px)] font-semibold leading-[1.2] tracking-[-0.02em]">{t('title')}</h2>

                <div className="mt-5 grid grid-cols-1 gap-3 md:mt-8 md:gap-5 xl:mt-9 xl:grid-cols-3 xl:gap-[18px]">
                    {valueItems.map((item) => (
                        <article key={item.key} className="rounded-[18px] bg-[#1FBD7D14] px-6 pb-8 pt-10 text-center md:px-8 md:pb-10 md:pt-11">
                            <div className="flex h-[180px] items-end justify-center">
                                <Image
                                    src={item.imageSrc}
                                    alt={t(`items.${item.key}.title`)}
                                    width={313}
                                    height={190}
                                    className={`mx-auto h-auto w-full ${item.imageClassName}`}
                                    sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1439px) calc((100vw - 120px) / 3), 313px"
                                />
                            </div>
                            <h3 className="mt-5 inline-block text-gradient-brand [font-size:clamp(18px,calc(16.617px+0.3738vw),22px)] font-semibold leading-[1.2] tracking-[-0.02em]">{t(`items.${item.key}.title`)}</h3>
                            <p className="mt-4 whitespace-pre-line [font-size:clamp(14px,calc(13.309px+0.1869vw),16px)] font-normal leading-[1.65] tracking-[-0.02em] text-[var(--color-text-body)]">{t(`items.${item.key}.description`)}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
