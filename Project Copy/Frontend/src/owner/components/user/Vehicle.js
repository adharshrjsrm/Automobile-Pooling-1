import {
 
  PermIdentity,
  Palette,
  DriveEta,
  EventSeat
} from "@material-ui/icons";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../../passenger/components/topbar/Topbar";
import "./user.css";
import axios from 'axios';
import { useState, useEffect} from 'react';
import authHeader from '../../../services/authHeader';


export default function Vehicle() {
  const config = {
    headers: authHeader()
  };
  

  const [resu, setResult] = useState( {vehicle:{
    id:'',
    vehiclenumber: '',
    vehiclemodel: '',
    vehiclecolor: '',
    numberofseats: ''}});

    const loadUser = async () => {
      let result= await axios.get(`http://localhost:9000/api/user/getuser`, config);
         setResult(result.data);
         console.log(result.data);
         console.log(resu);
       };
       
       useEffect(() => {
         console.log("Vehicle-useeffect");
         loadUser();
       },[]);
 
  const [values,setValues]=useState({
    id:resu.vehicle.id,
    vehiclenumber: '',
    vehiclemodel: '',
    vehiclecolor: '',
    numberofseats: ''
  })
  const handleChange=(event)=>
  {
    values.id=resu.vehicle.id;
    let value = event.target.value;
    let name = event.target.name;
  
    setValues((prevalue) => {
      return {
        ...prevalue,   // Spread Operator               
        [name]: value
      }
    })
    console.log(values);
  }
   let handleSubmit=()=>{
    console.log("values");
    console.log(values);
    axios.put("http://localhost:9000/api/vehicle/update", values, config).then(res => {

      alert("vehicle updated successfully");
    }
    ).catch((err) => {
      console.log("There are Errors in the Entry")
    })
    alert("updated")
  }
  

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="user">
          <div className="userTitleContainer">
            <div className="userTitle">Vehicle Details</div>
          </div>
          <div className="userContainer">
            <div className="userShow">

              <div className="userShowBottom">
                <span className="userShowTitle">Vehicle number</span>
                <div className="userShowInfo">
                  <PermIdentity className="userShowIconNumber" />
                  <span className="userShowInfoTitle">{resu.vehicle.vehiclenumber}</span>
                </div>

                <span className="userShowTitle">Vehicle color</span>
                <div className="userShowInfo">
                  <Palette className="userShowIconColor" />
                  <span className="userShowInfoTitle">{resu.vehicle.vehiclecolor}</span>
                </div>
                <span className="userShowTitle">Vehicle Type</span>
                <div className="userShowInfo">
                  <DriveEta className="userShowIconType" />
                  <span className="userShowInfoTitle">{resu.vehicle.vehiclemodel}</span>
                </div>
                <span className="userShowTitle">Seat availability</span>
                <div className="userShowInfo">
                  <EventSeat className="userShowIconSeat" />
                  <span className="userShowInfoTitle">{resu.vehicle.numberofseats}</span>
                </div>


              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm" onSubmit={handleSubmit} >
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label className="userLabel">Vehicle Number</label>
                    <input
                      type="text"
                      placeholder="TN09 1234"
                      className="userUpdateInput"
                      name="vehiclenumber"
                      value={values.vehiclenumber}
                      onChange={handleChange} />
                  
                  </div>
                  <div className="userUpdateItem">
                    <label className="userLabel">Vehicle Type</label>
                    <select
                      placeholder="eg:car"
                      className="userUpdateInput"
                      name="vehiclemodel" onChange={handleChange} value={values.vehiclemodel}>
                      <option value="-1">Please select vehicle Type</option>
                      <option value="Car">Car</option>
                      <option value="Bike">Bike</option>
                    </select>
                   
                  </div>
                  <div className="userUpdateItem">
                    <label className="userLabel">Vehicle Color</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      type="text" placeholder="eg:red" name="vehiclecolor" value={values.vehiclecolor} onChange={handleChange} />
                   
                  </div>
                  <div className="userUpdateItem">
                    <label className="userLabel">Seat Availability</label>
                    <select
                      placeholder="+1 123 456 67"
                      className="userUpdateInput"
                      name="numberofseats" onChange={handleChange} value={values.numberofseats}>
                      <option value="-1">Please select seat availability</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="1">3</option>
                      <option value="2">4</option>
                      <option value="1">5</option>
                      <option value="2">6</option>
                    </select>
                   


                  </div>

                </div>
                <div >
                  <button type="submit"  className="userUpdateButton" >Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
