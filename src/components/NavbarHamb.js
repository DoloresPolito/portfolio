import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import Tabs from './Tabs'
import Hamburger from 'hamburger-react'
import { Container } from '../styles/texts'

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const [isOpen, setOpen] = useState(false)
  const medium = 700

  return (
    <NavbarSection>
      <NavbarContainer className={!isOpen && 'isClosed'}>
        {width >= medium ? (
          <Tabs mode={'large'} />
        ) : (
          <>
            <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
            <Menu open={isOpen} />
          </>
        )}
      </NavbarContainer>
    </NavbarSection>
  )
}


const NavbarSection = styled.section`
  z-index: 100;
  background: transparent;
  background: #121418;
  @media only screen and (max-width: 700px) {
    background: #1b1f24;
  }
  position: fixed;
  top: 0;
  width: 100%;
  margin: auto;
  .hamburger-react {
    position: relative;
    z-index: 3;
    color: white;
  }

  .hamburger-react :nth-child(2) {
    background: #1b1f24 !important;
  }
  .isClosed .hamburger-react :nth-child(3) {
    left: 22px !important;
    width: 18px !important;
  }
`

const NavbarContainer = styled(Container)`
  padding: 24px 0;
  margin-top: 0;
  margin-bottom: 0;
  @media only screen and (max-width: 700px) {
    padding: 10px 0;
    align-items: center;
  }
  display: flex;
  justify-content: space-between;
`

export default Navbar