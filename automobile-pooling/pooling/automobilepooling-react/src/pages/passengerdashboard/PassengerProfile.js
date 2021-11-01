import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import Sidebar from "../../pages/passengerdashboard/sidebar/Sidebar";
  import Topbar from "../../components/topbar/Topbar";
  import "../user/user.css";
  import { useFormik } from 'formik';
  import * as Yup from 'yup';
  import axios from 'axios';
  import authHeader from '../../services/authHeader';
  import { useHistory } from 'react-router-dom';
  import { useEffect } from "react";
  
  export default function PassengerProfile() {
  
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:9000/api/user/getuser`,config);
      setValues(result.data);
      console.log(result.data)
      
    };
    useEffect(() => {
     console.log("User-useeffect");
      loadUser();
      
     
  }, []);
  
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  
  
    const validationSchema = Yup.object({
      firstname: Yup.string().required("FirstName is Mandatory"),
      lastname: Yup.string().required("LastName is Mandatory"),
      mobile: Yup.string()
        .matches(phoneRegExp, "Mobile Number is invalid")
        .min(10, "Mobile Number is less than 10")
        .max(10, "Mobile Number should be 10")
        .required("Mobile number is Mandatory"),
      designation: Yup.string().required("Designation is Mandatory"),
      source: Yup.string().required("Source is Mandatory"),
      destination: Yup.string().required("Destination is Mandatory"),
      stopa: Yup.string().required("Location 1 is Mandatory"),
      stopb: Yup.string().required("Location 2 is Mandatory")
    })
  
    const config = {
      headers: authHeader()
    };
  
  
    const hist = useHistory();
    const { handleSubmit, handleChange, values, errors, setValues } = useFormik({
  
  
      initialValues: {
        firstname: '',
        lastname: '',
        mobile: '',
        source: '',
        destination: '',
        designation: '',
        
  
      },
      validationSchema,
      onSubmit(values) {
        console.log(values);
  
        axios.put("http://localhost:9000/api/user/update", values, config).then(res => {
  
          alert("user updated successfully");
        }
        ).catch((err) => {
          console.log("There are Errors in the Entry")
        })
  
      }
    })
    return (
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="user">
            <div className="userTitleContainer">
              <h1 className="userTitle">My Profile</h1>
              <Link to="/newUser">
                <button className="userAddButton">Create</button>
              </Link>
            </div>
            <div className="userContainer">
              <div className="userShow">
                <div className="userShowTop">
  
                  <div className="userShowTopTitle">
                    <span className="userShowUsername">{values.firstname+" "}{values.lastname}</span>
                    <span className="userShowUserTitle">{values.designation}</span>
                  </div>
                </div>
                <div className="userShowBottom">
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                    <PermIdentity className="userShowIcon" />
                    <span className="userShowInfoTitle">{values.firstname+" "}{values.lastname}</span>
                  </div>
                  <div className="userShowInfo">
                    <CalendarToday className="userShowIcon" />
                    <span className="userShowInfoTitle">{values.designation}</span>
                  </div>
                  <span className="userShowTitle">Contact Details</span>
                  <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon" />
                    <span className="userShowInfoTitle">{values.mobile}</span>
                  </div>
                  <div className="userShowInfo">
                    <MailOutline className="userShowIcon" />
                    <span className="userShowInfoTitle">divya@gmail.com</span>
                  </div>
                  <span className="userShowTitle">Address Details</span>
                  <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfoTitle">{values.source}</span>
                  </div>
                  <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfoTitle">{values.destination}</span>
                  </div>
                  
                </div>
              </div>
              <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                  <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="userUpdateInput"
                        name="firstname" value={values.firstname}
                        onChange={handleChange} />
                      {errors.firstname ? errors.firstname : null}
  
                    </div>
                    <div className="userUpdateItem">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="userUpdateInput"
                        name="lastname" value={values.lastname}
                        onChange={handleChange} />
                      {errors.lastname ? errors.lastname : null}
                    </div>
                    <div className="userUpdateItem">
                      <label>Email</label>
                      <input
                        type="text"
                        placeholder="annabeck99@gmail.com"
                        className="userUpdateInput"
                      />
                    </div>
                    <div className="userUpdateItem">
                      <label>Phone</label>
                      <input
                        type="text"
                        className="userUpdateInput"
                        name="mobile" value={values.mobile}
                        onChange={handleChange} />
                      {errors.mobile ? errors.mobile : null}
                    </div>
                    <div className="userUpdateItem">
                      <label>Designation</label>
                      <input
                        type="text"
                        className="userUpdateInput"
                        name="designation" value={values.designation}
                        onChange={handleChange} />
                      {errors.designation ? errors.designation : null}
                    </div>
                    <div className="userUpdateItem">
                      <label>Source</label>
                      <input
                        type="text"
                        className="userUpdateInput"
                        name="source" value={values.source}
                        onChange={handleChange} />
                      {errors.source ? errors.source : null}
                    </div>
                    <div className="userUpdateItem">
                      <label>Destination</label>
                      <input
                        type="text"
                        className="userUpdateInput"
                        name="destination" value={values.destination}
                        onChange={handleChange} />
                      {errors.destination ? errors.destination : null}
  
                    </div>
                  </div>
                  <div className="userUpdateRight">
  <div></div>
                    <button className="userUpdateButton" onClick={handleSubmit}>Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  