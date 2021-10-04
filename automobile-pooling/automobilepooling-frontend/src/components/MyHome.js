import React from 'react'
import { render } from 'react-dom';
import Typical from 'react-typical'
import './MyHome.css';
import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';
import srm from '../logo.png'
export default function MyHome() {
  return (
    <div>
       <MyNavbar/>
     
      <div className="Home">
        <img src={srm} alt="SRM Technologies" />
      </div>
      <div className="typical">
        {/* <h1>SRMTech</h1> */}
        <p>
          <Typical
            loop={Infinity}
            wrapper='b'
            steps={[
              'Welcome to Automobile Pooling App',
              1000,
            ]} />
        </p>
      </div>
      <MyFooter />
    </div >
  
  );
}
render(<MyHome />, document.getElementById('root'));