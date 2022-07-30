import React from 'react'
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GithHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import "../assets/Footer.css";

function Footer() {
  return (
    <div className='footer'>   
        <div className='externallinks'>
            <div>
              <a href='https://www.linkedin.com/in/lu%C3%ADs-rodrigues-592413235' target="_blank"><LinkedinIcon/></a>
              <a href='https://github.com/LuisPedro01' target="_blank"><GithHubIcon/></a>
              <a href='https://gmail.com' target="_blank"><MailIcon/></a>   
                           
            </div>
            <p>&copy; Luís Rodrigues</p>
        </div>
    </div>
  )
}

export default Footer