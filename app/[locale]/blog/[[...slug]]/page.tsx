import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CaptionedImage from '@/components/sections/blog/captioned-image';
import SectionBlock from '@/components/sections/blog/section-block';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SiteShell } from '@/components/layout/site-shell';
import { BlogHeroSection } from '@/components/sections/blog/hero-section';
import { BlogListSection } from '@/components/sections/blog/list-section';
import { getBlogPostContent, getBlogPostSlugs } from '@/lib/blog-content';
import { isLocale, locales, withLocalePath } from '@/lib/locales';
import { siteConfig } from '@/lib/site-config';
import { JsonLd } from '@/components/seo/json-ld';
import { createBreadcrumbJsonLd, createSeoMetadata, getStaticPageMetadata, localeLanguageTags } from '@/lib/seo';

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
    setRequestLocale(locale);

    if (!slug || slug.length === 0) {
        return (
            <SiteShell>
                <BlogHeroSection locale={locale} />
                <BlogListSection locale={locale} />
            </SiteShell>
        );
    }

    const post = getBlogPostContent(locale, slug);
    if (!post) notFound();
    const tSeo = await getTranslations({ locale, namespace: 'Seo.ui' });
    const pathname = `/blog/${slug.join('/')}`;

    return (
        <SiteShell headerDark>
            <article className="mx-auto w-full max-w-[980px] px-4 pb-24 pt-20 lg:px-6 lg:pt-32">
                <JsonLd
                    data={[
                        createBreadcrumbJsonLd(locale, [
                            { name: tSeo('breadcrumbHome'), pathname: '/' },
                            { name: 'Blog', pathname: '/blog' },
                            { name: post.title, pathname },
                        ]),
                        {
                            '@context': 'https://schema.org',
                            '@type': 'BlogPosting',
                            headline: post.title,
                            description: post.description || post.title,
                            image: post.image ? new URL(post.image, siteConfig.url).toString() : new URL(siteConfig.image, siteConfig.url).toString(),
                            datePublished: post.dateIso,
                            dateModified: post.dateIso,
                            inLanguage: localeLanguageTags[locale],
                            author: {
                                '@type': 'Organization',
                                name: siteConfig.title,
                                url: siteConfig.url,
                            },
                            publisher: {
                                '@type': 'Organization',
                                name: siteConfig.title,
                                logo: {
                                    '@type': 'ImageObject',
                                    url: new URL('/site/icons/logo-color-ci.png', siteConfig.url).toString(),
                                },
                            },
                            mainEntityOfPage: getStaticUrl(locale, pathname),
                        },
                    ]}
                />
                <Link href={withLocalePath(locale, '/blog')} className="font-medium text-[#616161] hover:underline">
                    {tSeo('backToBlog')}
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
        return getStaticPageMetadata(locale, 'blog', '/blog');
    }

    const post = getBlogPostContent(locale, slug);
    if (!post) notFound();

    return createSeoMetadata({
        title: post.title,
        description: post.description || post.title,
        locale,
        pathname: `/blog/${slug.join('/')}`,
        image: post.image,
        type: 'article',
    });
}

function getStaticUrl(locale: (typeof locales)[number], pathname: string) {
    const localizedPath = withLocalePath(locale, pathname);
    return new URL(localizedPath, siteConfig.url).toString();
}
