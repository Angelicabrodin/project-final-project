import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { StartPage } from './startpage/StartPage'
import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { Yoga } from './components/Yoga'
import { Meditation } from 'components/Meditation'
import { Footer } from 'components/Footer'

import './app.css'

export const App = () => {
  return (
    <BrowserRouter>
      <main className="home-container">
        {/* // I have done this in order to see how the different components will look like, cuz I cant manage to show them when the Nav
    component is within the switch..  */}
        <Nav />
        <Switch>
          {/* <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" exact /> */}
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
        </Switch>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

