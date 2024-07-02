import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { GitHub } from '@mui/icons-material';
// import GitHubIcon from "@material-ui/icons/GitHub";
import "../assets/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        <b>Description: </b> {project.description}
      </p>
      <p>
        <a href={project.link} target='_blank'><b>Link to website </b></a> 
      </p>
      <a href={project.github} target='_blank'><GitHub /></a>
      
    </div>
  );
}

export default ProjectDisplay;