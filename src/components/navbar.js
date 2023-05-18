import React, { useState } from "react";
import { BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="custom-header">
        <a href="#" className="logo">
          <BsHouseFill />
          <span>Firebase</span>
        </a>
        <ul className={`navbar ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Painel</a>
          </li>
          <li>
            <a href="#">Usuarios</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="main">
          <Link to="/" className="user">
            <FaUser />
            Sign In
          </Link>
          <a href="#">Log out</a>
          <div id="menu-icon" onClick={handleMenuClick}>
            <BiMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
