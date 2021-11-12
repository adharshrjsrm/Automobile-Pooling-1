import React, { useEffect, useState } from 'react'
import './UserList.css'
import axios from 'axios';
import Select from 'react-select';
import { Button } from '@material-ui/core';
import authHeader from '../../../services/authHeader';
import Sidebar from '../sidebar/Sidebar';
import Topbar from '../topbar/Topbar';


export default function UserList() {
  const config = {
    headers: authHeader() 
  };
  const[status,setStatus]=useState();
  const loadOwner = async () => {
    axios.get("http://localhost:9000/api/owner",config)
    .then((res) => {
      console.log("owner"+res.data)
      setJData(res.data);
    })
    .catch(err => {
      console.log(err)
    })
    
  };
  const loadStatus = async () => {
    axios.get("http://localhost:9000/api/requeststatus",config)
    .then((res) => {
      console.log("owner"+res.data)
      setStatus(res.data);
    })
    .catch(err => {
      console.log(err)
    })
    
  };
  useEffect(() => {
    loadStatus();
   loadOwner();
  }, [])


  const handleClick=(e)=>{
    const value={
      "owner":{id:e.target.id}
    }
    console.log(value);
    axios.post("http://localhost:9000/api/ride/add",value,config).then(res=>{
     alert("ride booked");
     loadStatus();
      loadOwner();
  }
  ).catch((err)=>{
         console.log("There are Errors in the Entry")
     }) 
  }
  

  const [jdata, setJData] = useState([]);
  const [sdata, setSData] = useState([]);
  const [place, setPlace] = useState([]);


  

  console.log(sdata);
  console.log(place);
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
     
     
     
       
        
       
     
        <div className="widgetLg">
        <table className="widgetLgTable">
          <thead>
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Name</th>
              
              <th className="widgetLgTh">Source</th>
              <th className="widgetLgTh">Destination</th>
              <th className="widgetLgTh">Vehicle Number</th>
              <th className="widgetLgTh">Vehicle Color</th>
              <th className="widgetLgTh">Vehicle Type</th>
              <th className="widgetLgTh">Seat</th>
              <th className="widgetLgTh">Action</th>
            </tr>

          </thead>
          <tbody>
            {jdata.map((x) => {
              return (
                <tr>
                  <td className=""> {x.firstname+" "}{x.lastname}</td>
                  
                  <td className="td"> {x.source}</td>
                  <td className="td"> {x.destination}</td>
                  <td className="td"> {x.vehiclenumber}</td>
                  <td className="td" style={{ color: x.vehiclecolor }}> {x.vehiclecolor}</td>
                  <td className="td"> {x.vehicletype}</td>
                  <td className="td"> {x.numberofseats-x.ridecount}</td>
                  <td className="td"><button disabled={!status} className="userListEdit" id={x.id} onClick={handleClick}>Request</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}
