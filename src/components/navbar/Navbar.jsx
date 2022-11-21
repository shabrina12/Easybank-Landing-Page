import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../images/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar-links'>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>
          <li><a href='#blog'>Blog</a></li>
          <li><a href='#careers'>Careers</a></li>
        </ul>
      </div>
      <div className='navbar-button'>
        <button>Request Invite</button>
      </div>

      <div className='navbar-smallscreen'>
        <RiMenu3Line style={{'cursor': 'pointer'}} color='black' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
        <div className='navbar-smallscreen_overlay'>
          <RiCloseLine  color='black' fontSize={27} className='close_icon' onClick={() => setToggleMenu(false)} />
          <ul className='navbar-smallscreen_links'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#contact'>Contact</a></li>
            <li><a href='#blog'>Blog</a></li>
            <li><a href='#careers'>Careers</a></li>
            <li className='navbar-smallscreen-button'><button>Request Invite</button></li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar