import React from 'react'
import styled from 'styled-components/macro'
import img from 'components/assets/swing.jpeg'

const HomeContainer = styled.div`
    display:flex;
    justify-content: center;
    background-image:url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    height: auto;
    width:100%;
`

const HomeList = styled.div`
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    // align-items:center;
    // justify-content:center;
    width:70%;
    @media (min-width: 668px) {
        width: 60%;
    }
    @media (min-width: 992px) {
        
    }
`
const HeadLine = styled.h2`
    color: #3f4b41;
    font-family:'Amatic SC';
    font-weight:bold;
    font-size:35px;

    @media (min-width: 668px) {
        margin: 25px 0px; 
        font-size:45px;
    }
`
const HomeText = styled.p`
    color: #3f4b41;
    font-family: 'Roboto', sans-serif;
    font-size:15px;
    margin-bottom: 10px;
    margin-top: 0px;
    @media (min-width: 668px) {
        font-size:20px;
    }
`


export const Home = () => {
    return (
        <HomeContainer>
            <HomeList>
                <HeadLine>Welcome to this site</HeadLine>
                <HomeText>Feel free to browse the pages of this site and I hope you
                    will find and get inspired by the content, sometimes
                    it is important to sit down, reflect and look within,
                    so I hope you find something that is meaningful for you and your inner health,
                    Namaste!
                </HomeText>
            </HomeList>
        </HomeContainer>

    )
}