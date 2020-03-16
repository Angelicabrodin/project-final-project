import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { list } from 'reducers/list'
import styled from 'styled-components/macro'

const Summary = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: auto;
    margin:10px;
    font-family: 'Amatic SC';
    color:#3f4b41;
`

const MainText = styled.h4`
    margin:0px;
    width:auto;
    margin: 10px 10px 0 10px;
    font-size: 20px;
    font-weight:100;
`

const ThoughtsText = styled.h2`
    margin:0px;
    width:auto;
    margin:10px;
    font-size:23px;
    color:#3f4b41;
    font-family: 'Amatic SC';
    font-weight:100;
`

const OrderedList = styled.ol`
    padding - left: 10px;
    margin: 0px;
    font - size: 20px;
`

const ListIcon = styled.span`
    margin-left: 10px;
    font-size: 30px;
`


export const ListSummary = () => {
    const items = useSelector(state => state.list.items)
    const addMoreThoughts = items.filter(item => item.needsMore === true)

    const [showList, setShowList] = useState(false)

    return (
        <Summary>
            <MainText>I have {items.length} Happy Thoughts</MainText>
            <ThoughtsText>I need to think about {addMoreThoughts.length} Happy Thoughts
                {addMoreThoughts.length === 1 ? "." : "s."}
                <ListIcon onClick={() => setShowList(!showList)}>🌸</ListIcon>
            </ThoughtsText>

            {showList && (
                <OrderedList>
                    {addMoreThoughts.map(item => <li key={item.id}>{item.name}</li>)}
                </OrderedList>
            )}
        </Summary>
    )
}