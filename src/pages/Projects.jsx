import React, { useEffect, useRef } from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from "../helpers/ProjectList";
import { MasterProjectList } from '../helpers/MasterProjects';

import "../css/Projects.css"
import { BachelorProjectList } from '../helpers/BachelorProjects';

function Projects() {

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
    <div className='projects'>
      <h1 ref={el => refs.current[0] = el} className='fade-in'>Personal Projects</h1>
      <div ref={el => refs.current[1] = el} className='projectList'>
        {ProjectList.map((project) => {
          return <ProjectItem id={project._key} name={project.name} image={project.image} />
        })}
      </div>
      <h1 ref={el => refs.current[2] = el} className='fade-in'>Projects During Master's Degree</h1>
      <div ref={el => refs.current[3] = el} className='projectList'>
        {MasterProjectList.map((project) => {
          return <ProjectItem id={project._key} name={project.name} image={project.image} />
        })}
      </div>
      <h1 ref={el => refs.current[4] = el} className='fade-in'>Projects During Bachelor's Degree</h1>
      <div ref={el => refs.current[5] = el}className='projectList'>
        {BachelorProjectList.map((project) => {
          return <ProjectItem id={project._key} name={project.name} image={project.image} />
        })}
      </div>
    </div>
  )
}

export default Projects