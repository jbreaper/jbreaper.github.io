import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const { title, description, tech, startDate, progress, githubLink } = project;
  
  return (
    <div className="project-card">
      <div className="project-header">
        <h2>{title}</h2>
        {startDate && <span className="project-date">{startDate}</span>}
      </div>
      
      <p className="project-description">{description}</p>
      
      {progress !== undefined && (
        <div className="progress-container">
          <div className="progress-label">completion: {progress}%</div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      
      <div className="project-footer">
        <p className="project-tech">{tech}</p>
        <div className="card-actions">
          <span className="view-details">more info</span>
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-link"
              onClick={(e) => e.stopPropagation()}
            >
              git clone
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard; 