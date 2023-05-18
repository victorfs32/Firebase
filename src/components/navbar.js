import React, { useState } from 'react';
import { BsHouseFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io';
import { BiMenu } from 'react-icons/bi';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <a href='#' className='logo'>
          <BsHouseFill />
          <span>Logo</span>
        </a>
        <ul className={`navbar ${isOpen ? 'open' : ''}`}>
          <li><a href='#' className='active'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
        <div className='main'>
          <a href='#' className='user'>
            <FaUser />
            Sign In
          </a>
          <a href='#'>Register</a>
          <div id='menu-icon' onClick={handleMenuClick}>
            <BiMenu />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
