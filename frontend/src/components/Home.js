import React from 'react'
import styled from 'styled-components'
import img from 'components/assets/swing.jpeg'

const HomeContainer = styled.div`
    display:flex;
    justify-content: center;
    background-image:url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    height:100vh;
    width:100%;
`

const HomeList = styled.div`
    margin-top:100px;
    justify-content: center;
    width:50%;
    color: #3f4b41;
`

export const Home = () => {
    return (
        <HomeContainer>
            <HomeList>
                <h2>Welcome to this site</h2>
                <h5>Feel free to browse the pages of this site and I hope you
                    will find and get inspired by the content it contains, in these
                    chaotic times it is important to sit down, reflect and look within,
                    so I hope you find something that is meaningful for you and your inner health,
                    Namaste!
                </h5>
            </HomeList>
        </HomeContainer>

    )
}