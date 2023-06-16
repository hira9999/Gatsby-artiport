import { Link } from 'gatsby'
import React from 'react'

const Header = () => {
  return (
    <header
      id="nav"
      className="flex z-10 fixed top-0 w-full bg-navy h-24 justify-between items-center drop-shadow-md opacity-90 px-5 lg:px-20 md:px-10"
    >
      <a className="text-green text-2xl font-bold" href="/">
        H
      </a>
      <nav>
        <ul className="flex text-white space-x-6">
          <li>
            <Link to="/#about">
              <span className="text-green">01. </span>
              <span className="hover:text-darkGreen transition">About</span>
            </Link>
          </li>
          <li>
            <Link to="/#work">
              <span className="text-green">02. </span>
              <span className="hover:text-green transition">Work</span>
            </Link>
          </li>
          <li>
            <Link to="/#contact">
              <span className="text-green">03. </span>
              <span className="hover:text-green transition">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
