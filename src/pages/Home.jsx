import React from 'react'
import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import { Mail } from '@mui/icons-material';
import "../assets/Home.css";
import BasicCard from '../components/BasicCard';
import SmallCard from '../components/SmallCard';
import ImageReact from '../assets/react.png'
import ImageNode from '../assets/node.png'
import ImageTypescript from '../assets/typescript.png'
import ImageMySQL from '../assets/mysql.png'
import ImagePostman from '../assets/postman.png'
import ImageFirebase from '../assets/firebase.png'
import ImageGit from '../assets/git.png'
import ImageJira from '../assets/jira.png'
import ImageHTML from '../assets/html.png'
import ImageCSS from '../assets/css.png'
import ImageStyled from '../assets/styled.png'
import ImageVue from '../assets/vue.png'
import ImageReactNative from '../assets/native.png'
import ImageReactC from '../assets/c-sharp.webp'
import ImagePython from '../assets/python.png'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h1>Luís Rodrigues</h1>
        <div className='prompt'>
          <p>Student & Developer</p>
          <a href='https://www.linkedin.com/in/lu%C3%ADs-rodrigues-592413235' target="_blank"><LinkedIn /></a>
          <a href='https://github.com/LuisPedro01' target="_blank"><GitHub /></a>
          <a href='mailto:luisprodrigues01@gmail.com' target="_blank"><Mail /></a>
        </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        <div className='list'>
          <div className='item'>
            <h2> Front-End </h2>
            {/* <span> HTML, CSS, React Native, React, Typescript,  </span> */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '16px' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '16px' }}>
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
          </div>
          <div className='languages'>
            <h2> Tecnologies and Tools </h2>
            <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: '1fr 1fr 1fr', placeItems: 'center' }}>
              <SmallCard
                url={ImageReact}
                framework='React'
              />
              <SmallCard
                url={ImageNode}
                framework='Node.js'
              />
              <SmallCard
                url={ImageTypescript}
                framework='Typescript'
              />
              <SmallCard
                url={ImageMySQL}
                framework='MySQL'
              />
              <SmallCard
                url={ImagePostman}
                framework='Postman'
              />
              <SmallCard
                url={ImageFirebase}
                framework='Firebase'
              />
              <SmallCard
                url={ImageGit}
                framework='Git'
              />
              <SmallCard
                url={ImageJira}
                framework='Jira'
              />
              <SmallCard
                url={ImageHTML}
                framework='HTML'
              />
              <SmallCard
                url={ImageCSS}
                framework='CSS'
              />
              <SmallCard
                url={ImageStyled}
                framework='Styled-Components'
              />
              <SmallCard
                url={ImageVue}
                framework='Vue.js'
              />
              <SmallCard
                url={ImageReactNative}
                framework='React Native'
              />
              <SmallCard
                url={ImageReactC}
                framework='C#'
              />
              <SmallCard
                url={ImagePython}
                framework='Python'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home