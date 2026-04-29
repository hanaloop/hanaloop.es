import Image from 'next/image';
import Link from 'next/link';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { ContactCtaButton } from '@/components/ui/contact-cta-button';

const insightLinks = [
    { label: 'Youtube', href: 'https://www.youtube.com/@hanaloop' },
    { label: 'Brunch', href: 'https://brunch.co.kr/@hanaloop' },
    { label: 'Naver Blog', href: 'https://blog.naver.com/hanaloop' },
] as const;

const CURRENT_YEAR = new Date().getFullYear();
const ICON = {
    link: '/icons/revamp/ic-link.png',
    linkedin: '/icons/revamp/ic-linkedin-white.png',
    x: '/icons/revamp/ic-x-white.png',
    logo: '/icons/revamp/logo-white-ci.png',
} as const;

const bodyText = 'text-[16px] leading-none font-normal text-white';

const mobilePrimaryLinks: Record<AppLocale, { platform: string; insight: string; about: string }> = {
    ko: { platform: 'Our Platform', insight: 'Insight & Blog', about: 'About Us' },
    en: { platform: 'Our Platform', insight: 'Insight & Blog', about: 'About Us' },
    es: { platform: 'Our Platform', insight: 'Insight & Blog', about: 'Nosotros' },
};

export function SiteFooter({ locale }: { locale: AppLocale }) {
    const mobileLinks = mobilePrimaryLinks[locale];

    return (
        <footer className="bg-[var(--color-mobile-dark-bg)] text-white lg:bg-[var(--color-footer-bg)]">
            <div className="mx-auto min-h-[760px] px-6 pt-[44px] pb-10 lg:hidden">
                <div className="flex h-full min-h-[676px] flex-col">
                    <div>
                        <div className="flex items-center justify-between gap-2 sm:gap-4">
                            <Link href={withLocalePath(locale, '/')} className="inline-flex items-center">
                                <Image src={ICON.logo} alt="HanaLoop" width={136} height={24} className="h-5 w-auto sm:h-6" />
                            </Link>
                            <ContactCtaButton
                                locale={locale}
                                className="h-[40px] min-w-[148px] justify-center gap-2 px-4 text-[14px] leading-none font-medium sm:min-w-[172px] sm:gap-3 sm:px-5 sm:text-[16px]"
                                iconSrc="/icons/revamp/ic-arrow-up-right.png"
                                iconWidth={20}
                                iconHeight={20}
                                iconClassName="h-5 w-5"
                            />
                        </div>

                        <ul className="mt-[44px] space-y-[28px]">
                            <li>
                                <Link href={withLocalePath(locale, '/platform')} className={bodyText}>
                                    {mobileLinks.platform}
                                </Link>
                            </li>
                            <li>
                                <Link href={withLocalePath(locale, '/docs/intro')} className={bodyText}>
                                    {mobileLinks.insight}
                                </Link>
                            </li>
                            <li>
                                <Link href={withLocalePath(locale, '/company')} className={bodyText}>
                                    {mobileLinks.about}
                                </Link>
                            </li>
                            <li>
                                <a href="https://www.hana.eco" target="_blank" rel="noreferrer" className="inline-flex items-center gap-[10px] text-[16px] leading-none font-semibold text-white">
                                    <span>Hana eco</span>
                                    <Image src={ICON.link} alt="" width={24} height={24} aria-hidden="true" className="h-6 w-6 brightness-0 invert" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-auto">
                        <div className="flex items-center gap-[18px]">
                            <a href="https://www.linkedin.com/company/hanaloop" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <Image src={ICON.linkedin} alt="" width={24} height={22} aria-hidden="true" className="h-[22px] w-6" />
                            </a>
                            <a href="https://twitter.com/hanaloop" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                                <Image src={ICON.x} alt="" width={22} height={22} aria-hidden="true" className="h-[22px] w-[22px]" />
                            </a>
                        </div>

                        <div className="mt-[34px] space-y-2">
                            <p className={bodyText}>Email : info@hanaloop.com</p>
                            <p className={bodyText}>Phone : +82 0507-1337-9251</p>
                        </div>

                        <p className="mt-[26px] text-[14px] leading-none font-normal text-white/45">© {CURRENT_YEAR} HANALOOP, all rights reserved.</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto hidden max-w-[1440px] lg:block lg:min-h-[520px] lg:px-[64px] lg:pt-[98px] lg:pb-[46px]">
                <div className="grid grid-cols-[260px_260px_1fr] items-start gap-x-[48px] desktop:grid-cols-[300px_320px_1fr] desktop:gap-x-[76px]">
                    <div>
                        <p className="mb-[30px] text-[30px] leading-none font-medium text-white">Insight &amp; Blog</p>
                        <ul className="space-y-[18px]">
                            <li>
                                <Link href={withLocalePath(locale, '/docs/intro')} className={`${bodyText} transition hover:text-white/80`}>
                                    Insight
                                </Link>
                            </li>
                            {insightLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-[10px] ${bodyText} transition hover:text-white/80`}>
                                        <span>{item.label}</span>
                                        <Image src={ICON.link} alt="" width={20} height={20} aria-hidden="true" className="h-5 w-5 brightness-0 invert" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-[30px] text-[30px] leading-none font-medium text-white">Contact</p>
                        <ul className="space-y-[26px]">
                            <li className={bodyText}>Email: info@hanaloop.com</li>
                            <li className={bodyText}>Phone: +82 0507-1337-9251</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-end gap-[40px]">
                        <Link href={withLocalePath(locale, '/')} className="inline-flex items-center">
                            <Image src={ICON.logo} alt="HanaLoop" width={224} height={40} className="h-[40px] w-auto" />
                        </Link>
                        <ContactCtaButton
                            locale={locale}
                            iconSrc="/icons/revamp/ic-arrow-up-right.png"
                            iconWidth={20}
                            iconHeight={20}
                            iconClassName="h-[20px] w-[20px]"
                            className="h-[48px] gap-3 px-[39px] text-[16px] leading-none font-medium"
                        />
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-8 lg:mt-[148px] lg:grid lg:grid-cols-[1fr_auto] lg:items-end">
                    <p className={bodyText}>서울특별시 관악구 봉천로 545, 서울창업센터 관악 4층</p>
                    <div className="flex flex-col items-start gap-[18px] lg:items-end">
                        <Link href={withLocalePath(locale, '/privacy')} className={`${bodyText} transition hover:text-white/80`}>
                            Privacy policy
                        </Link>
                        <Link href={withLocalePath(locale, '/credits')} className={`${bodyText} transition hover:text-white/80`}>
                            Terms and conditions
                        </Link>
                        <p className={bodyText}>© {CURRENT_YEAR} HANALOOP, all rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
