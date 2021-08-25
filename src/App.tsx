import * as React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Dashboard } from "./pages/dashboard"

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}
