import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'

// Trying to make the logout button to work with redux
import { useSelector, useDispatch } from 'react-redux'
import { users } from 'reducers/users'

import styled from 'styled-components/macro'

const NavWrapper = styled.section`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: ${props => (props.active ? '100%' : '7%')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px;
  background: ${props => (props.active ? 'rgba(0, 0, 0, 0.8)' : 'none')};  
  @media (min-width: 668px) {
    position: relative;
    background: #f6f2df;
    padding:0px;
  }
`
const BurgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 46px;
  height: 42px;
  &:focus {
    outline-color: pink;
    outline-offset: 3px;
  }
  @media (min-width: 668px) {
    display: none;
  }
`
const NavLinks = styled.nav`
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 99%;
  height: 80%;
  @media (min-width: 668px) {
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`
const NavButton = styled.button`
  font-family: 'Amatic SC';
  letter-spacing: 1.5px;
  font-size: 35px;
  font-weight: bold;
  color: white;
  border: none;
  background: transparent;
  transition: 0.6s;
  cursor: pointer;
  &:focus {
    outline-color: #3f4b41;
    outline-offset: 1px;
  }
  &:hover {
    color: pink;
  }
  @media (min-width: 668px) {
    font-size: 20px;
    color: #3f4b41;
  }
  @media (min-width: 992px) {
    font-size: 25px;
    color:#3f4b41;
  }
`
const LogOut = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: none;
`

export const Navbar = () => {
  const [active, setActive] = useState(false)

  // Everything below is to try and set the logout button
  // här får vi global state loggedIn från Redux. är true eller false.
  const loggedIn = useSelector(store => store.users.loggedIn)
  const dispatch = useDispatch()

  // Här kallar vi på action i reducern för att sätta global state till false.
  const logOut = () => {
    window.localStorage.clear()
    dispatch(users.actions.setLoggedIn(false))
  }

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
        <Link onClick={() => setActive(!active)} to={'/home'}>
          <NavButton>Home</NavButton>
        </Link>

        <Link onClick={() => setActive(!active)} to={'/yoga'}>
          <NavButton >Yoga</NavButton>
        </Link>


        <Link onClick={() => setActive(!active)} to={'/meditation'}>
          <NavButton>Meditation</NavButton>
        </Link>

        <Link onClick={() => setActive(!active)} to={'/affirmations'}>
          <NavButton>Affirmations</NavButton>
        </Link>

        <LogOut type='button' onClick={logOut}>
          <NavButton>Logout</NavButton>
        </LogOut>

      </NavLinks>
    </NavWrapper>
  )
}