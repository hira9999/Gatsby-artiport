import Footer from 'components/Common/Footer'
import Header from 'components/Common/Header'
import Sidebar from 'components/Common/Sidebar'
import Spinner from 'components/Common/Spinner'
import AboutSection from 'components/Section/About/AboutSection'
import ContactSection from 'components/Section/Contact/ContactSection'
import IndexSection from 'components/Section/Index/IndexSection'
import WorkSection from 'components/Section/Work/WorkSection'
import SEO from 'components/seo'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'

export type ProjectsItem = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
      categories: string[]
      date: string
      external: string
      github: string
      thumbnail: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: ProjectsItem[]
    }
  }
}

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1700)
  }, [])

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-darkNavy">
          <Spinner />
        </div>
      ) : (
        <div>
          <Header />
          <Sidebar direction="left" />
          <Sidebar direction="right" />
          <main className="max-w-screen-2xl min-h-screen mx-auto px-10 lg:px-36 md:px-24">
            <IndexSection />
            <AboutSection />
            <WorkSection projects={edges} />
            <ContactSection />
            <Footer />
          </main>
        </div>
      )}
    </>
  )
}

export default IndexPage

export const Head = () => <SEO />

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: ASC } }]
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            categories
            github
            external
            date(formatString: "YYYY.MM.DD.")
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 700, height: 400)
              }
            }
          }
        }
      }
    }
  }
`
