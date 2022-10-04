import React from "react";
import Contact from "./Contact";
import Cover from "./Cover";
import ProyectCard from "./ProyectCard";
import About from "./About";
import ProyectsNew from "./ProyectsNew"
import Navbar from "./Navbar";

const Home = function () {
  return (
    <>
    <Navbar/>
      <Cover />
      <About/>
      <ProyectsNew/>
      <Contact/>
    </>
  );
};

export default Home;
