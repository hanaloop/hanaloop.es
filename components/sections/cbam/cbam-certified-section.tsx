import { getTranslations } from 'next-intl/server';
import { AlternatingImageProcessSection } from '@/components/features/alternating-image-process-section';

type CertifiedCard = {
    index: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
};

export async function CbamCertifiedSection() {
    const t = await getTranslations('CbamCertified');
    const cards = t.raw('cards') as CertifiedCard[];

    return (
        <AlternatingImageProcessSection
            ariaLabel={t('sectionAriaLabel')}
            title={t('title')}
            subtitle={t('subtitle')}
            cards={cards}
        />
    );
}
