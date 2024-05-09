import React from 'react'

const header = () => {
  return (
    <header>
        <a href="/" className="logo text-2xl font-bolf">
          Rakesh
        </a>

        {/*Desktop Nav*/}
        <ul>
          <li><a href="/#">About</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
    </header>
  )
}

export default header