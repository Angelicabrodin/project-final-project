import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { list } from 'reducers/list'
import styled from 'styled-components/macro'
import blacklotus from 'components/happylist/lotusblackhappy.png'
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
// const LotusImg = styled.img`
//     width:10%;
//     margin-left: 15px;
// `


export const ListSummary = () => {
    const items = useSelector(state => state.list.items)
    const addMoreThoughts = items.filter(item => item.needsMore === true)

    const [showList, setShowList] = useState(false)

    return (
        <Summary>
            {/* <MainText>I have {items.length} Happy Thoughts</MainText> */}
            <ThoughtsText>I need to think about {addMoreThoughts.length} Happy Thoughts
                {/* {addMoreThoughts.length === 1 ? "." : "s."} */}
                <Wrapper><LotusImg src={lotus} alt="Lotus" onClick={() => setShowList(!showList)} />
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