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
    font-size: 20px;
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
    width: 70px;
    height:35px;
`

const Headline = styled.h2`
    color: darkgray;
    font-family: 'Amatic SC';
    font-size: 35px;
    margin: 10px 0 10px;
`

const SubmitText = styled.p`

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
                <Headline>Register</Headline>
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
            {registerUser && <SubmitText>Namaste for registering to our Yoga community 🙏 </SubmitText>}
        </>
    )
}