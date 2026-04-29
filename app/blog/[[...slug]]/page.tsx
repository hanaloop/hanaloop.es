import type { Metadata } from 'next';
import { getBlogMetadata, getBlogStaticParams, renderBlogRoute } from '@/legacy/components/blog-renderer';

type Props = {
  params: Promise<{
    slug?: string[];
  }>;
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return renderBlogRoute('ko', slug);
}

export function generateStaticParams() {
  return getBlogStaticParams('ko');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return getBlogMetadata('ko', slug);
}
