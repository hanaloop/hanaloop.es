type SectionBlockProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  containerStyle?: string;
  children: React.ReactNode;
};

export default function SectionBlock({ title, containerStyle, children, subtitle }: SectionBlockProps) {
  return (
    <div className={`w-full py-[50px] text-center [word-break:keep-all] lg:py-[100px] ${containerStyle ?? ''}`}>
      <div>
        {title ? (
          <div className="mb-[25px] flex w-full flex-col items-center justify-center px-14 text-2xl font-bold transition delay-150 sm:text-3xl md:mb-[50px] md:w-full xl:text-4xl">
            <h2 className="inline font-semibold leading-[40px] transition delay-150 lg:leading-[60px]">{title}</h2>
            <h3 className="inline font-semibold text-base text-gray-400 transition delay-150">{subtitle}</h3>
          </div>
        ) : null}
        <div>{children}</div>
      </div>
    </div>
  );
}
