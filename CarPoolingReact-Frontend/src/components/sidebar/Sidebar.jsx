import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
 Commute,
 DirectionsCar,
 ExitToApp
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import axios from 'axios';
import authHeader from '../../services/authHeader';

export default function Sidebar() {
  const history = useHistory();
  const config = {
    headers: authHeader() 
  };
 
  const handleLogout = () => {
    const user=JSON.parse(localStorage.getItem('user')); 
    const value={
      "userId":user.id
    }
    console.log(value);
    axios.post("http://localhost:9000/api/auth/logout",value,config).then(res=>{
      localStorage.removeItem('user');
      history.push('/');
      
     
 }
 ).catch((err)=>{
         console.log("There are Errors in the Entry")
     }) 
};
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
          <Link to="/profile" className="link">
          <li className="sidebarListItem">
            <PermIdentity className="sidebarIcon" />
            Profile
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
          <Link className="link" onClick={handleLogout}>
          <li className="sidebarLogout">
            <ExitToApp className="sidebarIcon" />
            Logout
          </li>
          </Link>
        </ul>
      </div>
      
    </div>
  </div>
  );
}
