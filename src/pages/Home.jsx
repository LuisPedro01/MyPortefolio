import React from 'react'
import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import { Mail } from '@mui/icons-material';
import "../assets/Home.css";
import BasicCard from '../components/BasicCard';

function Home() {
  return (
    <div className='home'>
      <div className='about'>        
        <h1>Luís Rodrigues</h1>
        <div className='prompt'>
          <p>Student & Developer</p>
          <a href='https://www.linkedin.com/in/lu%C3%ADs-rodrigues-592413235' target="_blank"><LinkedIn/></a>
          <a href='https://github.com/LuisPedro01' target="_blank"><GitHub/></a>
          <a href='mailto:luisprodrigues01@gmail.com' target="_blank"><Mail/></a>  
      </div>
    </div>

      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
            <li className='item'>
              <h2> Front-End </h2>
              {/* <span> HTML, CSS, React Native, React, Typescript,  </span> */}
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '16px'}}>
                <BasicCard
                  title='Professional Experience'
                  subtitle='Front-End'
                  textSecondary='HTML, CSS, React'
                />
                <BasicCard
                  title='Acamical Experience'
                  subtitle='Front-End'
                  textSecondary='HTML, CSS, React Native, React, Vue.js'
                />
              </div>
              <h2> Back-End </h2>
              {/* <span> HTML, CSS, React Native, React, Typescript,  </span> */}
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '16px'}}>
                <BasicCard
                  title='Professional Experience'
                  subtitle='Back-End'
                  textSecondary='Node.js, Typescript, MongoDB'
                />
                <BasicCard
                  title='Acamical Experience'
                  subtitle='Back-End'
                  textSecondary='SQL'
                />
              </div>
            </li>
            <li className='item'>
              <h2> Languages </h2>
              <BasicCard
                  title='Acamical/Professional Experience'
                  subtitle='Frameworks'
                  textSecondary='JavaScript, C#, C, C++, Python, '
                />
            </li>
        </ol>
      </div>
    </div>
  )
}

export default Home