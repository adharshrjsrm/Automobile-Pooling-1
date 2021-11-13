
import { React, useState, useEffect } from "react";
import axios from 'axios';
import authHeader from '../../../services/authHeader'
import Topbar from "../topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Favorite } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";




export default function UserList() {
    const [res, setResult] = useState([]);
    const [searchTerm, setsearchTerm] = useState("")
    const [data, setData] = useState();
    const [pageSize, setPageSize] = useState();


    const config = {
        headers: authHeader()
    };


    const loadUser = async () => {
        const result = await axios.get(`http://localhost:9000/api/owner`, config);
        setResult(result.data);
        console.log(result.data);

    };

    useEffect(() => {
        console.log("useeffect");
        loadUser();
    }, []);


    const handleSubmit = (e) => {
        const value = {
            "owner": { id: e.target.id }
        }

        console.log(value);

        axios.post("http://localhost:9000/api/ride/add", value, config).then(res => {

            alert("Request Sent Successfully")

        }
        ).catch((err) => {
            console.log("There are Errors in the Entry")
        })

    }


    const handleFav = (e) => {
        const value = {
            "favorite": { id: e.target.id }
        }

        console.log(value);

        axios.post("http://localhost:9000/api/favorite/add", value, config).then(res => {

            alert("Your Favorite ride added successfully")

        }
        ).catch((err) => {
            console.log("There are Errors in the Entry")
        })

    }



   
    
    // const columns = [
    //     { field: 'id', headerName: 'Id', width: 100 },
    //     { field: 'firstname', headerName: 'First Name', width: 150 },
    //     { field: 'lastname', headerName: 'Last Name', width: 150 },
    //     { field: 'designation', headerName: 'Designation', width: 150 },
    //     { field: 'source', headerName: 'Source', width: 150 },
    //     { field: 'destination', headerName: 'Destination', width: 150 },
    //     { field: 'stopa', headerName: 'Location 1', width: 150 },
    //     { field: 'stopb', headerName: 'Location 2', width: 150 },
    //     { field: 'vehiclenumber', headerName: 'Vehicle Number', width: 200 },
    //     { field: 'vehicletype', headerName: 'Vehicle Type', width: 200 },
    //     { field: 'vehiclecolor', headerName: 'Vehicle Color', width: 200 },
    //     { field: 'numberofseats', headerName: 'Number of Seats', width: 200 },
    //     { field: 'x.id', button: 'Request',headerName: 'Ride Request', width: 200 },
    //     <td className="td"><button className="reqbutton" id={x.id} onClick={handleSubmit}>Request</button></td>
    // ]

    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="userList">
                    <h1></h1>
                    <div className="widgetLg">
                        <h3 className="widgetLgTitle">Owner Details</h3>
                                               
                        <input type="text"
                            placeholder="Search..."
                            className="form-control"
                            style={{ marginTop: 30, marginbottom: 10, width: "15%" }}
                            className="d-flex justify-content-right"
                            onChange={(e) => {
                                setsearchTerm(e.target.value)
                            }}
                        />
                        

                        <table className="table">
                            <tr className="widgetLgTr">
                                <th className="widgetLgTh">Id</th>
                                <th className="widgetLgTh">Name</th>
                                <th className="widgetLgTh">Designation</th>
                                <th className="widgetLgTh">Source</th>
                                <th className="widgetLgTh">Destination</th>
                                <th className="widgetLgTh">Location 1</th>
                                <th className="widgetLgTh">Location 2</th>
                                <th className="widgetLgTh">Vehicle Number</th>
                                <th className="widgetLgTh">Vehicle Type</th>
                                <th className="widgetLgTh">Vehicle Color</th>
                                <th className="widgetLgTh">Seats</th>
                                <th className="widgetLgTh">Ride Request</th>
                                <th className="widgetLgTh">Favorite</th>

                            </tr>

                            <tbody>

                                {res.filter(val => {
                                    if (searchTerm === "") {
                                        return val;
                                    } else if (
                                        val.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.vehicle.vehiclecolor.toLowerCase().includes(searchTerm.toLowerCase())

                                    ) {
                                        return val;
                                    }
                                }).map((x) => {
                                    return <tr>
                                        <td ><label key={x.id}>{x.id}</label></td>
                                        <td ><label key={x.id}>{x.firstname+" "}{x.lastname}</label></td>
                                        <td ><label key={x.id}>{x.designation}</label></td>
                                        <td ><label key={x.id}>{x.source}</label></td>
                                        <td ><label key={x.id}>{x.destination}</label></td>
                                        <td ><label key={x.id}>{x.stopa}</label></td>
                                        <td ><label key={x.id}>{x.stopb}</label></td>
                                        <td ><label key={x.id}>{x.vehiclenumber}</label></td>
                                        <td ><label key={x.id}>{x.vehiclemodel}</label></td>
                                        <td  ><label key={x.id}>{x.vehiclecolor}</label></td>
                                        <td ><label key={x.id}>{x.numberofseats}</label></td>
                                        
                                        <td className="td"><button className="reqbutton" id={x.id} onClick={handleSubmit}>Request</button></td>
                                        <td className="td"><button className="favbutton" id={x.id} onClick={handleFav}>AddFavorite</button></td>

                                    </tr>
                                })}

                            </tbody>
                        </table>

                        {/* <div className="userList">
                            < div style={{ height: 600, width: '100%' }}>
                                <DataGrid
                                    rows={res}
                                    disableSelectionOnClick
                                    columns={columns}
                                    pageSize={4}
                                    // checkboxSelection
                                    pageSize={pageSize}
                                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                    rowsPerPageOptions={[3, 5, 10, 20]}
                                    pagination
                                    {...data}
                                />
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>

    );
}
