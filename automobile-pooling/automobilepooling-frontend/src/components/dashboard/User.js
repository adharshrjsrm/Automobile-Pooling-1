import React, { useState } from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';
import {useHistory } from "react-router-dom";




export default function User() {
  const validationSchema = Yup.object({
    name : Yup.string().required("Name is mandatory"),
    mobile: Yup.number().required("Mobile number is mandatory"),
    designation:Yup.string().required("Designation is mandatory"),
    // source:Yup.number().required("source latitude is mandatory"),  
    // destination: Yup.number().required("destination latitude is mandatory"),
  
    
}) 

const config = {
  headers: authHeader() 
};



const hist = useHistory();
const { handleSubmit,handleChange,values,errors} = useFormik({

 
  initialValues: {
    name:'',
    mobile:'',
    // department:'',
    usertype:'',
    source:'',
    destination:'',
    designation:'',
    sourcelat:'',
    sourcelon:'',
    destinationlat: '',
    destinationlon:''
  },
  validationSchema,
  onSubmit(values) {
      console.log(values);
    axios.post("http://localhost:8001/user/add",values,config).then(res=>{
          //alert("User Onboarded successfully");
          console.log("=============Submitted");
          
          swal({
            // title: "Good job!",
              text: "user register successfully!",
              icon: "success",
            });
    }
    ).catch((err)=>{
            console.log("err")
        })


    //     axios.put("http://localhost:8001/user/update",values).then(res=>res.data).then((data)=>{
    //       //alert("User Onboarded successfully");
    //       console.log("=============Submitted");
    //       console.log(data);
    //       swal({
    //         // title: "Good job!",
    //           text: "user updated successfully!",
    //           icon: "success",
    //         });
    // }
    // ).catch((err)=>{
    //         console.log("err")
    //     })
}
}) 
 
    return (
        <div>           
            <div className="container-md " style = { {  marginLeft :   "400px"  } } >
            <div className="col-sm-6">
            <div className="card"> 
            <div className="card-header"><h4>USER REGISTRATION</h4></div>
            <form onSubmit={handleSubmit} noValidate>

  
  
<div class="mb-5 row">
  <label for="name" class="col-sm-4 col-form-label">Name</label>
  <div class="col-sm-6">
<input type="text" class="form-control"  name="name" value={values.name} onChange={handleChange} />
    {errors.name ? errors.name : null}
  </div>
  </div>

  <div class="mb-5 row">
  <label for="mobile" class="col-sm-4 col-form-label">Mobile Number</label>
  <div class="col-sm-6">
<input type="text" class="form-control"  name="mobile" value={values.mobile} onChange={handleChange} />
    {errors.mobile ? errors.mobile : null}
  </div>
  </div>


  <div class="mb-5 row">
  <label for="designation" class="col-sm-4 col-form-label">Designation</label>
  <div class="col-sm-6">
<input type="text" class="form-control"  name="designation" value={values.designation} onChange={handleChange} />
    {errors.designation ? errors.designation : null}
  </div>
  </div>


{/* <div class="mb-5 row">
   <label for="usertype" class="col-sm-4 col-form-label">User Type</label>
   <div class="col-sm-6">
   <select class="form-select" name="usertype" onChange={handleChange} value={values.usertype}>
   <option value="-1">Please select a UserType</option>
   <option value="owner">Owner</option>
   <option value="passenger">Passenger</option>
   </select>
     {errors.usertype ? errors.usertype: null}
  </div>
</div> */}


<div class="mb-5 row">
<label for="source" class="col-sm-4 col-form-label">Source</label>
  <div class="col-sm-6">
  <input type="text" class="form-control"  name="source" value={values.source} onChange={handleChange} />
      <button onClick={getLocation}>Get Location</button>
    
    {errors.source ? errors.source : null}
  </div>
  </div>

  
<div class="mb-5 row">
<label for="sourcelon" class="col-sm-4 col-form-label">Destination</label>
  <div class="col-sm-6">
    <input type="text" class="form-control"  name="destination" value={values.destination} onChange={handleChange} />
    {errors.destination ? errors.destination : null}
  </div>
  </div>

  
  
  <button class="btn btn-primary" type="submit" >Register</button>

  
</form>
        </div></div></div></div>
        
)}

