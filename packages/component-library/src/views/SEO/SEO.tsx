import { siteMetadataDev as siteMetadata } from '@nuwe/lib'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface CommonSEOProps {
  title: string
  description: string
  ogType: string
  ogImage: string
  twImage: string
  canonicalUrl?: string
}

const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  twImage,
  canonicalUrl
}: CommonSEOProps) => {
  const router = useRouter()
  return (
    <Head>
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
      <meta property='og:url' content={`${siteMetadata.siteUrl}${router.asPath}`} key='ogurl' />
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
      <link
        rel='canonical'
        href={canonicalUrl ? canonicalUrl : `${siteMetadata.siteUrl}${router.asPath}`}
      />
    </Head>
  )
}

interface PageSEOProps {
  title: string
  description: string
}

export const PageSEO = ({ title, description }: PageSEOProps) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.linkedinBanner
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType='website'
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  )
}
