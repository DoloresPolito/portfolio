import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-scroll";
import useObserver from "../hooks/useObserver";
import { useTrail, useSpring, animated as a } from "react-spring";

const items = ["Hi, I'm", "Dolores Polito"];
const config = { mass: 8, tension: 500, friction: 200 };

const Cover = function () {


  const [coverWidth, setCoverWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setCoverWidth(window.innerWidth));
  }, []);


  const coverCut = 560;



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

  return (
    <div className="cover-container">
      <div ref={triggerRefAbout} />


      
      {coverWidth >= coverCut ? (<>
      
        <div className="trails-main" onClick={() => set((state) => !state)}>
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <a.div
              key={items[index]}
              className="trails-text"
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              <a.div style={{ height }}>{items[index]}</a.div>
              <a.div style={{ height }}>{items[index + 1]}</a.div>
            </a.div>
          ))}
        </div>
      </div>
      </>) : (<>
      
      <div style={smallTitle}>
        <h1 className="small-title">Hi, I'm <br/>Dolores Polito.</h1>
      </div> 
      
      </>) }

      


      <a.div style={paStyle}>
        <div>
          <p className="subname">FULLSTACK DEVELOPER | INDUSTRIAL ENGINEER</p>
        </div>
      </a.div>

      <div className="cover-links">
        <a
          href="https://www.linkedin.com/in/dolores-polito/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/DoloresPolito"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-github"></i>
        </a>
      </div>
      <button className="cover-bottom" onClick={() => {downloadFile('http://localhost:3000/assets/DoloresPolito_RESUME.pdf', 'Resume - Dolores Polito')}}>
        Download Resume <i class="bi bi-download"></i>
      </button>
    </div>
  );
};

export default Cover;
