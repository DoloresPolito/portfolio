import React, { useRef, useState, useEffect } from "react";
import useObserver from "../hooks/useObserver";
import { Parallax } from "react-scroll-parallax";
import {
  useTrail,
  useSpring,
  useTransition,
  animated as a,
} from "react-spring";
import { Link } from "react-scroll";

import logo from "../assets/arrow.svg";

const items = ["Hi, I'm Dolores Polito"];
const config = { mass: 8, tension: 500, friction: 200 };

const Cover = function () {
  const [coverWidth, setCoverWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setCoverWidth(window.innerWidth), {
      passive: true,
    });
  }, []);

  const coverCut = 600;

  function downloadFile(path, fileName) {
    const downloadInstance = document.createElement("a");
    downloadInstance.href = path;
    downloadInstance.target = "_blank";
    downloadInstance.download = fileName;

    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);
  }

  const triggerRefAbout = useRef();
  const dataRef = useObserver(triggerRefAbout, {
    freezeOnceVisible: true,
  });

  const triggerRefAbout1 = useRef();
  const dataRef1 = useObserver(triggerRefAbout1, {
    freezeOnceVisible: true,
  });

  const paStyle = useSpring({
    config: { duration: 900 },
    from: { opacity: 0, transform: "scale(0.2)" },

    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: "scale(1)",
    },
  });

  const smallTitle = useSpring({
    config: { duration: 900 },
    from: { opacity: 0, transform: "scale(0.2)" },

    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: "scale(1)",
    },
  });

  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  //links animation
  const transition = useTransition(dataRef1, {
    config: { duration: 900 },
    from: { x: -400, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
  });

  return (
    <div className="cover-container">
      <div ref={triggerRefAbout} />

      {coverWidth >= coverCut ? (
        <>
          <Parallax speed={5}>
          <div>
            {trail.map(({ x, height, ...rest }, index) => (
              <a.div
                key={items[index]}
                className="trails-text"
                style={{
                  ...rest,
                  transform: x.to((x) => `translate3d(0,${x}px,0)`),
                }}
              >
                <a.div style={{ height }}>{items[index]}</a.div>
                <a.div style={{ height }}>{items[index + 1]}</a.div>
              </a.div>
            ))}
          </div>
          </Parallax>

        </>
      ) : (
        <>
          <div style={smallTitle}>
          <Parallax speed={3}>
            <h1 className="small-title">
              Hi, I'm 
              Dolores Polito.
            </h1>
            </Parallax>
          </div>
        </>
      )}

      <a.div style={paStyle}>
      <Parallax speed={5}>
        <div>
          <p className="subname">FULLSTACK DEVELOPER | INDUSTRIAL ENGINEER</p>
        </div>
        </Parallax>
      </a.div>
      <div ref={triggerRefAbout1} />

      {transition((style, item) =>
        item ? (
          <Parallax speed={5}>
          <a.div className="cover-links" style={style}>
            <a
              href="https://www.linkedin.com/in/dolores-polito/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/DoloresPolito"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>

            <button
              className="cover-bottom"
              onClick={() => {
                downloadFile(
                  "https://dolorespolito.github.io/portfolio/assets/DoloresPolito_RESUME.pdf",
                  "Resume - Dolores Polito"
                );
              }}
            >
              <p>Download Resume</p> <i className="bi bi-download"></i>
            </button>
          </a.div>
          </Parallax>
        ) : (
          ""
        )
      )}
      <Parallax speed={5}>
      <div className="arrow-logo">
        <Link
          className="nav-item"
          to="about"
          spy={true}
          smooth={true}
          offset={-30}
          duration={800}
        >
          <img src={logo} alt="logo"></img>
        </Link>
      </div>
      </Parallax>
    </div>
  );
};

export default Cover;
