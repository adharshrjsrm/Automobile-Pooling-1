import React, { useEffect, useState } from 'react'
import './UserList.css'
import axios from 'axios';
import authHeader from '../../../services/authHeader';
import Sidebar from '../sidebar/Sidebar';
import Topbar from '../topbar/Topbar';
import Pagination from './Pagination';


export default function UserList() {
  const config = {
    headers: authHeader() 
  };

  const [res, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(2);
  const [length,setLength] = useState();
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = res.slice(indexOfFirstUser, indexOfLastUser);
  const totalPagesNum = Math.ceil(res.length / usersPerPage);

  const [searchTerm, setsearchTerm] = useState("")
  const[status,setStatus]=useState();
  const loadOwner = async () => {
    axios.get("http://localhost:9000/api/owner",config)
    .then((res) => {
      console.log("owner"+res.data)
      setResult(res.data);
      setLength(res.data.length);
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
    loadStatus();
    if(status)
    {
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
    else{
      alert("request limit exceeded")
    }
  }
  

 
  const [sdata, setSData] = useState([]);
  const [place, setPlace] = useState([]);


  

  console.log(sdata);
  console.log(place);
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="widgetLguser">
        <h3 className="widgetLgTitle">Ride offers</h3>
        <table className="table table-striped">

          <thead>
          <input type="text"
                            placeholder="Search..."
                            className="form-control"
                            style={{ marginTop: 30, marginbottom: 10, width: "100%" }}
                            className="d-flex justify-content-right"
                            onChange={(e) => {
                                setsearchTerm(e.target.value)
                            }}
                        />
          <br/>
        </thead>
        <thead>
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Name</th>
              <th className="widgetLgTh">Designation</th>
              <th className="widgetLgTh">Mobile</th>
              <th className="widgetLgTh">Source</th>
              <th className="widgetLgTh">Destination</th>
              <th className="widgetLgTh">Location1</th>
              <th className="widgetLgTh">Location2</th>
              <th className="widgetLgTh">Vehicle Number</th>
              <th className="widgetLgTh">Vehicle Color</th>
              <th className="widgetLgTh">Vehicle Type</th>
              <th className="widgetLgTh">Seat availability</th>
              <th className="widgetLgTh">Action</th>
            </tr>

          </thead>
          <tbody>
          {res.filter(val => {
                                    if (searchTerm === "") {
                                        return val;
                                    } else if (
                                        val.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.stopa.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.stopb.toLowerCase().includes(searchTerm.toLowerCase()) 
                                    ) {
                                        return val;
                                    }
                                }).map((x) => {
              return (
                <tr>
                  <td className="td"> {x.firstname+" "}{x.lastname}</td>
                  <td className="td"> {x.designation}</td> 
                  <td className="td"> {x.mobile}</td>
                  <td className="td"> {x.source}</td>
                  <td className="td"> {x.destination}</td>
                  <td className="td"> {x.stopa}</td>
                  <td className="td"> {x.stopb}</td>
                  <td className="td"> {x.vehiclenumber}</td>
                  <td className="td" > {x.vehiclecolor}</td>
                  <td className="td"> {x.vehicletype}</td>
                  <td className="td"> {x.numberofseats-x.ridecount}</td>
                  <td className="td"><button  className="userListEdit" id={x.id} onClick={handleClick}>Request</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentUsers ={currentUsers}
                length={length}
                 />
      </div>
    </div>
    </div>
  )
}
