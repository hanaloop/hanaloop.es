type SectionBlockProp = {
  title?: string;
  containerStyle?: string;
  children: JSX.Element;
};

export default function SectionBlock({ title, containerStyle, children }: SectionBlockProp) {
  return (
    <div className={`text-center [word-break:keep-all] dark:bg-slate-800 ${containerStyle} py-[100px]`}>
      <div className="w-full flex flex-col items-center">
        {title && (
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center transition delay-150 md:my-[50px] my-[25px] px-14 w-[85%] md:w-full">
            {/* https://ionic.io/ionicons */}
            {/* <svg className="h-6 mr-1 " strokeWidth={4} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" ><title>Leaf</title><path d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg> */}
            <h2 className="font-semibold  inline transition delay-150 leading-[40px] lg:leading-[60px]">{title}</h2>
          </div>
        )}
        <div className={`p-4 `}>{children}</div>
      </div>
    </div>
  );
}
