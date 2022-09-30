import React from "react";
import ContactForm from "./ContactForm";
import Cover from "./Cover";
import ProyectCard from "./ProyectCard";
import About from "./About";

const Home = function () {
  return (
    <>
      <Cover />
      <About/>
      <ProyectCard />
      <ContactForm/>
    </>
  );
};

export default Home;
