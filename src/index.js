import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Usuarios from "./pages/Usuarios";
import Navbar from "./components/navbar";
import Admin from "./pages/Admin";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
