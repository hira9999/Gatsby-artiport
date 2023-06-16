import { graphql, useStaticQuery } from 'gatsby'

type TSiteMetadata = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      siteUrl: string
      image: string
    }
  }
}

export const useSiteMetadata = () => {
  const siteMetadata = useStaticQuery<TSiteMetadata>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          image
        }
      }
    }
  `)
  return siteMetadata.site.siteMetadata
}
