import Hero, { BackgroundProps, HeroProps } from "./Hero";

type DefaultContentContainerProp = {
  background?: BackgroundProps,
  hero?: HeroProps,
  children: JSX.Element
}

export default function DefaultContentContainer({background, hero, children}: DefaultContentContainerProp) {
  return (
    <>
      {/* <Head>
        <title>{meta && meta.title || siteContext.title}</title>
        <meta name="description" content={siteContext.tagline} />
        <link rel="icon" href={siteContext.favicon} />
      </Head> */}
      <div>
        {
          !hero ? 
            <div className={`h-16 ${background?.solidColor || 'bg-gray-500'}`} />
            :
            <Hero background={background!} 
            header={hero.header}
            tagline={hero.tagline} />
        }
      </div>
      <div>
        {children}
      </div>
    </>
  )
}