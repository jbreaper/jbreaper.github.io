import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProjectDetail.css';
import projectsData from '../data/projects';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [commandInput, setCommandInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [interactiveDemo, setInteractiveDemo] = useState(false);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    
    setTimeout(() => {
      const foundProject = projectsData.find(p => p.id.toString() === id);
      
      if (foundProject) {
        setProject(foundProject);
        // Initialize terminal output
        setTerminalOutput([
          { type: 'system', content: `Loading project data for ${foundProject.title}...` },
          { type: 'success', content: 'Project data loaded successfully!' },
          { type: 'info', content: 'Type "help" for available commands.' }
        ]);
      } else {
        setTerminalOutput([
          { type: 'error', content: 'Error: Project not found.' },
          { type: 'system', content: 'Redirecting to projects list...' }
        ]);
        
        // Redirect after showing error
        setTimeout(() => navigate('/projects'), 2000);
      }
      
      setLoading(false);
    }, 800);
  }, [id, navigate]);

  const handleCommand = (e) => {
    e.preventDefault();
    
    const command = commandInput.trim().toLowerCase();
    
    // Process command
    let response;
    
    switch (command) {
      case 'help':
        response = [
          { type: 'command', content: `> ${command}` },
          { type: 'output', content: 'Available commands:' },
          { type: 'list', content: [
            'info - Show project information',
            'tech - Show technologies used',
            'demo - Launch interactive demo',
            'github - Open GitHub repository',
            'back - Return to projects list',
            'clear - Clear terminal output'
          ]}
        ];
        break;
        
      case 'info':
        response = [
          { type: 'command', content: `> ${command}` },
          { type: 'output', content: 'Project Information:' },
          { type: 'property', content: [
            `Title: ${project.title}`,
            `Description: ${project.description}`,
            `Started: ${project.startDate}`,
            `Progress: ${project.progress}%`
          ]}
        ];
        break;
        
      case 'tech':
        response = [
          { type: 'command', content: `> ${command}` },
          { type: 'output', content: 'Technologies:' },
          { type: 'code', content: project.tech }
        ];
        if (project.techDetails) {
          response.push({ type: 'list', content: project.techDetails });
        }
        break;
        
      case 'github':
        response = [
          { type: 'command', content: `> ${command}` },
          { type: 'system', content: 'Opening GitHub repository...' }
        ];
        window.open(project.githubLink, '_blank', 'noopener,noreferrer');
        break;
        
      case 'back':
        response = [
          { type: 'command', content: `> ${command}` },
          { type: 'system', content: 'Navigating back to projects list...' }
        ];
        setTimeout(() => navigate('/projects'), 500);
        break;
        
      case 'demo':
        if (project.id === 1) {
          response = [
            { type: 'command', content: `> ${command}` },
            { type: 'system', content: 'Launching interactive demo...' }
          ];
          setInteractiveDemo(true);
        } else if (project.id === 2) {
          response = [
            { type: 'command', content: `> ${command}` },
            { type: 'system', content: 'Checking demo availability...' },
            { type: 'error', content: 'Demo for Pi OS is still under development.' },
            { type: 'info', content: 'Check back soon for updates!' }
          ];
        } else if (project.id === 3) {
          response = [
            { type: 'command', content: `> ${command}` },
            { type: 'system', content: 'Checking demo availability...' },
            { type: 'success', content: "You're already viewing the website demo!" },
          ];
        } else {
          response = [
            { type: 'command', content: `> ${command}` },
            { type: 'error', content: 'No demo available for this project.' }
          ];
        }
        break;
        
      case 'clear':
        setTerminalOutput([]);
        response = null;
        break;
        
      case '':
        response = null;
        break;
        
      default:
        response = [
          { type: 'command', content: `> ${command}` },
          { type: 'error', content: `Command not found: ${command}` },
          { type: 'info', content: 'Type "help" for available commands.' }
        ];
    }
    
    if (response) {
      setTerminalOutput(prev => [...prev, ...response]);
    }
    
    setCommandInput('');
    
    // Auto-scroll terminal to bottom
    setTimeout(() => {
      const terminal = document.querySelector('.terminal-output');
      if (terminal) {
        terminal.scrollTop = terminal.scrollHeight;
      }
    }, 50);
  };

  if (loading) {
    return (
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="terminal-title">Loading Project...</div>
          <Link to="/projects" className="terminal-close">×</Link>
        </div>
        <div className="terminal-loading">
          <div className="loading-bar"></div>
          <div className="loading-text">Accessing project data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-title">{project ? project.title : 'Project Not Found'}</div>
        <Link to="/projects" className="terminal-close">×</Link>
      </div>
      
      <div className="terminal-body">
        <div className="terminal-output">
          {terminalOutput.map((line, index) => {
            switch (line.type) {
              case 'system':
                return <div key={index} className="system-message">{line.content}</div>;
              case 'error':
                return <div key={index} className="error-message">{line.content}</div>;
              case 'success':
                return <div key={index} className="success-message">{line.content}</div>;
              case 'info':
                return <div key={index} className="info-message">{line.content}</div>;
              case 'command':
                return <div key={index} className="command-line">{line.content}</div>;
              case 'output':
                return <div key={index} className="output-line">{line.content}</div>;
              case 'code':
                return <pre key={index} className="code-block">{line.content}</pre>;
              case 'list':
                return (
                  <ul key={index} className="terminal-list">
                    {line.content.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                );
              case 'property':
                return (
                  <div key={index} className="property-list">
                    {line.content.map((item, i) => <div key={i}>{item}</div>)}
                  </div>
                );
              default:
                return <div key={index}>{line.content}</div>;
            }
          })}
        </div>
        
        {interactiveDemo && (
          <div className="interactive-demo">
            <div className="demo-header">
              <h2>Interactive Demo</h2>
              <button 
                className="close-demo" 
                onClick={() => {
                  setInteractiveDemo(false);
                  setTerminalOutput(prev => [
                    ...prev, 
                    { type: 'system', content: 'Demo closed.' }
                  ]);
                }}
              >
                close
              </button>
            </div>
            
            <div className="demo-content">
              {project && project.id === 1 && (
                <div className="ttrpg-demo">
                  <div className="character-sheet">
                    <h3>Character Sheet Demo</h3>
                    <div className="character-form">
                      <div className="form-row">
                        <label>Name:</label>
                        <input type="text" defaultValue="Eldritch Wanderer" />
                      </div>
                      <div className="form-row">
                        <label>Class:</label>
                        <input type="text" defaultValue="Technomancer" />
                      </div>
                      <div className="form-row">
                        <label>Level:</label>
                        <input type="number" defaultValue="7" />
                      </div>
                      <div className="form-row">
                        <label>HP:</label>
                        <input type="number" defaultValue="42/50" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {project && project.id === 2 && (
                <div className="pi-os-demo">
                  <div className="demo-message">
                    <p>Interactive demo for Pi OS is under development.</p>
                    <p>Check back soon for a functional demo!</p>
                  </div>
                </div>
              )}
              
              {project && project.id === 3 && (
                <div className="website-demo">
                  <div className="demo-message">
                    <p>Interactive demo not needed for this website.</p>
                    <p>You're already viewing it! 😎</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        <form onSubmit={handleCommand} className="terminal-input-container">
          <span className="input-prompt">{'>'}</span>
          <input
            type="text"
            className="terminal-input"
            value={commandInput}
            onChange={(e) => setCommandInput(e.target.value)}
            autoFocus
            placeholder="Type a command (help, info, tech, demo, github, back)"
          />
        </form>
      </div>
    </div>
  );
}

export default ProjectDetail; 