import React from 'react'
import Main from './Main'
import {Route} from 'react-router-dom'
import {BrowserRouter as Router,Switch} from 'react-router-dom'
import Description from './components/Description'


function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/Description/:movieId'  component={Description}/>
      </Switch>
      </Router>
    </div>
  )
}

export default App
