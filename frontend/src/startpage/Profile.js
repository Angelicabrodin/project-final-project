import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

const ProfileSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const SignoutButton = styled.button`
    padding: 5px;
    margin: 6px;
    border-radius: 5px;
    background-color: white;
    color: #3f4b41;
    font-family: 'Amatic SC';
    border: 0.5px solid darkgray;
    width: 100px;
`

// const Welcome = styled.h2`
//     color: darkgray;
//     font-family: 'Amatic SC';
// `

const StyledLink = styled(NavLink)`
    color: darkgray;
    font-family: 'Amatic SC';
    text-decoration:none;
    font-size:30px;
    margin:10px;
`

export const Profile = ({ onClick }) => {
    const accessToken = window.localStorage.getItem('accessToken')
    // userName är default user
    const [userName, setUserName] = useState('userName')

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
        <ProfileSection>
            {/* <Welcome>{`Hello ${userName}`}</Welcome> */}
            <StyledLink to="/home">Welcome back</StyledLink>
            <SignoutButton type='button' onClick={onClick}>
                Sign out
            </SignoutButton>
        </ProfileSection>
    )
}