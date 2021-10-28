import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./user.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useState} from 'react';
import { useEffect } from "react";
import authHeader from '../../services/authHeader';
  
  export default function Vehicle() {
    const config = {
      headers: authHeader() 
    };
  
    const[res,setValues]=useState([]);
  
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:9000/api/user/getuser`,config);
      setValues(result.data);
      console.log(result.data)
    };
    useEffect(() => {
     console.log("Vehicle-useeffect");
      loadUser(); 
  }, []);
    
    return (
      <div>
      <Topbar/>
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
                <span className="userShowInfoTitle">{res.vehicle}</span>
              </div>
             
              <span className="userShowTitle">color</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">white</span>
              </div>
              <span className="userShowTitle">Type</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">Bike</span>
              </div>
              <span className="userShowTitle">Seat availability</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">1</span>
              </div>
            
              
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Vehicle Number</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Vehicle Type</label>
                  <input
                    type="text"
                    placeholder="Anna Becker"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Vehicle Color</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Seat Availability</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                  />
                </div>
               
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                 
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
  