import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = function () {
  const [navbarWidth, setNavbarWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setNavbarWidth(window.innerWidth));
  }, []);

  const navbarCut = 600;

  const [isOpen, setIsOpen] = useState(false);

  const open = function () {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      {navbarWidth >= navbarCut ? (
        <>
          <nav className="navbar">
            <div className="navbar-links">
              <ul>
                <li>
                  <a>
                    {" "}
                    <Link
                      className="nav-item"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-160}
                      duration={800}
                    >
                      ABOUT
                    </Link>
                  </a>
                </li>

                <li>
                  <a>
                    {" "}
                    <Link
                      className="nav-item"
                      to="proyects"
                      spy={true}
                      smooth={true}
                      offset={-13}
                      duration={800}
                    >
                      PROJECTS
                    </Link>
                  </a>
                </li>

                <li>
                  <a>
                    {" "}
                    <Link
                      className="nav-item"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={70}
                      duration={800}
                    >
                      CONTACT
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </>
      ) : (
        <>
          {isOpen ? (
            <>
              <a
                className="toggle-button"
                id="toggle-button"
                onClick={() => open()}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </a>
              <div className="open-nav">
                <ul>
                  <li>
                    <Link
                      className="nav-item"
                      to="proyects"
                      spy={true}
                      smooth={true}
                      offset={-13}
                      duration={800}
                    >
                      PROJECTS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-item"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-160}
                      duration={800}
                    >
                      ABOUT
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="nav-item"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={70}
                      duration={800}
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <a
                className="toggle-button"
                id="toggle-button"
                onClick={() => open()}
                toggled={isOpen}
                toggle={setIsOpen}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </a>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
