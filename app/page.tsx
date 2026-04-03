import type { Metadata } from 'next';
import { homePage as HomePage } from '@/lib/site-pages';
import { getHomeMetadataText, siteConfig } from '@/lib/site-config';

export default function Page() {
  return <HomePage />;
}

export function generateMetadata(): Metadata {
  const meta = getHomeMetadataText('ko');
  const title = `${siteConfig.title} | ${meta.title}`;

  return {
    title,
    description: meta.description,
    openGraph: {
      title,
      description: meta.description,
      images: [siteConfig.image],
    },
    twitter: {
      title,
      description: meta.description,
      images: [siteConfig.image],
    },
  };
}
