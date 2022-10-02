import React, { useRef } from "react";
import ProyectCarousel from "./ProyectCarousel";
import ScrollToTop from "react-scroll-to-top";
import { animated, useSpring } from "@react-spring/web";
import useObserver from "../hooks/useObserver";

const { ReactSport, NetGlobal, TMDB, BeluMi } = require("../proyects");
const ProyectCard = function () {
  const triggerRef1About = useRef();
  const triggerRef2About = useRef();
  const dataRef1 = useObserver(triggerRef1About, {
    freezeOnceVisible: true,
  });
  const pStyle = useSpring({
    config: { duration: 4200 },
    from: { opacity: 0, transform: "scale(0.1)" },

    to: {
      opacity: dataRef1?.isIntersecting ? 1 : 0,
      transform: "scale(1)",
    },
  });

  const dataRef2 = useObserver(triggerRef2About, {
    freezeOnceVisible: true,
  });

  const p2Style = useSpring({
    config: { duration: 4200 },
    from: { opacity: 0, transform: "scale(0.1)" },

    to: {
      opacity: dataRef2?.isIntersecting ? 1 : 0,
      transform: "scale(1)",
    },
  });

  return (
    <>
      <h2 className="title">PROJECTS</h2>
      {/* <div className="row"> */}

      {/* <div className="column"> */}
        <div ref={triggerRef1About} />

        <div className="proyects" id="proyects">
          <animated.div style={pStyle}>
            <div className="card">
              <div className="card-description">
                <h3 className="card-title">{ReactSport.name}</h3>
                <p className="card-text">{ReactSport.description}</p>
                <div>
                  <ul>
                    {ReactSport.slack.map((slack) => {
                      return <li className="list-item">{slack}</li>;
                    })}
                  </ul>
                </div>

                <div className="github-logo-card">
                  <a href={ReactSport.links} target="_blank">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>

              <div className="card-image">
                <ProyectCarousel images={ReactSport.images} />
              </div>
            </div>
          </animated.div>
        {/* </div> */}

        {/* <div className="proyects" id="proyects"> */}
          {/* <animated.div style={pStyle}>
            <div className="card">
              <div className="card-description">
                <h3 className="card-title">{TMDB.name}</h3>
                <p className="card-text">{TMDB.description}</p>
                <div>
                  <ul>
                    {TMDB.slack.map((slack) => {
                      return <li className="list-item">{slack}</li>;
                    })}
                  </ul>
                </div>

                <div className="github-logo-card">
                  <a href={TMDB.links} target="_blank">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>

              <div className="card-image">
                <ProyectCarousel images={TMDB.images} />
              </div>
            </div>
          </animated.div> */}
        {/* </div> */}
      {/* </div> */}

      {/* <div className="column"> */}
        <div ref={triggerRef2About} />
        {/* <div className="proyects" id="proyects"> */}
          <animated.div style={p2Style}>
            <div className="card">
              <div className="card-description">
                <h3 className="card-title">{NetGlobal.name}</h3>
                <p className="card-text">{NetGlobal.description}</p>
                <div>
                  <ul>
                    {TMDB.slack.map((slack) => {
                      return <li className="list-item">{slack}</li>;
                    })}
                  </ul>
                </div>

                <div className="github-logo-card">
                  <a href={NetGlobal.links} target="_blank">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>

              <div className="card-image">
                <ProyectCarousel images={NetGlobal.images} />
              </div>
            </div>
          </animated.div>
        {/* </div> */}
{/* 
        <div className="proyects" id="proyects"> */}
          <animated.div style={p2Style}>
            <div className="card">
              <div className="card-description">
                <h3 className="card-title">{BeluMi.name}</h3>
                <p className="card-text">{BeluMi.description}</p>
                <div>
                  <ul>
                    {TMDB.slack.map((slack) => {
                      return <li className="list-item">{slack}</li>;
                    })}
                  </ul>
                </div>

                <div className="github-logo-card">
                  <a href={BeluMi.links} target="_blank">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>

              <div className="card-image">
                <ProyectCarousel images={BeluMi.images} />
              </div>
            </div>
          </animated.div>
        </div>

         <ScrollToTop
          style={{
            textDecoration: "none",
            backgroundColor: "#fff7f0",
            color:"white",
            height: "55px",
          }}
          smooth
        /> 
      {/* </div> */}

      {/* </div> */}
    </>
  );
};

export default ProyectCard;
