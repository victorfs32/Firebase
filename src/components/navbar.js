import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState(null);

  const MenuClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // O usuário está autenticado
        setDisplayName(user.displayName);
      } else {
        // O usuário não está autenticado
        setDisplayName(null);
      }
    });

    // Limpa o listener ao desmontar o componente
    return () => unsubscribe();
  }, []);

  const truncatedDisplayName = displayName ? displayName.substring(0, 11) : "";

  const Logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setTimeout(() => {
          navigate("/");
        }); // Redirecionamento após 4 segundos
      })
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
            <Link to="/Home" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Admin">Painel</Link>
          </li>
          <li>
            <Link to="/Usuarios">Usuarios</Link>
          </li>
          <li>
            <Link to="#">Settings</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
        <div className="main">
          <a className="user" href="#">
            {truncatedDisplayName ? truncatedDisplayName : ""}
          </a>
          <a href="#" onClick={Logout}>
            Log out
          </a>
          <div id="menu-icon" onClick={MenuClick}>
            <BiMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
