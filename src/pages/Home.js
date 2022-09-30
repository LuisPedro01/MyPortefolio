import React from 'react'
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GithHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import "../assets/Home.css";



function Home() {
  return (
    <div className='home'>
      <div className='about'>        
        <h1>Luís Rodrigues</h1>
        <div className='prompt'>
          <p>Student & Developer</p>
        
          <a href='https://www.linkedin.com/in/lu%C3%ADs-rodrigues-592413235' target="_blank"><LinkedinIcon/></a>
          <a href='https://github.com/LuisPedro01' target="_blank"><GithHubIcon/></a>
          <a href='https://gmail.com' target="_blank"><MailIcon/></a> 
      </div>
    </div>


      <div className='skills'>
        <h1> Skills</h1>

        <ol className='list'>
            <li className='item'>
              <h2> Front-End </h2>
              <span> HTML, CSS, React Native, BootStrap </span>
            </li>
            <li className='item'>
              <h2> Languages </h2>
              <span> JavaScript, C#, C, C++, Python </span>
            </li>
        </ol>
      </div>
    </div>
  )
}

export default Home