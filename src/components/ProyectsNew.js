import React, {useState, useEffect} from "react";
const { ReactSport, NetGlobal, BeluMi } = require("../proyects");

const ProyectsNew = function () {


  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);


  const cut = 1150;


  return (


    <div className="proyects-container" id="proyects">
      <h2 className="title">PROJECTS</h2>

      {width >= cut ? (
        <>
        <div className="horizontal-card">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/v6zgdsmc-OI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="video"
        ></iframe>
        <div className="card-description">
          <h3 className="card-title">{ReactSport.name}</h3>
          <p className="card-text">{ReactSport.description}</p>
          <br />
          <div className="card-stack">
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
      </div>
      <div className="horizontal-card">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/v6zgdsmc-OI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="video"
        ></iframe>
        <div className="card-description">
          <h3 className="card-title">{NetGlobal.name}</h3>
          <p className="card-text">{NetGlobal.description}</p>
          <br />
          <div className="card-stack">
            <ul>
              {NetGlobal.slack.map((slack) => {
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
      </div>
      <div className="horizontal-card">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/v6zgdsmc-OI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="video"
        ></iframe>
        <div className="card-description">
          <h3 className="card-title">{BeluMi.name}</h3>
          <p className="card-text">{BeluMi.description}</p>
          <br />
          <div className="card-stack">
            <ul>
              {BeluMi.slack.map((slack) => {
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
      </div>
        </>
      ) : (<>
      
      <div className="vertical-card">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/v6zgdsmc-OI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="video"
        ></iframe>
        <div className="card-description">
          <h3 className="card-title">{BeluMi.name}</h3>
          <p className="card-text">{BeluMi.description}</p>
          <br />
          <div className="card-stack">
            <ul>
              {BeluMi.slack.map((slack) => {
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
      </div>
      </>)}
      
    </div>
  );
};

export default ProyectsNew;
