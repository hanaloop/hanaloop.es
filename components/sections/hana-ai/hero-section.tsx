import { getTranslations } from 'next-intl/server';
import { buildPlatformRelatedLinks } from '@/components/features/platform-related-links';
import { PlatformHero } from '@/components/features/platform-hero';

export async function HanaAiHeroSection() {
    const t = await getTranslations('PlatformHero');
    const tNav = await getTranslations('PlatformNav');
    const relatedLinks = buildPlatformRelatedLinks(tNav, 'hanaAi');

    return <PlatformHero ariaLabel="Hana.eco AI Hero" backgroundImageUrl="/site/hana-ai/hero.png" heading={t('heading')} description={t('description')} navAriaLabel={t('navAriaLabel')} relatedLinks={relatedLinks} />;
}
