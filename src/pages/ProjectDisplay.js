import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
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
        <b>Link to website: </b> {project.link}
      </p>
      <a href={project.github} target='_blank'><GitHubIcon /></a>
      
    </div>
  );
}

export default ProjectDisplay;