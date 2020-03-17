import React from 'react'
import { useDispatch } from 'react-redux'
import { list } from 'reducers/list'
import styled from 'styled-components/macro'

const StartOver = styled.button`
    display:flex;
    align-self: center;
    justify-content: center;
    align-items: center;
    border: 0.5px solid #3f4b41;
    background-color: #f6f2df;
    border-radius: 5px;
    font-family: 'Amatic SC';
    color: #3f4b41;
    width: 30%;
    font-size: 20px;
    font-weight:bold;
    @media (min-width: 668px) {
        margin: 10px;
        width: 150px;
    }
`

export const ClearButton = () => {
    const dispatch = useDispatch()

    return (
        <StartOver
            type="button" onClick={() => dispatch(list.actions.removeAll())}>
            Clear All
        </StartOver>
    )
}