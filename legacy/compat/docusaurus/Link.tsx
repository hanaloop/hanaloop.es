'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { getLocaleFromPathname, isExternalHref, isStaticAssetPath, withLocalePath } from '@/lib/locales';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  to?: string;
  children: ReactNode;
};

export default function Link({ href, to, children, ...props }: Props) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const target = href ?? to ?? '#';

  if (isExternalHref(target) || isStaticAssetPath(target) || target.startsWith('#')) {
    return (
      <a href={target} {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={withLocalePath(locale, target)} {...props}>
      {children}
    </NextLink>
  );
}
