import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'
import axios from 'axios'

export default function Dashboard() {

    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e);
    }

    const [axdata, setaxdata] = useState([])

    useEffect(() => {
        axios.get("https://localhost:8000/user/1")
            .then((res) => {
                console.log(res)
                setaxdata(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <div>
                <Calendar
                    value={dateState}
                    onChange={changeDate}
                />
                <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
            </div>
            <hr/>
            <div>
                <div className="col-sm-12 col-md-6">
                    <div className="justify-content-md-center">
                        <div className="card cardBorderCorners lightCard">
                            <div className="card-body">
                                <img className="proPic proLight card-img rounded-circle" src="https://res.cloudinary.com/vivekiscoding/image/upload/v1589372809/lego.jpg" alt="Profile Pic"/>
                                <h5 class ="lightTitle card-title">{axdata.name}</h5>
                                <h6 class ="lightSubTitle card-subtitle">{axdata.department}</h6>
                                <p class ="lightDesc card-text">Hi, this is Vivekanand.I am a front-end developer from India.I love Open Source and want to make web a better place for the future generation.</p>
                                <p class ="lightMail card-text">
                                <span class ="lightMailText rounded">{axdata.email}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-12">
                    <p className="attributeText">Designed and <i className="fas fa-code"></i>ed with <i className="fas fa-heart"></i> by Vivekanand Padala</p>
                </div> */}
            </div>
        </div>
    )
}
