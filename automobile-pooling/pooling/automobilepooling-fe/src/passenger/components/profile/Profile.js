import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ErrorMessage from './ErrorMessage';

import {
  LocationSearching,
  MailOutline,
  PhoneAndroid,
} from '@material-ui/icons' //  PermIdentity,   
import AddLocationIcon from '@mui/icons-material/AddLocation';

import './Profile.css'

export default function Profile() {

  const initialValues = {
    firstname: "",
    lastname: "",
    mobile: "",
    designation: "",
    source: "",
    stopa: "",
    stopb: "",
    destination: -1
  };
  const destination = [
    { id: 1, name: "Adambakkam" },
    { id: 2, name: "Adyar" },
    { id: 3, name: "Alandur" },
    { id: 4, name: "Alapakkam" },
    { id: 5, name: "Alwarpet" }
  ];

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);


  //onformsubmit
  const handleDoSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));

    console.log("===" + Object.entries(formErrors).length);

    setSubmitted(true);
  };

  //onchangeevent
  const handleOnChange = (event) => {
    const isInternalExternal = event.target.type === "checkbox";

    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: isInternalExternal ? event.target.checked : value,
      };
    });
  };

  const validate = (values) => {
    let errors = {};
    console.log(values);
    const onlystr = /^[a-zA-Z]+$/;

    if (!values.firstname) {
      errors.firstname = "*First Name cannot be empty";
    } else if (!onlystr.test(values.firstname)) {
      errors.firstname = "*Only alphabets are Permitted";
    }
    if (!values.lastname) {
      errors.lastname = "*Last Name cannot be empty";
    } else if (!onlystr.test(values.lastname)) {
      errors.lastname = "*Only alphabets are Permitted";
    }
    const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    if (!values.mobile) {
      errors.mobile = "*mobile number cannot be empty";
    } else if (!phoneRegExp.test(values.mobile)) {
      errors.mobile = "*Please enter only number.";
    }

    if (!values.designation) {
      errors.designation = "*Designation Name cannot be empty";
    } else if (!onlystr.test(values.designation)) {
      errors.designation = "*Only alphabets are Permitted";
    }
    if (!values.source) {
      errors.source = "Source cannot be empty";
    }
    if (!values.stopa) {
      errors.stopa = "*Stop a  cannot be empty";
    }
    if (!values.stopb) {
      errors.stopb = "*Stop b  cannot be empty";
    }
    if (values.destination < 0) {
      errors.destination = "*Select Destination";
    }

    return errors;
  };

  const [jdata, setJData] = useState([]);
  const [state, setState] = useState(false)

  const handleShow = () => {
    setState({
      isActive: true
    })
  }

  useEffect(() => {
    axios.get("http://localhost:8000/profile/3")
      .then((res) => {
        console.log(res)
        setJData(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  console.log(jdata);

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Profile</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://mmlrim.com/wp-content/uploads/2017/03/78-785827_user-profile-avatar-login-account-male-user-icon.png"
              alt=""
              className="userShowImg"
            />

            <div className="userShowTopTitle">
              <span className="userShowUsername">{jdata.firstname} {jdata.lastname}</span>
              <span className="userShowUserTitle">{jdata.designation}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{jdata.mobile}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{jdata.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{jdata.source} | {jdata.destination}</span>
            </div>
            <div className="userShowInfo">
              <AddLocationIcon className="useShowIcon" />
              <span className="userShowInfoTitle">{jdata.stopa}</span>
            </div>
            <div className="userShowInfo">
              <AddLocationIcon className="useShowIcon" />
              <span className="userShowInfoTitle">{jdata.stopb}</span>
            </div>
            <button className="userUpdateButton" onClick={handleShow}>Edit</button>
          </div>
        </div>
        {state ?
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>

            <form className="userUpdateForm" onSubmit={handleDoSubmit} noValidate>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">

                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder={jdata.firstname}
                    className="userUpdateInput"
                    value={formValues.firstname}
                    onChange={handleOnChange}
                    name="firstname"
                  />
                  <ErrorMessage message={formErrors.firstname} />
                </div>
                <div className="userUpdateItem">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder={jdata.lastname}
                    className="userUpdateInput"
                    value={formValues.lastname}
                    onChange={handleOnChange}
                    name="lastname"
                  />
                  <ErrorMessage message={formErrors.lastname} />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder={jdata.mobile}
                    className="userUpdateInput"
                    value={formValues.mobile}
                    onChange={handleOnChange}
                    name="mobile"
                  />
                  <ErrorMessage message={formErrors.mobile} />
                </div>
                <div className="userUpdateItem">
                  <label>Designation</label>
                  <input
                    type="text"
                    placeholder={jdata.designation}
                    className="userUpdateInput"
                    value={formValues.designation}
                    onChange={handleOnChange}
                    name="designation"
                  />
                  <ErrorMessage message={formErrors.designation} />
                </div>
                <div className="userUpdateItem">
                  <label>Source</label>
                  <input
                    type="text"
                    placeholder={jdata.source}
                    className="userUpdateInput"
                    value={formValues.source}
                    onChange={handleOnChange}
                    name="source"
                  />
                  <ErrorMessage message={formErrors.source} />
                </div>
                <div className="userUpdateItem">
                  <label>Stop A</label>
                  <input
                    type="text"
                    placeholder={jdata.stopa}
                    className="userUpdateInput"
                    value={formValues.stopa}
                    onChange={handleOnChange}
                    name="stopa"
                  />
                  <ErrorMessage message={formErrors.stopa} />
                </div>
                <div className="userUpdateItem">
                  <label>Stop B</label>
                  <input
                    type="text"
                    placeholder={jdata.stopb}
                    className="userUpdateInput"
                    value={formValues.stopb}
                    onChange={handleOnChange}
                    name="stopb"
                  />
                  <ErrorMessage message={formErrors.stopb} />
                </div>
                <div className="userUpdateItem">
                  <label>Destination</label>

                  <select
                    placeholder={jdata.destination}
                    className="userUpdateInput"
                    onChange={handleOnChange}
                    value={formValues.destination}

                    name="destination"
                  >
                    <option value="-1">Select your Destination</option>
                    {destination.map((x) => {
                      return <option key={x.id}>{x.name}</option>;
                    })}
                  </select>

                  <ErrorMessage message={formErrors.destination} />
                </div>
              </div>
              <div className="userUpdateRight">
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div> : null}
      </div>
    </div>
  )
}

