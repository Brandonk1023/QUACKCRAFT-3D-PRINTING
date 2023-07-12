import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#about" className="brandlogo">
        QuackCraft 3D Printing
      </a>
      <ul>
        <li>
        <Button variant="contained">
        <Link to="/about">About Us</Link>
        </Button>
        </li>
        <li>
        <Button variant="contained">
        <Link to="/contact">Contact</Link>
        </Button>
        </li>
        <li>
        <Button variant="contained">
        <Link to="/downloadables">Downloadables</Link>
        </Button>
        </li>
        <li>
        <Button variant="contained">
        <Link to="/tutorials">Tutorials</Link>
        </Button>
        </li>
        <li>
        <Button variant="contained">
        <Link to="/filaments">Filament Library</Link>
        </Button>
        </li>
        <li>
        <Button variant="contained">
        <Link to="/donate">Donate</Link>
        </Button>
        </li>
        <li>
        <Button variant="contained">
        <Link to="/login">Login</Link>
        </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
