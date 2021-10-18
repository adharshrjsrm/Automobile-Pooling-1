
import NavBar from './owner/NavBar.js';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Vehicle from './owner/Vehicle';
import Ride from './owner/Ride';
import SideBar from './owner/SideBar';
import Profile from './owner/Profile';
import Dashboard from './owner/Dashboard';
import User from './User';

export default function MyOwnerDashboard() {
  return (
    <div className="MyOwnerDashboard">
       
    <Router>
      <SideBar/>

      <NavBar/>
      
      <Switch>
      <Route path="/profile" exact component={User}></Route>
          <Route path="/dashboard" exact component={Dashboard}></Route>
          <Route path="/vehicle" exact component={Vehicle}></Route>
          <Route path="/ride" exact component={Ride}></Route>
          
          
        </Switch>
        </Router>
  </div>

  );
}


