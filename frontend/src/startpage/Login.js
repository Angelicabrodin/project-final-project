import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { users } from 'reducers/users'

import { Profile } from './Profile'
import styled from 'styled-components/macro'

const SigninForm = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin:10px;
`

const Input = styled.input`
    border: 0.5px solid darkgray;
    border-radius: 5px;
    background-color: white;
    width: 200px;
    height: 35px;
    color: #3f4b41;
    font-family: 'Amatic SC';
    font-size: 20px;
    font-weight:bold;
    margin:7px;
    padding:3px;
`

const SigninButton = styled.button`
    border: 0.5px solid darkgray;
    padding: 5px;
    margin: 6px;
    border-radius: 5px;
    background-color: white;
    color: #3f4b41;
    font-size:15px;
    font-family: 'Amatic SC';
    font-weight:bold;
    width: 100px;
    height: 40px;
    @media (min-width: 668px) {
        width: 100px;
        height: 50px;
        font-size:20px;
    }
`
const Headline = styled.h2`
    color: #3f4b41;
    font-family: 'Amatic SC';
    font-weight:bold;
    font-size: 35px;
    margin:10px 0 10px;
`
const ErrorText = styled.p`
    color: #3f4b41;
    font-family: 'Amatic SC';
    font-size:30px;
`

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const URL = 'https://project-yoga.herokuapp.com/login'
    // här får vi global state loggedIn från Redux. är true eller false.
    const loggedIn = useSelector(store => store.users.loggedIn)
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
                setErrorMessage('Email or password is invalid')
                // Här kallar vi på action i reducern för att sätta global state till false.
                dispatch(users.actions.setLoggedIn(false))
            } else {
                window.localStorage.setItem('accessToken', data.accessToken)
                setErrorMessage('')
                // Här kallar vi på action i reducern för att sätta global state till true.
                dispatch(users.actions.setLoggedIn(true))
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
                // Profile component är den som visas när du är inloggad.
                <Profile onClick={logOut} />
            )}
            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
            {!loggedIn && (
                <>
                    <SigninForm onSubmit={handleSubmit}>
                        <Headline>Sign in</Headline>
                        <label>
                            <Input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={event => {
                                    setEmail(event.target.value)
                                }}
                            />
                        </label>
                        <label>
                            <Input
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={event => {
                                    setPassword(event.target.value)
                                }}
                            />
                        </label>
                        <SigninButton type='submit'>
                            Sign in
                        </SigninButton>
                    </SigninForm>
                </>
            )}
        </>
    )
}