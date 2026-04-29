import type { ReactNode } from 'react';
import { SiteShell } from '@/components/layout/site-shell';

type ContentPageShellProps = {
  children: ReactNode;
};

export function ContentPageShell({ children }: ContentPageShellProps) {
  return (
    <SiteShell wrapperClassName="text-gray-700">
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <article className="mx-auto max-w-4xl break-keep">{children}</article>
      </div>
    </SiteShell>
  );
}
