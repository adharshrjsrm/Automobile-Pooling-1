import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import authHeader from '../../services/authHeader'
import './view.css'
import './Request'
import * as React from 'react';

import { useDemoData } from '@mui/x-data-grid-generator';


export default function View() {
  const [data, setData] = useState();
  const [res, setResult] = useState([]);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  
  // const[color,setColor]=useState('primary')
  // const[btnDisable,setBtnDisable]=useState(false)

  // function customMe(){
  //   setBtnDisable(true)
  // }


  const [pageSize, setPageSize] = React.useState(5);

  // const { res } = setResult({
  //   dataSet: 'res',
  //   rowLength: 1000,
  //   maxColumns: 6,
  // });


  // const columns = [
  //   {field: 'id', headerName: 'Id',width:100 },
  //   {field :'firstname',headerName: 'First Name',width:150},
  //   {field: 'lastname', headerName: 'Last Name', width: 150},
  //   {field: 'designation', headerName: 'Designation', width: 150},
  //   {field: 'source', headerName: 'Source', width: 150},
  //   {field: 'destination', headerName: 'Destination', width: 150},
  //   {field: 'stopa', headerName: 'Location 1', width: 150},
  //   {field: 'stopb', headerName: 'Location 2', width: 150},
  //   {field: 'key={x.id}>{x.vehicle.vehiclenumber}', headerName: 'Vehicle Number', width: 200},
  //   {field: 'vehicle.vehicletype', headerName: 'Vehicle Type', width: 200},
  //   {field: 'vehicle.vehiclecolor', headerName: 'Vehicle Color', width: 200},
  //   {field: 'vehicle.numberofseats', headerName: 'Number of Seats', width: 200},
  // ]

   


   
   
  const loadUser = async () => {
 
    const result = await axios.get(`http://localhost:9000/api/user/get`, config);
    setResult(result.data);
    console.log(result.data)

  };

  useEffect(() => {
    console.log("useeffect");
    loadUser();


  }, []);




  const config = {
    headers: authHeader()
  };


  const hist = useHistory();

  const { id } = useParams();
  console.log(id);


  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };



  return (

    // <div className="container-md ">
    //         <div className="col-sm-13">
    //         <div className="card"> 
    //         {/* <div className="card-header"><h4>User List</h4></div> */}
    //         <div className="card-body"> 
    <div className="userList">
      <h1></h1>
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Owner Details</h3>
        <table className="widgetLgTable">
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

            {res.map((x) => {
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
                  //   color={color}
                  //  variant="contained"  
                  //  disabled={btnDisable} 
                  //  onClick={()=>customMe()}>Request</Button>
                     type="Request" /> 
                 </th>
                {/* <button className="newButton" type="submit" onClick={handleSubmit}>Request</button> */}


              </tr>
            })}  

           </tbody>  
          
        </table>

      

        <div className="userList">
        {/* < div style={{height: 700, width: '100%'}}>  */}
          <DataGrid
            rows={res}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        {...data}
          />
        {/* </div>  */}
        </div>





      </div>
         </div>
   

    // </div></div></div></div>

  );
}
