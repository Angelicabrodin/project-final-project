import React from 'react'
import { useDispatch } from 'react-redux'
import { list } from 'components/happylist/reducers/list'
import './addthoughttolist.css'

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
                Remember!
                <input
                    type="checkbox"
                    checked={props.item.needsMore}
                    onChange={handleCheckBoxClick} />
            </label>

            <button className="remove-button"
                type="button"
                onClick={handleRemoveButtonClick}>
                Acchieved!
            </button>
        </li>
    )
}