import React, { useState, useEffect } from "react";
import { firebase } from "../services/firebase";
import Navbar from "../components/navbar";
import './Home.css';
import "firebase/auth";

function Home() {
  return (
    <>
      <Navbar />
      <div className="h1">
        <h1>Seja Bem-vindo</h1>
      </div>
    </>
  );
}

export default Home;
