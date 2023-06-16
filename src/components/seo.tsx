import { useSiteMetadata } from '../hooks/useSiteMetadata'
import React from 'react'

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
  author?: string
}

const SEO: React.FC<React.PropsWithChildren<SEOProps>> = ({
  title,
  description,
  author,
  pathname,
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    author: defaultAuthor,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author: author || defaultAuthor,
    url: `${siteUrl}${pathname || ``}`,
  }
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UFT-8" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={seo.title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:site" content={seo.url} />
      <meta name="twitter:creator" content={seo.author} />
      {children}
    </>
  )
}

export default SEO
