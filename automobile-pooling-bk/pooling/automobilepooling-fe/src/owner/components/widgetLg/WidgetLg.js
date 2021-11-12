import "./widgetLg.css";
import { Visibility } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import axios from 'axios';
import authHeader from '../../../services/authHeader';
import { useHistory } from 'react-router-dom';
import { useEffect,useState } from "react";
import * as React from 'react';

export default function WidgetLg() {

  const[result,setValues]=useState([]);

 

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9000/api/user/owner`,config);
    setValues(result.data);
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
  
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };


   
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Owner Details</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Source</th>
          <th className="widgetLgTh">Destination</th>
          <th className="widgetLgTh">Mobile Number</th>
          <th className="widgetLgTh">Details</th>
          <th className="widgetLgTh">Ride Request</th>
        </tr>
          
        {result.map((x) => {
          return <tr className="widgetLgTr">
          <th className="widgetLgGet" ><label key={x.id}>{x.firstname+" "}{x.lastname}</label></th>
          <th className="widgetLgGet" ><label key={x.id}>{x.source}</label></th>
          <th className="widgetLgGet"><label key={x.id}>{x.destination}</label></th>
          <th className="widgetLgGet"><label key={x.id}>{x.mobile}</label></th>
          
          <th className="widgetLgStatus">
            <button  className="widgetSmButton" onClick={() => hist.push("/view")}>
              <Visibility className="widgetSmIcon" />
              View 
              </button>
          </th>

          <th className="widgetLgButton">
            <Button type="Request" />
          </th>

          
     
          </tr>

           
        })} 
            
      </table>

    </div>
  );
}