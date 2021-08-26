import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Dashboard from "@/pages/dashboard"
import Login from "@/pages/login"



export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  )
}
