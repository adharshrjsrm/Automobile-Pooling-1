import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./RideHistory.css";
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';
import authHeader from '../../../services/authHeader';

export default function RideHistory() {
    const [jdata, setJData] = useState([]);
    const [sdata, setSData] = useState([]);
    const config = {
        headers: authHeader() 
      };
  
    useEffect(() => {
      axios.get("http://localhost:9000/api/passengerride",config)
        .then((res) => {
          console.log(res)
          setJData(res.data);
        })
        .catch(err => {
          console.log(err)
        })
    }, [])
    console.log(sdata);
    return (
        <>
        <Topbar/>
        <div className="container">
            <Sidebar/>
        
        <div className="widgetLgHistory">
            <h3>Ride History</h3>
            <table className="table table-stipped">
                <thead>
                    <tr className="widgetLgTr">
                       
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Source</th>
                        <th className="widgetLgTh">Destination</th>
                        <th className="widgetLgTh">owner </th>
                        <th className="widgetLgTh">Vehicle</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {jdata.map((x) => {
                        return (
                            <tr>
                             
                                <td className="td"> {x.date}</td>
                                <td className="td"> {x.passenger.source}</td>
                                <td className="td"> {x.passenger.destination}</td>
                                <td>
                                    <details >
                                        <summary className="view">Owner Details</summary>
                                        Name - {x.owner.firstname}{" "+x.owner.lastname}<br/>
                                        Mobile  - {x.owner.mobile}<br/>
                                        Source   - {x.owner.source}<br/>
                                        Destination   - {x.owner.destination}
                                    </details>
                                </td>
                                <td className="td">
                                    <details>
                                        <summary className="viewvehicle">Vehicle Details</summary>
                                        Number - {x.owner.vehicle.vehiclenumber}<br/>
                                        Color  - {x.owner.vehicle.vehiclecolor}<br/>
                                        Type   - {x.owner.vehicle.vechiclemodel}<br/>
                                        Seat   - {x.owner.vehicle.numberofseats}
                                    </details>
                                </td>
                               
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </div>
        </>
    )
}
