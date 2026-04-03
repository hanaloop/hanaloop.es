import { useContext } from "react";
import { contextualPath } from "../../libs/content.util";
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

  const srcLink = contextualPath(siteContext, src); 

  return (
    <img className={className} src={srcLink} alt={alt} />
  )
}
