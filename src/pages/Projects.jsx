import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import projectsData from '../data/projects';

function Projects() {
  return (
    <main className="container">
      <h1>Programming Projects</h1>
      <div className="projects-grid">
        {projectsData.map(project => (
          <Link 
            to={`/projects/${project.id}`} 
            key={project.id}
            className="project-card-link"
          >
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Projects; 