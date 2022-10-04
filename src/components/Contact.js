import React, { useRef } from "react";
import useObserver from "../hooks/useObserver";
import { useTransition, animated as a } from "react-spring";
import "../App.css";

function Contact() {
  const triggerRefAbout1 = useRef();
  const dataRef1 = useObserver(triggerRefAbout1, {
    freezeOnceVisible: true,
  });

  const triggerRefAbout2 = useRef();
  const dataRef2 = useObserver(triggerRefAbout2, {
    freezeOnceVisible: true,
  });

  const transition1 = useTransition(dataRef1, {
    config: { duration: 900 },
    from: { x: -200, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
  });
  const transition2 = useTransition(dataRef2, {
    config: { duration: 900 },
    from: { x: 200, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
  });

  return (
    <>
      <h2 className="title">CONTACT ME</h2>
      <div ref={triggerRefAbout1} />
      <div ref={triggerRefAbout2} />
      <div className="contact" id="contact">
        {transition1((style, item) =>
          item ? (
            <a.div style={style}>
              <a
                style={{ textDecoration: "none" }}
                href="mailto:dolores.polito@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-item">
                  <i className="bi bi-envelope"></i>

                  <p className="item">EMAIL</p>

                  <div className="linea-contact"></div>

                  <p className="item"> dolores.polito@gmail.com</p>
                </div>
              </a>
            </a.div>
          ) : (
            ""
          )
        )}

        {transition2((style, item) =>
          item ? (
            <a.div style={style}>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/dolores-polito/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-item">
                  <i className="bi bi-linkedin"></i>

                  <p className="item">LINKEDIN</p>
                  <div className="linea-contact"></div>
                  <p>/dolores-polito</p>
                </div>
              </a>
            </a.div>
          ) : (
            ""
          )
        )}
      </div>

      <div className="contact-other">
        <div className="other-item">
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://www.instagram.com/dolorespolito/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>

        <div className="other-item">
          <a
            href=" https://wa.me/543446584076"
            style={{ textDecoration: "none", color: "white" }}
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
