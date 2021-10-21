import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Ride() {
 

  return (
    <div>
        <div className="auth-wrapper">
  <div className="auth-vehicle">
     
            <div className="card-header"><h4>Ride Details</h4></div>
            <form >
                <br/>
                <div className="col-lg-20 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Passengers Information</h4>
                <p className="card-description"> Date   
                </p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Designation </th>
                        <th> Source </th>
                        <th> Destination </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> John </td>
                        <td>
                         trainee
                        </td>
                        <td>Manali </td>
                        <td>Tharamani </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td>Balu </td>
                        <td>
                         trainee
                        </td>
                        <td> Adayar </td>
                        <td> Tharamani </td>
                      </tr>
                      <tr>
                        <td>3 </td>
                        <td>Preeti </td>
                        <td>
                         trainee
                        </td>
                        <td> Guindy </td>
                        <td> Tharamani </td>
                      </tr>
                      <tr>
                        <td>4 </td>
                        <td>Pratheek </td>
                        <td>
                         trainee
                        </td>
                        <td> CMBT </td>
                        <td> Tharamani </td>
                      </tr>
                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
            </form>
         
          </div></div></div>

  )
}