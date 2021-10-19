import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PassengerSidebar from './passenger/PassengerSidebar'
import PassengerTopbar from './passenger/PassengerTopbar'

export default function MyPassengerDashboard() {
    return (
      <Router>
      <PassengerTopbar />
      <div className="container">
        <PassengerSidebar />
        <Switch>
          <Route exact path="/">
          </Route>
        </Switch>
        </div>
      </Router>
    )
}
