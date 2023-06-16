import React, { LegacyRef } from 'react'
import useElementOnScreen from 'hooks/useElementOnScreen'
import AboutContents from './AboutContents'

const AboutSection = () => {
  const [intersection, isVisible] = useElementOnScreen()

  return (
    <section id="about" className="max-w-4xl">
      <div className="sectionContainer text-white">
        {/* title */}
        <div
          ref={intersection as LegacyRef<HTMLDivElement>}
          className={`${
            isVisible ? 'visible' : 'inVisible'
          } flex items-center w-full mb-14 space-x-2 font-medium text-2xl`}
        >
          <span className="text-darkGreen">01.</span>
          <h2>About Me</h2>
          <hr className="w-2/5 bg-white" />
        </div>

        {/* contents */}
        <AboutContents />
      </div>
    </section>
  )
}

export default AboutSection
