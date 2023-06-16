import React from 'react'
import { ProjectsItem } from 'pages'
import Project from './Project'

type ProjectsProps = {
  projects: ProjectsItem[]
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <ul className="space-y-32">
      {projects.map(({ node: { frontmatter } }, idx) => (
        <Project key={idx} {...frontmatter} />
      ))}
    </ul>
  )
}

export default Projects
