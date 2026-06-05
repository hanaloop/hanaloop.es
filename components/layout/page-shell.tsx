import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { MobileContextualNav } from '@/lib/mobile-nav';
import { SiteShell } from './site-shell';

type PageShellProps = {
    children?: ReactNode;
    wrapperClassName?: string;
    mobileContextualNav?: MobileContextualNav;
    headerDark?: boolean;
};

export async function PageShell({ children, wrapperClassName, mobileContextualNav, headerDark }: PageShellProps) {
    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <SiteShell wrapperClassName={wrapperClassName} mobileContextualNav={mobileContextualNav} headerDark={headerDark}>
                {children}
            </SiteShell>
        </NextIntlClientProvider>
    );
}
