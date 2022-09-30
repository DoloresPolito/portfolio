import React, { useRef } from "react";
import ScrollToTop from "react-scroll-to-top";
import "../App.css";

import { animated, useSpring} from "@react-spring/web";
import useObserver from "../hooks/useObserver";

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
    return (
        <>
      <h2 className="title">ABOUT ME</h2>
        <div className="aboutme-container" id="about">




          <section className="aboutme-section">
     
          
            <div className="content">
            <div ref={triggerRefAbout} />
              <animated.div style={pStyle}>
                <div className="linea"></div>
                <p className="text-about">
                I am a Full Stack Developer and an Industrial Engineer.
I have experience working with NodeJS, Express, React, Redux and Sequelize among other technologies in this area. 

{/* I have an outstanding capacity to combine my technical and soft skills with my knowledge, all of which I acquired at university. I have acquired a personal capacity for action on uncertain scenarios, for adaptation to new situations and to team work. */}

I am currently looking forward to joining a technological development company, so I can put my professionalism and qualifications to work, while also having the possibility to grow and enhance my skills.
                </p>
                <br />
                <div className="linea"></div>
             
              </animated.div>
            </div>
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
