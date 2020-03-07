import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { list } from '/reducers/list'
import './listsummary.css'


export const ListSummary = () => {
    const items = useSelector(state => state.list.items)
    const addMoreThoughts = items.filter(item => item.needsMore === true)

    const [showList, setShowList] = useState(false)

    return (
        <section className="list-summary">
            <h4>I have {items.length} items in my fridge</h4>
            <h2>I need to buy more of {addMoreThoughts.length} item
                {addMoreThoughts.length === 1 ? "." : "s."}
                <span className="list-icon" onClick={() => setShowList(!showList)}> 🛍 </span>
            </h2>

            {showList && (
                <ol>
                    {addMoreThoughts.map(item => <li key={item.id}>{item.name}</li>)}
                </ol>
            )}
        </section>
    )
}