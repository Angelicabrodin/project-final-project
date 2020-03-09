import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const loggedIn = useSelector(store => store.users.loggedIn)
    // Det här är global state from redux. är true eller false.
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route
            {...rest}
            render={props =>
                loggedIn ? <Component {...props} /> : <Redirect to='/' />
                // se till att använda global state variabeln loggedIn här. 
            }
        />
    )
}