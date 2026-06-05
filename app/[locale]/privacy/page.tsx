import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { SiteShell } from '@/components/layout/site-shell';
import { isLocale, locales } from '@/lib/locales';
import { getStaticPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ locale: string }> };

type PrivacySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type PrivacyContent = {
  title: string;
  intro: string;
  sections: PrivacySection[];
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = await getTranslations({ locale, namespace: 'PrivacyPage' });
  const sections = t.raw('sections') as PrivacySection[];

  const content: PrivacyContent = {
    title: t('title'),
    intro: t('intro'),
    sections,
  };

  return (
    <SiteShell headerDark>
      <article className="mx-auto w-full max-w-[1040px] px-6 pb-24 pt-28 text-[#111827] lg:px-10 lg:pb-32 lg:pt-40">
        <header className="mb-12 border-b border-black/10 pb-8 lg:mb-14 lg:pb-10">
          <h1 className="text-3xl font-semibold tracking-[-0.02em] lg:text-5xl">{content.title}</h1>
          <p className="mt-5 whitespace-pre-line text-sm leading-7 text-[#4B5563] lg:text-base">{content.intro}</p>
        </header>

        <div className="space-y-9 lg:space-y-11">
          {content.sections.map((section, sectionIndex) => (
            <section key={`${section.title}-${sectionIndex}`} className="space-y-3 lg:space-y-4">
              <h2 className="text-xl font-semibold tracking-[-0.015em] lg:text-2xl">{section.title}</h2>

              {section.paragraphs?.map((paragraph, paragraphIndex) => (
                <p key={`${section.title}-p-${paragraphIndex}`} className="whitespace-pre-line text-sm leading-7 text-[#1F2937] lg:text-base">
                  {paragraph}
                </p>
              ))}

              {section.bullets && section.bullets.length > 0 ? (
                <ul className="space-y-2 pl-5 text-sm leading-7 text-[#1F2937] lg:text-base">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={`${section.title}-b-${bulletIndex}`} className="list-disc">
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </SiteShell>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return getStaticPageMetadata(locale, 'privacy', '/privacy');
}
