import React from 'react';
import {RiFacebookBoxFill, RiYoutubeFill, RiTwitterFill, RiPinterestFill, RiInstagramFill} from 'react-icons/ri';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-left'>
            <div className='footer-1'>
                <h3>easybank</h3>
                <ul>
                    <li><RiFacebookBoxFill size={25} className='icon' /></li>
                    <li><RiYoutubeFill size={25} className='icon' /></li>
                    <li><RiTwitterFill size={25} className='icon' /></li>
                    <li><RiPinterestFill size={25} className='icon' /></li>
                    <li><RiInstagramFill size={25} className='icon' /></li>
                </ul>
            </div>

            <div className='footer-2'>
                <ul>
                    <li><a href='#about'>About Us</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li><a href='#blog'>Blog</a></li>
                </ul>
            </div>

            <div className='footer-3'>
                <ul>
                    <li><a href='#careers'>Careers</a></li>
                    <li><a href='#support'>Support</a></li>
                    <li><a href='#privacy'>Privacy Policy</a></li>
                </ul>
            </div>
        </div>

        <div className='footer-right'>
            <button type='button'>Request Invite</button>
            <p>© Easybank. Coded by Shabrina Putri.</p>
        </div>
    </div>
  )
}

export default Footer