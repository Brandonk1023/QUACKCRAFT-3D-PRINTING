import React from 'react';
import "./navbar.scss";
import {Link} from 'react-router-dom';

function Navbar() {

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                   <a href="#about" className='brandLogo'>Zero Ducks Given</a>
                   <div className='itemContainer'>
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                   </div>
                </div>
                <div className='right'>
                    <ul>
                        <li><a href='#about'>About Us</a></li>
                        <li><a href='#contact'>Contact Us</a></li>
                        <li><a href='#'></a></li>
                        <li><a href='#'></a></li>
                    </ul>
                    <Link to={tutorials}>Tutorials</Link>
                    <Link to={downloadables}>Downloadables</Link>
                    <Link to={filaments}>Filaments</Link>
                    <Link to={store}>Store</Link>
                    <Link to={profile}>User Profile</Link>

                </div>

            </div>
        </div>
    );
}

export default Navbar;