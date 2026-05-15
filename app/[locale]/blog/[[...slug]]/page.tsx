import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CaptionedImage from '@/components/sections/blog/captioned-image';
import SectionBlock from '@/components/sections/blog/section-block';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { BlogHeroSection } from '@/components/sections/blog/hero-section';
import { BlogListSection } from '@/components/sections/blog/list-section';
import { getBlogPostContent, getBlogPostSlugs } from '@/lib/blog-content';
import { isLocale, locales, withLocalePath } from '@/lib/locales';

type Props = {
    params: Promise<{
        locale: string;
        slug?: string[];
    }>;
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
    const { locale, slug } = await params;
    if (!isLocale(locale)) notFound();

    if (!slug || slug.length === 0) {
        return (
            <SiteShell>
                <BlogHeroSection />
                <BlogListSection />
            </SiteShell>
        );
    }

    const post = getBlogPostContent(locale, slug);
    if (!post) notFound();

    return (
        <SiteShell headerDark>
            <article className="mx-auto w-full max-w-[980px] px-4 pb-24 pt-20 lg:px-6 lg:pt-32">
                <Link href={withLocalePath(locale, '/blog')} className="font-medium text-[#616161] hover:underline">
                    Back to blog
                </Link>
                <h1 className="mt-5 text-3xl font-semibold leading-tight text-[var(--color-text-default)] lg:text-5xl">{post.title}</h1>
                <p className="mt-3 text-base text-[#757575]">{post.dateText}</p>

                {post.image ? (
                    <div className="relative mt-8 overflow-hidden rounded-lg border border-[#e0e0e0]">
                        <Image src={post.image} alt={post.title} width={1600} height={840} className="h-auto w-full object-cover" />
                    </div>
                ) : null}

                <div className="prose prose-gray mt-10 max-w-none prose-headings:text-[var(--color-text-default)] prose-a:text-[#1d4ed8]">
                    <MDXRemote source={post.content} components={{ CaptionedImage, SectionBlock }} />
                </div>
            </article>
        </SiteShell>
    );
}

export function generateStaticParams() {
    return locales.flatMap((locale) => [{ locale, slug: [] as string[] }, ...getBlogPostSlugs(locale).map((slug) => ({ locale, slug }))]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;
    if (!isLocale(locale)) notFound();

    if (!slug || slug.length === 0) {
        return {
            title: 'HanaLoop Blog',
            description: 'HanaLoop blog and insight updates.',
        };
    }

    const post = getBlogPostContent(locale, slug);
    if (!post) notFound();

    return {
        title: post.title,
        description: post.description || post.title,
        openGraph: {
            title: post.title,
            description: post.description || post.title,
            images: post.image ? [post.image] : undefined,
        },
    };
}
