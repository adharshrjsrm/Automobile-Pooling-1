import "./widgetLg.css";
import { Visibility,DirectionsCar } from "@material-ui/icons";
import axios from 'axios';
import authHeader from '../../../services/authHeader';
import { useHistory } from 'react-router-dom';
import { useEffect,useState } from "react";
import * as React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import WidgetSm from '../widgetSm/WidgetSm';


export default function WidgetLg() {

  const [result, setValues] = useState([]);
  const[status,setStatus]=useState();

  const loadOwner = async () => {
    const result = await axios.get(`http://localhost:9000/api/owner`, config);
    setValues(result.data);
    console.log(result.data)
  };

  const loadStatus = async () => {
    axios.get("http://localhost:9000/api/requeststatus",config)
    .then((res) => {
      console.log("owner"+res.data)
      setStatus(res.data);
    })
    .catch(err => {
      console.log(err)
    })
    
  };
  useEffect(() => {
    loadStatus();
   loadOwner();
  }, [])



  const handleSubmit = (e) => {
    loadStatus();
   
    if(status)
    {
    const value={
      "owner":{id:e.target.id}
    }
    console.log(value);
    axios.post("http://localhost:9000/api/ride/add",value,config).then(res=>{
     alert("ride booked");
     loadStatus();
      loadOwner();
      WidgetSm.loadUser();
  }
  ).catch((err)=>{
         console.log("There are Errors in the Entry")
     }) 
    }
    else{
      alert("request limit exceeded")
    }
  }

  const config = {
    headers: authHeader()
  };

  const hist = useHistory();



  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Book your ride</h3>
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
                      <div class="col-6"><p><span>Name</span></p></div>
                      <div class="col-4"><label className="tippydata" key={x.id}>{x.firstname + " "}{x.lastname}</label></div>
                      <div class="col-6"><p><span>Designation</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.designation}</label></p></div>
                      <div class="col-6"><p><span>Location 1</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.stopa}</label></p></div>
                      <div class="col-6"><p><span>Location 2</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.stopb}</label></p></div>
                      <div class="col-6"><p><span>Vehicle Number</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.vehiclenumber}</label></p></div>
                      <div class="col-6"><p><span>Vehicle Type</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.vehicletype}</label></p></div>
                      <div class="col-6"><p><span>Vehicle Color</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.vehiclecolor}</label></p></div>
                      <div class="col-6"><p><span>Seats</span></p></div>
                      <div class="col-4"><p><label className="tippydata" key={x.id}>{x.numberofseats}</label></p></div>
                    </div>
                  </div>
                </div>}>



                <button className="widgetLgButtonView" id={x.id}>
 
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