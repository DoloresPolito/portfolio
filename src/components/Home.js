import React from "react";
import Contact from "./Contact";
import Cover from "./Cover";
import About from "./About";
import Proyects from "./Proyects"
// import Navbar from "./Navbar";
import NavbarHamb from "./NavbarHamb";

const Home = function () {
  return (
    <>
    <NavbarHamb/>
    {/* <Navbar/> */}
      <Cover />
      <About/>
      <Proyects/>
      <Contact/>
    </>
  );
};

export default Home;
