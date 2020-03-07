import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { list } from '/reducers/list'

import { AddThoughtForm } from 'components/happylist/AddThoughtForm'
import { ThoughtsList } from 'components/happylist/ThoughtsList'
import { ClearButton } from 'components/happylist/ClearButton'
import { ListSummary } from 'components/happylist/ListSummary'
import './happylist.css'

const reducer = combineReducers({
    list: list.reducer
})

const store = configureStore({ reducer })

export const HappyList = () => {
    return (
        <container className="happy-list-container">
            <Provider store={store}>
                <section className="form-box">
                    <AddThoughtForm />
                    <ThoughtsList />
                    <ClearButton />
                    <ListSummary />
                </section>
            </Provider>
        </container>
    )
}
