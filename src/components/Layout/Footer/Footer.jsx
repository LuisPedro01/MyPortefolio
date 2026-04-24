import React from 'react'
import { LinkedIn } from '@mui/icons-material';
// import LinkedinIcon from "@material-ui/icons/LinkedIn";
import { GitHub } from '@mui/icons-material';
// import GithHubIcon from "@material-ui/icons/GitHub";
import { Mail } from '@mui/icons-material';
// import MailIcon from "@material-ui/icons/Mail";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer'>   
        <div className='externallinks'>
            <div>
              <a href='https://www.linkedin.com/in/lu%C3%ADs-rodrigues-592413235' target="_blank" rel="noopener noreferrer"><LinkedIn/></a>
              <a href='https://github.com/LuisPedro01' target="_blank" rel="noopener noreferrer"><GitHub/></a>
              <a href='mailto:luisprodrigues01@gmail.com' target="_blank" rel="noopener noreferrer"><Mail/></a>             
            </div>
            <p>&copy; Luís Rodrigues</p>
        </div>
    </div>
  )
}

export default Footer