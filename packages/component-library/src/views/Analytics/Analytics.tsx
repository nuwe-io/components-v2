import { siteMetadataDev as siteMetadata } from '@nuwe/lib'

import GA from './GoogleAnalytics'

export const Analytics = () => {
  return <>{siteMetadata.analytics.googleAnalyticsId && <GA />}</>
}
