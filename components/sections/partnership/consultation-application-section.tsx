import { getTranslations } from 'next-intl/server';

export async function PartnershipConsultationApplicationSection() {
    const t = await getTranslations('PartnershipConsultation');
    const descriptionLines = t.raw('descriptionLines') as string[];

    return (
        <section aria-label="Hana.eco Solution Consultation Application">
            <div className="mx-auto w-full max-w-[1440px] px-6 pt-[80px] sm:pt-20 lg:px-11 lg:pt-[150px]">
                <h2 className="whitespace-pre-line [font-size:clamp(28px,calc(15.55px+3.36vw),64px)] font-medium leading-[1.04] tracking-[-1px] text-[var(--color-brand-green)]">{t('heading')}</h2>

                <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-[54px] lg:grid-cols-[1fr_auto] lg:items-end">
                    <p className="[font-size:clamp(14px,calc(12.62px+0.37vw),18px)] font-medium leading-[1.6] tracking-[-0.02em] text-[var(--color-brand-green)]">
                        {descriptionLines.map((line, index) => (
                            <span key={`${line}-${index}`}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>

                    <div className="text-left lg:text-right">
                        <a
                            href="mailto:info@hanaloop.com"
                            className="block bg-[linear-gradient(90deg,#1FBD7D_0%,#0194FF_100%)] bg-clip-text [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] font-medium leading-[1.6] tracking-[-0.02em] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
                        >
                            info@hanaloop.com
                        </a>
                        <a
                            href="tel:+82050713379251"
                            className="mt-1 block bg-[linear-gradient(90deg,#1FBD7D_0%,#0194FF_100%)] bg-clip-text [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] font-medium leading-[1.6] tracking-[-0.02em] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
                        >
                            +82 0507-1337-9251
                        </a>
                    </div>
                </div>

                <div className="mt-10 h-px w-full bg-[#CFCFCF] lg:mt-[74px]" />
            </div>
        </section>
    );
}
