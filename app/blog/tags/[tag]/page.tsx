import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/site-shell';
import { getBlogByTag, getBlogTags } from '@/lib/blog-tags';
import { buildBlogMobileContextualNav } from '@/lib/mobile-nav';
import { siteConfig } from '@/lib/site-config';

type Props = {
  params: Promise<{
    tag: string;
  }>;
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const items = getBlogByTag('ko', decodedTag);
  const mobileContextualNav = buildBlogMobileContextualNav('ko');

  if (items.length === 0) notFound();

  return (
    <SiteShell mobileContextualNav={mobileContextualNav}>
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">태그: {decodedTag}</h1>
        <p className="mt-3 text-base text-gray-600 dark:text-gray-400">{decodedTag} 태그가 포함된 블로그 글 목록입니다.</p>
        <div className="mt-8 flex flex-col gap-4">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg border p-4 no-underline transition hover:bg-gray-50">
              <div className="text-xl font-semibold text-gray-900">{item.title}</div>
              {item.description ? <div className="mt-2 text-sm text-gray-600">{item.description}</div> : null}
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}

export function generateStaticParams() {
  return getBlogTags('ko').map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return {
    title: `태그: ${decodedTag}`,
    description: `${decodedTag} 태그가 포함된 블로그 글 목록`,
    openGraph: {
      title: `태그: ${decodedTag}`,
      description: `${decodedTag} 태그가 포함된 블로그 글 목록`,
      images: [siteConfig.image],
    },
  };
}
