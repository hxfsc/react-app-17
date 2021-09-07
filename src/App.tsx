import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import MainLayout from "@/layout/main"
import Login from "@/pages/login"

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainLayout} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  )
}
