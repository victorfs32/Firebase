import React, { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import "./Login.css"; // Importe o arquivo CSS

function Login() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main id="container" className={darkMode ? "dark-mode" : ""}>
      <form id="login_form">
        <div id="form_header">
          <h1>Login</h1>
          <BsFillMoonFill id="mode_icon" onClick={toggleDarkMode} />
        </div>

        <div id="social_media">
          <a href="#">
            <FaFacebook id="img" />
          </a>
          <a href="#">
            <FcGoogle id="img" />
          </a>
          <a href="#">
            <GoMarkGithub id="img" />
          </a>
        </div>

        <div id="inputs">
          <div className="input-box">
            <label htmlFor="name">
              Name
              <div className="input-field">
                <BiUserCircle id="user" />
                <input type="text" id="name" name="name" maxLength={8} required />

              </div>
            </label>
          </div>

          <div className="input-box">
            <label htmlFor="password">
              Password
              <div className="input-field">
                <AiFillLock id="lock" />
                <input type="password" id="password" name="password" maxLength={8} required />
              </div>
            </label>

            <div id="forgot_password">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
        <button type="submit" id="login_button">
          Login
        </button>
      </form>
    </main>
  );
}

export default Login;
