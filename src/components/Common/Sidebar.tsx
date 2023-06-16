import React from 'react'
import { VscGithubAlt } from '@react-icons/all-files/vsc/VscGithubAlt'

type SibebarProps = {
  direction: 'left' | 'right'
}

const Sidebar = ({ direction }: SibebarProps) => {
  const leftOrRight = direction === 'left'
  return (
    <aside
      className={`${
        leftOrRight ? 'lg:left-10 md:left-5' : 'lg:right-10 md:right-5'
      } fixed w-10 bottom-0 right-auto text-gray max-md:hidden animate__animated animate__fadeInUp animate__delay-2s`}
    >
      <ul className="flex flex-col justify-center items-center space-y-3 w-full">
        {leftOrRight ? (
          <>
            <li className="group cursor-pointer p-2">
              <a href="https://github.com/hira9999">
                <VscGithubAlt className="w-6 h-6  group-hover:text-green" />
              </a>
            </li>
          </>
        ) : (
          <span className="hover:text-green cursor-pointer p-2 text-column">
            iedddd99@gmail.com
          </span>
        )}
        <hr className="w-[2px] h-32 bg-gray mx-auto" />
      </ul>
    </aside>
  )
}

export default Sidebar
