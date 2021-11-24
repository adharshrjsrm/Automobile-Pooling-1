import "./featuredInfo.css";
import {
  AccessTime,
  NotificationsNone
 } from "@material-ui/icons";
import Clock from 'react-live-clock';
import axios from "axios";
import authHeader from '../../../services/authHeader';
import { useEffect, useState } from "react";

export default function FeaturedInfo() {
  const config = {
    headers: authHeader()
  };
  const[toggle,setToggle]=useState();
 
  const[values,setValues]=useState([]);

const loadUser = async () => {
  const result = await axios.get(`http://localhost:9000/api/ridecount`,config);
  setValues(result.data);
  console.log("count"+result.data)
  
};
const getStatus = async () => {
  const result = await axios.get(`http://localhost:9000/api/userstatus`,config);
  setToggle(result.data)
  console.log("status"+result.data)
  
};
useEffect(() => {
 console.log("User-useeffect");
  loadUser();
  getStatus();
  
 
}, []);


 const handleChange = (e) => {
 setToggle(!toggle);
 const params = {
  availabilitystatus: !toggle
};

 
 axios.put(`http://localhost:9000/api/user/updatestatus`,params,config);
 

  }
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Availability</span><br/>
        <div className="featuredMoneyContainer">
        <div class="form-check form-switch">
 
  <div >
  <input class="form-check-input" type="checkbox"
   checked={toggle} onClick={handleChange}
  
   name="availabilitystatus"/> 
  <label >Set availability status</label>
  </div>
</div>
        </div>
       
      </div>
      <div className="featuredItem">
      
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
          <span className="TimeIcon">< AccessTime/></span>
          <Clock format={'h:mm a'} ticking={true} interval={1000}  />
          </span>
          
        </div>
       
      </div>
      <div className="featuredItem">
      
       
        <div className="featuredMoneyContainer">
        <span className="featuredTitle">Today Request 
            <span className="Icon">< NotificationsNone/>
          
          </span>{" "+values}
          </span>
          
          <span className="featuredMoneyRate">
        
          </span>
        </div>
       
      </div>
    </div>
  );
}
