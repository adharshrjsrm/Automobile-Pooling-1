import "./Dashboard.css";
import {
  LineStyle,
  Commute,
  PermIdentity,
 Home,
  DirectionsCar
 
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Vehicle from './Vehicle';
import Ride from './Ride';
import Profile from './Profile';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default function MyOwnerDashboard() {
  return (
    <div>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h4 className="sidebarTitle">Dashboard</h4>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <Home className="sidebarIcon" />
              Home
            </li>
            </Link>
         
      
         
            <Link to="/profile" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                My Profile
              </li>
            </Link>
            <Link to="/vehicle" className="link">
              <li className="sidebarListItem">
                <DirectionsCar className="sidebarIcon" />
                Vehicle
              </li>
            </Link>
            <Link to="/ride" className="link">
            <li className="sidebarListItem">
              <Commute className="sidebarIcon" />
              Ride
            </li>
            </Link>
           
          </ul>
        </div>
      </div>
    </div>
    <Router>
    <div >
   
    { <Switch>
                <Route path='/vehicle' component={Vehicle} />
                <Route path='/ride' component={Ride} />
                <Route path='/profile' component={Profile} />
    </Switch> }
    </div>
    </Router>
    </div>
  );
}