import React, { useEffect, useState } from 'react'
import './UserList.css'
import axios from 'axios';
import authHeader from '../../../services/authHeader';
import Sidebar from '../sidebar/Sidebar';
import Topbar from '../topbar/Topbar';
import Select from 'react-select';
import { Button } from '@material-ui/core';

export default function UserList() {
  const config = {
    headers: authHeader() 
  };


  const handleClick=(e)=>{
    const value={
      "owner":{id:e.target.id}
    }
    console.log(value);
    axios.post("http://localhost:9000/api/ride/add",value,config).then(res=>{
     alert("ride booked");
      
     
  }
  ).catch((err)=>{
         console.log("There are Errors in the Entry")
     }) 
  }
  

  const [jdata, setJData] = useState([]);
  const [sdata, setSData] = useState([]);
  const [place, setPlace] = useState([]);

  const places = [
    { label: 'Adambakkam', value: 'Adambakkam' },
    { label: 'Adyar', value: 'Adyar' },
    { label: 'Alandur', value: 'Alandur' },
    { label: 'Alapakkam', value: 'Alapakkam' },
    { label: 'Alwarpet', value: 'Alwarpet' },
    { label: 'Alwarthirunagar', value: 'Alwarthirunagar' },
    { label: 'Ambattur', value: 'Ambattur' },
    { label: 'Aminjikarai', value: 'Aminjikarai' },
    { label: 'Anna Nagar', value: 'Anna Nagar' },
    { label: 'Annanur', value: 'Annanur' },
    { label: 'Arumbakkam', value: 'Arumbakkam' },
    { label: 'Ashok Nagar', value: 'Ashok Nagar' },
    { label: 'Avadi', value: 'Avadi' },
    { label: 'Ayanavaram', value: 'Ayanavaram' },
    { label: 'Besant Nagar', value: 'Besant Nagar' },
    { label: 'Basin Bridge', value: 'Basin Bridge' },
    { label: 'Chepauk', value: 'Chepauk' },
    { label: 'Chetput', value: 'Chetput' },
    { label: 'Chintadripet', value: 'Chintadripet' },
    { label: 'Chitlapakkam', value: 'Chitlapakkam' },
    { label: 'Choolai', value: 'Choolai' },
    { label: 'Choolaimedu', value: 'Choolaimedu' },
    { label: 'Chrompet', value: 'Chrompet' },
    { label: 'Egmore', value: 'Egmore' },
    { label: 'Ekkaduthangal', value: 'Ekkaduthangal' },
    { label: 'Eranavur', value: 'Eranavur' },
    { label: 'Ennore', value: 'Ennore' },
    { label: 'Foreshore Estate', value: 'Foreshore Estate' },
    { label: 'Fort St. George', value: 'Fort St. George' },
    { label: 'George Town', value: 'George Town' },
    { label: 'Gopalapuram', value: 'Gopalapuram' },
    { label: 'Government Estate', value: 'Government Estate' },
    { label: 'Guindy', value: 'Guindy' },
    { label: 'Gerugambakkam', value: 'Gerugambakkam' },
    { label: 'IIT Madras', value: 'IIT Madras' },
    { label: 'Injambakkam', value: 'Injambakkam' },
    { label: 'ICF', value: 'ICF' },
    { label: 'Iyyapanthangal', value: 'Iyyapanthangal' },
    { label: 'Jafferkhanpet', value: 'Jafferkhanpet' },
    { label: 'Karapakkam', value: 'Karapakkam' },
    { label: 'Kattivakkam', value: 'Kattivakkam' },
    { label: 'Kattupakkam', value: 'Kattupakkam' },
    { label: 'Kazhipattur', value: 'Kazhipattur' },
    { label: 'K.K. Nagar', value: 'K.K. Nagar' },
    { label: 'Keelkattalai', value: 'Keelkattalai' },
    { label: 'Kattivakkam', value: 'Kattivakkam' },
    { label: 'Kilpauk', value: 'Kilpauk' },
    { label: 'Kodambakkam', value: 'Kodambakkam' },
    { label: 'Kodungaiyur', value: 'Kodungaiyur' },
    { label: 'Kolathur', value: 'Kolathur' },
    { label: 'Korattur', value: 'Korattur' },
    { label: 'Korukkupet', value: 'Korukkupet' },
    { label: 'Kottivakkam', value: 'Kottivakkam' },
    { label: 'Kotturpuram', value: 'Kotturpuram' },
    { label: 'Kottur', value: 'Kottur' },
    { label: 'Kovilambakkam', value: 'Kovilambakkam' },
    { label: 'Koyambedu', value: 'Koyambedu' },
    { label: 'Kundrathur', value: 'Kundrathur' },
    { label: 'Madhavaram', value: 'Madhavaram' },
    { label: 'Madhavaram Milk Colony', value: 'Madhavaram Milk Colony' },
    { label: 'Madipakkam', value: 'Madipakkam' },
    { label: 'Madambakkam', value: 'Madambakkam' },
    { label: 'Maduravoyal', value: 'Maduravoyal' },
    { label: 'Manali', value: 'Manali' },
    { label: 'Manali New Town', value: 'Manali New Town' },
    { label: 'Manapakkam', value: 'Manapakkam' },
    { label: 'Mandaveli', value: 'Mandaveli' },
    { label: 'Mangadu', value: 'Mangadu' },
    { label: 'Mannady', value: 'Mannady' },
    { label: 'Mathur', value: 'Mathur' },
    { label: 'Medavakkam', value: 'Medavakkam' },
    { label: 'Meenambakkam', value: 'Meenambakkam' },
    { label: 'MGR Nagar', value: 'MGR Nagar' },
    { label: 'Minjur', value: 'Minjur' },
    { label: 'Mogappair', value: 'Mogappair' },
    { label: 'MKB Nagar', value: 'MKB Nagar' },
    { label: 'Mount Road', value: 'Mount Road' },
    { label: 'Moolakadai', value: 'Moolakadai' },
    { label: 'Moulivakkam', value: 'Moulivakkam' },
    { label: 'Mugalivakkam', value: 'Mugalivakkam' },
    { label: 'Mudichur', value: 'Mudichur' },
    { label: 'Mylapore', value: 'Mylapore' },
    { label: 'Nandanam', value: 'Nandanam' },
    { label: 'Nanganallur', value: 'Nanganallur' },
    { label: 'Nanmangalam', value: 'Nanmangalam' },
    { label: 'Neelankarai', value: 'Neelankarai' },
    { label: 'Nemilichery', value: 'Nemilichery' },
    { label: 'Nesapakkam', value: 'Nesapakkam' },
    { label: 'Nolambur', value: 'Nolambur' },
    { label: 'Noombal', value: 'Noombal' },
    { label: 'Nungambakkam', value: 'Nungambakkam' },
    { label: 'Otteri', value: 'Otteri' },
    { label: 'Padi', value: 'Padi' },
    { label: 'Pakkam', value: 'Pakkam' },
    { label: 'Palavakkam', value: 'Palavakkam' },
    { label: 'Pallavaram', value: 'Pallavaram' },
    { label: 'Pallikaranai', value: 'Pallikaranai' },
    { label: 'Pammal', value: 'Pammal' },
    { label: 'Park Town', value: 'Park Town' },
    { label: 'Parrys Corner', value: 'arrys Corner' },
    { label: 'Pattabiram', value: 'Pattabiram' },
    { label: 'Pattaravakkam', value: 'Pattaravakkam' },
    { label: 'Pazhavanthangal', value: 'Pazhavanthangal' },
    { label: 'Peerkankaranai', value: 'Peerkankaranai' },
    { label: 'Perambur', value: 'Perambur' },
    { label: 'Peravallur', value: 'Peravallur' },
    { label: 'Perumbakkam', value: 'Perumbakkam' },
    { label: 'Perungalathur', value: 'Perungalathur' },
    { label: 'Perungudi', value: 'Perungudi' },
    { label: 'Pozhichalur', value: 'Pozhichalur' },
    { label: 'Poonamallee', value: 'Poonamallee' },
    { label: 'Porur', value: 'Porur' },
    { label: 'Pudupet', value: 'Pudupet' },
    { label: 'Pulianthope', value: 'Pulianthope' },
    { label: 'Purasaiwalkam', value: 'Purasaiwalkam' },
    { label: 'Puthagaram', value: 'Puthagaram' },
    { label: 'Puzhal', value: 'Puzhal' },
    { label: 'Puzhuthivakkam/ Ullagaram', value: 'Puzhuthivakkam/ Ullagaram' },
    { label: 'Raj Bhavan', value: 'Raj Bhavan' },
    { label: 'Ramavaram', value: 'Ramavaram' },
    { label: 'Red Hills', value: 'Red Hills' },
    { label: 'Royapettah', value: 'Royapettah' },
    { label: 'Royapuram', value: 'Royapuram' },
    { label: 'Saidapet', value: 'Saidapet' },
    { label: 'Saligramam', value: 'Saligramam' },
    { label: 'Santhome', value: 'Santhome' },
    { label: 'Sembakkam', value: 'Sembakkam' },
    { label: 'Selaiyur', value: 'Selaiyur' },
    { label: 'Shenoy Nagar', value: 'Shenoy Nagar' },
    { label: 'Sholavaram', value: 'Sholavaram' },
    { label: 'Sholinganallur', value: 'Sholinganallur' },
    { label: 'Sithalapakkam', value: 'Sithalapakkam' },
    { label: 'Sowcarpet', value: 'Sowcarpet' },
    { label: 'St.Thomas Mount', value: 'St.Thomas Mount' },
    { label: 'Surapet', value: 'Surapet' },
    { label: 'Tambaram', value: 'Tambaram' },
    { label: 'Teynampet', value: 'Teynampet' },
    { label: 'Tharamani', value: 'Tharamani' },
    { label: 'T. Nagar', value: 'T. Nagar' },
    { label: 'Thirumangalam', value: 'Thirumangalam' },
    { label: 'Thirumullaivoyal', value: 'Thirumullaivoyal' },
    { label: 'Thiruneermalai', value: 'Thiruneermalai' },
    { label: 'Thiruninravur', value: 'Thiruninravur' },
    { label: 'Thiruvanmiyur', value: 'Thiruvanmiyur' },
    { label: 'Tiruverkadu', value: 'Tiruverkadu' },
    { label: 'Thiruvotriyur', value: 'Thiruvotriyur' },
    { label: 'Thuraipakkam', value: 'Thuraipakkam' },
    { label: 'Tirusulam', value: 'Tirusulam' },
    { label: 'Tiruvallikeni', value: 'Tiruvallikeni' },
    { label: 'Tondiarpet', value: 'Tondiarpet' },
    { label: 'United India Colony', value: 'United India Colony' },
    { label: 'Vandalur', value: 'Vandalur' },
    { label: 'Vadapalani', value: 'Vadapalani' },
    { label: 'Valasaravakkam', value: 'Valasaravakkam' },
    { label: 'Vallalar Nagar', value: 'Vallalar Nagar' },
    { label: 'Vanagaram', value: 'Vanagaram' },
    { label: 'Velachery', value: 'Velachery' },
    { label: 'Velappanchavadi', value: 'Velappanchavadi' },
    { label: 'Villivakkam', value: 'Villivakkam' },
    { label: 'Virugambakkam', value: 'Virugambakkam' },
    { label: 'Vyasarpadi', value: 'Vyasarpadi' },
    { label: 'Washermanpet', value: 'Washermanpet' },
    { label: 'West Mambalam', value: 'West Mambalam	' }

  ];

  useEffect(() => {
    axios.get("http://localhost:9000/api/owner",config)
      .then((res) => {
        console.log("owner"+res.data)
        setJData(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  console.log(sdata);
  console.log(place);
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="widgetLg">
        <table className="widgetLgTable">

          <thead>
          <tr className="widgetLgTr">
      <th>
      <Select className="searchcol"
        options={places}
        isMulti
        onChange={opt => setPlace(opt[0].value)}
      /></th> <th>
        <Button type="Submit">Submit</Button>
      </th> </tr><br/>
        </thead>
        <thead>
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Name</th>
              <th className="widgetLgTh">Phone</th>
              <th className="widgetLgTh">Source</th>
              <th className="widgetLgTh">Destination</th>
              <th className="widgetLgTh">Vehicle Number</th>
              <th className="widgetLgTh">Vehicle Color</th>
              <th className="widgetLgTh">Vehicle Type</th>
              <th className="widgetLgTh">Seat</th>
              <th className="widgetLgTh">Time</th>
              <th className="widgetLgTh">Action</th>
            </tr>
          </thead>
          <tbody>
            {jdata.map((x) => {
              return (
                <tr>
                  <td className=""> {x.firstname+" "}{x.lastname}</td>
                  <td className="td"> {x.mobile}</td>
                  <td className="td"> {x.source}</td>
                  <td className="td"> {x.destination}</td>
                  <td className="td"> {x.vehicle.vehiclenumber}</td>
                  <td className="td" style={{ color: x.vehicle.vehiclecolor }}> {x.vehicle.vehiclecolor}</td>
                  <td className="td"> {x.vehicle.vehiclemodel}</td>
                  <td className="td"> {x.vehicle.numberofseats}</td>
                  <td className="td"> {x.time}</td>
                  <td className="td"><button className="userListEdit" id={x.id} onClick={handleClick}>Request</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}
