import React from 'react'
import { render } from 'react-dom';
import Typical from 'react-typical'
import './MyHome.css';
import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';
import srm from '../assets/carpool.jpg'
export default function MyHome() {
  return (
    <div align="justify">
       <MyNavbar/>
     
      <div className="Home">
        <img id="car-img" src={srm} alt="SRM Technologies" width="1535" height="650" />
      
    
    
      <MyFooter />
    </div >
    </div>
  
  );
}
