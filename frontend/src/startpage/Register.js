import React, { useState } from 'react'
import './css/register.css'

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
            <form className='register-container' onSubmit={handleSubmit}>
                <h2>Register</h2>
                <label>
                    <input required className='register-input' type='text' placeholder='Name' value={name} onChange={(event) => { setName(event.target.value) }} />
                </label>
                <label>
                    <input required className='register-input' type='email' placeholder='Email' value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </label>
                <label>
                    <input required className='register-input' type='password' placeholder='Password' value={password} onChange={(event) => { setPassword(event.target.value) }} />
                </label>
                <button type='submit' className='submit-button'>Submit</button>
            </form>
            {registerUser && <p>Namaste for registering to our Yoga community 🙏 </p>}
        </>
    )
}