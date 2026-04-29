'use client';

import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { SiteShell } from '@/components/layout/site-shell';
import { siteConfig } from '@/lib/site-config';

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
  wrapperClassName?: string;
};

export default function Layout({ children, title, description, wrapperClassName }: Props) {
  useEffect(() => {
    if (title) document.title = title;
    if (!description) return;

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }

    tag.setAttribute('content', description);
  }, [description, title]);

  return (
    <SiteShell wrapperClassName={wrapperClassName}>
      <div data-site-title={siteConfig.title}>{children}</div>
    </SiteShell>
  );
}
