import React, { useState } from "react";
import "../App.css";
// import emailjs from 'emailjs-com';

function ContactForm() {
  const path = window.location.pathname;

  const frmContact = { userName: ``, userEmail: ``, message: `` };
  const [contact, setContact] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <>
      <h2 className="title">CONTACT ME</h2>
      <div className="contact" id="contact">
        <a
          style={{ textDecoration: "none" }}
          href="mailto:dolores.polito@gmail.com"
          target="_blank"
        >
          <div className="contact-item">
            <i class="bi bi-envelope"></i>

            <p clasName="item">EMAIL</p>

            <div className="linea-contact"></div>

            <p clasName="item"> dolores.polito@gmail.com</p>
          </div>
        </a>

        <a
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/dolores-polito/"
          target="_blank"
        >
          <div className="contact-item">
            <i class="bi bi-linkedin"></i>

            <p clasName="item">LINKEDIN</p>
            <div className="linea-contact"></div>
            <p>/dolores-polito</p>
          </div>
        </a>
      </div>

      <div className="contact-other">
        <div className="other-item">
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://www.instagram.com/dolorespolito/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-instagram"></i>
          </a>
        </div>

        <div className="other-item">
          <a
            href=" https://wa.me/543446584076"
            style={{ textDecoration: "none", color: "white" }}
          >
            <i class="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
