import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    loggedIn: false
}
export const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload
            // action.payload är antingen true eller false beroende på vad som händer i login componenten.
        }
    }
})