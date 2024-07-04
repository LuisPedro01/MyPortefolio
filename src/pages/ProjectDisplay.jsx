import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { MasterProjectList } from "../helpers/MasterProjects";
import { BachelorProjectList } from "../helpers/BachelorProjects";
import Slider from "react-slick";
import { GitHub } from '@mui/icons-material';
import "../css/ProjectDisplay.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const projectMap = ProjectList.reduce((map, project) => {
  map[project._key] = project;
  return map;
}, {});

const projectMasterMap = MasterProjectList.reduce((map, project) => {
  map[project._key] = project;
  return map;
}, {});

const projectBachelorMap = BachelorProjectList.reduce((map, project) => {
  map[project._key] = project;
  return map;
}, {});

function ProjectDisplay() {
  const { key } = useParams();
  const project = projectMap[key] || projectMasterMap[key] || projectBachelorMap[key];

  if (!project) {
    return <div>Project not found</div>;
  }

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <div className="slider-container">
        {project.images ? (
          <Slider {...settings}>
            {project.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Project Image ${index + 1}`} />
              </div>
            ))}
          </Slider>
        ) : (
          <>
          {console.log(project.image)}
          <img src={project.image} alt="Project" style={(project.image === '/static/media/image4.352413ff02fadfcb235c.png' || project.image === '/static/media/image7.9f1c05d7c2eda0e5008c.png') ? { height: '650px', width: '400px' } : {}} />
          </>
        )}
      </div>
      <div className="project-description">
        <span><b>Skills:</b> {project.skills}</span>
        <span><b>Description:</b> {project.description}</span>
        {project.link ? 
          <span><a href={project.link} target='_blank' rel="noopener noreferrer"><b>Link to website</b></a></span>
          : null
        }
      </div>
      <a href={project.github} target='_blank' rel="noopener noreferrer"><GitHub /></a>
    </div>
  );
}

export default ProjectDisplay;
