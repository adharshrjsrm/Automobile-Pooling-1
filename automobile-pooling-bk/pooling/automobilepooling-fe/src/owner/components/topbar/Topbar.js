import {React,useState,useEffect}  from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings,AccountCircle } from "@material-ui/icons";
import axios from 'axios';
import authHeader from '../../../services/authHeader';

export default function Topbar() {
  const config = {
    headers: authHeader() 
  };
  const[values,setValues]=useState([]);

const loadUser = async () => {
  const result = await axios.get(`http://localhost:9000/api/user/getuser`,config);
  setValues(result.data);
  console.log(result.data)
  
};
useEffect(() => {
 console.log("User-useeffect");
  loadUser();
  
 
}, []);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="Title">SRM Technologies Car Pooling</div>
        </div>
       
        <div className="topRight">
          < AccountCircle alt="" className="topAvatar" />
       <div >{values.firstname +" "}{values.lastname} </div>
    
        </div>
       
      </div>
    </div>
  );
}
