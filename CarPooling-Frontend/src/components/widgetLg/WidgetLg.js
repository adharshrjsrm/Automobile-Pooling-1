import "./widgetLg.css";
import axios from 'axios';
import authHeader from '../../services/authHeader';
import { useEffect,useState } from "react";

export default function WidgetLg() {
  const config = {
    headers: authHeader() 
  };

  const[res,setValues]=useState([]);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:9000/api/user/get`,config);
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
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Designation</th>
          <th className="widgetLgTh">Source</th>
          <th className="widgetLgTh">Destination</th>
          <th className="widgetLgTh">Mobile</th>
        </tr>
        
        <br/>
        {res.map((x) => {
                return <tr className="widgetLgTr">
                <td className="widgetLgUser">
                 
                  <span className="widgetLgName">{x.firstname}</span>
                </td>
                <td className="widgetLgAmount">{x.designation}</td>
                <td className="widgetLgAmount">{x.source}</td>
                <td className="widgetLgAmount">{x.destination}</td>
                <td className="widgetLgAmount">{x.mobile}</td>
               
              </tr>
              })}
      </table>
    </div>
  );
}
