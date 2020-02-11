import React from "react"
import { Route, Switch } from "react-router-dom"
import Navigation from "./components/Navigation"
import Colors from "./components/Colors"
import SelectedColors from "./components/SelectedColors"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    padding:0;
    margin:0;
    box-sizing: inherit;
  }
  body {
    box-sizing: border-box;
  }
`

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Navigation />
      <Switch>
        <Route path='/selected-colors' component={SelectedColors} />
        <Route path='/' exact component={Colors} />
      </Switch>
    </div>
  )
}

export default App
