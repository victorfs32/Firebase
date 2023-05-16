import React, { useState, useEffect } from "react";
import { firebase } from "../services/firebase";
import SidebarMenu from "../components/navbar"
import "firebase/auth";

function Home() {

  return (
    <>
    <SidebarMenu/>
    
    </>
  );
}

export default Home;
