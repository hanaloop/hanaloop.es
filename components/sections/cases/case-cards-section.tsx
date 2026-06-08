import { getLocale, getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { CaseCardsSectionClient, type CaseCardFilterId, type CaseCardItem } from '@/components/sections/cases/case-cards-section-client';

type CaseOverviewFilters = Record<CaseCardFilterId, string>;

export async function CaseCardsSection() {
    const tOverview = await getTranslations('CasesOverview');
    const tCards = await getTranslations('CasesCards');
    const locale = (await getLocale()) as AppLocale;
    const items = (tCards.raw('items') as Omit<CaseCardItem, 'detailId'>[]).map((item, index) => ({
        ...item,
        detailId: index + 1,
    }));
    const filters = tOverview.raw('filters') as CaseOverviewFilters;

    return (
        <CaseCardsSectionClient
            locale={locale}
            overviewAriaLabel={tOverview('sectionAriaLabel')}
            overviewHeading={tOverview('heading')}
            overviewSubheading={tOverview('subheading')}
            cardsAriaLabel={tCards('sectionAriaLabel')}
            filters={filters}
            items={items}
        />
    );
}
