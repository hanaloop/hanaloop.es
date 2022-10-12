import { useContext } from "react"
import Link from "next/link"
import { contextualPath } from "../libs/content.util"
import SiteContext from "./SiteContext"

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

  const siteContext = useContext(SiteContext);
  
  let containerClass = background.imageUrl ? "bg-cover bg-center" :
    (background.solidColor ? `${background.solidColor} ` : 
    `bg-gradient-to-r ${background.gradientFrom} ${background.gradientTo} justify-center items-center `);
  
  containerClass = 'h-80 py-6 text-gray-100 ' + containerClass;
  
  /* v2.1 */
  const containerStyle = background.imageUrl ? `linear-gradient(to top, transparent, #00000030 90%), url(${contextualPath(siteContext, background.imageUrl)})`: '';

  return (
    <div id="hero" className="relative [word-break:keep-all]">
      <div className={containerClass} style={{backgroundImage: containerStyle}}>
        <div className="px-8 w-full flex mx-auto" >
          <div id="hero-label" className="pt-16 space-y-3  w-full justify-center text-center md:w-4/5 md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold drop-shadow">{header}</h1>
            <div className="text-xl md:text-2xl drop-shadow ">{tagline}</div>
            {
              button && <div className="pt-5 flex justify-center md:justify-start"><Link href={button.href} passHref><button className="p-2 rounded-md border-2 text-gray-200 font-bold">{button.label}</button></Link></div>
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
