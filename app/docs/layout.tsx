import type { ReactNode } from 'react';
import { DocsLayoutShell } from '@/legacy/components/docs-renderer';

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayoutShell locale="ko">{children}</DocsLayoutShell>;
}
