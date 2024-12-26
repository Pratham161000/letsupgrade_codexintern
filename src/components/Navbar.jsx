import React from 'react';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-left">
            <a href="/" className="navbar-logo">
              <img src="https://letsupgrade.in/_next/image?url=%2Flogo-black.png&w=1920&q=75?height=40&width=40" alt="LU Logo" className="logo" />
              LU
            </a>
            <nav className="navbar-nav">
              <a href="/about" className="nav-link">About LetsUpgrade</a>
              <a href="/programs" className="nav-link">Explore Programs</a>
            </nav>
          </div>
          <div className="navbar-right">
            <button className="btn btn-secondary">Refer & Earn</button>
            <button className="btn btn-primary">Log In</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

