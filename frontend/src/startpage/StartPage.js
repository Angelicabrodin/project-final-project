import React, { useState } from 'react'
import { Register } from 'startpage/Register'
import { Login } from 'startpage/Login'
import lotus from './lotusblack.png'
import { Link } from 'react-router-dom'

import './css/startpage.css'

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
        <div className='start-container'>
            <div className="wrapper-img">
                <img className="logo-img" src={lotus} alt="Lotus" />
            </div>
            {showRegisterForm && !showLoginForm && <Register />}
            {showLoginForm && <Login />}
            {!showRegisterForm && <button type='button' className='start-button' onClick={onRegister}>Register</button>}
            {!showLoginForm && <button type='button' className='start-button' onClick={onLogin}>Login</button>}
            <Link to="/home">Welcome</Link>
        </div>
    )
}