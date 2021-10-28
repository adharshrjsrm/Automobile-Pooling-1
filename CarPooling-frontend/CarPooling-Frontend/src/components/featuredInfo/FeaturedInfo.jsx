import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from 'react-live-clock';
import axios from "axios";
import authHeader from '../../services/authHeader';
import { useEffect, useState } from "react";

export default function FeaturedInfo() {
  const config = {
    headers: authHeader()
  };
  const[values,setValues]=useState([]);
  const[status,setStatus]=useState(
    {
      "id":1,
      "availabilitystatus":"0"
    }
  )
  const [toggle, setToggle] = useState(false);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9000/api/user/1`,config);
    setValues(result.data);

    console.log(result.data)
    if(values.availabilitystatus=="1")
    {
      setToggle(true);
    }
  };
  useEffect(() => {
   console.log("useeffect");
    loadUser();
}, []);

 const handleChange = (e) => {
   [e.target.name]=e.target.value;
    setToggle(!toggle);
    console.log(status);
    axios.put("http://localhost:9000/api/user/update",status,config).then(res=>{
  
      alert("user registered successfully")
      
 }
 ).catch((err)=>{
         console.log("There are Errors in the Entry")
     })  

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
        <span className="featuredTitle">Time</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
          </span>
          
        </div>
       
      </div>
      <div className="featuredItem">
        <span className="featuredTitle"></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"></span>
          <span className="featuredMoneyRate">
        
          </span>
        </div>
       
      </div>
    </div>
  );
}
