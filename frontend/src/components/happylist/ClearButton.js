import React from 'react'
import { useDispatch } from 'react-redux'
import { list } from 'reducers/list'
import './happycss/clearbutton.css'

export const ClearButton = () => {
    const dispatch = useDispatch()

    return (
        <button
            className="clear-button"
            type="button" onClick={() => dispatch(list.actions.removeAll())}>
            Clear All!
        </button>
    )
}