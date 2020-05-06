import React from 'react';

import './style.css'
import SBLogo from '../../sblogo.png'

const Nav = () => {
    return (
        <nav className="nav-sb">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo"><img src={SBLogo}/></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Bio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;