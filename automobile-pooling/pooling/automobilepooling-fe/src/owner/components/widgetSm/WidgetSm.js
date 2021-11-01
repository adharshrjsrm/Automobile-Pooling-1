import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from 'axios';
import authHeader from '../../services/authHeader';
import { useEffect,useState } from "react";

export default function WidgetSm() {
  const config = {
    headers: authHeader() 
  };

  const[res,setValues]=useState([]);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9000/api/getallride`,config);
    setValues(result.data);
    console.log(result.data)
  };
  useEffect(() => {
   console.log("useeffect");
    loadUser(); 
}, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Ride History</span>
     
     
      {res.map((x) => {
        <div className="widgetSmListItem">
          <div className="widgetSmUser">
            <div className="widgetSmUsername">{x.passenger.firstname+" "}{x.passenger.lastname}ss</div>
            <div className="widgetSmUserTitle">{x.passenger.designation}</div>
            <div className="widgetSmUserTitle">{x.date}</div>
          </div>
         
        </div>
        
      })}
      
        
      </div>
    
  );
}
