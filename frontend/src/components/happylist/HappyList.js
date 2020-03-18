import React from 'react'

import { AddThoughtForm } from 'components/happylist/AddThoughtForm'
import { ThoughtsList } from 'components/happylist/ThoughtsList'
import { ClearButton } from 'components/happylist/ClearButton'
import { ListSummary } from 'components/happylist/ListSummary'

import styled from 'styled-components/macro'
import img from 'components/happylist/happyassets/sittinggirl.jpeg'

const TextContainer = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    background-image:url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    height: auto;
    width:100%;
`

const HappyBox = styled.section` 
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color:none;
    width:95%;
    border-radius:30px;
    margin:0px 10px 0;

    @media (min-width: 668px) {
        margin:0px;
        width:70%;
    }
`
const Affirmations = styled.h2`
    color: #3f4b41;
    font-family:'Amatic SC';
    font-weight:bold;
    font-size:35px;
    text-align: center;
    @media (min-width: 668px) {
        margin: 25px 0px; 
        font-size:45px;
    }
`
const AffText = styled.p`
    color: #3f4b41;
    font-family: 'Roboto', sans-serif;
    font-size:15px;
    margin: 5px;
    width:70%;

    @media (min-width: 668px) {
        margin: 5px 20px 25px;
        font-size:20px;
    }
`

export const HappyList = () => {
    return (
        <TextContainer>
            <HappyBox>
                <Affirmations>Affirmations</Affirmations>
                <AffText>Affirmations are used to reprogram the subconscious mind,
                    to encourage us to believe certain things about ourselves or about the world
                     and our place within it. They are also used to help us create the reality we
                     want—often in terms of making (or attracting) wealth, love, beauty, and happiness.
                </AffText>
                <AddThoughtForm />
                <ThoughtsList />
                <ClearButton />
                <ListSummary />
            </HappyBox>
        </TextContainer>
    )
}
