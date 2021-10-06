import './Request.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Request() {


    const [axdata, setaxdata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/user")
            .then((res) => {
                console.log(res)
                setaxdata(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <div className="table-wrapper">
            <table className="fl-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Vehicle Number</th>
                        <th>Vehicle Color</th>
                        <th>Vehicle Type</th>
                        <th>Seats</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {axdata.map((x) => {
                        return (
                            <>
                                <tr>
                                    <td> {x.name}</td>
                                    <td> {x.phone}</td>
                                    <td> {x.source}</td>
                                    <td> {x.destination}</td>
                                    <td> {x.vn}</td>
                                    <td> {x.vc}</td>
                                    <td> {x.vt}</td>
                                    <td> {x.seat}</td>
                                    <td> {x.time}</td>
                                    <td><button type="submit">Request</button></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>

            </table>
        </div>
    )
}
