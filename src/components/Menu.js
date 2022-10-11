import React from 'react'
import styled from 'styled-components'
import Tabs from './Tabs'

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Tabs mode="small"/>
    </StyledMenu>
  )
}

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #1b1f24;
  height: 100vh;
  text-align: left;
  padding: 150px 100px 30px 30px;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
`

export default Menu
