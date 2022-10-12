

type SectionBlockProp ={
  title?: string
  containerStyle?: string
  children: JSX.Element
}

export default function SectionBlock({title, containerStyle, children}: SectionBlockProp) {
  return (
    <div className={`py-8 text-center [word-break:keep-all]  ${containerStyle} `}>
      <div className="">
        { title && <div className="flex items-center justify-center hover:text-lime-700 transition delay-150">
          {/* https://ionic.io/ionicons */}
          <svg className="h-6 mr-1 " strokeWidth={4} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" ><title>Leaf</title><path d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
          <h2 className="el-heading inline hover:text-lime-700 transition delay-150">{title}</h2>
        </div>}
        <div className={`p-4 text-gray-700`}>
          {children}
        </div>
      </div>
    </div>
  )
}
