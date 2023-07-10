import React from 'react'
import './navbar.scss'
// import { Link } from 'react-router-dom'

function Navbar() {
  // RAIYA'S CODE for navbar styling (we can revert back to Ethan's code if need to)
  return (
    <nav className="navbar">
      <a href="#about" className="brandlogo">
        QuackCraft 3D Printing
      </a>
      <ul>
        <li className="active">
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#printablesfiles">Printable Files</a>
        </li>
        <li>
          <a href="#tutorials">Tutorials</a>
        </li>
        <li>
          <a href="#filamentlibrary">Filament Library</a>
        </li>
        <li>
          <a href="#downloads">Downloads</a>
        </li>
        <li>
          <a href="#donations">Donations</a>
        </li>
        <li>
          <a href="login">Login</a>
        </li>
      </ul>
    </nav>
  )
}
//     return (
//         <div className='navbar'>
//             <div className='wrapper'>
//                 <div className='left'>
//                    <a href="#about" className='brandLogo'>Zero Ducks Given</a>
//                    <div className='itemContainer'>
//                         <ul>
//                             <li></li>
//                             <li></li>
//                         </ul>
//                    </div>
//                 </div>
//                 <div className='right'>
//                     <ul>
//                         <li><a href='#about'>About Us</a></li>
//                         <li><a href='#contact'>Contact Us</a></li>
//                         <li><a href='#'></a></li>
//                         <li><a href='#'></a></li>
//                     </ul>
//                     <Link to="/tutorials">Tutorials</Link>
//                     <Link to="/downloadables">Downloadables</Link>
//                     <Link to="/filaments">Filaments</Link>
//                     <Link to="/store">Store</Link>
//                     <Link to="/profile">User Profile</Link>

//                 </div>

// }

// ETHAN'S CODE (we can revert if need to- just wanted to get some styling done on navbar)
// return (
//     <div className='navbar'>
//         <div className='wrapper'>
//             <div className='left'>
//                <a href="#about" className='brandLogo'>QuackCraft 3D Printing, Inc.</a>
//                <div className='itemContainer'>
//                     <ul>
//                         <li></li>
//                         <li></li>
//                     </ul>
//                </div>
//             </div>
//             <div className='right'>
//                 <ul>
//                     <li><a href='#about'>About Us</a></li>
//                     <li><a href='#contact'>Contact Us</a></li>
//                     <li><a href='#login'>Login</a></li>
//                     <li><a href='#'></a></li>
//                 </ul>
//             </div>

//         </div>
//     </div>
// );

export default Navbar
