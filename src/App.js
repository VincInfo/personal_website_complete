import React, { useEffect } from 'react'
import { StrictMode } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'

import Main from "./Main";
import ChatAI from "./ChatAI";
import './style.css'

import ReactGA from 'react-ga';
const TRACKING_ID = "G-9Y857N7EE6"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Switch>
        {/* <div className="App"> */}
          <Route exact path='/'>
            <Main/>
          </Route>
          <Route path="/chatAI">
          <ChatAI />
          </Route>
        {/* </div> */}
      </Switch>
    </Router>
  )
}

export default App