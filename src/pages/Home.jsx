import React, { useEffect, useRef } from 'react';
import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import { Mail } from '@mui/icons-material';
import "../css/Home.css";
import BasicCard from '../components/BasicCard';
import SmallCard from '../components/SmallCard';
import ImageReact from '../assets/react.png';
import ImageNode from '../assets/node.png';
import ImageTypescript from '../assets/typescript.png';
import ImageMySQL from '../assets/mysql.png';
import ImagePostman from '../assets/postman.png';
import ImageFirebase from '../assets/firebase.png';
import ImageGit from '../assets/git.png';
import ImageJira from '../assets/jira.png';
import ImageHTML from '../assets/html.png';
import ImageCSS from '../assets/css.png';
import ImageStyled from '../assets/styled.png';
import ImageVue from '../assets/vue.png';
import ImageReactNative from '../assets/native.png';
import ImageReactC from '../assets/c-sharp.webp';
import ImagePython from '../assets/python.png';

function Home() {
  const refs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    refs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className='home'>
      <div className='about'>
        <h1 ref={el => refs.current[0] = el} className='fade-in'>Luís Rodrigues</h1>
        <div className='prompt'>
          <p ref={el => refs.current[1] = el} className='fade-in'>Student & Developer</p>
          <a href='https://www.linkedin.com/in/lu%C3%ADs-rodrigues-592413235' target="_blank"><LinkedIn /></a>
          <a href='https://github.com/LuisPedro01' target="_blank"><GitHub /></a>
          <a href='mailto:luisprodrigues01@gmail.com' target="_blank"><Mail /></a>
        </div>
      </div>

      <div className='skills'>
        <h1 ref={el => refs.current[2] = el} className='fade-in'>Skills</h1>
        <div className='list'>
          <div className='item'>
            <h2 ref={el => refs.current[3] = el} className='fade-in'> Front-End </h2>
            <div ref={el => refs.current[4] = el} className='fade-in' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '16px' }}>
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
            <h2 ref={el => refs.current[5] = el} className='fade-in'> Back-End </h2>
            <div ref={el => refs.current[6] = el} className='fade-in' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '16px' }}>
              <BasicCard
                title='Professional Experience'
                subtitle='Back-End'
                textSecondary='Node.js, Typescript, MongoDB'
              />
              <BasicCard
                title='Acamical Experience'
                subtitle='Back-End'
                textSecondary='SQL, Node.js, '
              />
            </div>
          </div>
          <div className='languages'>
            <h2 ref={el => refs.current[7] = el} className='fade-in'> Tecnologies and Tools </h2>
            <div ref={el => refs.current[8] = el} className='fade-in' style={{ display: 'grid', gap: '32px', gridTemplateColumns: '1fr 1fr 1fr', placeItems: 'center' }}>
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

export default Home;
