import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">
          Future Proof Your Career With <span className="highlight">LetsUpgrade</span>
        </h1>
        <p className="hero-subtitle">
          Explore Tech, Design, Management, Business, Product and Data with LetsUpgrade. 
          Learn directly from top Industry experts
        </p>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">📻</span>
            <span className="feature-text">LIVE CLASSES</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span className="feature-text">GET CERTIFIED</span>
          </div>
          <div className="feature">
            <span className="feature-icon">₹</span>
            <span className="feature-text">FREE PROGRAMS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

