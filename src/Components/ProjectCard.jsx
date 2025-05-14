import React from 'react'

const ProjectCard = ({title, description, image, link}) => {

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noreferrer">View Project</a>
  </div>
  )
}

export default ProjectCard