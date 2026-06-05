import { getTranslations } from 'next-intl/server';

type LifeItem = {
  title: string;
  descriptions: string[];
};

export async function CompanyLifeSection() {
  const t = await getTranslations('CompanyLife');
  const items = t.raw('items') as LifeItem[];

  return (
    <section className="py-[72px] md:py-[84px] xl:py-[92px]" aria-label={t('title')}>
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-[108px]">
        <div className="hidden h-px w-full bg-[#CECECE] md:block" />

        <div className="mt-10 grid grid-cols-1 gap-10 xl:mt-[68px] xl:grid-cols-[300px_minmax(0,1fr)_minmax(0,1fr)] xl:gap-[86px]">
          <h2 className="inline-block text-gradient-brand [font-size:clamp(24px,calc(21.925px+0.5607vw),30px)] font-semibold leading-[1.2] tracking-[-0.02em]">
            {t('title')}
          </h2>

          {items.map((item) => (
            <article key={item.title}>
              <h3 className="[font-size:clamp(18px,calc(17.308px+0.1869vw),20px)] font-bold leading-[1.45] tracking-[-0.02em] text-[var(--color-text-subtle)]">{item.title}</h3>
              <ul className="mt-4 space-y-2">
                {item.descriptions.map((description) => (
                  <li key={description} className="[font-size:clamp(14px,calc(12.617px+0.3738vw),18px)] font-normal leading-[1.55] tracking-[-0.02em] text-[var(--color-text-body)]">
                    {description}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
