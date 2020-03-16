import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { list } from 'reducers/list'
import styled from 'styled-components/macro'

const AddToForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin: 10px;
    font-size:20px;
    width:auto;
    font-family: 'Amatic SC';
    color:#3f4b41;
`

const AddToThoughts = styled.input`
    border: 0.5px solid #3f4b41;
    margin-left: 5px;
    font-family: 'Amatic SC';
    font-size:20px;
    color:#3f4b41;
`

const HappyArticle = styled.h5`
    margin: 0px;
    display:inline-block;
    font-size: 25px;
    color: #3f4b41;
    font-family: 'Amatic SC';
    font-weight: 100;
    color: #3f4b41;
`

const AddButton = styled.button`
    margin-left: 5px;
    border:0.5px solid #3f4b41;
    background-color: #f6f2df;
    border-radius: 16px;
    font-family: 'Amatic SC';
    font-size: 15px;
    cursor:pointer;
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
                <HappyArticle>My Happy Thoughts:</HappyArticle>
                <AddToThoughts
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)} />
            </label>

            <AddButton type="submit">Add Thought</AddButton>
        </AddToForm>
    )
} 