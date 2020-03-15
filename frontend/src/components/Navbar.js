import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'
// import './css/nav2.css'

import styled from 'styled-components'

const NavWrapper = styled.section`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: ${props => (props.active ? '100%' : '8%')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px;
  background: ${props => (props.active ? 'rgba(0, 0, 0, 0.8)' : '#f6f2df')};  
  @media (min-width: 668px) {
    position: relative;
    background: #f6f2df;
  }
`
const BurgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // background: ${props => (props.active ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.6)')};  
  width: 46px;
  height: 42px;
  &:focus {
    outline-color: none;
    outline-offset: 3px;
  }
  @media (min-width: 668px) {
    display: none;
  }
`
const NavLinks = styled.nav`
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 99%;
  height: 80%;
  padding-top: 50px;
  @media (min-width: 668px) {
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 0;
  }
`
const NavButton = styled.button`
  font-family: 'Amatic SC';
  letter-spacing: 1.5px;
  font-size: 40px;
  font-weight: 700;
  color: #3f4b41;
  height: 40px;
  border: none;
  background: transparent;
  transition: 0.6s;
  cursor: pointer;
  &:focus {
    outline-color: #3f4b41;
    outline-offset: 3px;
  }
  &:hover {
    color: pink;
  }
  @media (min-width: 668px) {
    font-size: 14px;
    font-weight: 400;
  }
  @media (min-width: 992px) {
    font-size: 18px;
  }
`

export const Navbar = () => {
  const [active, setActive] = useState(false)

  return (
    <NavWrapper
      active={active === true} role='navigation'>

      <BurgerWrapper
        onKeyPress={(event) => { event.key === "Enter" && setActive(!active) }}
        tabIndex='0'
        aria-label='Open menu'
        role='button'
        aria-pressed={active ? 'true' : 'false'}
      >
        <HamburgerMenu
          isOpen={active === true}
          menuClicked={() => setActive(!active)}
          width={40}
          height={32}
          strokeWidth={2}
          rotate={0}
          color='#3f4b41'
          borderRadius={0}
          animationDuration={0.5}
        />
      </BurgerWrapper>

      <NavLinks active={active === true}>

        <Link to={'/home'}>
          <NavButton>Home</NavButton>
        </Link>

        <Link to={'/yoga'}>
          <NavButton>Yoga</NavButton>
        </Link>

        <Link to={'/meditation'}>
          <NavButton>Meditation</NavButton>
        </Link>

        <Link to={'/happylist'}>
          <NavButton>Happy List</NavButton>
        </Link>

        <Link to={'/'}>
          <NavButton>Logout</NavButton>
        </Link>

      </NavLinks>
    </NavWrapper>
  )
}