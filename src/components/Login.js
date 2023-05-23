import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import firebase from "firebase/app";
import "firebase/auth";
import "./Login.css"; // Importe o arquivo CSS

function Login() {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setIsRegisterMode(false);
  };

  const toggleRegisterMode = () => {
    setIsRegisterMode(!isRegisterMode);
  };

  const GitHubSignIn = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Usuário autenticado com sucesso
        const user = result.user;
        console.log(user);
        setTimeout(() => {
          navigate("/home"); // Redirecionamento após 4 segundos
        });
      })
  };

  const GoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Usuário autenticado com sucesso
        const user = result.user;
        console.log(user);
        setTimeout(() => {
          navigate("/home"); // Redirecionamento após 4 segundos
        });
      })
  };

  const EmailSignIn = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (isRegisterMode) {
      const username = event.target.elements.username.value;

      // Registre o usuário com e-mail, senha e nome de usuário
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          // Usuário registrado com sucesso
          const user = result.user;
          console.log(user);
          setTimeout(() => {
            navigate("/home"); // Redirecionamento após 4 segundos
          });
        })
    } else {
      // Faça o login com e-mail e senha
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
          // Usuário autenticado com sucesso
          const user = result.user;
          console.log(user);
          setTimeout(() => {
            navigate("/home"); // Redirecionamento após 4 segundos
          });
        })
    }
  };

  const PasswordReset = (event) => {
    if (event) {
      event.preventDefault();
      const email = event.target.elements.email.value;
      // Envia um e-mail para redefinir a senha
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          alert("E-mail de redefinição de senha enviado!");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  
  

  return (
    <main id="container" className={darkMode ? "dark-mode" : ""}>
      <form id="login_form" onSubmit={EmailSignIn}>
        <div id="form_header">
          <h1>{isRegisterMode ? "Register" : "Login"}</h1>
          <BsFillMoonFill id="mode_icon" onClick={toggleDarkMode} />
        </div> 
        <div id="social_media">
          <a href="#">
            <FaFacebook id="img" />
          </a>
          <a href="#" onClick={GitHubSignIn}>
            <GoMarkGithub id="img" />
          </a>
          <a href="#" onClick={GoogleSignIn}>
            <FcGoogle id="img" />
          </a>
        </div>
        <div id="inputs">
          {isRegisterMode && (
            <div className="input-box">
              <label htmlFor="username">
                Username
                <div className="input-field">
                  <BiUserCircle id="user" />
                  <input type="text" id="username" name="username" required />
                </div>
              </label>
            </div>
          )}

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
              <a href="#" onClick={PasswordReset}>
                Redefinir minha senha?
              </a>
              <a id="Register" onClick={toggleRegisterMode}>
                {isRegisterMode
                  ? "Já tem uma conta? Login"
                  : "Não tenho uma conta? Register"}
              </a>
            </div>
          </div>
        </div>
        <button type="submit" id="login_button">
          {isRegisterMode ? "Register" : "Login"}
        </button>
      </form>
    </main>
  );
}

export default Login;
