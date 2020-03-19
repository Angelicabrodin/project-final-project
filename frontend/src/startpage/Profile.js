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
    font-weight:bold;
    font-size:15px;
    font-family: 'Amatic SC';
    border: 0.5px solid darkgray;
    width: 100px;
    height: 40px;
`

const Welcome = styled.h2`
    color: #3f4b41;
    font-family: 'Amatic SC';
    font-size:25px;
    font-weight:bold;
    margin: 20px 0px 0px;
`

const StyledLink = styled(NavLink)`
    color: #3f4b41;
    font-family: 'Amatic SC';
    text-decoration:none;
    font-size:30px;
    font-weight:bold;
    margin:10px;
    transition: 0.6s;
    &:hover {
        color: pink;
    }
`

export const Profile = ({ onClick }) => {
    const accessToken = window.localStorage.getItem('accessToken')
    // userName är default user
    const [userName, setUserName] = useState('')

    useEffect(() => {
        const fetchUserData = () => {
            const URL = 'https://project-yoga.herokuapp.com/user'
            return fetch(URL, {
                method: 'GET',
                headers: { Authorization: accessToken }
            })
                .then(res => res.json())
                .then(json => {
                    console.log('json', json)
                    setUserName(json.name)
                })
                .catch(err => {
                    console.log('error', err)
                })
        }
        fetchUserData()
    })
    return (
        <ProfileSection>
            <Welcome>{`Hello ${userName},`}
                <StyledLink to="/home">Welcome to NoStressYoga</StyledLink>
            </Welcome>
            {/* <SignoutButton type='button' onClick={onClick}>
                Sign out
            </SignoutButton> */}
        </ProfileSection>
    )
}