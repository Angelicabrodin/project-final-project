import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { StartPage } from './startpage/StartPage'
import { Nav } from './components/Nav'
import { Welcome } from './components/Welcome'
import { Yoga } from './components/Yoga'
import { Meditation } from 'components/Meditation'
import { Footer } from 'components/Footer'

import './app.css'

export const App = () => {
  return (
    <BrowserRouter>
      <main className="home-container">
        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>
          <Nav />
          <Route path="/welcome" exact>
            <Welcome />
          </Route>
          <Route path="/yoga" exact>
            <Yoga />
          </Route>
          <Route path="/meditation" exact>
            <Meditation />
          </Route>
        </Switch>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

