import React from 'react'
import { render } from 'react-dom';
import './MyHome.css';
import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';
import srm from './logo.png'
export default function MyHome() {
  return (
    <div>
       <MyNavbar/>
      <div className="Home">
        <img src={srm} alt="SRM Technologies" />
      </div>
      <MyFooter />
    </div >
  
  );
}
render(<MyHome />, document.getElementById('root'));