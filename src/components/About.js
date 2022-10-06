import React, { useRef } from "react";
import ScrollToTop from "react-scroll-to-top";
import "../App.css";

import useObserver from "../hooks/useObserver";
import { useTransition, useSpring, animated as a } from "react-spring";

const About = function () {
  const triggerRefAbout = useRef();
  const dataRef = useObserver(triggerRefAbout, {
    freezeOnceVisible: true,
  });
  const pStyle = useSpring({
    config: { duration: 900 },
    from: { opacity: 0, transform: "scale(0.1)" },

    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: "scale(1)",
    },
  });

  //stak animation

  const triggerRefAbout1 = useRef();
  const dataRef1 = useObserver(triggerRefAbout1, {
    freezeOnceVisible: true,
  });

  const triggerRefAbout2 = useRef();
  const dataRef2 = useObserver(triggerRefAbout2, {
    freezeOnceVisible: true,
  });

  const transition1 = useTransition(dataRef1, {
    config: { duration: 500 },
    from: { x: -200, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
  });
  const transition2 = useTransition(dataRef2, {
    config: { duration: 500 },
    from: { x: 200, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
  });

  return (
    <>
      <div className="aboutme-container" id="about">
        <h2 className="title">ABOUT ME</h2>

        <section className="aboutme-section">
          <div className="content">
            <div ref={triggerRefAbout} />
            <a.div style={pStyle}>
              <div className="linea"></div>
              <p className="text-about">
              I am a full stack developer and an industrial engineer based in Buenos Aires, Argentina. My interest in programming began while I was studying engineering and finally, a year ago, I decided to study it. I love the logic and structure of coding and always strive to write elegant and efficient code. I lean towards front end development because I'm passionate about design. I am currently looking to join a technology development company to grow and enhance my skills.
              </p>
              <br />
              <div className="linea"></div>
            </a.div>
          </div>
        </section>
        <section className="aboutme-section-stack">
          <div ref={triggerRefAbout1} />
          <div ref={triggerRefAbout2} />
          <h4 className="stack-title">FRONTEND</h4>

          {transition1((style, item) =>
            item ? (
              <a.div className="stack-front" style={style}>
                <img
                  src="	https://portfolio-franco-mino.vercel.app/images/imgSkills/descarga.png"
                  alt="HTML"
                  title="HTML"
                />
                <img
                  src="		https://portfolio-franco-mino.vercel.app/images/imgSkills/css-logo.efd17a83.png"
                  alt="CSS"
                  title="CSS"
                />
                <img
                  src="			https://portfolio-franco-mino.vercel.app/images/imgSkills/javascript-logo-svg-vector.31ff4b10.svg"
                  alt="JAVASCRIPT"
                  title="JAVASCRIPT"
                />
                <img
                  src="			https://portfolio-franco-mino.vercel.app/images/imgSkills/bootstrap-5-1.98585727.svg"
                  alt="BOOTSTRAP"
                  title="BOOTSTRAP"
                />

                <img
                  src="		https://bineo-consulting.com/assets/svg/logos/react.svg"
                  alt="REACT"
                  title="REACT"
                />
              </a.div>
            ) : (
              ""
            )
          )}

          <h4 className="stack-title-back">BACKEND</h4>

          {transition2((style, item) =>
            item ? (
              <a.div className="stack-back" style={style}>
                <img
                  src="https://portfolio-franco-mino.vercel.app/images/imgSkills/node.svg"
                  alt="NODE JS"
                  title="NODE.JS"
                />
                <img
                  src="	https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png"
                  alt="SEQUELIZE"
                  title="SEQUELIZE"
                />
                <img
                  src="	https://portfolio-franco-mino.vercel.app/images/imgSkills/descarga(1).png"
                  alt="EXPRESS"
                  title="EXPRESS"
                />

                <img
                  src="		https://portfolio-franco-mino.vercel.app/images/imgSkills/postgresql-icon.b941b412.svg"
                  alt="POSTGRES"
                  title="POSTGRES"
                />

                <img
                  src="		https://portfolio-franco-mino.vercel.app/images/imgSkills/postman.e65afafe.svg"
                  alt="POSTMAN"
                  title="POSTMAN"
                />
              </a.div>
            ) : (
              ""
            )
          )}
          <div className="linea"></div>
        </section>

        <ScrollToTop
          style={{
            textDecoration: "none",
            backgroundColor: "#fff7f0",
            height: "55px",
          }}
          smooth
        />
      </div>
    </>
  );
};

export default About;
