import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import firebase from "firebase/app";
import "firebase/auth";
import "./Login.css"; // Importe o arquivo CSS

function Login() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Aqui você pode acessar as informações do usuário logado
        const user = result.user;
        console.log(user);

        // Exibir um alerta quando o usuário estiver conectado
        alert("Você está conectado");

        // Atraso de 4 segundos antes de redirecionar para a página "/home"
        setTimeout(() => {
          navigate("/home");
        }, 4000);
      })
      .catch((error) => {
        // Trate os erros caso ocorra algum problema
        console.error(error);
      });
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
          <a href="#" onClick={handleGoogleSignIn}>
            <FcGoogle id="img" />
          </a>
          <a href="#">
            <GoMarkGithub id="img" />
          </a>
        </div>

        <div id="inputs">
          <div className="input-box">
            <label htmlFor="name">
              Usuário
              <div className="input-field">
                <BiUserCircle id="user" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  maxLength={10}
                  required
                />
              </div>
            </label>
          </div>

          <div className="input-box">
            <label htmlFor="password">
              Password
              <div className="input-field">
                <AiFillLock id="lock" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  maxLength={8}
                  required
                />
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
