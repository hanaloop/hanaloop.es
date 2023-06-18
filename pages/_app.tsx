import '../styles/globals.css'
import '../styles/prism.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import SiteContext from '../components/SiteContext'
import * as siteConfig from '../next-portal.config'

// const members = require ('../content/members.json');
import members from '../content/members';
import GoogleAnalytics from '../components/plugins/GoogleAnalytics'
const siteContext = { ...siteConfig, members };

function MyApp({ Component, pageProps }: AppProps & { pageProps: any }) {

  return (
    <>
      <GoogleAnalytics />
      <SiteContext.Provider value={siteContext}>
        <Layout meta={pageProps?.frontMatter}>
          <Component {...pageProps} />  
        </Layout>
      </SiteContext.Provider>
    </>
  )
}

export default MyApp
