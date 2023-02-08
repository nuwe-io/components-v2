import { siteMetadataDev as siteMetadata } from '@nuwe/lib'

interface CommonSEOProps {
  title: string
  description: string
  ogType: string
  ogImage: string
  twImage: string
  canonicalUrl?: string
  url: any
  Head: React.FC<any>
}

const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  twImage,
  canonicalUrl,
  url,
  Head
}: CommonSEOProps) => {
  return (
    <Head key='seo-header'>
      <title>{title}</title>
      <meta name='robots' content='follow, index' />
      <meta name='description' content={description} />
      {/* Open Graph */}
      <meta property='og:title' content={title} key='ogtitle' />
      <meta property='og:description' content={description} key='ogdesc' />
      <meta property='og:image' content={ogImage} />
      <meta property='og:site_name' content={siteMetadata.title} key='ogsitename' />
      <meta name='author' content={'Nuwe'} />
      <meta property='og:type' content={ogType} key='ogtype' />
      <meta property='og:url' content={`${siteMetadata.siteUrl}${url}`} key='ogurl' />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={siteMetadata.twitter} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={twImage} />
      <meta name='twitter:creator' content={'NuweIo'} key='twhandle' />
      <meta
        name='keywords'
        content='HR, Hiring, Tech screenning, Pre-employment assessment, Rviewer, Testgorilla, Test Gorilla, Assessment, hackathons, tech challenges, retention, employer branding, branding'
      />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='canonical' href={canonicalUrl ? canonicalUrl : `${siteMetadata.siteUrl}${url}`} />
    </Head>
  )
}

interface PageSEOProps {
  title: string
  description: string
  url: string
  Head: React.FC<any>
}

export const PageSEO = ({ title, description, url, Head }: PageSEOProps) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.linkedinBanner
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  return (
    <CommonSEO
      url={url}
      Head={Head}
      title={title}
      description={description}
      ogType='website'
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  )
}
