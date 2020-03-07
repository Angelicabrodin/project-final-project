import React from 'react'
import { useDispatch } from 'react-redux'
import { list } from '/reducers/list'
import './addtolist.css'

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
            <label className="add-more-label">
                Buy More!
                <input
                    type="checkbox"
                    checked={props.item.needsMore}
                    onChange={handleCheckBoxClick} />
            </label>

            <button className="remove-button"
                type="button"
                onClick={handleRemoveButtonClick}>
                Remove!
            </button>
        </li>
    )
}