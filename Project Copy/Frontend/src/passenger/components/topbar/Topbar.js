import { Button } from '@material-ui/core'
import React from 'react'
import './Topbar.css'
import { useHistory } from 'react-router';
import axios from 'axios';
import authHeader from '../../../services/authHeader';

export default function Topbar() {
  const history = useHistory();
  const config = {
    headers: authHeader() 
  };
  const handleLogout = () => {
    const user=JSON.parse(localStorage.getItem('user')); 
    const value={
      "userId":user.id
    }
    console.log(value);
    axios.post("http://localhost:9000/api/auth/logout",value,config).then(res=>{
      localStorage.removeItem('user');
      history.push('/home');
  })
  }
      
    return (
        <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SRM Technologies Car Pooling </span>
        </div>
        <div className="topRight">
          <img src="https://images.unsplash.com/photo-1606220838315-056192d5e927?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          <Button className="userUpdateButton" type="Button" onClick={handleLogout}>Logout</Button>
        </div>
      </div>
    </div>
    )
}
