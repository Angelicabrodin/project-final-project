import React from 'react'
import styled from 'styled-components/macro'
import img from 'components/assets/sittingyoga.jpeg'

const MedContainer = styled.div`
    display:flex;
    justify-content: center;
    background-image:url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    height: auto;
    width:100%;
`

const MedList = styled.div`
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    width:95%;
    @media (min-width: 668px) {
        width: 70%;
    }
`
const StyledLink = styled.a`
    color:#3f4b41;
    text-decoration:none;
    cursor: pointer;
    font-family:'Amatic SC';
    font-weight:bold;
    font-size:30px;
`
const HeadLine = styled.h2`
    color: #3f4b41;
    font-family:'Amatic SC';
    font-weight:bold;
    font-size:35px;
    margin-top:10px;
    @media (min-width: 668px) {
        margin: 25px 0px; 
        font-size:45px;
    }
`
const MeditationText = styled.p`
    color: #3f4b41;
    font-family: 'Roboto', sans-serif;
    font-size:15px;
    margin-bottom: 10px;
    margin-top: 0px;
    width:360px;
    @media (min-width: 668px) {
        width:460px;
        font-size:20px;
    }
    @media (min-width: 992px) {
        width:560px;
        font-size:20px;
    }
`
const MedLinkBox = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    margin: 0px;
`
const LinkStyle = styled.a`
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
    font-size: 10px;
    width:360px;
    @media (min-width: 668px) { 
        width:460px;
        font-size:15px;
    }
    @media (min-width: 992px) { 
        width:560px;
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

export const Meditation = () => {
    return (
        <MedContainer>
            <MedList>
                <HeadLine>Meditation sites</HeadLine>
                <MeditationText>Here you can find different meditation videos,
                            press play,<br></br> sit back and relax.
                </MeditationText>
                <MedLinkBox>
                    <div>
                        <LinkText>Relaxing Music for Stress Relief. Calm Celtic Music for Meditation, Healing Therapy, Sleep, Yoga</LinkText>
                        <Video
                            width="360"
                            height="200"
                            src="https://www.youtube.com/embed/6xDyPcJrl0c"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </Video>
                    </div>
                    <div>
                        <LinkText>Deep Healing Energy | 528Hz Ancient Frequency | Sound Healing Session | Zen Meditation</LinkText>
                        <Video
                            width="360"
                            height="200"
                            src="https://www.youtube.com/embed/go99WqXWGgk"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </Video>
                    </div>
                    <div>
                        <LinkText>Rain Sound and Thunder - 2 Hours Sleep Meditation Sound</LinkText>
                        <Video
                            width="360"
                            height="200"
                            src="https://www.youtube.com/embed/Fm0sToWtatw"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </Video>
                    </div>
                </MedLinkBox>
            </MedList>
        </MedContainer>
    )
}