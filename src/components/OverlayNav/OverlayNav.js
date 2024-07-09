// src/components/OverlayNav/OverlayNav.jsx

import React from 'react';
import './OverlayNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const OverlayNav = ({ toggleNav }) => {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    toggleNav(); // Close the nav when a link is clicked
  };

  return (
    <div className='overlay-nav'>
      <div className='close-btn' onClick={toggleNav}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className='overlay-content'>
        <p onClick={() => handleNavClick('/')}>Home</p>
        <p onClick={() => handleNavClick('/cart')}>Cart</p>
        <p onClick={() => handleNavClick('/checkoutPage')}>Checkout</p>
        <p onClick={() => handleNavClick('/')}>All Categories</p>
        <p onClick={() => handleNavClick('/')}>Computer And Accessories</p>
        <p onClick={() => handleNavClick('/')}>Electronics</p>
        <p onClick={() => handleNavClick('/')}>Phones And Tablets</p>
        <p onClick={() => handleNavClick('/')}>Home Appliances</p>
      </div>
    </div>
  );
};

export default OverlayNav;
