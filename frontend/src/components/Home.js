import React from 'react'
import styled from 'styled-components/macro'
import img from 'components/assets/swing.jpeg'
import lotus from 'components/assets/lotus.png'

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
    margin-left: 30px;
    margin-top: 30px;
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
// const EndText = styled.p`
//     color: #3f4b41;
//     font-family: 'Roboto', sans-serif;
//     font-size:15px;
//     margin-bottom: 10px;
//     margin-top: 0px;
//     align-self: center;
//     @media (min-width: 668px) {
//         font-size:20px;
//     }
// `
// const LotusImg = styled.img`
//     width:10%;
//     margin-left: 15px;
// `

const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius:50%;
    padding:10px;
    height:50px;
    width:50px;
    margin-left: 20px;
    display: inline-flex;
    border:1px solid white;
    @media (min-width: 668px) {
        height: 60px;
        width: 60px;
    }
    @media (min-width: 992px) {
        height: 70px;
        width: 70px;
    }
`
const Logo = styled.img`
    width:80%;
`

export const Home = () => {
    return (
        <HomeContainer>
            <HomeList>
                <HeadLine>Welcome to NoStressYoga</HeadLine>
                <HomeText><b>Today</b>, more than ever, people are struggling with mental health, fear, pressure and stress.
                    I am in no way immune to this, but I have found a way that helps me cope with all these feelings,
                    practicing Yoga and meditation. That is why I have started this community, nostressyoga, to share all my
                    favourite sites for yoga and meditation.</HomeText>
                <HomeText>So please feel free to browse the pages of this site and
                    I hope you will find and get inspired by the content.</HomeText>
                <HomeText>Sometimes it is important to sit down, reflect and look within, so I hope you find something
                that is meaningful for you and your inner health, Namaste!
                </HomeText>
                <HomeText>
                    Peace & Love Angie
                    <Wrapper>
                        <Logo src={lotus} alt="Lotus" />
                    </Wrapper>
                </HomeText>
            </HomeList>
        </HomeContainer>

    )
}