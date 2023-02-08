import { siteMetadataDev as siteMetadata } from '@nuwe/lib'

import GA, { GAScriptProps } from './GoogleAnalytics'

type AnalyticsProps = GAScriptProps

export const Analytics = ({ Script }: AnalyticsProps) => {
  return <>{siteMetadata.analytics.googleAnalyticsId && <GA Script={Script} />}</>
}
