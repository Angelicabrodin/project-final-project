import React, { useState } from 'react'
import { Profile } from './Profile'
import './login.css'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [user, setUser] = useState({})
    const URL = 'https://project-yoga.herokuapp.com/login'

    const fetchProfile = async () => {
        const response = await
            fetch(URL, {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' }
            })

        const json = await response.json()
        return json
    }

    const handleSubmit = (event) => {
        event.preventDefault()


        fetchProfile().then(data => {
            setEmail('')
            setPassword('')

            if (data.notFound) {
                setErrorMessage('Username or password is invalid')
                setLoggedIn(false)
            } else {
                // Where does setItem come from??
                window.localStorage.setItem('accessToken', data.accessToken)
                setErrorMessage('')
                setLoggedIn(true)
                setUser(data)
            }
        })
    }

    const logOut = () => {
        window.localStorage.clear()
        setLoggedIn(false)
    }

    return (
        <>
            {loggedIn &&
                <Profile userLoggedIn={loggedIn} onClick={logOut} user={user} />
            }
            {errorMessage && <p>{errorMessage}</p>}
            {!loggedIn &&
                <>
                    <form className='login-form' onSubmit={handleSubmit} >
                        <h2>Login</h2>
                        <label>
                            <input type='email'
                                className='login-input'
                                placeholder='Email'
                                value={email}
                                onChange={(event) => { setEmail(event.target.value) }} />
                        </label>
                        <label>
                            <input type='password'
                                placeholder='Password'
                                className='login-input'
                                value={password}
                                onChange={(event) => { setPassword(event.target.value) }} />
                        </label>
                        <button className='login-button' type='submit'>Login</button>
                    </form>
                </>}
        </>
    )
}