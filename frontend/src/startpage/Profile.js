import React, { useState, useEffect } from 'react'
import './css/profile.css'

export const Profile = ({ userLoggedIn, onClick, user }) => {

    const accessToken = window.localStorage.getItem('accessToken')
    const [userName, setUserName] = useState('user')


    useEffect(() => {
        const fetchUserData = () => {
            const URL = 'https://project-yoga.herokuapp.com/user'
            return fetch(URL, {
                method: 'GET',
                headers: { 'Authorization': accessToken }
            })
                .then(res => res.json())
                .then(json => setUserName(json.name))
                .catch(err => {
                    console.log('error', err)
                })
        }
        fetchUserData()
    })

    return (
        <section className='profile-container'>
            <h2>{`Hello ${userName}`} </h2>
            <button type='button' className='button-signout' onClick={onClick}>Log out</button>
        </section>
    )
}