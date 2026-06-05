import type { PlatformHeroRelatedLink } from '@/components/features/platform-hero';

const PLATFORM_RELATED_LINKS = [
    { key: 'overview', href: '/overview' },
    { key: 'carbonAccounting', href: '/platform' },
    { key: 'cbam', href: '/cbam' },
    { key: 'pcf', href: '/pcf' },
    { key: 'supplyChain', href: '/supply' },
    { key: 'hanaAi', href: '/hana-ai' },
    { key: 'cases', href: '/cases' },
] as const;

type PlatformRelatedLinkKey = (typeof PLATFORM_RELATED_LINKS)[number]['key'];

export function buildPlatformRelatedLinks(t: (key: PlatformRelatedLinkKey) => string, currentKey: PlatformRelatedLinkKey): PlatformHeroRelatedLink[] {
    return PLATFORM_RELATED_LINKS.map((item) => ({
        label: t(item.key),
        href: item.href,
        current: item.key === currentKey,
    }));
}

