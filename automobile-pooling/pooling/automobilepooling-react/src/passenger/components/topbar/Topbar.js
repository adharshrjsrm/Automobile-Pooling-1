import { Button } from '@material-ui/core'
import React from 'react'
import './Topbar.css'
// import { NotificationsNone, Language, Settings } from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SRM Technologies Auto Pooling </span>
        </div>
        <div className="topRight">
          <img src="https://images.unsplash.com/photo-1606220838315-056192d5e927?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          <Button className="userUpdateButton" type="Button">Logout</Button>
        </div>
      </div>
    </div>
    )
}
