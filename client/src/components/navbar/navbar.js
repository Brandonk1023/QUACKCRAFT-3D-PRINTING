import React from 'react';
import "./navbar.scss";

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
                </div>

            </div>
        </div>
    );
}

export default Navbar;