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
    height:100vh;
    width:100%;
`

const HappyBox = styled.section` 
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color:none;
    width:95%;
    border-radius:30px;
    margin:70px 10px 0;

    @media (min-width: 668px) {
        margin:0px;
        width:70%;
    }
    @media (min-width: 992px) {
        margin:0px;
    }
`
const Affirmations = styled.h2`
    color: #3f4b41;
    font-family:'Amatic SC';
    font-weight:bold;
    font-size:30px;
`
const AffText = styled.p`
    color: #3f4b41;
    font-family: 'Roboto', sans-serif;
    font-size:20px;
    margin: 5px 20px 15px;

    @media (min-width: 668px) {
        width:70%;
        margin: 5px 20px 25px;
    }
    @media (min-width: 992px) {
        width:70%;
        margin: 5px 20px 25px;
    }
`

export const HappyList = () => {
    return (
        <TextContainer>
            <HappyBox>
                <Affirmations>Affirmations</Affirmations>
                <AffText>This is a place where you can add affirmations and happy thoughts, maybe there is
                    something in particular you wish to think about, or maybe you should add this to
                    remember in the future, you do not need to think this right know, just add away.
                </AffText>
                <AddThoughtForm />
                <ThoughtsList />
                <ClearButton />
                <ListSummary />
            </HappyBox>
        </TextContainer>
    )
}
