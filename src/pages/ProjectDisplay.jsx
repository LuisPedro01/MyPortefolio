import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "@data/projects";
import Slider from "react-slick";
import { GitHub } from '@mui/icons-material';
import "@css/ProjectDisplay.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ProjectDisplay() {
  const { key } = useParams();
  const project = projects.find(p => p._key === key);

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

  // Lógica de estilo específico para certas imagens (mantendo a original do projeto)
  const isMobileApp = project.image && (project.image.includes('image4') || project.image.includes('image7'));
  const imageStyle = isMobileApp ? { height: '650px', width: '400px' } : {};

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <div className="slider-container">
        {project.images ? (
          <Slider {...settings}>
            {project.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Screenshot ${index + 1}`} />
              </div>
            ))}
          </Slider>
        ) : (
          <img src={project.image} alt={project.name} style={imageStyle} />
        )}
      </div>
      <div className="project-description">
        <p><b>Skills:</b> {project.skills}</p>
        <p><b>Description:</b> {project.description}</p>
        {project.link && (
          <p>
            <a href={project.link} target='_blank' rel="noopener noreferrer">
              <b>Link to website</b>
            </a>
          </p>
        )}
      </div>
      <a href={project.github} target='_blank' rel="noopener noreferrer">
        <GitHub />
      </a>
    </div>
  );
}

export default ProjectDisplay;
