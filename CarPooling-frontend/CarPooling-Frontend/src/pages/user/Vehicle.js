import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  Palette,
  DriveEta,
  EventSeat
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./user.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from "react";
import authHeader from '../../services/authHeader';

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

      alert("user updated successfully");
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
            <h1 className="userTitle">Vehicle Details</h1>
          </div>
          <div className="userContainer">
            <div className="userShow">

              <div className="userShowBottom">
                <span className="userShowTitle">Vehicle number</span>
                <div className="userShowInfo">
                  <PermIdentity className="userShowIcon" />
                  <span className="userShowInfoTitle">{resu.vehicle.vehiclenumber}</span>
                </div>

                <span className="userShowTitle">Vehicle color</span>
                <div className="userShowInfo">
                  <Palette className="userShowIcon" />
                  <span className="userShowInfoTitle">{resu.vehicle.vehiclecolor}</span>
                </div>
                <span className="userShowTitle">Vehicle Type</span>
                <div className="userShowInfo">
                  <DriveEta className="userShowIcon" />
                  <span className="userShowInfoTitle">{resu.vehicle.vehiclemodel}</span>
                </div>
                <span className="userShowTitle">Seat availability</span>
                <div className="userShowInfo">
                  <EventSeat className="userShowIcon" />
                  <span className="userShowInfoTitle">{resu.vehicle.numberofseats}</span>
                </div>


              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm" onSubmit={handleSubmit} >
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Vehicle Number</label>
                    <input
                      type="text"
                      placeholder="annabeck99"
                      className="userUpdateInput"
                      name="vehiclenumber"
                      value={values.vehiclenumber}
                      onChange={handleChange} />
                  
                  </div>
                  <div className="userUpdateItem">
                    <label>Vehicle Type</label>
                    <select
                      placeholder="Anna Becker"
                      className="userUpdateInput"
                      name="vehiclemodel" onChange={handleChange} value={values.vehiclemodel}>
                      <option value="-1">Please select vehicle Model</option>
                      <option value="Car">Car</option>
                      <option value="Bike">Bike</option>
                    </select>
                   
                  </div>
                  <div className="userUpdateItem">
                    <label>Vehicle Color</label>
                    <input
                      type="text"
                      placeholder="annabeck99@gmail.com"
                      className="userUpdateInput"
                      type="text" placeholder="eg:red" name="vehiclecolor" value={values.vehiclecolor} onChange={handleChange} />
                   
                  </div>
                  <div className="userUpdateItem">
                    <label>Seat Availability</label>
                    <select
                      placeholder="+1 123 456 67"
                      className="userUpdateInput"
                      name="numberofseats" onChange={handleChange} value={values.numberofseats}>
                      <option value="-1">Please select vehicle type</option>
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
