import Script from 'next/script'

type GoogleAnalyticsProps = {

}

export default function GoogleAnalytics({ }: GoogleAnalyticsProps) {

  const gaMeasurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  return (
    <>
      {gaMeasurementId && <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} />}
      {gaMeasurementId && <Script id="ganalytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>}
    </>
  )
}