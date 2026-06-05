'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import type { InsightHeading, InsightNavNode } from '@/lib/insight-navigation';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

type InsightDetailLayoutProps = {
    locale: AppLocale;
    navTree: InsightNavNode[];
    currentPath: string;
    title: string;
    toc: InsightHeading[];
    backHref: string;
    showBackLink?: boolean;
    dateText: string;
    image?: string;
    children: ReactNode;
    labels: {
        board: string;
        toc: string;
        archiveTitle: string;
        backToInsight: string;
        close: string;
    };
};

type NavItemProps = {
    node: InsightNavNode;
    level: number;
    currentPath: string;
    openByLevel: Record<number, string | null>;
    setOpenAtLevel: (level: number, id: string | null) => void;
    closeDrawer?: () => void;
};

function clampFont(minPx: number, maxPx: number) {
    return `clamp(${minPx}px, calc(${minPx}px + ${(maxPx - minPx).toFixed(4)} * ((100vw - 370px) / 1070)), ${maxPx}px)`;
}

function CbamSupportBanner({ locale }: { locale: AppLocale }) {
    return (
        <section className="mx-auto mt-30 w-full max-w-[1920px] border-t border-[#cfcfcf] pt-14 md:pt-16">
            <div className="w-full px-4 py-10 text-center md:px-8 md:py-12 lg:px-12 lg:py-14">
                <h2 className="font-semibold leading-tight text-gradient-brand" style={{ fontSize: clampFont(22, 30), letterSpacing: '-0.02em' }}>
                    하나루프, 중소벤처기업부 CBAM 인프라구축 사업 참여기업을 모집합니다
                </h2>
                <p className="mt-6 font-semibold leading-tight text-[var(--color-text-subtle)]" style={{ fontSize: clampFont(22, 30), letterSpacing: '-0.02em' }}>
                    CBAM 대응 컨설팅 + 검증과 함께 하나에코 CBAM 솔루션을 정부 지원으로!
                </p>
                <p className="mt-6" style={{ fontWeight: 400, fontSize: clampFont(16, 18), letterSpacing: '-0.02em', color: '#707070' }}>
                    하나루프 X (주)로엔컨설팅과 함께하는 정부지원사업
                </p>
                <Link
                    href={withLocalePath(locale, '/partnership')}
                    className="mx-auto mt-6 inline-flex w-full max-w-[320px] items-center justify-center whitespace-nowrap rounded-full px-6 text-center text-white bg-gradient-brand"
                    style={{ height: clampFont(50, 58), fontWeight: 600, fontSize: clampFont(16, 18), letterSpacing: '-0.02em' }}
                >
                    CBAM대응 인프라 구축 정부지원 문의
                </Link>
                <p className="mt-6" style={{ fontWeight: 400, fontSize: clampFont(16, 18), letterSpacing: '-0.02em', color: '#707070' }}>
                    이미 직전년도에 정부지원을 받았던 기업도 지원 가능하오니 편히 문의 주세요.
                </p>
            </div>
        </section>
    );
}

const sidebarInnerCls = 'lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto';
const tocItemStyle = { fontWeight: 400, fontSize: clampFont(16, 18), letterSpacing: '-0.02em', color: '#707070' };

function NavItem({ node, level, currentPath, openByLevel, setOpenAtLevel, closeDrawer }: NavItemProps) {
    const hasChildren = (node.children?.length ?? 0) > 0;
    const isOpen = openByLevel[level] === node.id;
    const isActive = node.href === currentPath;

    const sizeByLevel = level === 0 ? clampFont(20, 24) : level === 1 ? clampFont(18, 20) : clampFont(16, 18);
    const weightByLevel = level === 0 ? 700 : level === 1 ? 600 : 400;
    const colorByLevel = level === 0 ? 'var(--color-text-subtle)' : '#707070';

    const toggleOpen = () => setOpenAtLevel(level, isOpen ? null : node.id);

    return (
        <li>
            <div className="rounded hover:bg-[#f5f5f5]">
                {node.href ? (
                    <Link
                        href={node.href}
                        onClick={closeDrawer}
                        className={`inline-flex max-w-full flex-1 items-center gap-2 px-2 py-1${isActive ? ' text-gradient-brand' : ''}`}
                        style={{
                            fontSize: sizeByLevel,
                            fontWeight: weightByLevel,
                            letterSpacing: '-0.02em',
                            ...(isActive ? {} : { color: colorByLevel }),
                        }}
                    >
                        <span>{node.title}</span>
                    </Link>
                ) : (
                    <button
                        type="button"
                        onClick={toggleOpen}
                        className="inline-flex w-full items-center justify-between gap-2 px-2 py-1 text-left"
                        style={{ fontSize: sizeByLevel, fontWeight: weightByLevel, letterSpacing: '-0.02em', color: colorByLevel }}
                    >
                        <span>{node.title}</span>
                        {hasChildren ? <img src={isOpen ? '/site/docs/color_arrow.png' : '/site/docs/arrow.png'} alt="" className={`transition ${isOpen ? '' : 'rotate-180'}`} aria-hidden="true" /> : null}
                    </button>
                )}
            </div>

            {hasChildren && isOpen ? (
                <ul className="mt-1 space-y-2 border-l border-[#dadada] pl-3">
                    {node.children?.map((child) => (
                        <NavItem key={child.id} node={child} level={level + 1} currentPath={currentPath} openByLevel={openByLevel} setOpenAtLevel={setOpenAtLevel} closeDrawer={closeDrawer} />
                    ))}
                </ul>
            ) : null}
        </li>
    );
}

function findAncestorIds(nodes: InsightNavNode[], targetPath: string, trail: string[] = []): string[] {
    for (const node of nodes) {
        const nextTrail = [...trail, node.id];
        if (node.href === targetPath) return nextTrail;
        if (node.children?.length) {
            const found = findAncestorIds(node.children, targetPath, nextTrail);
            if (found.length) return found;
        }
    }
    return [];
}

function toOpenByLevel(ancestorIds: string[]): Record<number, string | null> {
    const open: Record<number, string | null> = {};
    for (let i = 0; i < ancestorIds.length - 1; i += 1) open[i] = ancestorIds[i];
    return open;
}

export function InsightDetailLayout({ locale, navTree, currentPath, title, toc, backHref, showBackLink, dateText, image, children, labels }: InsightDetailLayoutProps) {
    const ancestors = useMemo(() => findAncestorIds(navTree, currentPath), [navTree, currentPath]);
    const [openByLevel, setOpenByLevel] = useState<Record<number, string | null>>(() => toOpenByLevel(ancestors));
    const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
    const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

    const setOpenAtLevel = (level: number, id: string | null) => {
        setOpenByLevel((prev) => {
            const next: Record<number, string | null> = {};
            Object.keys(prev).forEach((key) => {
                const depth = Number(key);
                if (depth < level) next[depth] = prev[depth];
            });
            next[level] = id;
            return next;
        });
    };

    const onClickToc = (id: string) => {
        const target = document.getElementById(id);
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setRightDrawerOpen(false);
    };

    return (
        <section className="mx-auto w-full max-w-[1920px] px-4 pb-20 pt-8 lg:px-6 lg:pt-10">
            <div className="mb-4 flex items-center justify-between lg:hidden">
                <button type="button" onClick={() => setLeftDrawerOpen(true)} className="rounded border border-[#d4d4d4] px-3 py-2 text-sm text-[var(--color-text-subtle)]">
                    {labels.board}
                </button>
                <button type="button" onClick={() => setRightDrawerOpen(true)} className="rounded border border-[#d4d4d4] px-3 py-2 text-sm text-[var(--color-text-subtle)]">
                    {labels.toc}
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[320px_minmax(0,1fr)_280px]">
                <aside className="hidden border-r border-[#d9d9d9] pr-6 lg:block">
                    <div className={sidebarInnerCls}>
                        <ul className="mt-4 space-y-3">
                            {navTree.map((node) => (
                                <NavItem key={node.id} node={node} level={0} currentPath={currentPath} openByLevel={openByLevel} setOpenAtLevel={setOpenAtLevel} />
                            ))}
                        </ul>
                    </div>
                </aside>

                <article>
                    {showBackLink === false ? null : (
                        <Link href={backHref} className="text-sm text-[#616161] hover:underline">
                            {labels.backToInsight}
                        </Link>
                    )}
                    {title ? (
                        <h1 className="mt-3 font-semibold leading-tight text-gradient-brand" style={{ fontSize: clampFont(28, 36) }}>
                            {title}
                        </h1>
                    ) : null}
                    {dateText ? <p className="mt-2 text-sm text-[#757575]">{dateText}</p> : null}

                    {image ? (
                        <div className="relative mt-6 overflow-hidden rounded-lg border border-[#e0e0e0]">
                            <Image src={image} alt={title} width={1600} height={840} className="h-auto w-full object-cover" />
                        </div>
                    ) : null}

                    <div className={`prose prose-gray max-w-none prose-headings:text-[var(--color-text-default)] prose-a:text-[#1d4ed8] ${title ? 'mt-8' : 'mt-0'}`}>{children}</div>
                </article>

                <aside className="hidden border-l border-[#d9d9d9] pl-6 xl:block">
                    <div className={sidebarInnerCls}>
                        <ul className="space-y-3">
                            {toc.map((item) => (
                                <li key={item.id}>
                                    <button type="button" className="cursor-pointer text-left" style={tocItemStyle} onClick={() => onClickToc(item.id)}>
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>

            {leftDrawerOpen ? (
                <div className="fixed inset-0 z-50 bg-black/40 lg:hidden" onClick={() => setLeftDrawerOpen(false)}>
                    <div className="h-full w-[88%] max-w-[360px] overflow-y-auto bg-white p-4" onClick={(e) => e.stopPropagation()}>
                        <button type="button" className="mb-3 ml-auto block p-1" onClick={() => setLeftDrawerOpen(false)} aria-label={labels.close}>
                            <Image src="/site/icons/ic-close-white.png" alt="" width={18} height={18} className="h-[18px] w-[18px] brightness-0" aria-hidden="true" />
                        </button>
                        <h2 style={{ fontWeight: 700, fontSize: clampFont(20, 24), letterSpacing: '-0.02em', color: 'var(--color-text-subtle)' }}>{labels.archiveTitle}</h2>
                        <ul className="mt-4 space-y-3">
                            {navTree.map((node) => (
                                <NavItem key={node.id} node={node} level={0} currentPath={currentPath} openByLevel={openByLevel} setOpenAtLevel={setOpenAtLevel} closeDrawer={() => setLeftDrawerOpen(false)} />
                            ))}
                        </ul>
                    </div>
                </div>
            ) : null}

            {rightDrawerOpen ? (
                <div className="fixed inset-0 z-50 bg-black/40 lg:hidden" onClick={() => setRightDrawerOpen(false)}>
                    <div className="ml-auto h-full w-[84%] max-w-[320px] overflow-y-auto bg-white p-4" onClick={(e) => e.stopPropagation()}>
                        <button type="button" className="mb-3 block p-1" onClick={() => setRightDrawerOpen(false)} aria-label={labels.close}>
                            <Image src="/site/icons/ic-close-white.png" alt="" width={18} height={18} className="h-[18px] w-[18px] brightness-0" aria-hidden="true" />
                        </button>
                        <ul className="space-y-3">
                            {toc.map((item) => (
                                <li key={item.id}>
                                    <button type="button" className="cursor-pointer text-left" style={tocItemStyle} onClick={() => onClickToc(item.id)}>
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : null}

            <CbamSupportBanner locale={locale} />
        </section>
    );
}
