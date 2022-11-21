import React from 'react';
import mockup from '../../images/image-mockups.png';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <h1>Next generation digital banking</h1>
        <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button>Request Invite</button>
      </div>

      <div className='header-image'>
        <img src={mockup} alt='mockup' />
      </div>
    </div>
  )
}

export default Header