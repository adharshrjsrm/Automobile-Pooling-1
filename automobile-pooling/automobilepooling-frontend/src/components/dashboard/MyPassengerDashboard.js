import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './MyPassengerDashboard.css'
import Dashboard from './passenger/Dashboard'
import History from './passenger/History'
import Request from './passenger/Request'
import Profile from './passenger/Profile'
import Contact from './passenger/Contact'


export default function MyPassengerDashboard() {
    return (
        <div className="App">
      <Router>
        <div>
          <nav id="navigation">
            <a href="Dashboard" className="logo">SRM TEchnologies<span>Auto Pooling</span></a>
              <ul className="links">
                <li><a href="Dashboard">Dashboard</a></li>
                <li className="dropdown"><a href="#" className="trigger-drop">Request<i className="arrow"></i></a>
                  <ul className="drop">
                    <li><a href="Request">Ride</a></li>
                    <li><a href="History">History</a></li>
                  </ul>
                </li>
                <li className="dropdown"><a href="#" className="trigger-drop">Settings<i className="arrow"></i></a>
                  <ul className="drop">
                    <li><a href="Profile">Profile</a></li>
                    <li><a href="Contact">Contact</a></li>
                    <li><a href="#">Logout</a></li>
                  </ul>
                </li>
              </ul>
          </nav>
        </div>
          <Switch>
            <Route path='/' exact component={Dashboard}></Route>
            <Route path='/Dashboard' exact component={Dashboard}></Route>
            <Route path='/Request' exact component={Request}></Route>
            <Route path='/Profile' exact component={Profile}></Route>
            <Route path='/History' exact component={History}></Route>
            <Route path='/Contact' exact component={Contact}></Route>
          </Switch>
      </Router>
    </div>
    )
}
