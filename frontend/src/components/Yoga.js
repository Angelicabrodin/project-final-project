import React from 'react'
import styled from 'styled-components/macro'
import img from 'components/assets/yogahands.jpeg'

const YogaContainer = styled.div`
    display:flex;
    justify-content: center;
    background-image:url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    height:100vh;
    width:100%;
`

const YogaList = styled.div`
    margin-top: 100px;
    justify-content: center;
    width:50%;
    color: #3f4b41;
`
const YogaLinks = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 30px;
    margin: 0px;
    font-size: 20px;
    color: #3f4b41;
    font-family: 'Amatic SC';
`
const StyledLink = styled.a`
    color:white;
    text-decoration:none;
    cursor: pointer;
`

export const Yoga = () => {
    return (
        <YogaContainer>
            <YogaList>
                <h2>Free yoga sites</h2>
                <h5>Feel free to browse the pages of free yoga sites</h5>
                <YogaLinks>
                    <li><StyledLink href={'https://yogobe.com/se/register/account'}>Yogobe</StyledLink></li>
                    <li><StyledLink href={'https://yogobe.com/se/register/account'}>Yogobe</StyledLink></li>
                    <li><StyledLink href={'https://yogobe.com/se/register/account'}>Yogobe</StyledLink></li>
                    <li><StyledLink href={'https://yogobe.com/se/register/account'}>Yogobe</StyledLink></li>
                    <li><StyledLink href={'https://yogobe.com/se/register/account'}>Yogobe</StyledLink></li>
                </YogaLinks>
            </YogaList>
        </YogaContainer>
    )
}
