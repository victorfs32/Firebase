import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import { HiOutlineMail } from 'react-icons/hi';
import firebase from "firebase/app";
import "firebase/auth";
import "./Login.css"; // Importe o arquivo CSS

function Login() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleGitHubSignIn = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Usuário autenticado com sucesso
        const user = result.user;
        console.log(user);
        alert("Você está conectado!");
        setTimeout(() => {
          navigate("/home"); // Redirecionamento após 4 segundos
        }, 4000);
      })
      .catch((error) => {
        // Trate os erros caso ocorra algum problema
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Usuário autenticado com sucesso
        const user = result.user;
        console.log(user);
        alert("Você está conectado!");
        setTimeout(() => {
          navigate("/home"); // Redirecionamento após 4 segundos
        }, 4000);
      })
      .catch((error) => {
        // Trate os erros caso ocorra algum problema
        console.error(error);
      });
  };

  const handleEmailSignIn = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // Usuário autenticado com sucesso
        const user = result.user;
        console.log(user);
        alert("Você está conectado!");
        setTimeout(() => {
          navigate("/home"); // Redirecionamento após 4 segundos
        }, 4000);
      })
      .catch((error) => {
        // Trate os erros caso ocorra algum problema
        console.error(error);
      });
  };

  const handlePasswordReset = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("E-mail de redefinição de senha enviado!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main id="container" className={darkMode ? "dark-mode" : ""}>
      <form id="login_form" onSubmit={handleEmailSignIn}>
        <div id="form_header">
          <h1>Login</h1>
          <BsFillMoonFill id="mode_icon" onClick={toggleDarkMode} />
        </div>

        <div id="social_media">
          <a href="#">
            <FaFacebook id="img" />
          </a>
          <a href="#" onClick={handleGitHubSignIn}>
            <GoMarkGithub id="img" />
          </a>
          <a href="#" onClick={handleGoogleSignIn}>
            <FcGoogle id="img" />
          </a>
        </div>
        <div id="inputs">
          <div className="input-box">
            <label htmlFor="email">
              E-mail
              <div className="input-field">
                <HiOutlineMail id="user" />
                <input type="email" id="email" name="email" required />
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
              <a href="#" onClick={handlePasswordReset}>
                Forgot your password?
              </a>
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
