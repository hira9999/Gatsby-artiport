import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { LegacyRef } from 'react'
import { HiOutlineExternalLink } from '@react-icons/all-files/hi/HiOutlineExternalLink'
import { RiGithubLine } from '@react-icons/all-files/ri/RiGithubLine'
import useElementOnScreen from 'hooks/useElementOnScreen'

type ProjectProps = {
  title: string
  categories: string[]
  date: string
  summary: string
  github: string
  external: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const Project = ({
  title,
  categories,
  summary,
  github,
  external,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
}: ProjectProps) => {
  const [intersection, isVisible] = useElementOnScreen()

  return (
    <li
      ref={intersection as LegacyRef<HTMLLIElement>}
      className={`${
        isVisible ? 'visible' : 'inVisible'
      } project-wrap grid grid-cols-12 gap-2 text-gray`}
    >
      <div className="project-thumbnail relative transition">
        <a href="" className="h-full w-full" target="_blank">
          <GatsbyImage
            image={gatsbyImageData}
            alt={title}
            className="h-full rounded-md drop-shadow-lg hover:drop-shadow-2xl opacity-70 hover:opacity-90 ring-4 ring-darkGreen hover:ring-green transition"
          />
        </a>
      </div>

      <div className="project-content flex flex-col justify-center space-y-3 relative h-full">
        <span className="text-sm text-green">Featured Project</span>
        <h3 className="text-2xl font-bold">
          <a href="" className="hover:text-green transition">
            {title}
          </a>
        </h3>

        <div className="rounded-md bg-lightNavy drop-shadow-lg p-5 relative z-10">
          {summary}
        </div>

        <ul className="project-tech">
          {categories.map(category => (
            <span key={category}>{category}</span>
          ))}
        </ul>

        <div className="project-links">
          <a href={github} target="_blank" className="group cursor-pointer p-1">
            <RiGithubLine className="w-6 h-6  group-hover:text-green transition" />
          </a>
          <a
            href={external}
            target="_blank"
            className="group cursor-pointer p-1"
          >
            <HiOutlineExternalLink className="w-6 h-6 group-hover:text-green transition" />
          </a>
        </div>
      </div>
    </li>
  )
}

export default Project
