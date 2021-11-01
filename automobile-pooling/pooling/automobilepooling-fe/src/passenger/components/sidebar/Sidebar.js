import React from 'react'
import {
    LineStyle,
    PermIdentity,
    Storefront,
  } from '@material-ui/icons' //    AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report, Timeline, TrendingUp,
  import { Link } from 'react-router-dom'
  import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/profile" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Profile
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Ride Offers
              </li>
            </Link>
            <Link to="/ridehistory" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Ride History
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
    )
}
