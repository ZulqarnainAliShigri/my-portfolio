import React from 'react';
import '../../src/styles/App.css'

const Navbar = ({ theme, toggleTheme }) => {
  const navItems = ['Home', 'About', 'Skills', 'Services', 'Projects', 'Experience', 'Certifications', 'Contact'];

  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container container-lg">
        <a className="brand navbar-brand">Zulqarnain_Ali</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-center">
            {navItems.map(item => (
              <li key={item} className="nav-item">
                <a className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
            <li className="nav-item ps-3">
              <button onClick={toggleTheme} className="btn btn-sm btn-ghost">
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;