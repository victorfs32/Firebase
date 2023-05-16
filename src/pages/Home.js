import React, { useState, useEffect } from "react";
import { firebase } from "../services/firebase";
import SidebarMenu from "../components/navbar"
import "firebase/auth";

function Home() {

  return (
    <>
    <SidebarMenu/>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
    </>
  );
}

export default Home;
