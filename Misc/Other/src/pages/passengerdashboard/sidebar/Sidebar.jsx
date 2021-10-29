import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
 Commute,
 CalendarToday,
 DirectionsCar
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
          <Link to="/ownerdashboard" className="link">
          <li className="sidebarListItem active">
            <LineStyle className="sidebarIcon" />
            Home
          </li>
          </Link>
          <Link to="/passengerprofile" className="link">
          <li className="sidebarListItem">
            <PermIdentity className="sidebarIcon" />
            Profile
          </li>
           </Link>
           <Link to="/calender" className="link">
          <li className="sidebarListItem">
            <CalendarToday className="sidebarIcon" />
            Calender
          </li>

             {/* <Link to="/vehicle" className="link">
          <li className="sidebarListItem">
            <DirectionsCar className="sidebarIcon" />
            Vehicle
          </li>
          </Link>  */}

          <Link to="/passengerride" className="link">
          <li className="sidebarListItem">
            <Commute className="sidebarIcon" />
            Ride
          </li>
          </Link> 

         

           </Link>
           <Link to="/logout" className="link">
           <li className="logout">
            <CalendarToday className="sidebarIcon" />
            LogOut
          </li>
           </Link>
        
           
        </ul>
      </div>
      
    </div>
  </div>
  );
}
