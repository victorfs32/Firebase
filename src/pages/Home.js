import React from "react";
import { firebase } from "../services/firebase";
import Navbar from "../components/navbar";
import './index.css';
import "firebase/auth";

function Home() {
  const user = firebase.auth().currentUser;
  const displayName = user ? user.displayName : "Usuário";

  return (
    <>
      <Navbar />
      <div className="h1">
        <h1>Seja Bem-vindo, {displayName}!</h1>
      </div>
    </>
  );
}

export default Home;
