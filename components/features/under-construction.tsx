import Link from 'next/link';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

type UnderConstructionProps = {
  locale?: AppLocale;
};

const copy: Record<AppLocale, { eyebrow: string; heading: string; description: string; cta: string }> = {
  ko: {
    eyebrow: 'Coming Soon',
    heading: '페이지 준비 중입니다',
    description: '더 나은 서비스로 찾아뵐 수 있도록 준비하고 있습니다.\n빠른 시일 내에 오픈할 예정입니다.',
    cta: '홈으로 돌아가기',
  },
  en: {
    eyebrow: 'Coming Soon',
    heading: 'Page Under Construction',
    description: "We're working hard to bring you something better.\nThis page will be available soon.",
    cta: 'Back to Home',
  },
  es: {
    eyebrow: 'Próximamente',
    heading: 'Página en construcción',
    description: 'Estamos trabajando para ofrecerte algo mejor.\nEsta página estará disponible pronto.',
    cta: 'Volver al inicio',
  },
};

export function UnderConstruction({ locale = 'ko' }: UnderConstructionProps) {
  const text = copy[locale];

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-5 py-24 text-center md:px-8 lg:px-16">
      <p
        className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#1FBD7D]"
        style={{ fontFamily: 'TT Fors Trial, sans-serif' }}
      >
        {text.eyebrow}
      </p>
      <h1
        className="mt-5 text-[32px] font-medium leading-[1.15] tracking-[-0.03em] text-[#131313] md:text-[48px] lg:text-[56px]"
        style={{ fontFamily: 'TT Fors Trial, sans-serif' }}
      >
        {text.heading}
      </h1>
      <p
        className="mt-5 max-w-[480px] whitespace-pre-line text-[15px] leading-[1.7] text-[#646464] md:text-[16px]"
        style={{ fontFamily: 'Pretendard, sans-serif' }}
      >
        {text.description}
      </p>
      <Link
        href={withLocalePath(locale, '/')}
        className="mt-10 inline-flex h-[50px] items-center gap-2 rounded-full px-8 text-[15px] font-medium text-white transition hover:opacity-90"
        style={{ background: 'linear-gradient(90deg, #1FBD7D 0%, #0194FF 100%)' }}
      >
        {text.cta}
      </Link>
    </section>
  );
}
