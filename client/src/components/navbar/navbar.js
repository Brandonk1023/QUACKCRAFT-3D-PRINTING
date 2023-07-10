import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
  // RAIYA'S CODE for navbar styling (we can revert back to Ethan's code if need to)
  return (
    <nav className="navbar">
      <a href="#about" className="brandlogo">
        QuackCraft 3D Printing
      </a>
      <ul>
        <li className="active">
        <Link to="/about">About Us</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/downloadables">Downloadables</Link>
        </li>
        <li>
        <Link to="/tutorials">Tutorials</Link>
        </li>
        <li>
        <Link to="/filaments">Filament Library</Link>
        </li>
        <li>
        <Link to="/donate">Donate</Link>
        </li>
        <li>
        <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
