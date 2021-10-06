import React from 'react'
import './Ride.css'
export default function Ride() {
    return (
        <div>
      
  <body><div class="area"></div><nav class="main-menu" style={{"background-color":"#e3f2fd"}}>
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
                       <i class="fa fa-folder-open fa-2x"></i>
                        <span class="nav-text">
                           Ride Details
                        </span>
                    </a>
                   
                </li>
                
              
                <li>
                   <a href="/ridehistory">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                            Ride History
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