import React from "react";
import ContactForm from "./ContactForm";
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
      {/* <ProyectCard /> */}
      <ContactForm/>
    </>
  );
};

export default Home;
