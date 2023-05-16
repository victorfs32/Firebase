import React, { useState, useEffect } from "react";
import NavScrollExample from "../components/navbar";
import { firebase } from "../services/firebase";
import "firebase/auth";

function Home() {
  const [user, setUser] = useState(null); // Estado para armazenar o usuário autenticado

  // Função para lidar com a autenticação do Google
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Autenticação bem-sucedida, atualiza o estado do usuário
        setUser(result.user);
      })
      .catch((error) => {
        // Erro durante a autenticação
        console.error(error);
      });
  };

  // Função para lidar com a autenticação do GitHub
  const signInWithGitHub = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Autenticação bem-sucedida, atualiza o estado do usuário
        setUser(result.user);
      })
      .catch((error) => {
        // Erro durante a autenticação
        console.error(error);
      });
  };

  // Função para realizar o logout do usuário
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Logout bem-sucedido, redefine o estado do usuário para null
        setUser(null);
      })
      .catch((error) => {
        // Erro durante o logout
        console.error(error);
      });
  };

  // Efeito para verificar o estado de autenticação do usuário
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Usuário está autenticado, atualiza o estado do usuário
        setUser(user);
      } else {
        // Usuário não está autenticado, redefine o estado do usuário para null
        setUser(null);
      }
    });

    return () => unsubscribe(); // Limpa o observador de alterações de autenticação ao desmontar o componente
  }, []);

  return (
    <>
      <NavScrollExample />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <h1>Seja Bem-vindo</h1>
      {user ? (
        <>
          {user.providerData[0].providerId === "github.com" ? (
            <p>Você está logado com o GitHub</p>
          ) : (
            <p>Você está logado com {user.email}</p>
          )}
          <button onClick={signOut}>Deslogar</button>
        </>
      ) : (
        <>
          <button onClick={signInWithGoogle}>Entrar com o Google</button>
          <button onClick={signInWithGitHub}>Entrar com o GitHub</button>
        </>
      )}
    </>
  );
}

export default Home;
