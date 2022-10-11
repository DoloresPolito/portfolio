import styled from "styled-components";

export const LinkL = styled.a`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: #fcfcfc;
  cursor: pointer;
  text-decoration: none;

  @media only screen and (max-width: 700px) {
    font-size: 17px;
    line-height: 28px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

export const Container = styled.div`
  margin: auto;
  max-width: 1140px;
  @media only screen and (min-width: 701px) and (max-width: 1200px) {
    max-width: 90%;
  }
  @media only screen and (min-width: 1900px) {
    margin: auto;
  }
  @media only screen and (max-width: 700px) {
    margin: 0 24px;
    padding 24px 0;
  }

`;
