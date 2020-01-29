import React from "react"
import { Route, Switch } from "react-router-dom"
import Navigation from "./components/Navigation"
import Colors from "./components/Colors"
import SelectedColors from "./components/SelectedColors"

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route path='/selected-colors' component={SelectedColors} />
        <Route path='/' exact component={Colors} />
      </Switch>
    </div>
  )
}

export default App
