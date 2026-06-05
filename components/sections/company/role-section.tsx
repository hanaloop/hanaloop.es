'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type RoleSection = {
  id: string;
  title: string;
  badge: string;
  recruitments: string;
  quota: string;
  dueDate: string;
  jobDescription: {
    responsibilities: string[];
    requirements: string[];
  };
  condition: {
    employmentType: string[];
    location: string[];
    preferred: string[];
  };
  stack: string[];
  process: {
    howToApply: string[];
    steps: string[];
  };
};

function GradientHeading({ children }: { children: string }) {
  return (
    <p className="inline-block text-gradient-brand [font-size:clamp(16px,calc(13.925px+0.5607vw),22px)] font-medium leading-[1.3] tracking-[-0.02em]">
      {children}
    </p>
  );
}

export function CompanyRoleSection() {
  const t = useTranslations('CompanyRole');
  const roleSections = t.raw('sections') as RoleSection[];
  const [openId, setOpenId] = useState<string>('experienced');

  return (
    <section aria-label={t('title')} className="pb-[72px] md:pb-[84px] xl:pb-[92px]">
      <div className="mx-auto w-full max-w-[1440px] px-0 md:px-10 xl:px-[108px]">
        <div className="px-4 pb-10 pt-8 md:px-0 md:pb-0 md:pt-0">
          <div className="grid grid-cols-1 gap-5 md:gap-8 xl:grid-cols-[300px_minmax(0,1fr)] xl:gap-[74px]">
            <h2 className="inline-block text-gradient-brand [font-size:clamp(24px,calc(21.925px+0.5607vw),30px)] font-semibold leading-[1.2] tracking-[-0.02em] md:pt-1">
              {t('title')}
            </h2>

            <div className="space-y-4 md:space-y-5">
              {roleSections.map((section) => {
                const isOpen = openId === section.id;

                return (
                  <article key={section.id}>
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? '' : section.id)}
                      className="flex w-full items-center gap-3 border-b border-b-[#CDCDCD] py-3 text-left md:gap-4"
                      aria-expanded={isOpen}
                    >
                      <span className="order-1 rounded-[99px] bg-[linear-gradient(90deg,#1FBD7D_0%,#0194FF_100%)] px-[10px] py-[5px] [font-size:clamp(13px,calc(11.271px+0.4673vw),18px)] font-bold leading-[1] tracking-[-0.02em] text-white md:hidden">
                        {section.badge}
                      </span>
                      <div className="order-2 flex min-w-0 flex-1 items-center gap-2 md:order-1 md:gap-3">
                        <span className="[font-size:clamp(16px,calc(13.234px+0.7477vw),24px)] font-semibold leading-[1.35] tracking-[-0.02em] text-[var(--color-text-subtle)]">{section.title}</span>
                        <span className="hidden rounded-none bg-[linear-gradient(90deg,#1FBD7D_0%,#0194FF_100%)] px-[9px] py-[4px] [font-size:clamp(13px,calc(11.271px+0.4673vw),18px)] font-bold leading-[1] tracking-[-0.02em] text-white md:inline-block">
                          {section.badge}
                        </span>
                      </div>
                      <Image
                        src="/site/company/find-role-toggle.png"
                        alt=""
                        width={22}
                        height={13}
                        aria-hidden="true"
                        className={`order-3 ml-auto h-auto w-auto flex-none transition-transform ${isOpen ? '' : 'rotate-180'}`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isOpen ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="border-t border-t-[#CDCDCD] bg-[#F2FEFF] p-5 md:p-8">
                        <div className="space-y-7 md:space-y-8">
                          <div>
                            <GradientHeading>{t('labels.recruitments')}</GradientHeading>
                            <p className="mt-2 [font-size:clamp(14px,calc(11.925px+0.5607vw),20px)] font-normal leading-[1.6] tracking-[-0.02em] text-[var(--color-text-body)]">{section.recruitments}</p>
                          </div>

                          <div>
                            <GradientHeading>{t('labels.quota')}</GradientHeading>
                            <p className="mt-2 [font-size:clamp(14px,calc(11.925px+0.5607vw),20px)] font-normal leading-[1.6] tracking-[-0.02em] text-[var(--color-text-body)]">{section.quota}</p>
                          </div>

                          <div>
                            <GradientHeading>{t('labels.dueDate')}</GradientHeading>
                            <p className="mt-2 [font-size:clamp(14px,calc(11.925px+0.5607vw),20px)] font-normal leading-[1.6] tracking-[-0.02em] text-[var(--color-text-body)]">{section.dueDate}</p>
                          </div>

                          <div>
                            <GradientHeading>{t('labels.jobDescription')}</GradientHeading>
                            <div className="mt-2 space-y-3 [font-size:clamp(14px,calc(11.925px+0.5607vw),20px)] leading-[1.6] tracking-[-0.02em] text-[var(--color-text-body)]">
                              <p className="font-semibold text-[var(--color-text-subtle)]">{t('labels.responsibilities')}</p>
                              {section.jobDescription.responsibilities.map((item) => (
                                <p key={item} className="font-normal">
                                  {item}
                                </p>
                              ))}
                              <p className="pt-1 font-semibold text-[var(--color-text-subtle)]">{t('labels.requirements')}</p>
                              <ul className="space-y-1">
                                {section.jobDescription.requirements.map((item) => (
                                  <li key={item} className="font-normal">
                                    • {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div>
                            <GradientHeading>{t('labels.condition')}</GradientHeading>
                            <div className="mt-2 space-y-3 [font-size:clamp(14px,calc(11.925px+0.5607vw),20px)] leading-[1.6] tracking-[-0.02em] text-[var(--color-text-body)]">
                              <p className="font-semibold text-[var(--color-text-subtle)]">{t('labels.employmentType')}</p>
                              <ul className="space-y-1">
                                {section.condition.employmentType.map((item) => (
                                  <li key={item} className="font-normal">
                                    • {item}
                                  </li>
                                ))}
                              </ul>
                              <p className="pt-1 font-semibold text-[var(--color-text-subtle)]">{t('labels.location')}</p>
                              <ul className="space-y-1">
                                {section.condition.location.map((item) => (
                                  <li key={item} className="font-normal">
                                    • {item}
                                  </li>
                                ))}
                              </ul>
                              <p className="pt-1 font-semibold text-[var(--color-text-subtle)]">{t('labels.preferred')}</p>
                              <ul className="space-y-1">
                                {section.condition.preferred.map((item) => (
                                  <li key={item} className="font-normal">
                                    • {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div>
                            <GradientHeading>{t('labels.technologyStack')}</GradientHeading>
                            <ul className="mt-2 space-y-1 [font-size:clamp(14px,calc(11.925px+0.5607vw),20px)] font-normal leading-[1.6] tracking-[-0.02em] text-[var(--color-text-body)]">
                              {section.stack.map((item) => (
                                <li key={item}>• {item}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <GradientHeading>{t('labels.applicationAndSelection')}</GradientHeading>
                            <div className="mt-2 space-y-3 [font-size:clamp(14px,calc(11.925px+0.5607vw),20px)] leading-[1.6] tracking-[-0.02em] text-[var(--color-text-body)]">
                              <p className="font-semibold text-[var(--color-text-subtle)]">{t('labels.howToApply')}</p>
                              <ul className="space-y-1">
                                {section.process.howToApply.map((item) => (
                                  <li key={item} className="font-normal">
                                    • {item}
                                  </li>
                                ))}
                              </ul>
                              <p className="pt-1 font-semibold text-[var(--color-text-subtle)]">{t('labels.selectionProcess')}</p>
                              <ul className="space-y-1">
                                {section.process.steps.map((item) => (
                                  <li key={item} className="font-normal">
                                    • {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
