// src/components/Logo/Logo.jsx

import React, { useState } from 'react';
import './Logo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import OverlayNav from '../OverlayNav/OverlayNav'; // Import the OverlayNav component

const Logo = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='logo-overall'>
      
      <div className='icon1' onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className='logo'>
        <p>Flexmart</p>
        <p className='logo-icon'>
          <FontAwesomeIcon icon={faShoppingCart} />
        </p>
      </div>
      <div className='icon2'>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className='icon3' onClick={() => navigate('/cart')}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
      {isNavOpen && <OverlayNav toggleNav={toggleNav} />}{' '}
      {/* Add the overlay navigation */}
    </div>
  );
};

export default Logo;
