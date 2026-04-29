import type { AnchorHTMLAttributes, ComponentType, ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { getMDXComponents } from '@/legacy/components/mdx';
import { DocsBreadcrumb } from '@/legacy/components/docs-breadcrumb';
import { DocsFooter } from '@/legacy/components/docs-footer';
import { LocalizedMDXLink } from '@/legacy/components/localized-mdx-link';
import { SiteShell } from '@/components/layout/site-shell';
import { baseOptions } from '@/lib/layout.shared';
import { type AppLocale } from '@/lib/locales';
import { buildDocsMobileContextualNav } from '@/lib/mobile-nav';
import { siteConfig } from '@/lib/site-config';
import { getDocsSource } from '@/lib/source';
import CBAMBanner from '@/legacy/components/theme/CBAMBanner';

type DocsLayoutShellProps = {
  children: ReactNode;
  locale: AppLocale;
};

function DocsLink({
  children,
  href,
  locale,
  linkComponent: RelativeLink,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: ReactNode;
  href?: string;
  locale: AppLocale;
  linkComponent: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>> | any;
}) {
  if (href?.startsWith('/')) {
    return (
      <LocalizedMDXLink locale={locale} href={href} {...props}>
        {children}
      </LocalizedMDXLink>
    );
  }

  return <RelativeLink href={href} {...props}>{children}</RelativeLink>;
}

export function DocsLayoutShell({ children, locale }: DocsLayoutShellProps) {
  const source = getDocsSource(locale);
  const mobileContextualNav = buildDocsMobileContextualNav(locale);

  return (
    <SiteShell mobileContextualNav={mobileContextualNav}>
      <DocsLayout
        tree={source.getPageTree()}
        {...baseOptions(locale)}
        links={[]}
        searchToggle={{ enabled: false }}
        themeSwitch={{ enabled: false }}
        sidebar={{
          collapsible: false,
          className: 'hanaloop-docs-sidebar bg-white dark:bg-white',
        }}
        containerProps={{
          className: 'hanaloop-docs-layout bg-white',
        }}
      >
        {children}
      </DocsLayout>
    </SiteShell>
  );
}

export function renderDocsPage(locale: AppLocale, slug?: string[]) {
  const source = getDocsSource(locale);
  const resolvedSlug = slug && slug.length > 0 ? slug : ['intro'];
  const page = source.getPage(resolvedSlug);

  if (!page) notFound();

  const pageData = page.data as typeof page.data & {
    body: ComponentType<{ components?: unknown }>;
    full?: boolean;
    toc?: unknown;
    tags?: string[];
  };
  const MDX = pageData.body;
  const RelativeLink = createRelativeLink(source, page);
  const tags = Array.isArray(pageData.tags) ? pageData.tags : [];

  return (
    <DocsPage
      toc={pageData.toc}
      full={pageData.full}
      breadcrumb={{ component: <DocsBreadcrumb locale={locale} /> }}
      tableOfContentPopover={{ enabled: false }}
      footer={{ component: <DocsFooter /> }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: (props) => <DocsLink locale={locale} linkComponent={RelativeLink} {...props} />,
          })}
        />
        <CBAMBanner />
        {tags.length > 0 ? (
          <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-gray-900">태그:</span>
            {tags.map((tag) => (
              <LocalizedMDXLink
                key={tag}
                locale={locale}
                href={`/docs/tags/${encodeURIComponent(tag)}`}
                className="inline-flex rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-700 no-underline transition hover:bg-gray-50 hover:text-gray-900"
              >
                {tag}
              </LocalizedMDXLink>
            ))}
          </div>
        ) : null}
      </DocsBody>
    </DocsPage>
  );
}

export function getDocsStaticParams(locale: AppLocale) {
  const source = getDocsSource(locale);
  return [{ slug: [] as string[] }, ...source.generateParams()];
}

export function getDocsMetadata(locale: AppLocale, slug?: string[]): Metadata {
  const source = getDocsSource(locale);
  const resolvedSlug = slug && slug.length > 0 ? slug : ['intro'];
  const page = source.getPage(resolvedSlug);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description ?? siteConfig.tagline,
    openGraph: {
      title: page.data.title,
      description: page.data.description ?? siteConfig.tagline,
      images: [siteConfig.image],
    },
  };
}
