import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { list } from 'reducers/list'
import styled from 'styled-components/macro'
import lotus from 'components/assets/lotus.png'

const Summary = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: auto;
    margin:5px 0px;
    font-family: 'Amatic SC';
    color:#3f4b41;
    font-weight:bold;
`

const MainText = styled.h4`
    margin:0px;
    width:auto;
    margin: 10px 10px 0 10px;
    font-size: 20px;
    font-weight:bold;
`

const ThoughtsText = styled.h2`
    margin:0px;
    width:auto;
    margin:10px;
    font-size:20px;
    color:#3f4b41;
    text-align:center;
    font-family: 'Amatic SC';
    font-weight:bold;
    @media (min-width: 668px) { 
        font-size:40px;
    }
`

const OrderedList = styled.ol`
    padding-left: 10px;
    margin: 0px;
    font-size: 20px;
    font-weight:bold;
    @media (min-width: 668px) { 
        font-size:40px;
    }
`
const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius:50%;
    padding:10px;
    height:50px;
    width:50px;
    margin-left: 20px;
    display: inline-flex;
    border:1px solid white;
    @media (min-width: 668px) {
        height: 60px;
        width: 60px;
    }
    @media (min-width: 992px) {
        height: 70px;
        width: 70px;
    }
`
const LotusImg = styled.img`
    width:80%;
`

export const ListSummary = () => {
    const items = useSelector(state => state.list.items)
    const addMoreThoughts = items.filter(item => item.needsMore === true)
    const [showList, setShowList] = useState(false)

    return (
        <Summary>
            <ThoughtsText>Press the icon and repeat after me...
                <Wrapper onClick={() => setShowList(!showList)}>
                    <LotusImg src={lotus} alt="Lotus" />
                </Wrapper>
            </ThoughtsText>

            {showList && (
                <OrderedList>
                    {addMoreThoughts.map(item => <li key={item.id}>{item.name}</li>)}
                </OrderedList>
            )}
        </Summary>
    )
}