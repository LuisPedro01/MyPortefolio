import React from 'react';
import { LinkedIn, GitHub, Mail } from '@mui/icons-material';
import "@css/Home.css";
import BasicCard from '@components/UI/Cards/BasicCard';
import SmallCard from '@components/UI/Cards/SmallCard';
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";

import ImageReact from '@assets/react.png';
import ImageNode from '@assets/node.png';
import ImageTypescript from '@assets/typescript.png';
import ImageMySQL from '@assets/mysql.png';
import ImagePostman from '@assets/postman.png';
import ImageFirebase from '@assets/firebase.png';
import ImageGit from '@assets/git.png';
import ImageJira from '@assets/jira.png';
import ImageHTML from '@assets/html.png';
import ImageCSS from '@assets/css.png';
import ImageStyled from '@assets/styled.png';
import ImageVue from '@assets/vue.png';
import ImageReactNative from '@assets/native.png';
import ImageReactC from '@assets/c-sharp.webp';
import ImagePython from '@assets/python.png';

const AnimatedSection = ({ children, className = "" }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div ref={ref} className={`${className} fade-in ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

const AnimatedHeader = ({ children, variant = "h1" }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const Tag = variant;
  return (
    <Tag ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
      {children}
    </Tag>
  );
};

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <AnimatedHeader>Luís Rodrigues</AnimatedHeader>
        <div className='prompt'>
          <AnimatedSection className="prompt-text">
            <p>Student & Developer</p>
          </AnimatedSection>
          <div className="social-links">
            <a href='https://www.linkedin.com/in/lu%C3%ADs-rodrigues-592413235' target="_blank" rel="noreferrer"><LinkedIn /></a>
            <a href='https://github.com/LuisPedro01' target="_blank" rel="noreferrer"><GitHub /></a>
            <a href='mailto:luisprodrigues01@gmail.com' target="_blank" rel="noreferrer"><Mail /></a>
          </div>
        </div>
      </div>

      <div className='skills'>
        <AnimatedHeader>Skills</AnimatedHeader>
        <div className='list'>
          <div className='item'>
            <AnimatedHeader variant="h2"> Front-End </AnimatedHeader>
            <AnimatedSection className='cards-grid'>
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
            </AnimatedSection>

            <AnimatedHeader variant="h2"> Back-End </AnimatedHeader>
            <AnimatedSection className='cards-grid'>
              <BasicCard
                title='Professional Experience'
                subtitle='Back-End'
                textSecondary='Node.js, Typescript, MongoDB'
              />
              <BasicCard
                title='Acamical Experience'
                subtitle='Back-End'
                textSecondary='SQL, Node.js'
              />
            </AnimatedSection>
          </div>

          <div className='languages'>
            <AnimatedHeader variant="h2"> Technologies and Tools </AnimatedHeader>
            <AnimatedSection className='technologies-grid'>
              <SmallCard url={ImageReact} framework='React' />
              <SmallCard url={ImageNode} framework='Node.js' />
              <SmallCard url={ImageTypescript} framework='Typescript' />
              <SmallCard url={ImageMySQL} framework='MySQL' />
              <SmallCard url={ImagePostman} framework='Postman' />
              <SmallCard url={ImageFirebase} framework='Firebase' />
              <SmallCard url={ImageGit} framework='Git' />
              <SmallCard url={ImageJira} framework='Jira' />
              <SmallCard url={ImageHTML} framework='HTML' />
              <SmallCard url={ImageCSS} framework='CSS' />
              <SmallCard url={ImageStyled} framework='Styled-Components' />
              <SmallCard url={ImageVue} framework='Vue.js' />
              <SmallCard url={ImageReactNative} framework='React Native' />
              <SmallCard url={ImageReactC} framework='C#' />
              <SmallCard url={ImagePython} framework='Python' />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
