import { React,useState, useEffect } from "react";
import axios from 'axios';
import authHeader from '../../../services/authHeader'
import './view.css'
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";





export default function View() {
  const [res, setResult] = useState([]);
  const [searchTerm,setsearchTerm]=useState("")

  const config = {
    headers: authHeader()
  };


  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9000/api/user/owner`, config);
    setResult(result.data);
    console.log(result.data);
 
  };

  useEffect(() => {
    console.log("useeffect");
    loadUser();
  }, []);



  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };




  return (


    <div>
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


            
          </div>
        </div>


      </div>
    </div>

  );
}