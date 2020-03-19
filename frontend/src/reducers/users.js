import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    loggedIn: false
}
export const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // The action.payload is either true/false depending on the current login component
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload
        }
    }
})