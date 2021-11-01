import "./featuredInfo.css";

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
 
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:9000/api/user/getuser`,config);
    setStatus(res.data);
   toggle=status.availabilitystatus;
    console.log(res.data);
  };
  useEffect(() => {
   console.log("useeffect");
    loadUser(); 
}, [toggle]);


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
        <span className="featuredTitle"></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
          {count}
          </span>
          
          <span className="featuredMoneyRate">
        
          </span>
        </div>
       
      </div>
    </div>
  );
}
