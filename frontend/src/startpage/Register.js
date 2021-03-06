import React, { useState } from 'react'
import styled from 'styled-components/macro'

const RegisterForm = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin:10px
`

const Input = styled.input`
    border: 0.5px solid darkgray;
    border-radius: 5px;
    background-color: white;
    width: 200px;
    height: 35px;
    color: #3f4b41;
    font-family: 'Amatic SC';
    letter-spacing: 1.5px;
    font-size: 20px;
    font-weight:bold;
    margin: 7px;
    padding: 3px;
`

const SubmitButton = styled.button`
    border: 0.5px solid darkgray;
    padding: 5px;
    margin: 6px;
    border-radius: 5px;
    background-color: white;
    color: #3f4b41;
    font-family: 'Amatic SC';
    letter-spacing: 1.5px;
    font-weight:bold;
    font-size:15px;
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
    margin: 10px 0 10px;
`

const SubmitText = styled.h2`
    color: #3f4b41;
    font-family: 'Amatic SC';
    font-weight:bold;
    font-size: 30px;
    margin: 10px 0 10px;
    text-align:center;
`

const URL = 'https://project-yoga.herokuapp.com/register'

export const Register = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [registerUser, setRegisterUser] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(URL, {
            method: 'POST',
            body: JSON.stringify({ name: name, email: email, password: password }),
            headers: { 'Content-Type': 'application/json' }
        }).then(() => {
            setRegisterUser(true)
            setName('')
            setEmail('')
            setPassword('')
        })
            .catch((err) => { console.log('error:', err) })
    }

    return (
        <>
            <RegisterForm onSubmit={handleSubmit}>
                <Headline>Sign up</Headline>
                <label>
                    <Input required
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(event) => { setName(event.target.value) }} />
                </label>
                <label>
                    <Input required
                        type='email'
                        placeholder='Email'
                        value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </label>
                <label>
                    <Input required
                        type='password'
                        placeholder='Password'
                        value={password} onChange={(event) => { setPassword(event.target.value) }} />
                </label>
                <SubmitButton type='submit'>Submit</SubmitButton>
            </RegisterForm>
            {registerUser && <SubmitText>Namaste for signing up, now it's time to sign in!</SubmitText>}
        </>
    )
}