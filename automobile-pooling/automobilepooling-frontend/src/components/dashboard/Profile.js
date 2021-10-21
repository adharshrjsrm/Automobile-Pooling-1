import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TabContainer } from 'react-bootstrap';

export default function Profile() {
 

  return (
    <div>
        <div className="auth-wrapper">
  <div className="auth-vehicle">
     
            <div className="card-header"><h4>My Profile</h4></div>
            <form >
                <br/>
              <div class="mb-3 row">
              <label for="vehiclenumber" class="col-sm-4 col-form-label">Name</label>
                <div class="col-sm-6">
                Divya
                </div>
                </div>
                <div class="mb-3 row">
              <label for="vehiclenumber" class="col-sm-4 col-form-label">Designaion</label>
                <div class="col-sm-6">
                Trainee
                </div>
                </div>
                <div class="mb-3 row">
              <label for="vehiclenumber" class="col-sm-4 col-form-label">Source</label>
                <div class="col-sm-6">
                CMBT
                </div>
                </div>
                <div class="mb-3 row">
              <label for="vehiclenumber" class="col-sm-4 col-form-label">Destination</label>
                <div class="col-sm-6">
                Tharamani
                </div>
                </div>
                <div class="mb-3 row">
              <label for="vehiclenumber" class="col-sm-4 col-form-label">Mobile</label>
                <div class="col-sm-6">
                9009099890
                </div>
                </div>
                <div class="mb-3 row">
              <label for="vehiclenumber" class="col-sm-4 col-form-label">Email</label>
                <div class="col-sm-6">
                dfs@gmail.com
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