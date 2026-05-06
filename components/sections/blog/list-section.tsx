import { ListTable, type ListTableItem } from '@/components/features/list-table';
import type { AppLocale } from '@/lib/locales';

type BlogListSectionProps = {
    locale: AppLocale;
};

const mockItems: ListTableItem[] = [
    {
        id: 'blog-list-001',
        title: '웨비나: 탄소 중립 시대, 당신은 경쟁할 준비가 되었습니까?',
        dateText: '20 June 2025',
        author: 'HanaLoop',
        thumbnail: '/images/blog/2025/20250101-2024-2025.png',
        href: '/blog',
    },
    {
        id: 'blog-list-002',
        title: '비철금속 산업의 글로벌 기후규제 현황과 이슈',
        dateText: '20 June 2025',
        author: 'HanaLoop',
        thumbnail: '/images/posting/environment-general/2022-11-07-cop27-01.jpeg',
        href: '/blog',
    },
    {
        id: 'blog-list-003',
        title: '[참여기업 모집] 정부지원 중소기업 CBAM 대응 인프라 구축(2025)',
        dateText: '20 June 2025',
        author: 'HanaLoop',
        thumbnail: '/images/revamp/home-feature-bg-01.png',
        href: '/blog',
    },
    {
        id: 'blog-list-004',
        title: '기업의 탄소관리: Scope3 배출량 산정 및 전략 수립',
        dateText: '20 June 2025',
        author: 'HanaLoop',
        thumbnail: '/images/cbam-shipping.jpg',
        href: '/blog',
    },
    {
        id: 'blog-list-005',
        title: '하나루프, 기후공기환경산업전에서 탄소 감축 및 공급망 탄소 경영 솔루션 소개',
        dateText: '20 June 2025',
        author: 'HanaLoop',
        thumbnail: '/images/scope3-feature-1.png',
        href: '/blog',
    },
    {
        id: 'blog-list-006',
        title: 'CBAM 보고서, 하나루프가 도와드립니다!',
        dateText: '20 June 2025',
        author: 'HanaLoop',
        thumbnail: '/images/blog/2025/20250218-cbam-review.png',
        href: '/blog',
    },
    {
        id: 'blog-list-007',
        title: '「Scope 3 온실가스 배출량 산정 및 보고 가이드라인」 공청회',
        dateText: '20 June 2025',
        author: 'HanaLoop',
        thumbnail: '/images/posting/environment-general/2022-11-07-cop27-01.jpeg',
        href: '/blog',
    },
    {
        id: 'blog-list-008',
        title: '2024에서 2025로: 환경적 변화와 전망',
        dateText: '20 June 2025',
        author: 'HanaLoop',
        thumbnail: '/images/revamp/home-feature-bg-01.png',
        href: '/blog',
    },
    {
        id: 'blog-list-009',
        title: '자연과의 화해',
        dateText: '20 June 2025',
        author: 'HanaLoop',
        thumbnail: '/images/cbam-shipping.jpg',
        href: '/blog',
    },
    {
        id: 'blog-list-010',
        title: '기후규제와 공시의무 준비에 어려움 있었다면, 대한민국 ESG친환경대전에서 하나루프팀을 만나보세요.',
        dateText: '20 June 2025',
        author: 'HanaLoop',
        thumbnail: '/images/scope3-feature-1.png',
        href: '/blog',
    },
];

const sectionText: Record<AppLocale, string> = {
    ko: '🗞️ 하나루프의 다양하고 유익한 최신 소식을 확인해보세요.',
    en: '🗞️ Check out HanaLoop’s latest useful updates.',
    es: '🗞️ Consulta las ultimas novedades utiles de HanaLoop.',
};

export function BlogListSection({ locale }: BlogListSectionProps) {
    return (
        <section className="px-4 pb-20 pt-16 text-[var(--color-text-default)] lg:px-6 lg:pb-28 lg:pt-20">
            <div className="mx-auto w-full max-w-[1920px]">
                <p className="text-center text-[18px] lg:text-[32px] font-semibold leading-[1.35]">{sectionText[locale]}</p>
                <ListTable heading="Blog LIST" items={mockItems} itemsPerPage={10} />
            </div>
        </section>
    );
}


