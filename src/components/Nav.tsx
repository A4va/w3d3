import React from 'react'
import logo from '../assets/logo.jpg'
function Nav() {
  return (
    <nav>
      <div>
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>Tv-Shows</li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav