import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DocsPage, DocsTitle, DocsDescription, DocsBody } from 'fumadocs-ui/layouts/docs/page';
import { DocsBreadcrumb } from '@/components/docs-breadcrumb';
import { getDocsByTag, getDocsTags } from '@/lib/docs-tags';
import { siteConfig } from '@/lib/site-config';

type Props = {
  params: Promise<{
    tag: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const items = getDocsByTag('ko', decodedTag);

  if (items.length === 0) notFound();

  return (
    <DocsPage
      toc={[]}
      breadcrumb={{ component: <DocsBreadcrumb locale="ko" /> }}
      tableOfContent={{ enabled: false }}
      tableOfContentPopover={{ enabled: false }}
      footer={{ enabled: false }}
    >
      <DocsTitle>태그: {decodedTag}</DocsTitle>
      <DocsDescription>{decodedTag} 태그가 포함된 문서 목록입니다.</DocsDescription>
      <DocsBody>
        <div className="mt-2 flex flex-col gap-4">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg border p-4 no-underline transition hover:bg-gray-50">
              <div className="text-xl font-semibold text-gray-900">{item.title}</div>
              {item.description ? <div className="mt-2 text-sm text-gray-600">{item.description}</div> : null}
            </Link>
          ))}
        </div>
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return getDocsTags('ko').map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return {
    title: `태그: ${decodedTag}`,
    description: `${decodedTag} 태그가 포함된 문서 목록`,
    openGraph: {
      title: `태그: ${decodedTag}`,
      description: `${decodedTag} 태그가 포함된 문서 목록`,
      images: [siteConfig.image],
    },
  };
}
