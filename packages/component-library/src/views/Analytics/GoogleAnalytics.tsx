import Script from 'next/script'

import { siteMetadataDev as siteMetadata } from '@nuwe/lib'

const GAScript = () => {
  return (
    <>
      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${siteMetadata.analytics.googleAnalyticsId}');
      `}
      </Script>
    </>
  )
}

export const GANoScript = () => (
  <noscript
    dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${siteMetadata.analytics.googleAnalyticsId}" height="0" width="0" style="display: none; visibility: hidden;" />`
    }}
  />
)

export default GAScript
declare const window: any

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logEvent = (action: string, category: string, label: string, value: number) => {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
