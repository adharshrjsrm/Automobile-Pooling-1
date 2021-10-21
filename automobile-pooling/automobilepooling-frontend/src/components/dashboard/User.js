import React, { useState } from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';
import {useHistory } from "react-router-dom";
import authHeader from '../services/authHeader';




export default function User() {
  const validationSchema = Yup.object({
    name : Yup.string().required("Name is mandatory"),
    mobile: Yup.number().required("Mobile number is mandatory"),
    designation:Yup.string().required("Designation is mandatory"),
    source:Yup.number().required("Source is mandatory"),  
    destination: Yup.number().required("Destination is mandatory"), 
    stopa:Yup.string().required("Stopping 1 is mandatory"),
    stopb:Yup.string().required("Stopping 2 is mandatory")
}) 

const config = {
  headers: authHeader() 
};


const hist = useHistory();
const { handleSubmit,handleChange,values,errors} = useFormik({

 
  initialValues: {
    name:'',
    mobile:'',
    usertype:'',
    source:'',
    destination:'',
    stopa:'',
    stopb:'',
    designation:'',
    
  },
  validationSchema,
  onSubmit(values) {
      console.log(values);

        axios.post("http://localhost:9000/api/user/add",values,config).then(res=>{
    }
    ).catch((err)=>{
            console.log("There are Errors in the Entry")
        })   
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




<div class="mb-5 row">
<label for="source" class="col-sm-4 col-form-label">Source</label>
    <div class="col-sm-6">
        <select class="form-select" name="source" onChange={handleChange} value={values.source}>
          <option value="-1">Please select your source</option>

          
          {/* <option value="1">Car</option>
          <option value="2">Bike</option> */}
        </select>
        {errors.source ? errors.source: null}      
      </div>
</div>


<div class="mb-5 row">
<label for="destination" class="col-sm-4 col-form-label">Destination</label>
    <div class="col-sm-6">
        <select class="form-select" name="destination" onChange={handleChange} value={values.destination}>
          <option value="-1">Please select your destination</option>
          {/* <option value="1">Car</option>
          <option value="2">Bike</option> */}
        </select>
        {errors.destination ? errors.destination: null}      
      </div>
</div>

<div class="mb-5 row">
<label for="stopa" class="col-sm-4 col-form-label">Stopping 1</label>
    <div class="col-sm-6">
        <select class="form-select" name="stopa" onChange={handleChange} value={values.stopa}>
          <option value="-1">Please select your near loaction</option>
          <option value="1">Adyar</option>
          <option value="2">Velechery</option>
        </select>
        {errors.stopa ? errors.stopa: null}      
      </div>
</div>
  

<div class="mb-5 row">
<label for="stopb" class="col-sm-4 col-form-label">Stopping 2</label>
    <div class="col-sm-6">
        <select class="form-select" name="stopb" onChange={handleChange} value={values.stopb}>
          <option value="-1">Please select your near loaction</option>
          <option value="1">Car</option>
          <option value="2">Bike</option>
        </select>
        {errors.stopb ? errors.stopb: null}      
      </div>
</div>
  
  
  <button class="btn btn-primary" type="submit" >Register</button>

  
</form>
        </div></div></div></div>
        
)}

