import React from 'react';
import icon1 from '../../images/icon-online.svg';
import icon2 from '../../images/icon-budgeting.svg';
import icon3 from '../../images/icon-onboarding.svg';
import icon4 from '../../images/icon-api.svg';
import './features.css';

const Features = () => {
  return (
    <div className='features-bg' id='about'>   
      <div className='features'>
        <div className='feature-title'>
          <h1>Why choose Easybank?</h1>
          <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>
      
        <div className='feature-container'>
          <div className='feature-card'>
            <img src={icon1} alt='icon' />
            <h2>Online Banking</h2>
            <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
          </div>
          
          <div className='feature-card'>
            <img src={icon2} alt='icon' />
            <h2>Simple Budgeting</h2>
            <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
          </div>
          
          <div className='feature-card'>
            <img src={icon3} alt='icon' />
            <h2>Fast Onboarding</h2>
            <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
          </div>
          
          <div className='feature-card'>
            <img src={icon4} alt='icon' />
            <h2>Open API</h2>
            <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features