import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

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
  list: list.reducer
  // users: users.reducer

})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main className="first-container">
          <Nav />
          <Switch>
            <Route path="/" exact>
              <StartPage />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/yoga" exact>
              <Yoga />
            </Route>
            <Route path="/meditation" exact>
              <Meditation />
            </Route>
            <Route path="/happylist" exact>
              <HappyList />
            </Route>
          </Switch>
          <Footer />
        </main>
      </BrowserRouter>
    </Provider>
  )
}

