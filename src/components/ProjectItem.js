import React from 'react'
import { useNavigate } from "react-router-dom"

function ProjectItem({image, name, id}) {
  const navigate = useNavigate();
  return (
    <div 
    className='projectItem' 
    onClick={() => {
      navigate("/project/" + id);}}
    >
        <div style={{backgroundImage: `url(${image})`, borderBottom: '1px solid #094088'}} className="bgImage"/>
        <h1> {name} </h1>        
    </div>
  );
}

export default ProjectItem