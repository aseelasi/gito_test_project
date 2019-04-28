import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import './App.css'
import HomePage from '../src/components/HomePage'

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={HomePage}/>
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
