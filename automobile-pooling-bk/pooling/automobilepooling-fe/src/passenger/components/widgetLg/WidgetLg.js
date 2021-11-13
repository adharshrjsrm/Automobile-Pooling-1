import "./widgetLg.css";
import { DirectionsCar, Visibility } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import axios from 'axios';
import authHeader from '../../../services/authHeader';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';


export default function WidgetLg() {

  const [result, setValues] = useState([]);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9000/api/owner`, config);
    setValues(result.data);
    console.log(result.data)
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

  const config = {
    headers: authHeader()
  };

  const hist = useHistory();



  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Owner Details</h3>
      <table className="widgetLgTable">

        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Source</th>
          <th className="widgetLgTh">Destination</th>
          <th className="widgetLgTh">Details</th>
          <th className="widgetLgTh">Ride </th>
        </tr>

        {result.map((x) => {
          return <tr className="widgetLgTr">
            <th className="widgetLgGet" ><label key={x.id}>{x.firstname + " "}{x.lastname}</label></th>
            <th className="widgetLgGet" ><label key={x.id}>{x.source}</label></th>
            <th className="widgetLgGet"><label key={x.id}>{x.destination}</label></th>

            <th className="widgetLgStatus">

              <Tippy className="tippy" content={



                <div  >
                  <div class="container">
                    <div class="row">
                      <div class="col-9">Owner Details</div>

                      <p></p>
                      <div class="col-6"><p><span>Name</span></p></div>
                      <div class="col-4"><label className="tippydata" key={x.id}>{x.firstname + " "}{x.lastname}</label></div>
                      <div class="col-6"><p><span>Source</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.source}</label></p></div>
                      <div class="col-6"><p><span>Destination</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.destination}</label></p> </div>
                      <div class="col-6"><p><span>Designation</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.designation}</label></p></div>
                      <div class="col-6"><p><span>Location 1</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.stopa}</label></p></div>
                      <div class="col-6"><p><span>Location 2</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.stopb}</label></p></div>
                      <div class="col-6"><p><span>Vehicle Number</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.vehiclenumber}</label></p></div>
                      <div class="col-6"><p><span>Vehicle Type</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.vehiclemodel}</label></p></div>
                      <div class="col-6"><p><span>Vehicle Color</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.vehiclecolor}</label></p></div>
                      <div class="col-6"><p><span>Seats</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.numberofseats}</label></p></div>
                    </div>
                  </div>
                </div>}>



                <button className="widgetLgButtonView" id={x.id}>

                  {/* <button  className="widgetLgButtonView" onClick={() => hist.push("/view")}> */}
                  <Visibility className="widgetSmIcon" />
                  View
                </button>
              </Tippy>
            </th>

            <th className="widgetLgStatus">
              <button className="widgetLgButtonRequest" id={x.id} onClick={handleSubmit}>
                <DirectionsCar className="widgetSmIcon" />
                Request
              </button>
            </th>



          </tr>


        })}

      </table>

    </div>
  );
}
