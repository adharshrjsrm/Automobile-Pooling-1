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
    const res = await axios.get(`http://localhost:9000/api/getride`,config);
    setValues(res.data);
    console.log(res.data)
  };
  useEffect(() => {
   console.log("useeffect");
    loadUser(); 
}, []);
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Passenger Details</h3>
      <table className="table">
        <thead>
        <tr >
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Designation</th>
          <th className="widgetLgTh">Source</th>
          <th className="widgetLgTh">Destination</th>
          <th className="widgetLgTh">Mobile</th>
          <th className="widgetLgTh">Time</th>
        </tr>
        </thead>
        <tbody>
        {res.map((x) => {
                return <tr >
                <td className="td">
                 
                  <span className="widgetLgName">{x.passenger.firstname}</span>
                </td>
                <td className="td">{x.passenger.designation}</td>
                <td className="td">{x.passenger.source}</td>
                <td className="td">{x.passenger.destination}</td>
                <td className="td">{x.passenger.mobile}</td>
                <td className="td">{x.time}</td>
               
              </tr>
              })}
              </tbody>
      </table>
    </div>
  );
}
