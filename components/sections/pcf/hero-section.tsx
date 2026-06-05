import { getTranslations } from 'next-intl/server';
import { buildPlatformRelatedLinks } from '@/components/features/platform-related-links';
import { PlatformHero } from '@/components/features/platform-hero';

export async function PcfHeroSection() {
    const t = await getTranslations('PlatformHero');
    const tNav = await getTranslations('PlatformNav');
    const relatedLinks = buildPlatformRelatedLinks(tNav, 'pcf');

    return <PlatformHero ariaLabel="PCF Hero" backgroundImageUrl="/site/pcf/hero.png" heading={t('heading')} description={t('description')} navAriaLabel={t('navAriaLabel')} relatedLinks={relatedLinks} />;
}
