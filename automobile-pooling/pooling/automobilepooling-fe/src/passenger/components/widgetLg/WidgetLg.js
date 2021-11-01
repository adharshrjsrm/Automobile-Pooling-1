import "./widgetLg.css";
import axios from 'axios';
import authHeader from '../../../services/authHeader';
import { useEffect,useState } from "react";

export default function WidgetLg() {
  const config = {
    headers: authHeader() 
  };

  const[res,setValues]=useState([]);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:9000/api/owner`,config);
    setValues(res.data);
    console.log(res.data)
  };
  useEffect(() => {
   console.log("useeffect");
    loadUser(); 
}, []);
  return (
    
    <div class="col-lg-8 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Owner Details</h4>
                   
                    <div class="table-responsive">
                    <table class="table">
                        <thead>
                          <tr>
                            <th> Name </th>
                            <th> Designation </th>
                            <th> Source </th>
                            <th> Destination </th>
                            <th> Seat Availability </th>
                          </tr>
                        </thead>
                        <tbody>
                        {res.map((x) => {
                return <tr className="widgetLgTr">
                <th >
                 
                  <span className="widgetLgName">{x.firstname+" "}{x.lastname}</span>
                </th>
                <th className="widgetLgName">{x.designation}</th>
                <th className="widgetLgName">{x.source}</th>
                <th className="widgetLgName">{x.destination}</th>
                <th className="widgetLgName">{x.mobile}</th>
                
               
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
