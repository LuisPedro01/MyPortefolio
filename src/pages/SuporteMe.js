import React from 'react'
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';
import "../assets/AboutMe.css";

function SuportMe() {
  return (
    <div className='aboutme'>
        <div className='about1'>
            <h1>If you want to collaborate with me and give some support donate some!</h1> 
            <div>
              <a href='https://ko-fi.com/luisrodrigues66052' target="_blank"><MonetizationOnTwoToneIcon/></a>
            </div>              
        </div>        
    </div>
  )
}


export default SuportMe