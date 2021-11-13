import "./sidebar.css";
import {
 Home,
  PermIdentity,
 Commute,
 DirectionsCar,
 ExitToApp
} from "@material-ui/icons";
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import authHeader from '../../../services/authHeader';


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

     
      history.push(`/`);
     localStorage.removeItem('user');

      localStorage.removeItem('user');
      history.push('/home');

      
     
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
        <div className="s">
        <div className="sidebarIcon" >
          <Link to="/ownerdashboard" className="link">
          <li className="sidebarListItem">
            <Home className="sidebarIconHome" />
            Home
          </li>
          </Link>
          </div>
          </div>
          <div className="s">
          <div className="sidebarIcon">
          <Link to="/profile" className="link">
          <li className="sidebarListItem">
            
            <PermIdentity className="sidebarIconProfile" />
            Profile
           
          </li>
          </Link>
          </div>
          </div>
          <div className="s">
          <div className="sidebarIcon">
          <Link to="/vehicle" className="link">
          <li className="sidebarListItem">
            <DirectionsCar className="sidebarIconVehicle" />
            Vehicle
          </li>
          </Link>
          </div>
          </div>
          <div className="s">
          <div className="sidebarIcon">
          <Link to="/ride" className="link">
          <li className="sidebarListItem">
            <Commute className="sidebarIconRide" />
            Ride
          </li>
          </Link>
          </div>
          </div>
          <div className="s">
          <Link className="link" onClick={handleLogout}>
          <li className="sidebarLogout">
            <ExitToApp className="sidebarIcon" />
            Logout
          </li>
          </Link>
          </div>
        </ul>
      </div>
      
    </div>
  </div>
  );
}
