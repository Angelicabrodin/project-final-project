import React from 'react'
import styled from 'styled-components/macro'
import img from 'components/assets/mindfulness.jpeg'

const MedContainer = styled.div`
    display:flex;
    justify-content: center;
    background-image:url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    height:100vh;
    width:100%;
`

const MedList = styled.div`
    margin-top:100px;
    justify-content: center;
    width:50%;
    color: #3f4b41;
`
const StyledLink = styled.a`
    color:white;
    text-decoration:none;
    cursor: pointer;
`

export const Meditation = () => {
    return (
        <MedContainer>
            <MedList>
                <h2>Free Meditation sites</h2>
                <h5>Feel free to browse the pages of free Meditation sites</h5>
                <ul>
                    <li><StyledLink href={'https://yogobe.com/se/register/account'}>Yogobe</StyledLink></li>
                    <li><StyledLink href={'https://yogobe.com/se/register/account'}>Yogobe</StyledLink></li>
                    <li><StyledLink href={'https://yogobe.com/se/register/account'}>Yogobe</StyledLink></li>
                    <li><StyledLink href={'https://yogobe.com/se/register/account'}>Yogobe</StyledLink></li>
                    <li><StyledLink href={'https://yogobe.com/se/register/account'}>Yogobe</StyledLink></li>
                </ul>
            </MedList>
        </MedContainer>
    )
}