import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { list } from 'reducers/list'
import './addthoughtform.css'

export const AddThoughtForm = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(list.actions.addItem(name))
        setName('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <h5 className="happy-h5">My Happy Thoughts:</h5>
                <input className="add-thought"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)} />
            </label>

            <button className="submit-button" type="submit">Add Thought</button>
        </form>
    )
} 