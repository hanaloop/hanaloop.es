'use client';

import { useEffect } from 'react';
import { ContentPageShell } from '@/legacy/components/content-page-shell';
import { toClientHref } from '@/lib/locales';

type StaticRedirectProps = {
  to: string;
};

export function StaticRedirect({ to }: StaticRedirectProps) {
  const href = toClientHref('ko', to);

  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <ContentPageShell>
      <div className="space-y-4 py-12 text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Redirecting…</h1>
        <p className="text-gray-600">
          If you are not redirected automatically, continue to{' '}
          <a href={href} className="font-medium text-sky-700">
            {href}
          </a>
          .
        </p>
      </div>
    </ContentPageShell>
  );
}
