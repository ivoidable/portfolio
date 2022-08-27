import React, { useRef } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import './Navbar.css'

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  
  return (
    <header>
      <img src='/images/logo_wout_bg.png' />
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/About">About Me</a>
        <a href="/Work">My Work</a>
        <a href="/Contact">Contact Me</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Navbar