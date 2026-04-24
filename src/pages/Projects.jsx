import React from 'react';
import ProjectItem from '@components/UI/Cards/ProjectItem';
import { projects } from "@data/projects";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import "@css/Projects.css";

const ProjectSection = ({ title, category }) => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  const filteredProjects = projects.filter(p => p.category === category);

  return (
    <div ref={sectionRef} className={`section-container ${isVisible ? 'visible' : ''}`}>
      <h1 className='fade-in'>{title}</h1>
      <div className='projectList'>
        {filteredProjects.map((project) => (
          <ProjectItem 
            key={project._key} 
            id={project._key} 
            name={project.name} 
            image={project.image} 
          />
        ))}
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div className='projects'>
      <ProjectSection title="Personal Projects" category="general" />
      <ProjectSection title="Projects During Master's Degree" category="master" />
      <ProjectSection title="Projects During Bachelor's Degree" category="bachelor" />
    </div>
  );
}

export default Projects;
