import React from 'react'
import { StrictMode } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Main from "./Main";
import ChatAI from "./ChatAI";
import './style.css'

const App = () => {

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path='/'>
            <Main/>
          </Route>
          <Route path="chatAI">
          <ChatAI />
          </Route>
        </div>
      </Switch>
    </Router>
  )
}

export default App