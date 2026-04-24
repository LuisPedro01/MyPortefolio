import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "@data/projects";
import Slider from "react-slick";
import { GitHub, Launch, ArrowBack } from '@mui/icons-material';
import "@css/ProjectDisplay.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectDisplay() {
  const { key } = useParams();
  const project = projects.find((item) => item._key === key);

  if (!project) {
    return (
      <div className="project page-shell">
        <div className="project-empty glass-panel">
          <h1>Project not found</h1>
          <Link to="/projects">Back to projects</Link>
        </div>
      </div>
    );
  }

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const relatedProjects = projects
    .filter((item) => item.category === project.category && item._key !== project._key)
    .slice(0, 3);

  return (
    <div className="project page-shell">
      <div className="project-topbar">
        <Link to="/projects" className="back-link">
          <ArrowBack />
          Back to projects
        </Link>
      </div>

      <section className="project-hero">
        <div className="project-heading">
          <span>{project.categoryLabel}</span>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>

        <div className="project-actions">
          {project.link ? (
            <a href={project.link} target='_blank' rel="noopener noreferrer" className="project-link primary">
              <Launch />
              Live preview
            </a>
          ) : null}
          {project.github ? (
            <a href={project.github} target='_blank' rel="noopener noreferrer" className="project-link secondary">
              <GitHub />
              Source code
            </a>
          ) : null}
        </div>
      </section>

      <section className="project-grid">
        <div className="slider-container glass-panel">
          {project.images ? (
            <Slider {...settings}>
              {project.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`${project.name} screenshot ${index + 1}`} />
                </div>
              ))}
            </Slider>
          ) : (
            <img src={project.image} alt={project.name} />
          )}
        </div>

        <aside className="project-sidebar">
          <div className="project-description glass-panel">
            <h2>Project overview</h2>
            <div className="project-meta">
              <div>
                <span>Stack</span>
                <p>{project.skills}</p>
              </div>
              <div>
                <span>Type</span>
                <p>{project.categoryLabel}</p>
              </div>
              <div>
                <span>Focus</span>
                <p>{project.focus}</p>
              </div>
            </div>
          </div>

          <div className="project-description glass-panel">
            <h2>Highlights</h2>
            <ul className="project-points">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="related-projects">
          <div className="section-heading">
            <span>More work</span>
            <h2>Related projects</h2>
            <p>Other pieces from the same area of work.</p>
          </div>

          <div className="related-grid">
            {relatedProjects.map((item) => (
              <Link key={item._key} to={`/project/${item._key}`} className="related-card glass-panel">
                <div className="related-card-image" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="related-card-copy">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default ProjectDisplay;
