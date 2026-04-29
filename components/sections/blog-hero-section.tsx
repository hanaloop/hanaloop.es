import Link from 'next/link';

export function BlogHeroSection() {
  return (
    <section
      className="relative h-[160px] overflow-hidden md:h-[280px] lg:h-[360px] xl:h-[420px] 2xl:h-[480px]"
      aria-label="HanaLoop Blog Hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/revamp/blog-hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center px-4 text-white">
        <h1 className="text-center text-[28px] font-semibold leading-none md:text-[42px] xl:text-[56px] 2xl:text-[64px]">
          HanaLoop Blog
        </h1>
        <Link
          href="/demo_request"
          className="mt-5 inline-flex h-12 min-w-[176px] items-center justify-center gap-3 rounded-full border border-white px-6 text-base font-medium leading-none text-white transition hover:bg-white/10"
        >
          <span>Contact Us</span>
          <img src="/icons/revamp/ic-arrow-up-right.png" alt="" className="h-5 w-5" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
