import Link from "next/link";
import { useContext } from "react";
import SiteContext from "./SiteContext";

type EditPageLinkProps = {
  filePath?: string, 
  label: string,
}

export default function EditPageLink({filePath, label}: EditPageLinkProps) {
  const siteContext = useContext(SiteContext);
  return (
    <div>
      {
      siteContext.editUrl && 
        <a href={siteContext.editUrl + filePath}>{label}</a>
      }
    </div>
  )
}
