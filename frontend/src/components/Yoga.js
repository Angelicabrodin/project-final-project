import React from 'react'
import styled from 'styled-components/macro'
import img from 'components/assets/yogahands.jpeg'

const YogaContainer = styled.div`
    display:flex;
    justify-content: center;
    background-image:url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    height: auto;
    width:100%;
    @media (min-width: 668px) {

    }
`
const YogaList = styled.div`
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    width:95%;
    @media (min-width: 668px) {
        width: 70%;
    }
    @media (min-width: 992px) {
        
    }
`
const YogaLinkBox = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    margin: 0px;
`
const StyledLink = styled.a`
    color:#3f4b41;
    text-decoration:none;
    font-size: 25px;
    font-weight:bold;
    cursor: pointer;
    font-family: 'Amatic SC';
    &:hover {
        color: pink;
    }
    @media (min-width: 668px) { 
        font-size:35px;
    }
`
const LinkText = styled.p`
    color: #3f4b41;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 15px;
    width:360px;
    @media (min-width: 668px) { 
        width:460px;
        font-size:20px;
    }
    @media (min-width: 992px) { 
        width:560px;
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
const Video = styled.iframe`
    border: 0.5px solid #3f4b41;
    border-radius:5px;
    @media (min-width: 668px) { 
        width:460px;
        height:220px;
    }
    @media (min-width: 992px) { 
        width:560px;
        height:315px;
    }
`

// const YogaText = styled.p`
//     color: #3f4b41;
//     font-family: 'Roboto', sans-serif;
//     font-size:15px;
//     margin-bottom: 10px;
//     margin-top: 0px;
//     @media (min-width: 668px) {
//         font-size:20px;
//     }
// `

export const Yoga = () => {
    return (
        <YogaContainer>
            <YogaList>
                <HeadLine>Yoga sites</HeadLine>
                {/* <YogaText>Feel free to browse these pages for different yoga sites, most of them
                    have a free trial period.
                </YogaText> */}
                <YogaLinkBox>
                    <div>
                        <StyledLink href={'https://yogobe.com/se/register/account'}>Yogobe</StyledLink>
                        <LinkText>Welcome to Yogobe – the largest community and video streaming service within yoga and health in Scandinavia!</LinkText>
                        <Video
                            width="360"
                            height="200"
                            src="https://www.youtube.com/embed/DWLz1qi-7hA"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </Video>
                    </div>
                    <div>
                        <StyledLink href={'https://www.gaia.com/yoga/practices?utm_source=google+paid&utm_medium=cpc&utm_term=&utm_campaign=1-EUROPE-DYNAMIC-SEARCH&utm_content=gaia.com/yoga/practices&ch=DimensionNotFound&gclid=Cj0KCQjw6sHzBRCbARIsAF8FMpWGAu7KlW0BJnPHlw7jdJm3BvDNpj0SYdKi1k8OBqJmC2DNsGj02hQaAlTXEALw_wcB'}>Gaia</StyledLink>
                        <LinkText>Which Hindu Goddess will you invoke?
                            Yoga on Gaia - Streaming yoga with soul.
                            It’s your kind of yoga, at your own pace, and in your own space
                            with inspiring films & documentaries.</LinkText>
                        <Video
                            width="360"
                            height="200"
                            src="https://www.youtube.com/embed/a3DMVEHN51s"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </Video>
                    </div>
                    <div>
                        <StyledLink href={'https://www.yogaanytime.com/px/p-home-7?ref=ga&gclid=Cj0KCQjw6sHzBRCbARIsAF8FMpXj53HLR3P4dqPf85d0i-YKne4a-2UlzHOj7wfaOtYVIwGNUfFEDbYaAkEVEALw_wcB'}>YogaAnytime</StyledLink>
                        <LinkText>Practice Yoga online, anytime, 2,600+ yoga and meditation videos in your home and on the go</LinkText>
                        <Video
                            width="360"
                            height="200"
                            src="https://www.youtube.com/embed/oa6b5869mYg"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </Video>
                    </div>
                </YogaLinkBox>
            </YogaList>
        </YogaContainer>
    )
}
