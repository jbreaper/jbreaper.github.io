function Projects() {
  const projects = [
    {
      id: 1,
      title: "TTRPG Character Sheet TUI",
      description: "A terminal user interface for managing TTRPG characters",
      tech: "Rust"
    },
    {
      id: 2,
      title: "Pi OS",
      description: "Operating system for Raspberry Pi",
      tech: "Rust"
    }
  ];

  return (
    <main className="container">
      <h1>Programming Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Built with {project.tech}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects; 