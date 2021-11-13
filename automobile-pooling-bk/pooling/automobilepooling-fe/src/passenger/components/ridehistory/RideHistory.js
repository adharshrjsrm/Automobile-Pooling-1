import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./RideHistory.css";
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';
import authHeader from '../../../services/authHeader'

export default function RideHistory() {
    const [res, setResult] = useState([]);
    

  
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:9000/api/getallride`, config);
        setResult(result.data);
        console.log(result.data);
        
    };

    useEffect(() => {
        console.log("useeffect");
        loadUser();
    }, []);

    
    const config = {
        headers: authHeader()
    };

    return (
        <>
        <Topbar/>
        <div className="container">
            <Sidebar/>
        
        <div className="widgetLg">
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                    <th className="widgetLgTh">Id</th>
                        <th className="widgetLgTh">Name</th>
                        <th className="widgetLgTh">Phone</th>
                        <th className="widgetLgTh">Source</th>
                        <th className="widgetLgTh">Destination</th>
                        <th className="widgetLgTh">Vehicle Details</th>
                     

                      
                    </tr>
                </thead>
                <tbody>
                    {res.map((x) => {
                        return (
                            <tr>
                                <td ><label key={x.id}>{x.passenger.id}</label></td>
                                <td ><label key={x.id}>{x.passenger.firstname+" "}{x.passenger.lastname}</label></td>
                                <td ><label key={x.id}>{x.passenger.designation}</label></td>
                                <td ><label key={x.id}>{x.passenger.source}</label></td>
                                <td ><label key={x.id}>{x.passenger.destination}</label></td>
                               
                                <td className="td">
                                    <details>
                                        <summary>View Details</summary>
                                        Number - {x.passenger.vehicle.vehiclenumber}<br/>
                                        Color  - {x.passenger.vehicle.vehiclecolor}<br/>
                                        Type   - {x.passenger.vehicle.vehiclemodel}<br/>
                                        Seat   - {x.passenger.vehicle.numberofseats}
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
