import React from 'react'
import { BsPlay } from '@react-icons/all-files/bs/bsPlay'

const Skills = () => {
  const skills = ['Javascript', 'React', 'Nextjs', 'Nodejs', 'Tailwindcss']
  return (
    <ul className="grid grid-cols-2 text-sm gap-1">
      {skills.map(skill => (
        <li key={skill} className="flex items-center space-x-2">
          <BsPlay className="w-5 h-5 text-green" />
          <span className="">{skill}</span>
        </li>
      ))}
    </ul>
  )
}

export default Skills
