import { useContext } from "react";
import SiteContext from "../SiteContext";

type ImageProps = {
  className?: string
  src: string
  alt: string
}

/**
 * Image that prepends siteContext.basePath
 * @param param
 * @returns 
 */
export default function Image({src, className, alt}: ImageProps)  {
  
  const siteContext = useContext(SiteContext);

  const srcLink = src.startsWith('http') || !src.startsWith('/') ? src : siteContext.basePath + src; 

  return (
    <img className={className} src={srcLink} alt={alt} />
  )
}
