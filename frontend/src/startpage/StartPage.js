import React, { useState } from 'react'
import { Register } from 'startpage/Register'
import { Login } from 'startpage/Login'
import lotus from './lotusblack.png'
import { Link } from 'react-router-dom'

import styled from 'styled-components/macro'

const StartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-center:center;
    flex-direction: column;
    margin: 70px 25px 25px 25px;
    height: 80vh;
`
const StartButton = styled.div`
    border-radius: 5px;
    justify-content:center;
    align-items:center;
    padding: 1px 7px 2px;
    background-color: white;
    color: #3f4b41;
    font-family: 'Amatic SC';
    font-size: 20px;
    height: 30px;
    width: 120px;
    margin: 15px;
    border:0.5px solid darkgray;
`

const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius:50%;
    padding:10px;
    height:150px;
    width:150px;
    border:1px solid darkgray;
`

const Logo = styled.img`
    width:80%;
`


export const StartPage = () => {
    const [showRegisterForm, setShowRegisterForm] = useState(false)
    const [showLoginForm, setShowLoginForm] = useState(false)

    const onRegister = () => {
        setShowLoginForm(false)
        setShowRegisterForm(true)
    }

    const onLogin = () => {
        setShowRegisterForm(false)
        setShowLoginForm(true)
    }
    return (
        <StartContainer>
            <Wrapper>
                <Logo src={lotus} alt="Lotus" />
            </Wrapper>
            {showRegisterForm && !showLoginForm && <Register />}
            {showLoginForm && <Login />}
            {!showRegisterForm && <StartButton type='button' onClick={onRegister}>Register</StartButton>}
            {!showLoginForm && <StartButton type='button' onClick={onLogin}>Login</StartButton>}
        </StartContainer>
    )
}