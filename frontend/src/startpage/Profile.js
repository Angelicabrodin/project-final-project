import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './css/profile.css'


export const Profile = ({ onClick }) => {
    const accessToken = window.localStorage.getItem('accessToken')
    const [userName, setUserName] = useState('user') // userName är default user
    useEffect(() => {
        const fetchUserData = () => {
            const URL = 'https://project-yoga.herokuapp.com/user'
            return fetch(URL, {
                method: 'GET',
                headers: { Authorization: accessToken }
            })
                .then(res => res.json())
                .then(json => console.log('json', json))
                .catch(err => {
                    console.log('error', err)
                })
        }
        fetchUserData()
    })
    return (
        <section className='profile-container'>
            <h2>{`Hello ${userName}`} </h2>
            <NavLink to="/home">Welcome to our community</NavLink>
            <button type='button' className='button-signout' onClick={onClick}>
                Log out
      </button>
        </section>
    )
}