import React from "react";
import Contact from "./Contact";
import Cover from "./Cover";
import About from "./About";
import Proyects from "./Proyects"
import Navbar from "./Navbar";

const Home = function () {
  return (
    <>
    <Navbar/>
      <Cover />
      <About/>
      <Proyects/>
      <Contact/>
    </>
  );
};

export default Home;
