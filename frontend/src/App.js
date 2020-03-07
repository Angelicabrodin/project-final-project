import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { StartPage } from './startpage/StartPage'
import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { Yoga } from './components/Yoga'
import { Meditation } from 'components/Meditation'
import { Footer } from 'components/Footer'

// My test for the happythoughts-list
import { Happy } from 'components/Happy'


import './app.css'

export const App = () => {
  return (
    <BrowserRouter>
      <main className="home-container">
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
            <Happy />
          </Route>
        </Switch>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

