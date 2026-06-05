import { getTranslations } from 'next-intl/server';
import { buildPlatformRelatedLinks } from '@/components/features/platform-related-links';
import { PlatformHero } from '@/components/features/platform-hero';

export async function CbamHeroSection() {
    const t = await getTranslations('PlatformHero');
    const tNav = await getTranslations('PlatformNav');
    const relatedLinks = buildPlatformRelatedLinks(tNav, 'cbam');

    return <PlatformHero ariaLabel="CBAM Hero" backgroundImageUrl="/site/cbam/hero.png" heading={t('heading')} description={t('description')} navAriaLabel={t('navAriaLabel')} relatedLinks={relatedLinks} />;
}
