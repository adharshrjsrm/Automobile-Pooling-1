import React, { useState } from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import './Ride.css'
//import * as FaIcons from 'react-icons/fa';
export default function SideBar (){
  
    return(
        <div>
           <body><nav class="main-menu" >
            <ul>
           
                <li>
                    <a href="/dashboard">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Dashboard
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a href="/profile">
                        <i class="fa fa-laptop fa-2x"></i>
                        <span class="nav-text">
                            My Profile
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="/vehicle">
                       <i class="fa fa-list fa-2x"></i>
                        <span class="nav-text">
                            Vehicle Details
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="/ride">
                    <i class="fa fa-map-marker fa-2xr"></i>
                        <span class="nav-text">
                           Ride Details
                        </span>
                    </a>
                   
                </li>
                
             
            </ul>

            <ul class="logout">
                <li>
                   <a href="/logout">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
  </body>       
      </div>
      
    )
}