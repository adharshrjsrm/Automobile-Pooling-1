import React from 'react'
import './Home.css'
import FeaturedInfo from '../featuredinfo/FeaturedInfo'


export default function Home() {
    return (
        <div className="home">
      <FeaturedInfo/>
      <div className="homeWidgets">
      </div> 
    </div>
    )
}
