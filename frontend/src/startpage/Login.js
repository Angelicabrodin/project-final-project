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
    // Global state loggedIn from Redux, either true/false
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
                // Calling to action in the reducer to set global state to false
                dispatch(users.actions.setLoggedIn(false))
            } else {
                window.localStorage.setItem('accessToken', data.accessToken)
                setErrorMessage('')
                // Calling to action in the reducer to set global state to true
                dispatch(users.actions.setLoggedIn(true))
            }
        })
    }
    // This logout function is passed down as a prop to the Profile component, as shown in Hello userName
    const logOut = () => {
        window.localStorage.clear()
        dispatch(users.actions.setLoggedIn(false))
    }
    return (
        <>
            {loggedIn && (
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