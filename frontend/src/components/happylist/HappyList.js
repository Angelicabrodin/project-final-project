import React from 'react'

import { AddThoughtForm } from 'components/happylist/AddThoughtForm'
import { ThoughtsList } from 'components/happylist/ThoughtsList'
import { ClearButton } from 'components/happylist/ClearButton'
import { ListSummary } from 'components/happylist/ListSummary'

import styled from 'styled-components/macro'
import img from 'components/happylist/happyassets/flowerstatue.jpeg'

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
`
export const HappyList = () => {
    return (
        <TextContainer>
            <HappyBox>
                <AddThoughtForm />
                <ThoughtsList />
                <ClearButton />
                <ListSummary />
            </HappyBox>
        </TextContainer>
    )
}
