import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className="nav container">
        <div className="nav-brand">
          <NavLink to="/">Jack B. Mavor</NavLink>
        </div>
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar; 