import React from 'react'
import { useSelector } from 'react-redux'
import { AddThoughtToList } from 'components/happylist/AddThoughtToList'
import './happycss/thoughtslist.css'

export const ThoughtsList = () => {
    const items = useSelector((state) => state.list.items)
    return (
        <container className="List-container">
            <ul>
                {items.map((item) => (
                    <AddThoughtToList key={item.id} item={item} />
                ))}
            </ul>
        </container>
    )
}