import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Vehicle() {
  const validationSchema = Yup.object({
    
    vehiclenumber: Yup.string().required("Vehicle Number is mandatory"),
    vehicletype: Yup.string().required("Vehicle Type is mandatory"),
    vehiclecolor: Yup.string().required("Vehicle Color is mandatory"),
    numberofseats: Yup.number().required("please fill number of seats"),

  })
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
     
      vehiclenumber: '',
      vehicletype: '',
      vehiclecolor: '',
      numberofseats: ''
    },
    validationSchema,
    onSubmit(values) {
     
        alert("Vehicle added successfully");
     
    }
  })

  return (
    <div>
        <div className="auth-wrapper">
  <div className="auth-vehicle">
     
            <div className="card-header"><h4>Vehicle Details</h4></div>
            <form onSubmit={handleSubmit} noValidate>
                <br/>
              <div class="mb-3 row">
              <label for="vehiclenumber" class="col-sm-4 col-form-label">Vehicle Number</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control"  name="vehiclenumber" value={values.vehiclenumber} onChange={handleChange} />
                  {errors.vehiclenumber ? errors.vehiclenumber : null}
                </div>
                </div>
                <div class="mb-3 row">
              <label for="vehiclenumber" class="col-sm-4 col-form-label">Vehicle Type</label>
                <div class="col-sm-6">
                <select class="form-select" name="vehicletype" onChange={handleChange} value={values.vehicletype}>
              <option value="-1">Please select a vehicle type</option>
              <option value="1">Car</option>
              <option value="2">Bike</option>
            </select>
                    {errors.vehicletype ? errors.vehicletype: null}
                  
                </div>

               
              </div>
              <div class="mb-3 row">
              <label for="vehiclenumber" class="col-sm-4 col-form-label">Vehicle Color</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control"  name="vehiclecolor" value={values.vehiclecolor} onChange={handleChange} />
                  {errors.vehiclecolor ? errors.vehiclecolor : null}
                </div>
                </div>
                <div class="mb-3 row">
              <label for="numberofseats" class="col-sm-4 col-form-label">Number of seats</label>
                <div class="col-sm-6">
                <select class="form-select" name="numberofseats" onChange={handleChange} value={values.numberofseats}>
              <option value="-1">Please select number of seats</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
                  {errors.numberofseats ? errors.numberofseats : null}
                  </div>
                </div>
              
                <div class="mb-3 row">
                <div class="col-sm-3">
                <button class="btn btn-dark " type="button">Edit</button></div>
                <div class="col-sm-2">
                <button class="btn btn-dark" type="submit">Back</button>
                </div>
                </div>
            </form>
         
          </div></div></div>

  )
}