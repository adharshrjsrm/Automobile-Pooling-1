import "./featuredInfo.css";
import {
  Favorite,
  NotificationsNone
 } from "@material-ui/icons";
import Clock from 'react-live-clock';
import axios from "axios";
import authHeader from '../../services/authHeader';
import { useEffect, useState } from "react";

export default function FeaturedInfo() {
  const config = {
    headers: authHeader()
  };
  let toggle=false;
 
  const[status,setStatus]=useState([]);
  let count=5;
 
  const[values,setValues]=useState([]);

const loadUser = async () => {
  const result = await axios.get(`http://localhost:9000/api/ridecount`,config);
  setValues(result.data);
  console.log("count"+result.data)
  
};
useEffect(() => {
 console.log("User-useeffect");
  loadUser();
  
 
}, []);


 const handleChange = (e) => {
  toggle=!toggle;
  const value={
    "availabilitystatus":toggle
  }
 console.log(value);
 axios.put("http://localhost:9000/api/user/update",value,config)

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
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
          </span>
          
        </div>
       
      </div>
      <div className="featuredItem">
      
       
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{"Today Request  "}
            <span className="Icon">< NotificationsNone/>
          
          </span>{values}
          </span>
          
          <span className="featuredMoneyRate">
        
          </span>
        </div>
       
      </div>
    </div>
  );
}
