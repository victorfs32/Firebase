import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Usuarios from "./pages/Usuarios";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
