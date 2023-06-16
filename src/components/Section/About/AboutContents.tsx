import { StaticImage } from 'gatsby-plugin-image'
import useElementOnScreen from 'hooks/useElementOnScreen'
import React, { LegacyRef } from 'react'
import Skills from './Skills'

const AboutContents = () => {
  const [intersection, isVisible] = useElementOnScreen()

  return (
    <div
      ref={intersection as LegacyRef<HTMLDivElement>}
      className={`${
        isVisible ? 'visible' : 'inVisible'
      } block md:grid md:grid-cols-5 gap-12`}
    >
      {/* paragraph */}
      <div className="col-span-3 mb-12 md:mb-0">
        <p className="mb-12 opacity-50 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Skills />
      </div>
      {/* images */}
      <div className="col-span-2 md:w-full w-2/5 md:mx-0 mx-auto">
        <StaticImage
          src="../../../images/test.png"
          className=""
          alt="profile"
          width={300}
        />
      </div>
    </div>
  )
}

export default AboutContents
