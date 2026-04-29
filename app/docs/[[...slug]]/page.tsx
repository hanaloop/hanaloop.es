import type { Metadata } from 'next';
import { getDocsMetadata, getDocsStaticParams, renderDocsPage } from '@/legacy/components/docs-renderer';

type Props = {
  params: Promise<{
    slug?: string[];
  }>;
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return renderDocsPage('ko', slug);
}

export function generateStaticParams() {
  return getDocsStaticParams('ko');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return getDocsMetadata('ko', slug);
}
