import React from 'react'
import ProjectItem from '../components/ProjectItem'
import {ProjectList} from "../helpers/ProjectList";
import { MasterProjectList } from '../helpers/MasterProjects';

import "../css/Projects.css"
import { BachelorProjectList } from '../helpers/BachelorProjects';

function Projects() {
  return (
    <div className='projects'>
      <h1>Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project) => {
          return <ProjectItem id={project._key} name={project.name} image={project.image} />
          })}
      </div>   
      <h1>Projects During Master's Degree</h1>
      <div className='projectList'>
        {MasterProjectList.map((project) => {
          return <ProjectItem id={project._key} name={project.name} image={project.image} />
          })}
      </div>
      <h1>Projects During Bachelor's Degree</h1>
      <div className='projectList'>
        {BachelorProjectList.map((project) => {
          return <ProjectItem id={project._key} name={project.name} image={project.image} />
          })}
      </div>
    </div>
  )
}

export default Projects