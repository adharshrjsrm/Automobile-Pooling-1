import React from 'react'
import './MyFooter.css'
export default function MyFooter() {
    return (
        <div className="footer">
    <div className='Copyright'>
      Copyright &copy; {new Date().getFullYear()} {' '}
        <a className='Adharsh' href="https://www.srmtech.com/">
          SRM Technologies.  
        </a>
        <a> All Rights Reserved.</a>
      </div>
    </div>
    );
}