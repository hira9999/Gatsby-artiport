import React from 'react'

const IndexSection = () => {
  return (
    <section className="max-w-5xl">
      <div className="sectionContainer lg:space-y-5 space-y-2 text-white animate__animated animate__fadeInUp animate__delay-1s">
        <p className=" text-darkGreen text-lg">안녕하세요.</p>
        <h2 className="font-bold lg:text-7xl md:text-5xl text-4xl">
          Lim Donggeun.
        </h2>
        <h2 className="opacity-50 font-bold lg:text-7xl md:text-5xl text-4xl">
          I build things for the web.
        </h2>
        <p className="max-w-xl opacity-50 leading-7">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
      </div>
    </section>
  )
}

export default IndexSection
