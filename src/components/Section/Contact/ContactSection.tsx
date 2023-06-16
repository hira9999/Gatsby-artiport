import useElementOnScreen from 'hooks/useElementOnScreen'
import React, { LegacyRef } from 'react'

const ContactSection = () => {
  const [intersection, isVisible] = useElementOnScreen()

  return (
    <section
      id="contact"
      className={`${
        isVisible ? 'visible' : 'inVisible'
      } max-w-xl my-24 py-24 text-center space-y-6`}
    >
      <h3
        ref={intersection as LegacyRef<HTMLDivElement>}
        className="text-darkGreen text-xl font-semibold"
      >
        04. What's Next
      </h3>
      <h2 className="text-gray text-5xl font-bold">Get In Touch</h2>
      <p className="text-white leading-7">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </p>
      <button className="button px-6 py-4">Touch</button>
    </section>
  )
}

export default ContactSection
