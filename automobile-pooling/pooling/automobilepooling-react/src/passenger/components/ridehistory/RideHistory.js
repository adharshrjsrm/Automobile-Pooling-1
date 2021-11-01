import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./RideHistory.css";

export default function RideHistory() {
    const [jdata, setJData] = useState([]);
    const [sdata, setSData] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:8000/ridehistory")
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
        <div className="widgetLg">
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Name</th>
                        <th className="widgetLgTh">Phone</th>
                        <th className="widgetLgTh">Source</th>
                        <th className="widgetLgTh">Destination</th>
                        <th className="widgetLgTh">Vehicle Details</th>
                        <th className="widgetLgTh">Time</th>
                        <th className="widgetLgTh">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {jdata.map((x) => {
                        return (
                            <tr>
                                <td className="td"> {x.name}</td>
                                <td className="td"> {x.phone}</td>
                                <td className="td"> {x.source}</td>
                                <td className="td"> {x.destination}</td>
                                <td className="td">
                                    <details>
                                        <summary>View Details</summary>
                                        Number - {x.vn}<br/>
                                        Color  - {x.vc}<br/>
                                        Type   - {x.vt}<br/>
                                        Seat   - {x.seat}
                                    </details>
                                </td>
                                <td className="td"> {x.time}</td>
                                <td className="td"><button className="userListEdit" onClick={() => setSData(x)}>Request</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
