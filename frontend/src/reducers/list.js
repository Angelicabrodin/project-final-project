import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [
        { id: 1, name: 'I am happy ', needsMore: true },
        { id: 2, name: 'I am strong ', needsMore: false },
        { id: 3, name: 'I am kind to myself', needsMore: false }
    ]
}

export const list = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push({ id: Date.now(), name: action.payload })
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        removeAll: (state, action) => {
            state.items = []
        },

        toggleNeedsMore: (state, action) => {
            console.log(action.payload)

            const foundItem = state.items.find((item) => item.id === action.payload)
            console.log('found', JSON.stringify(foundItem))

            if (foundItem) {
                foundItem.needsMore = !foundItem.needsMore
            }
        }
    }
})