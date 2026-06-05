import { getTranslations } from 'next-intl/server';
import { buildPlatformRelatedLinks } from '@/components/features/platform-related-links';
import { PlatformHero } from '@/components/features/platform-hero';

export async function PlatformHeroSection() {
    const t = await getTranslations('PlatformHero');
    const tNav = await getTranslations('PlatformNav');
    const relatedLinks = buildPlatformRelatedLinks(tNav, 'carbonAccounting');

    return <PlatformHero ariaLabel="Platform Hero" backgroundImageUrl="/site/platform/hero.png" heading={t('heading')} description={t('description')} navAriaLabel={t('navAriaLabel')} relatedLinks={relatedLinks} />;
}
