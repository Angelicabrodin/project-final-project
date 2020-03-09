import React, { useState } from 'react'
import { Profile } from './Profile'
import './css/login.css'
import { useSelector, useDispatch } from 'react-redux'
import { users } from 'reducers/users'
export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const URL = 'https://project-yoga.herokuapp.com/login'
    const loggedIn = useSelector(store => store.users.loggedIn) // här får vi global state loggedIn från Redux. är true eller false.
    const dispatch = useDispatch()
    const fetchProfile = async () => {
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        const json = await response.json()
        return json
    }
    const handleSubmit = event => {
        event.preventDefault()
        fetchProfile().then(data => {
            setEmail('')
            setPassword('')
            if (data.notFound) {
                setErrorMessage('Username or password is invalid')
                dispatch(users.actions.setLoggedIn(false)) // Här kallar vi på action i reducern för att sätta global state till false.
            } else {
                window.localStorage.setItem('accessToken', data.accessToken)
                setErrorMessage('')
                dispatch(users.actions.setLoggedIn(true)) // Här kallar vi på action i reducern för att sätta global state till true.
            }
        })
    }
    // den här logout funktionen är passad ner som en prop till Profile componenten, den visas under Hello user.
    const logOut = () => {
        window.localStorage.clear()
        dispatch(users.actions.setLoggedIn(false)) // Här kallar vi på action i reducern för att sätta global state till false.
    }
    return (
        <>
            {loggedIn && (
                <Profile onClick={logOut} /> // Profile component är den som visas när du är inloggad.
            )}
            {errorMessage && <p>{errorMessage}</p>}
            {!loggedIn && (
                <>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <label>
                            <input
                                type='email'
                                className='login-input'
                                placeholder='Email'
                                value={email}
                                onChange={event => {
                                    setEmail(event.target.value)
                                }}
                            />
                        </label>
                        <label>
                            <input
                                type='password'
                                placeholder='Password'
                                className='login-input'
                                value={password}
                                onChange={event => {
                                    setPassword(event.target.value)
                                }}
                            />
                        </label>
                        <button className='login-button' type='submit'>
                            Login
            </button>
                    </form>
                </>
            )}
        </>
    )
}