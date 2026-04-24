import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedIn, GitHub, Mail, ArrowOutward, South, AutoAwesome, Bolt, Verified } from '@mui/icons-material';
import "@css/Home.css";
import BasicCard from '@components/UI/Cards/BasicCard';
import SmallCard from '@components/UI/Cards/SmallCard';
import { projects } from '@data/projects';
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

const technologies = [
  { url: ImageReact, framework: 'React' },
  { url: ImageNode, framework: 'Node.js' },
  { url: ImageTypescript, framework: 'TypeScript' },
  { url: ImageMySQL, framework: 'MySQL' },
  { url: ImagePostman, framework: 'Postman' },
  { url: ImageFirebase, framework: 'Firebase' },
  { url: ImageGit, framework: 'Git' },
  { url: ImageJira, framework: 'Jira' },
  { url: ImageHTML, framework: 'HTML' },
  { url: ImageCSS, framework: 'CSS' },
  { url: ImageStyled, framework: 'Styled Components' },
  { url: ImageVue, framework: 'Vue.js' },
  { url: ImageReactNative, framework: 'React Native' },
  { url: ImageReactC, framework: 'C#' },
  { url: ImagePython, framework: 'Python' },
];

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

function Home() {
  return (
    <div className='home'>
      <section className='home-hero page-shell'>
        <AnimatedSection className="hero-grid">
          <div className='hero-copy glass-panel'>
            <span className='eyebrow'>Minimal, polished and product-minded</span>
            <h1>Building digital experiences that feel clear, fast and intentional.</h1>
            <p>
              I&apos;m Luís Rodrigues, a software developer from Portugal focused on modern interfaces,
              practical product thinking and reliable implementation from concept to delivery.
            </p>

            <div className='hero-actions'>
              <Link to="/projects" className='primary-btn'>
                View selected work
                <ArrowOutward />
              </Link>
              <a href="mailto:luisprodrigues01@gmail.com" className='secondary-btn'>
                Contact me
              </a>
            </div>

            <div className='hero-meta'>
              <span className='pill'><Verified /> Available for freelance and product roles</span>
              <span className='pill'><Bolt /> React, Node.js, mobile and API work</span>
            </div>
          </div>

          <div className='hero-aside'>
            <div className='hero-card glass-panel'>
              <div>
                <span>Snapshot</span>
                <h3>Developer with academic and professional range.</h3>
              </div>
              <ul>
                <li><strong>2+</strong><span>years in software roles</span></li>
                <li><strong>12+</strong><span>projects shipped and documented</span></li>
                <li><strong>3</strong><span>areas: web, data viz and mobile</span></li>
              </ul>
            </div>

            <div className='hero-social glass-panel'>
              <a href='https://www.linkedin.com/in/lu%C3%ADs-rodrigues-592413235' target="_blank" rel="noreferrer"><LinkedIn /><span>LinkedIn</span></a>
              <a href='https://github.com/LuisPedro01' target="_blank" rel="noreferrer"><GitHub /><span>GitHub</span></a>
              <a href='mailto:luisprodrigues01@gmail.com' target="_blank" rel="noreferrer"><Mail /><span>Email</span></a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className='home-marquee page-shell'>
        <AnimatedSection className="marquee-panel glass-panel">
          <div>
            <span>What I focus on</span>
            <p>Modern frontend systems, backend integrations, dashboards, portfolio-grade interfaces and clean UX.</p>
          </div>
          <South />
          <Link to="/experience">See my path</Link>
        </AnimatedSection>
      </section>

      <section className='home-strengths page-shell'>
        <div className='section-heading'>
          <span>Capabilities</span>
          <h2>Design sensitivity with developer execution.</h2>
          <p>
            The goal is not just to make pages look newer. It&apos;s to give each screen hierarchy,
            rhythm, clarity and a better mobile experience.
          </p>
        </div>

        <AnimatedSection className='strength-grid'>
          <BasicCard
            title='Product Thinking'
            subtitle='Readable layouts that guide attention'
            textSecondary='Landing pages, responsive systems and user-centered structure'
            text='I like interfaces that communicate quickly and stay elegant under real content.'
          />
          <BasicCard
            title='Engineering'
            subtitle='Implementation with clean, reusable components'
            textSecondary='React, routing, APIs, component architecture and frontend polish'
            text='The visual layer is only good if it stays maintainable and consistent.'
          />
          <BasicCard
            title='Momentum'
            subtitle='Fast iteration across idea, prototype and delivery'
            textSecondary='Academic projects, production experience and continuous learning'
            text='I enjoy shipping improvements that immediately make a product feel more mature.'
          />
        </AnimatedSection>
      </section>

      <section className='home-featured page-shell'>
        <div className='section-heading'>
          <span>Featured Work</span>
          <h2>Projects that best represent my direction.</h2>
          <p>A quick selection of projects spanning websites, tools and interactive product ideas.</p>
        </div>

        <AnimatedSection className='featured-grid'>
          {featuredProjects.map((project) => (
            <Link key={project._key} to={`/project/${project._key}`} className='featured-project glass-panel'>
              <div className='featured-project-image' style={{ backgroundImage: `url(${project.image})` }} />
              <div className='featured-project-copy'>
                <span>{project.categoryLabel}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <small>{project.skills}</small>
              </div>
            </Link>
          ))}
        </AnimatedSection>
      </section>

      <section className='skills page-shell'>
        <div className='section-heading'>
          <span>Stack</span>
          <h2>Tools I use to move from idea to launch.</h2>
          <p>
            A blend of frontend frameworks, backend services, mobile tooling and collaboration platforms.
          </p>
        </div>

        <AnimatedSection className='skills-overview'>
          <div className='skill-column glass-panel'>
            <h3>Front-End</h3>
            <div className='cards-grid'>
              <BasicCard
                title='Professional Experience'
                subtitle='Web interfaces'
                textSecondary='React, CSS systems, HTML and scalable UI work'
              />
              <BasicCard
                title='Academic Experience'
                subtitle='Cross-platform exploration'
                textSecondary='React Native, Vue.js, React and interface experimentation'
              />
            </div>
          </div>

          <div className='skill-column glass-panel'>
            <h3>Back-End</h3>
            <div className='cards-grid'>
              <BasicCard
                title='Professional Experience'
                subtitle='APIs and data flows'
                textSecondary='Node.js, TypeScript and backend integration'
              />
              <BasicCard
                title='Academic Experience'
                subtitle='Data and application services'
                textSecondary='SQL, Node.js, Python and service architecture'
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className='technologies-grid'>
          {technologies.map((tech) => (
            <SmallCard key={tech.framework} url={tech.url} framework={tech.framework} />
          ))}
        </AnimatedSection>
      </section>

      <section className='home-cta page-shell'>
        <AnimatedSection className='cta-panel'>
          <div>
            <span><AutoAwesome /> Ready for the next step</span>
            <h2>If you want a cleaner, stronger digital presence, let&apos;s build it.</h2>
          </div>
          <div className='cta-links'>
            <a href="mailto:luisprodrigues01@gmail.com">Start a conversation</a>
            <Link to="/aboutme">More about me</Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

export default Home;
