import { getTranslations } from 'next-intl/server';
import { buildPlatformRelatedLinks } from '@/components/features/platform-related-links';
import { PlatformHero } from '@/components/features/platform-hero';

export async function CasesHeroSection() {
    const t = await getTranslations('PlatformHero');
    const tNav = await getTranslations('PlatformNav');
    const relatedLinks = buildPlatformRelatedLinks(tNav, 'cases');

    return <PlatformHero ariaLabel="Cases Hero" backgroundImageUrl="/site/cases/hero.png" heading={t('heading')} description={t('description')} navAriaLabel={t('navAriaLabel')} relatedLinks={relatedLinks} />;
}
