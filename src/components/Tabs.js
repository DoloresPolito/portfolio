import React from "react";
import styled from "styled-components";
import { LinkL } from "../styles/texts";
import { Link } from "react-scroll";

const Tabs = ({ mode }) => {
  return (
    <TabsBox mode={mode}>
      <Link
        className="nav-item"
        to="about"
        spy={true}
        smooth={true}
        offset={-47}
        duration={800}
      >
        <LinkL >
          ABOUT
        </LinkL>
      </Link>

      <Link
        className="nav-item"
        to="proyects"
        spy={true}
        smooth={true}
        offset={-25}
        duration={800}
      >
        <LinkL >
          PROJECTS
        </LinkL>
      </Link>

      <Link
        className="nav-item"
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={800}
      >
        <LinkL >
          CONTACT
        </LinkL>
      </Link>
    </TabsBox>
  );
};

const TabsBox = styled.div`
  display: ${(props) => (props.mode === "large" ? "flex" : "block")};
  align-items: center;
  text-align: center;
  a {
    padding: ${(props) => (props.mode === "large" ? "0 20px" : "20px 0")};
    display: flex;
    align-items: center;
    img {
      width: 35px;
      padding: 0 5px;
    }
  }
`;

export default Tabs;
