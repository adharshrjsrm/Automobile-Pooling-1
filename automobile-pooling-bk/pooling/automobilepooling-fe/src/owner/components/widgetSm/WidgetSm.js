import "./widgetSm.css";
import axios from 'axios';
import authHeader from '../../../services/authHeader';
import { useEffect,useState } from "react";

export default function WidgetSm() {
  const config = {
    headers: authHeader() 
  };

  const[values,setValues]=useState([]);

const loadUser = async () => {
  const result = await axios.get(`http://localhost:9000/api/getallride`,config);
  setValues(result.data);
  console.log(result.data)
  
};
useEffect(() => {
 console.log("User-useeffect");
  loadUser();
  
 
}, []);
  return (
    <div className="widgetSm">
    <span className="widgetSmTitle">Ride History</span>
   
   
    {values.map((x) => {
     return <div className="widgetSmListItem">
        <div className="widgetSmUser">
          <div className="widgetSmUsername">{x.passenger.firstname+" "}{x.passenger.lastname}</div>
          <div className="widgetSmUserTitle">{x.date}</div>
          <div className="widgetSmUserTitle">{x.passenger.source+" - "}{x.passenger.destination}</div>
        </div>
       
      </div>
      
    })}
    
      
    </div>
    
  );
}
