import React, { LegacyRef } from 'react'
import Projects from './Projects'
import { ProjectsItem } from 'pages'
import useElementOnScreen from 'hooks/useElementOnScreen'

type WorkSectionProps = {
  projects: ProjectsItem[]
}

const WorkSection = ({ projects }: WorkSectionProps) => {
  const [intersection, isVisible] = useElementOnScreen()

  return (
    <section id="work" className="max-w-5xl py-20">
      <div
        ref={intersection as LegacyRef<HTMLDivElement>}
        className={`${
          isVisible ? 'visible' : 'inVisible'
        } flex items-center w-full mb-14 space-x-2 font-medium text-2xl text-white`}
      >
        <span className="text-darkGreen">02.</span>
        <h2>Somethings what I've Built</h2>
        <hr className="w-2/5 bg-white" />
      </div>

      <Projects projects={projects} />
    </section>
  )
}

export default WorkSection
