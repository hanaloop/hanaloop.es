import {useContext} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SiteContext from './SiteContext';
import NavBar from './NavBar';
import Image from '../components/theme/Image';
import { useScrollPosition } from '../libs/hooks';

type LayoutProps = {
    meta?: any,
    frontMatter?: any,
    children: JSX.Element
}

export default function Layout({ children, meta }: LayoutProps) {

  const pageYOffset = useScrollPosition();

  const siteContext = useContext(SiteContext);

  return (
    <>
      <Head>
        <title>{meta && meta.title || siteContext.title}</title>
        <meta name="description" content={meta && meta.description || siteContext.tagline} />
        <meta name="keywords" content={meta && meta.keywords || siteContext.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href={siteContext.favicon} />
      </Head>

      <div className=" [word-break:keep-all]">
        <NavBar pageYOffset={pageYOffset}/>

        {/* <!-- Content | SideLayout --> */}
        <div className="content">
            {children}
        </div>

        <footer className="p-4 items-center bg-gray-700 text-gray-50 -z-20">
          <div className="mb-4">
            {/* <!-- Logo --> */}
            <Link href="/" passHref>
              <a className="flex ">
                {
                  siteContext.themeConfig.navbar.logo.component || 
                  <Image className="h-6 mr-2" src={siteContext.themeConfig.navbar.logo.src} alt="Logo" />
                }
                <span className="font-bold whitespace-nowrap">{siteContext.title}</span>
              </a>
            </Link>
          </div>
          <div className="flex">
            {
              siteContext?.themeConfig.footer?.links.map( (link: any, index: number) => {
                return (
                  <div key={index} className="flex-auto">
                    <div className='font-bold'>{link.title}</div>
                    {
                      link.items.map( (linkItem: any) => 
                      <Link href={linkItem.href || linkItem.to} key={linkItem.label} passHref>
                        <a className="block text-gray-400 hover:underline" >{linkItem.label}</a>
                      </Link>)
                    }
                  </div>
                )
              })
            }
          </div>
          <div className="py-2 flex justify-center text-gray-100">
            <div className="text-center">
              <div>{siteContext.themeConfig.footer.copyright}</div>
              <div>{siteContext.themeConfig.footer.address}</div>
              <div>{siteContext.themeConfig.footer.contact}</div>
              <div className="text-xs text-gray-400">Site update: { (new Date()).toISOString().substring(0, 10) }</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
