import React from 'react';

//asset imports
import './style.css'
import SBLogo from '../../sblogo.png'

const Nav = () => {
    return (
        <nav className="nav-sb">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo"><img src={SBLogo} alt="Seeking Balance" /></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/about">About</a></li>
                    <li><a href="/bio">Bio</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;