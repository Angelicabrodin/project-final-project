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
    width:70%;
    @media (min-width: 668px) {
        width: 60%;
    }
    @media (min-width: 992px) {
        
    }
`
const YogaLinkBox = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: flex-start;
    // padding-left: 30px;
    margin: 0px;
    // font-size: 30px;
    // font-weight:bold;
    // color: #3f4b41;
    // font-family: 'Amatic SC';
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
    margin-left: 30px;
    font-size: 15px;
    @media (min-width: 668px) { 
        font-size:20px;
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
                    </div>
                    <div>
                        <StyledLink href={'https://www.gaia.com/yoga/practices?utm_source=google+paid&utm_medium=cpc&utm_term=&utm_campaign=1-EUROPE-DYNAMIC-SEARCH&utm_content=gaia.com/yoga/practices&ch=DimensionNotFound&gclid=Cj0KCQjw6sHzBRCbARIsAF8FMpWGAu7KlW0BJnPHlw7jdJm3BvDNpj0SYdKi1k8OBqJmC2DNsGj02hQaAlTXEALw_wcB'}>Gaia</StyledLink>
                        <LinkText>Their unique blend of yoga, meditation, personal transformation, and alternative healing content is designed for those seeking to not just enhance their physical, spiritual, and intellectual capabilities, but to fuse them in the knowledge that the whole is always greater than the sum of its parts.</LinkText>
                    </div>
                    <div>
                        <StyledLink href={'https://www.glo.com/?utm_source=google&utm_medium=cpc&utm_campaign=9606256292&utm_content=99302823255&utm_term=kwd-97020515&gclid=Cj0KCQjw6sHzBRCbARIsAF8FMpUlAExbcDQxJwxcrjT4Ppk3RH2AI7MzYu1xN2WOhQF5HjO7-C2IFwYaAsolEALw_wcB'}>Glo</StyledLink>
                        <LinkText>Glo is designed to help you feel better in body and mind. Get unlimited access to the best online yoga, meditation, and Pilates classes.</LinkText>
                    </div>
                    <div>
                        <StyledLink href={'https://www.yogaanytime.com/px/p-home-7?ref=ga&gclid=Cj0KCQjw6sHzBRCbARIsAF8FMpXj53HLR3P4dqPf85d0i-YKne4a-2UlzHOj7wfaOtYVIwGNUfFEDbYaAkEVEALw_wcB'}>YogaAnytime</StyledLink>
                        <LinkText>Practice Yoga online, anytime, 2,600+ yoga and meditation videos in your home and on the go</LinkText>
                    </div>
                </YogaLinkBox>
            </YogaList>
        </YogaContainer>
    )
}
