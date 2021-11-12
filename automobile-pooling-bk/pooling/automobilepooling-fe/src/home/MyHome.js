import React from 'react'
import { render } from 'react-dom';
import Typical from 'react-typical'
import './MyHome.css';
import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';
import srm from '../assets/logo.png'
export default function MyHome() {
  return (
    <div align="justify">
       <MyNavbar/>
     
      <div className="Home">
        <img id="car-img" src={srm} alt="SRM Technologies" width="75%" />
      
      <p>
          <Typical
            loop={Infinity}
            wrapper='b'
            steps={[
              'Conceive',
              1000,
              'Believe',
              1000,
              'Achieve',
              1000
            ]} />
        </p>
    
      <MyFooter />
    </div >
    </div>
  
  );
}
render(<MyHome />, document.getElementById('root'));