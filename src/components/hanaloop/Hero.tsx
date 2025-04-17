import useBaseUrl from "@docusaurus/useBaseUrl"

export type BackgroundProps = {
  imageUrl?: string
  imageDescription?: string
  solidColor?: string
  gradientFrom?: string
  gradientTo?: string 
}

export type HeroProps = {
  header: any
  tagline?: string
  button?: {
    label: string
    href: string
  }
}

export default function Hero({header, tagline, button, background}: HeroProps & {background: BackgroundProps}) {
  
  let containerClass = background.imageUrl ? "bg-cover bg-center" :
    (background.solidColor ? `${background.solidColor} ` : 
    `bg-gradient-to-r ${background.gradientFrom} ${background.gradientTo} justify-center items-center `);
  
  containerClass = 'h-[19rem] py-16 text-gray-100 flex items-center ' + containerClass;
  
  /* v2.1 */
  const containerStyle = background.imageUrl ? `linear-gradient(to top, transparent, #00000030 90%), url(${useBaseUrl(background.imageUrl)})`: '';

  return (
    <div id="hero" className="relative [word-break:keep-all]">
      <div className={containerClass} style={{backgroundImage: containerStyle}}>
        <div className="px-8 w-full flex mx-auto" >
          <div id="hero-label" className="w-full flex-col gap-6 flex justify-center text-center md:w-4/5 md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold drop-shadow animation-fadeInUp">{header}</h1>
            <div className="text-lg md:text-xl drop-shadow animation-fadeInUp">{tagline}</div>
            {
              button && <div className="flex justify-center md:justify-start text-base"><a href={button.href}><button className="px-6 py-2 rounded-md bg-blue-500 text-gray-200 font-bold hover:bg-blue-600 ">{button.label}</button></a></div>
            }
          </div>
        </div>
      </div>

      {/* v2.1 */}
      {
        background.imageDescription && 
          <div className="group absolute bottom-10 right-10 ">
            <div className="group-hover:hidden absolute bottom-0 right-1 p-2 rounded border border-orange-200 text-xs text-gray-100 bg-black bg-opacity-30 whitespace-nowrap">사진 정보</div>
            <div className="hidden group-hover:flex w-48 p-2 rounded border border-orange-200 text-xs text-gray-100 bg-black bg-opacity-30">{background.imageDescription}</div>
          </div>
      }

      {/* <div className="p-2 w-48 rounded border border-orange-200 text-xs text-gray-100 bg-black bg-opacity-30 absolute bottom-10 right-10 ">{background.imageDescription}</div> */}
    </div>
  )
}
