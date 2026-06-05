import type { ComponentType } from 'react';
import { InsightDetailLayout } from '@/components/sections/docs/detail-layout';
import { buildInsightNavTree } from '@/lib/insight-navigation';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { getDocsSource } from '@/lib/source';

const LABELS = {
  ko: { board: '게시판', toc: '목차', archiveTitle: '하나루프 - 자료', backToInsight: '인사이트로 돌아가기', close: '닫기' },
  es: { board: 'Lista', toc: 'Índice', archiveTitle: 'HanaLoop - Recursos', backToInsight: 'Volver a insight', close: 'Cerrar' },
  en: { board: 'Board', toc: 'Contents', archiveTitle: 'HanaLoop - Resources', backToInsight: 'Back to insight', close: 'Close' },
} as const;

type InsightListSectionProps = {
  locale: AppLocale;
  selectedSlug?: string[];
};

function formatDate(value: unknown, locale: AppLocale): string {
  if (!value) return '';
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) return '';
  const dateLocale = locale === 'ko' ? 'ko-KR' : locale === 'es' ? 'es-ES' : 'en-US';
  return date.toLocaleDateString(dateLocale, { year: 'numeric', month: 'short', day: 'numeric' });
}

function mapToc(tocValue: unknown): { id: string; text: string }[] {
  if (!Array.isArray(tocValue)) return [];
  return tocValue
    .map((item) => {
      const entry = item as { url?: string; title?: string };
      const id = entry.url?.startsWith('#') ? entry.url.slice(1) : '';
      return id && entry.title ? { id, text: entry.title } : null;
    })
    .filter((item): item is { id: string; text: string } => item !== null);
}

export async function InsightListSection({ locale, selectedSlug }: InsightListSectionProps) {
  const labels = LABELS[locale];

  const navTree = buildInsightNavTree(locale);
  const slug = selectedSlug?.length ? selectedSlug : [];

  if (!slug.length) {
    return (
      <InsightDetailLayout locale={locale} navTree={navTree} currentPath="" title="" dateText="" toc={[]} backHref={withLocalePath(locale, '/docs')} showBackLink={false} labels={labels}>
        <div />
      </InsightDetailLayout>
    );
  }

  const source = getDocsSource(locale);
  const page = source.getPage(slug);
  if (!page) return null;

  const pageData = page.data as {
    title?: string;
    date?: string;
    publishedAt?: string;
    image?: string;
    toc?: unknown;
    body: ComponentType;
  };
  const MDX = pageData.body;
  const currentPath = withLocalePath(locale, `/docs/${slug.join('/')}`);
  const toc = mapToc(pageData.toc);

  return (
    <InsightDetailLayout
      locale={locale}
      navTree={navTree}
      currentPath={currentPath}
      title={String(pageData.title ?? '')}
      dateText={formatDate(pageData.date ?? pageData.publishedAt, locale)}
      image={typeof pageData.image === 'string' ? pageData.image : undefined}
      toc={toc}
      backHref={withLocalePath(locale, '/docs')}
      showBackLink={false}
      labels={labels}
    >
      <MDX />
    </InsightDetailLayout>
  );
}

