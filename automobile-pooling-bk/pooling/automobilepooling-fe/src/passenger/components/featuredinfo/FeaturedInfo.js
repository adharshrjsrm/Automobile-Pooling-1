import React, { useEffect, useState } from 'react'

import './featuredInfo.css'

import Clock from 'react-live-clock';




export default function FeaturedInfo() {



  const day = new Date();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const d = day.getDay();



  const key = '9a5f1044e1422e7134801ff2fc7dfe06';

  const [feels_like, setFeelsLike] = useState('');

  const [mainTemp, setMainTemp] = useState('');

  const [description, setDescription] = useState('');

  const [main, setMain] = useState('');

  const [country, setCountry] = useState('');



  useEffect(() => {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Chennai&APPID=' + key + '&units=metric')

      .then(res => res.json())

      .then(data => {

        console.log(data);

        setFeelsLike(data.main.feels_like);

        setMainTemp(data.main.temp);

        setDescription(data.weather[0].description);

        setMain(data.weather[0].main);

        setCountry(data.sys.country);

      })

  }, [])

  return (

    <div className="featured">

      <div className="featuredItem">

        <span className="featuredTitle">Day</span>

        <div className="featuredMoneyContainer">

          <span className="featuredMoneyDay">

            {day.getDate()}-{day.getMonth()}-{day.getFullYear()} ({days[d]})

          </span>

        </div>

        <span className="featuredSub">{monthNames[day.getUTCMonth() - 1]}</span>

      </div>

      <div className="featuredItem">

        <span className="featuredTitle">Time</span>

        <div className="featuredMoneyContainer">

          <span className="featuredMoneyclock">

       
            <Clock  format={'h:mm:ss A'} ticking={true} timezone={'IN/Pacific'} />
            

          </span>

        </div>

      </div>

      <div className="featuredItem">

        <span className="featuredTitle">Weather</span>

        <div className="featuredMoneyContainer">

          <span className="featuredMoney">

            <p className="pwe">Feels like: {feels_like} 'C</p>

            <p className="pwe">Weather Parameter: {main}</p>

            <p className="pwe">Description : {description}</p>

            <p className="pwe">Country : {country}</p>

          </span>

          <span className="featuredMoneyRate">

            {mainTemp}'C

          </span>

        </div>

        <span className="featuredSub">Current status</span>

      </div>

    </div>

  )

}