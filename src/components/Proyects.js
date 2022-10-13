import React, { useState, useEffect, useRef } from "react";
import useObserver from "../hooks/useObserver";
import { useTransition, animated as a } from "react-spring";
import { Parallax } from "react-scroll-parallax";
const { ReactSport, NetGlobal, BeluMi, Chatbot } = require("../proyects");


const Proyects = function () {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth), {
      passive: true,
    });
  }, []);

  const cut = 1150;

  const triggerRefAbout = useRef();
  const dataRef = useObserver(triggerRefAbout, {
    freezeOnceVisible: true,
  });

  const triggerRefAbout1 = useRef();
  const dataRef1 = useObserver(triggerRefAbout1, {
    freezeOnceVisible: true,
  });

  const triggerRefAbout2 = useRef();
  const dataRef2 = useObserver(triggerRefAbout2, {
    freezeOnceVisible: true,
  });
  const triggerRefAbout3 = useRef();
  const dataRef3 = useObserver(triggerRefAbout3, {
    freezeOnceVisible: true,
  });

  //card description animation
  const transition = useTransition(dataRef, {
    config: { duration: 500 },
    from: { x: 200, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
  });

  const transition1 = useTransition(dataRef1, {
    config: { duration: 500 },
    from: { x: 200, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
  });
  const transition2 = useTransition(dataRef2, {
    config: { duration: 500 },
    from: { x: 200, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
  });
  const transition3 = useTransition(dataRef3, {
    config: { duration: 500 },
    from: { x: 200, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
  });

  return (
    <div className="proyects-container" id="proyects">
      <h2 className="title">PROJECTS</h2>

      {width >= cut ? (
        <>
          <div ref={triggerRefAbout2} />

          <div className="horizontal-card">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AJCpdYI4Yao"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="video"
            ></iframe>

            {transition2((style, item) =>
              item ? (
                <Parallax speed={5}>
                <a.div className="card-description" style={style}>
                  <div className="github-logo-card">
                    <h3 className="card-title">{BeluMi.name}</h3>
                    <a href={BeluMi.links} target="_blank" rel="noreferrer" >
                      <i className="bi bi-github"></i>
                    </a>
                  </div>

                  <p className="card-text">{BeluMi.description}</p>
           <br/>
                  <div className="card-stack">
                    <ul>
                      {BeluMi.slack.map((slack) => {
                        return <li key= {slack} className="list-item">{slack}</li>;
                      })}
                    </ul>
                  </div>
                </a.div>
                          </Parallax >
              ) : (
                ""
              )
            )}
          </div>

          <div ref={triggerRefAbout3} />
          <div className="horizontal-card">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xKERHAeIz-Y"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="video"
            ></iframe>

            {transition3((style, item) =>
              item ? (
                <Parallax speed={5}>
                <a.div className="card-description" style={style}>
                  <h3 className="card-title">{Chatbot.name}</h3>
                  <p className="card-text">{Chatbot.description}</p>
                  <br/>
                  <div className="card-stack">
                    <ul>
                      {Chatbot.slack.map((slack) => {
                        return <li key= {slack} className="list-item">{slack}</li>;
                      })}
                    </ul>
                  </div>
                </a.div>
                </Parallax >
              ) : (
                ""
              )
            )}
          </div>

          <div ref={triggerRefAbout} />
          <div className="horizontal-card">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/v6zgdsmc-OI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="video"
            ></iframe>

            {transition((style, item) =>
              item ? (
                <Parallax speed={5}>
                <a.div className="card-description" style={style}>
                  <div className="github-logo-card">
                    <h3 className="card-title">{ReactSport.name}</h3>

                    <a
                      href="https://github.com/DoloresPolito"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  </div>

                  <p className="card-text">{ReactSport.description}</p>
                  <br/>
                  <div className="card-stack">
                    <ul>
                      {ReactSport.slack.map((slack) => {
                        return <li key= {slack} className="list-item">{slack}</li>;
                      })}
                    </ul>
                  </div>
                </a.div>       </Parallax >
              ) : (
                ""
              )
            )}
          </div>

          <div ref={triggerRefAbout1} />
          <div className="horizontal-card">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OU5o_bT37vk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="video"
            ></iframe>

            {transition1((style, item) =>
              item ? (
                <Parallax speed={5}>
                <a.div className="card-description" style={style}>
                  <div className="github-logo-card">
                    <h3 className="card-title">{NetGlobal.name}</h3>
                    <a href={NetGlobal.links} target="_blank" rel="noreferrer" >
                      <i className="bi bi-github"></i>
                    </a>
                  </div>

                  <p className="card-text">{NetGlobal.description}</p>
                  <br/>
                  <div className="card-stack">
                    <ul>
                      {NetGlobal.slack.map((slack) => {
                        return <li key= {slack} className="list-item">{slack}</li>;
                      })}
                    </ul>
                  </div>
                </a.div>
                </Parallax >
              ) : (
                ""
              )
            )}
          </div>
        </>
      ) : (
        <>
          <div className="vertical-card">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AJCpdYI4Yao"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="video"
            ></iframe>
                <Parallax speed={5}>
            <div className="card-description">
              <div className="github-logo-card">
                <h3 className="card-title">{BeluMi.name}</h3>
                <a href={BeluMi.links} target="_blank" rel="noreferrer" >
                  <i className="bi bi-github"></i>
                </a>
              </div>

              <p className="card-text">{BeluMi.description}</p>


    
              <div className="card-stack">
                <ul>
                  {BeluMi.slack.map((slack) => {
                    return <li  key= {slack} className="list-item">{slack}</li>;
                  })}
                </ul>
              </div>
            </div>
            </Parallax>
          </div>

          <div className="vertical-card">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xKERHAeIz-Y"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="video"
            ></iframe>
                <Parallax speed={5}>
            <div className="card-description">
              <h3 className="card-title">{Chatbot.name}</h3>
              <p className="card-text">{Chatbot.description}</p>
        

          
              <div className="card-stack">
                <ul>
                  {Chatbot.slack.map((slack) => {
                    return <li key= {slack} className="list-item">{slack}</li>;
                  })}
                </ul>
              </div>
            </div>
            </Parallax>
          </div>
          <div className="vertical-card">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/v6zgdsmc-OI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="video"
            ></iframe>
                <Parallax speed={5}>
            <div className="card-description">
              <div className="github-logo-card">
                <h3 className="card-title">{ReactSport.name}</h3>
                <a href={ReactSport.links} target="_blank" rel="noreferrer" >
                  <i className="bi bi-github"></i>
                </a>
              </div>

              <p className="card-text">{ReactSport.description}</p>
  
              <div className="card-stack">
                <ul>
                  {ReactSport.slack.map((slack) => {
                    return <li key= {slack} className="list-item">{slack}</li>;
                  })}
                </ul>
              </div>
            </div>
            </Parallax>
          </div>

          <div className="vertical-card">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OU5o_bT37vk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="video"
            ></iframe>
                <Parallax speed={5}>
            <div className="card-description">
              <div className="github-logo-card">
                <h3 className="card-title">{NetGlobal.name}</h3>
                <a href={ReactSport.links} target="_blank" rel="noreferrer" >
                  <i className="bi bi-github"></i>
                </a>
              </div>

              <p className="card-text">{NetGlobal.description}</p>
          
              <div className="card-stack">
                <ul>
                  {NetGlobal.slack.map((slack) => {
                    return <li key= {slack} className="list-item">{slack}</li>;
                  })}
                </ul>
              </div>
            </div>
            </Parallax>
          </div>

        </>
      )}
    </div>
  );
};

export default Proyects;
