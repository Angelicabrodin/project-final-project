import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { list } from 'reducers/list'
import styled from 'styled-components/macro'

const AddToForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0px;
    font-size:20px;
    width:auto;
    font-family: 'Amatic SC';
    color:#3f4b41;
    font-weight:bold;
    @media (min-width: 668px) {
        margin: 10px;
    }
`

const AddToThoughts = styled.input`
    border: 0.5px solid #3f4b41;
    margin-left: 5px;
    font-family: 'Amatic SC';
    font-size:20px;
    color:#3f4b41;
    font-weight:bold;
`

const HappyArticle = styled.h5`
    margin: 0px;
    display:inline-block;
    font-size: 20px;
    font-family: 'Amatic SC';
    color: #3f4b41;
    font-weight:bold;
`

const AddButton = styled.button`
    margin-left: 5px;
    border:0.5px solid #3f4b41;
    background-color: #f6f2df;
    border-radius: 5px;
    color:#3f4b41;
    font-family: 'Amatic SC';
    font-size: 15px;
    cursor:pointer;
    font-weight:bold;
    @media (min-width: 668px) {
        width: 75px;
        margin: 10px;
    }
    @media (min-width: 992px) {
        margin: 10px;
    }
`

export const AddThoughtForm = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(list.actions.addItem(name))
        setName('')
    }
    return (
        <AddToForm onSubmit={handleSubmit}>
            <label>
                <HappyArticle>Affirmation:</HappyArticle>
                <AddToThoughts
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)} />
            </label>

            <AddButton type="submit">Add</AddButton>
        </AddToForm>
    )
} 