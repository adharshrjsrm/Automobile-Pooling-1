import "./widgetSm.css";
import axios from 'axios';
import authHeader from '../../../services/authHeader';
import { useEffect,useState } from "react";
import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  LocationOn,
} from "@material-ui/icons";
export default function WidgetSm() {
  const config = {
    headers: authHeader() 
  };

  const[value,setValues]=useState([]);

  const loadUser = async () => {
    
    const res = await axios.get(`http://localhost:9000/api/getpassengerride`,config);
    setValues(res.data);
    console.log(res.data)
  };
  useEffect(() => {
   console.log("useeffect");
    loadUser(); 
},[]);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Owner Details</span>
     
     
      {value.map((x) => {
       return <div className="widgetSmListItem">
         <div className="userShow">
            <div className="userShowTop">

              <div className="userShowTopTitle">
                <span className="userShowUsername"> <PermIdentity className="userShowIconProfile" />{x.owner.firstname+" "}{x.owner.lastname}</span>
                <span className="userShowUserTitle">{x.owner.designation}</span>
              </div>
            </div>
            <div className="userShowBottom">
             
             
             
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIconType" />
                <span className="userShowInfoTitle">{x.owner.mobile}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIconSeat" />
                <span className="userShowInfoTitle">{x.owner.userLogin.email}</span>
              </div>
              <span className="userShowTitle">Address Details</span>
              <div className="userShowInfo">
                <LocationSearching className="userShowIconRide" />
                <span className="userShowTitle">Source</span>
                <span className="userShowInfoTitle">{x.owner.source}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIconRide" />
                <span className="userShowTitle">Destination</span>
                <span className="userShowInfoTitle">{x.owner.destination}</span>
              </div>
              <div className="userShowInfo">
                <LocationOn className="userShowIconLocation" />
                <span className="userShowTitle">Location 1</span>
                <span className="userShowInfoTitle">{x.owner.stopa}</span>
              </div>
              <div className="userShowInfo">
                <LocationOn className="userShowIconLocation" />
                <span className="userShowTitle">Location 2</span>
                <span className="userShowInfoTitle">{x.owner.stopb}</span>
              </div>
             
            
            </div>
          </div>
        </div> 
      })} 
      </div>
    
  );
}

