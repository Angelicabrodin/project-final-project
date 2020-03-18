import React from 'react'
import { useDispatch } from 'react-redux'
import { list } from 'reducers/list'
import styled from 'styled-components/macro'

const AddMore = styled.label`
    margin-left:5px;
    font-size:15px;
    color:#3f4b41;
    font-weight:bold;
    @media (min-width: 668px) {
    }
    @media (min-width: 992px) {

    }
`

const Remove = styled.button`
    margin-left: 10px;
    border: 0.5px solid #3f4b41;
    background-color: #f6f2df;
    border-radius: 5px;
    font-family: 'Amatic SC';
    font-size:15px;
    color:#3f4b41;
    font-weight:bold;
`

export const AddThoughtToList = (props) => {
    const dispatch = useDispatch()

    const handleCheckBoxClick = () => {
        dispatch(list.actions.toggleNeedsMore(props.item.id))
    }

    const handleRemoveButtonClick = () => {
        dispatch(list.actions.removeItem(props.item.id))
    }

    return (
        <li>
            {props.item.name}
            <AddMore>
                Remember
                <input
                    type="checkbox"
                    checked={props.item.needsMore}
                    onChange={handleCheckBoxClick} />
            </AddMore>

            <Remove
                type="button"
                onClick={handleRemoveButtonClick}>
                Clear
            </Remove>
        </li>
    )
}