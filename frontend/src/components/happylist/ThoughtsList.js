import React from 'react'
import { useSelector } from 'react-redux'
import { AddThoughtToList } from 'components/happylist/AddThoughtToList'

import styled from 'styled-components/macro'

const Addlist = styled.div` 
    display:flex;
    justify-content: center;
    margin:10px;
    color:#3f4b41;
    font-family: 'Amatic SC';
`

const ThoughtUl = styled.ul`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    padding-left: 30px;
    margin:0px;
    font-size:20px;
    color:#3f4b41;
    font-family: 'Amatic SC';
`

export const ThoughtsList = () => {
    const items = useSelector((state) => state.list.items)
    return (
        <Addlist>
            <ThoughtUl>
                {items.map((item) => (
                    <AddThoughtToList key={item.id} item={item} />
                ))}
            </ThoughtUl>
        </Addlist>
    )
}