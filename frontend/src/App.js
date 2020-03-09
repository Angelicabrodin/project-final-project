import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { PrivateRoute } from './PrivateRoute'

import { list } from 'reducers/list'
import { users } from 'reducers/users'

import { StartPage } from './startpage/StartPage'
import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { Yoga } from './components/Yoga'
import { Meditation } from './components/Meditation'
import { Footer } from './components/Footer'
import { HappyList } from './components/happylist/HappyList'
import './app.css'

const reducer = combineReducers({
  list: list.reducer,
  users: users.reducer

})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main className="first-container">
          <Nav />
          <Switch>
            <Route path='/' exact>
              <StartPage />
            </Route>
            <PrivateRoute component={Home} path="/home" exact />
            <PrivateRoute component={Yoga} path="/yoga" exact />
            <PrivateRoute component={Meditation} path="/meditation" exact />
            <PrivateRoute component={HappyList} path="/happylist" exact />
          </Switch>
          <Footer />
        </main>
      </BrowserRouter>
    </Provider>
  )
}

