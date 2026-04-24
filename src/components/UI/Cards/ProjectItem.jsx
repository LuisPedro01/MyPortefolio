import React from 'react';
import { Launch } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id, skills, category, description }) {
  const navigate = useNavigate();

  return (
    <article
      className='projectItem'
      onClick={() => navigate("/project/" + id)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          navigate("/project/" + id);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage">
        <span>{category}</span>
      </div>

      <div className="projectItem-content">
        <div className="projectItem-top">
          <h3>{name}</h3>
          <Launch />
        </div>
        <p>{description}</p>
        <small>{skills}</small>
      </div>
    </article>
  );
}

export default ProjectItem;
