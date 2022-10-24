import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import MenuItem from "../libs/MenuItem"
import SiteContext from "./SiteContext";
import Image from '../components/theme/Image';

type SideMenuProps = {
    level?: number
    menu?: MenuItem
}

function MenuNode({menu, level}: SideMenuProps) {
  const margin = `${level! * 0.5}rem`;
  return (
    <>
      <div className="flex justify-between">
        <div style={ { marginLeft: margin } } className="w-full py-2 px-4 text-gray-600">{menu?.label}</div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <HierarchicalMenu menu={menu} level={level! + 1}/>
    </>
  )
}

function MenuItem ({menu, level}: SideMenuProps) {
    
  const router = useRouter();
  
  const questionMarkPos = router.asPath.indexOf('?');
  const currentPath = (questionMarkPos > 0) ? router.asPath.substring(0, questionMarkPos): router.asPath;
  const activeClass = (currentPath === menu?.link) ? "bg-gray-200" : "";

  const textClass = (level && level > 0) ? ' text-xs ' : '';
  const margin = `${level! * 0.5}rem`;
  return (
    <>
    {
      (menu?.subItems === null) 
          ? <Link key={menu?.label} href={menu?.link} passHref><a style={ { marginLeft: margin } } className={activeClass + ` ${textClass} block py-2 px-4 hover:bg-primary hover:text-gray-50 transition duration-200`}>{menu?.label}</a></Link>
          : (menu?.subItems?.length && menu?.subItems?.length > 0) 
              ? <MenuNode menu={menu} level={level}/> : ""
    }
    </>
  )
}

function HierarchicalMenu ({menu, level}: SideMenuProps) {
  return (
    <>
      { 
        menu && menu?.subItems?.map((item, idx: number) => {
          return (
              <MenuItem key={idx} menu={item} level={level}/>
          )
        })
      }
    </>
  )
}

export default function SideMenu({ menu }:  SideMenuProps) {

  const siteContext = useContext(SiteContext);

  return (
    <div className="bg-gray-50 text-gray-800 w-full absolute inset-y-0 left-0 transform -translate-x-0 transition duration-200">
    
      {/* Toggle above to -translate-x-full to contract */}
      
      {/* <!-- Org Heading --> */}
      <div className="relative bg-gray-500"> 
          {/* <!-- background for tinting --> */}
          {siteContext.projectImage && <Image className="h-24 w-full object-cover mix-blend-overlay"  src={siteContext.projectImage}  alt="Banner"/>}
          <div className="absolute bottom-0 left-0 w-full flex justify-center ">
          <div className="text-xl font-bold text-white drop-shadow-sm"><Link href="/" >{siteContext.projectName}</Link> </div>
          </div>
      </div>
      
      {/* <!-- Navigation Menu --> */}
      <nav className="mt-2 text-sm">
          <HierarchicalMenu menu={menu} level={0}/>
      </nav>
  </div>
  )
}
