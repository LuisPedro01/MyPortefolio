import React from 'react'
import ProjectItem from '../components/ProjectItem'
import {ProjectList} from "../helpers/ProjectList";
import { MasterProjectList } from '../helpers/MasterProjects';

import "../assets/Projects.css"

function Projects() {
  return (
    <div className='projects'>
      <h1>Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} />
          })}
      </div>   
      <h1>Projects During Master's Degree</h1>
      <div className='projectList'>
        {MasterProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} />
          })}
      </div>
    </div>
  )
}

export default Projects