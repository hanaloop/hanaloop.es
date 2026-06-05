import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

export async function InsightHeroSection({ locale }: { locale: AppLocale }) {
    const t = await getTranslations({ locale, namespace: 'InsightHero' });

    return (
        <section className="relative h-[300px] overflow-hidden md:h-[400px] lg:h-[480px] xl:h-[480px] 2xl:h-[480px]" aria-label="HanaLoop Insight Hero">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/site/docs/hero-bg.png')" }} />

            <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center px-4 text-white">
                <h1 className="text-center [font-size:clamp(28px,calc(15.55px+3.36vw),64px)] font-semibold leading-none">{t('heading')}</h1>
                <Link
                    href={withLocalePath(locale, '/partnership')}
                    className="mt-6 h-[48px] lg:mt-12 inline-flex min-w-[176px] items-center justify-center gap-3 rounded-full border border-white px-6 text-base font-medium leading-none text-white transition hover:bg-white/10"
                >
                    <span>{t('contactLabel')}</span>
                    <Image src="/site/icons/ic-arrow-up-right.png" alt="" width={20} height={20} className="h-5 w-5" aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
}
