import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import authHeader from '../../../services/authHeader'
import './view.css'

import * as React from 'react';
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

import _ from "lodash";
import ReactPaginate from "react-paginate";




const pageSize = 2;

export default function View() {
  const [data, setData] = useState();
  const [res, setResult] = useState([]);
  const [posts, setPosts] = useState([]);
  const [paginatedPosts, setpaginatedPosts] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  const [searchTerm,setsearchTerm]=useState("")

  const config = {
    headers: authHeader()
  };


  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9000/api/user/get`, config);
    setResult(result.data);
    console.log(result.data);
    setpaginatedPosts(_(result.data).slice(0).take(pageSize).value());
  };

  useEffect(() => {
    console.log("useeffect");
    loadUser();
  }, []);


  const pageCount = res ? Math.ceil(res.length / pageSize) : 0;
  if (pageCount == 1) return null;
  const pages = _.range(1, pageCount + 1);


  const pagination = (pageNo) => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(res).slice(startIndex).take(pageSize).value();
    
    setpaginatedPosts(paginatedPost)
  }

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };




  return (


    <div>
      <h1>hello</h1>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="userList">
          <h1></h1>
          <div className="widgetLg">
            <h3 className="widgetLgTitle">Owner Details</h3>
           
           <input type ="text"
           placeholder="Search..."
           className="form-control"
           style={{marginTop:30,marginbottom:10,width:"15%" }}
           className="d-flex justify-content-right"
           onChange={(e)=>{
             setsearchTerm(e.target.value)
           }}
           />

            <table className="table">
              <tr className="widgetLgTr">
                <th className="widgetLgTh">Id</th>
                <th className="widgetLgTh">First Name</th>
                <th className="widgetLgTh">Last Name</th>
                <th className="widgetLgTh">Designation</th>
                <th className="widgetLgTh">Source</th>
                <th className="widgetLgTh">Destination</th>
                <th className="widgetLgTh">Location 1</th>
                <th className="widgetLgTh">Location 2</th>
                <th className="widgetLgTh">Vehicle Number</th>
                <th className="widgetLgTh">Vehicle Type</th>
                <th className="widgetLgTh">Vehicle Color</th>
                <th className="widgetLgTh">Number of Seats</th>
                <th className="widgetLgTh">Ride Request</th>

              </tr>


              <tbody>

                {res.filter(val=>{
                  if (searchTerm===""){
                    return val;                   
                  }else if(
                    val.firstname.toLowerCase().includes(searchTerm.toLowerCase())||
                    val.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.destination.toLowerCase().includes(searchTerm.toLowerCase() ) ||
                    val.vehicle.vehiclecolor.toLowerCase().includes(searchTerm.toLowerCase() ) 
                  
                    // val.vehicle.numberofseats.toLowerCase().includes(searchTerm.toLowerCase() ) 
                  ){              
                      return val;
                    }
                }).map((x) => {
                  return <tr>
                    <td ><label key={x.id}>{x.id}</label></td>
                    <td ><label key={x.id}>{x.firstname}</label></td>
                    <td ><label key={x.id}>{x.lastname}</label></td>
                    <td ><label key={x.id}>{x.designation}</label></td>
                    <td ><label key={x.id}>{x.source}</label></td>
                    <td ><label key={x.id}>{x.destination}</label></td>
                    <td ><label key={x.id}>{x.stopa}</label></td>
                    <td ><label key={x.id}>{x.stopb}</label></td>
                    <td ><label key={x.id}>{x.vehicle.vehiclenumber}</label></td>
                    <td ><label key={x.id}>{x.vehicle.vehicletype}</label></td>
                    <td ><label key={x.id}>{x.vehicle.vehiclecolor}</label></td>
                    <td ><label key={x.id}>{x.vehicle.numberofseats}</label></td>
                    <th className="widgetLgStatus">

                      <Button

                        type="Request" />
                    </th>



                  </tr>
                })}

              </tbody>


             

            </table>


            <nav className="d-flex justify-content-center">
              
         
              <ul className="pagination">
              <li className="page-link"  onClick={() => pagination()}>prev</li>
                {
                  pages.map((page) => (
                    <li className={
                      page === currentPage ? "page-item active" : "page-item"
                    }
                    >
                      <li className="page-link"
                        onClick={() => pagination(page)}
                      >{page}

                   
                      </li>


                    </li>
                  ))
                }
                 <li className="page-link" onClick={() => pagination(pages+1)}>Next</li>
              </ul>
            </nav>
          </div>
        </div>


      </div>
    </div>

  );
}