import { useContext, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link"
import { useRouter } from "next/router";
import { classNames } from "../libs/type.utils";
import NavLink from "./NavLink";
import Image from '../components/theme/Image';
import QuickSearch from "./QuickSearch"
import SiteContext from "./SiteContext";

type NavBarProps = {
  pageYOffset?: number
}

const STD_CONTENT_PATH = ['/docs', '/products', '/blog'];

export default function NavBar({pageYOffset}: NavBarProps) {

  const [mobileMenuOpen, setMobileMenuOpen] =  useState(false);
  const siteContext = useContext(SiteContext);

  const router = useRouter();
  const pathSeparatorPos = router.asPath.indexOf('/', 1);
  const rootContextPath =  router.asPath.substring(0, pathSeparatorPos > 0 ? pathSeparatorPos : router.asPath.length);
  
  const disableTransparency = STD_CONTENT_PATH.includes(rootContextPath) || (pageYOffset && pageYOffset > 0);
  
  const containerClassName = classNames(
    disableTransparency ? 'shadow bg-opacity-100 text-gray-700' : 'bg-opacity-0 shadow-none text-gray-50 bg-gradient-to-b from-[#000000aa]',
    `bg-gray-100 top-0 h-16 fixed inset-x-0 z-50 transition-all duration-300`
  );

  return (
    <nav className={containerClassName}>

      <div className="px-4 ">
        <div className="flex  h-16 items-center justify-between ">

          <div className="flex space-x-4 items-center">
            {/* <!-- Logo --> */}
            <Link href="/" passHref>
              <a className="flex  px-3">
                {
                  siteContext.themeConfig.navbar.logo.component || 
                  <Image className="h-6 mr-2" src={siteContext.themeConfig.navbar.logo.src} alt="Logo"/>
                }
                <span className="font-bold whitespace-nowrap">{siteContext.title}</span>
              </a>
            </Link>

            <QuickSearch />
          </div>

          <div>
            {/* <!-- Primary Nav --> */}
            <div className="hidden md:flex space-x-4">
              {
                siteContext.themeConfig.navbar.items.map((item: any, idx: number) =>{
                  return (
                    <NavLink key={idx} item={item} />
                  )
                })
              }
            </div>

            {/* <!-- Secondary Nav (login commented out) -->
            <div className="hidden sm:flex ">
                <a href="" className="px-3 hover:text-gray-800">Login</a>
                <a href="" className="py-2 px-3 hover:text-gray-800 bg-yellow-400 rounded text-yellow-800 hover:bg-yellow-300 transition duration-300">Signup</a>
            </div>
            */}

            {/* <!-- Mobile Button (replaces menu items con small view) --> */}
            <div className="md:hidden flex">
              <button id="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg> 
              </button>
            </div>
            
          </div>
        </div>
    </div>

    {/* v2.1: Mobile menu */}
    <Transition
      show={mobileMenuOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {(ref) => (
        <div className="md:hidden bg-gray-100" id="mobile-menu">
          <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
          {
            siteContext.themeConfig.navbar.items.map((item: any, idx: number) => {
              return (
                <div className="block text-gray-700" key={idx} >
                  <NavLink item={item} />
                </div>
              )
            })
          }
          </div>
        </div>
      )}
    </Transition>
</nav>
  )
}
