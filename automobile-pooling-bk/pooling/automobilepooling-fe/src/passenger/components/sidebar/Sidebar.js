import React from 'react'
import {
 Home,
PermIdentity,
 Commute,
 DirectionsCar,
 Favorite,
 ExitToApp
} from "@material-ui/icons";
  import { Link } from 'react-router-dom'
  import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/passengerdashboard" className="link">
            <li className="sidebarListItem active">
              <Home className="sidebarIconHome" />
              Home
            </li>
            </Link>
            <Link to="/passengerprofile" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIconProfile" />
                Profile
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <DirectionsCar className="sidebarIconRideoffer" />
                Ride Offers
              </li>
            </Link>
            <Link to="/ridehistory" className="link">
              <li className="sidebarListItem">
                <Commute className="sidebarIconRideHistory" />
                Ride History
              </li>
            </Link>
            {/* <Link to="/favorite" className="link">
              <li className="sidebarListItem">
                <Favorite className="sidebarIconRideFavorite" />
                Favorites
              </li>
            </Link> */}
          </ul>
        </div>
      </div>
    </div>
    )
}
