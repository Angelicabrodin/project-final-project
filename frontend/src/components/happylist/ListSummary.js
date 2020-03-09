import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { list } from 'reducers/list'
import './happycss/listsummary.css'


export const ListSummary = () => {
    const items = useSelector(state => state.list.items)
    const addMoreThoughts = items.filter(item => item.needsMore === true)

    const [showList, setShowList] = useState(false)

    return (
        <section className="list-summary">
            <h4>I have {items.length} Happy Thoughts</h4>
            <h2>I need to think about {addMoreThoughts.length} Happy Thoughts
                {addMoreThoughts.length === 1 ? "." : "s."}
                <span className="list-icon" onClick={() => setShowList(!showList)}>🌸</span>
            </h2>

            {showList && (
                <ol>
                    {addMoreThoughts.map(item => <li key={item.id}>{item.name}</li>)}
                </ol>
            )}
        </section>
    )
}