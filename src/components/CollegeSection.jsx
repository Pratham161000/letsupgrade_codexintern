import React from 'react';

function CollegeSection() {
  const collegeLogos = Array(30).fill("/placeholder.svg?height=80&width=80");

  return (
    <section className="college-section">
      <div className="container">
        <h2 className="section-subtitle">OUR PRESENCE STAND</h2>
        <h3 className="section-title">Students From Top Colleges Upskill With LetsUpgrade</h3>
        <p className="section-description">
          Students want to learn something for degree, but they turn to LetsUpgrade For LIFE
        </p>

        <div className="college-logos">
          <div className="logo-row">
            {collegeLogos.slice(0, 15).map((logo, index) => (
              <img key={index} src={logo} alt={`College Logo ${index + 1}`} className="college-logo" />
            ))}
          </div>
          <div className="logo-row">
            {collegeLogos.slice(15).map((logo, index) => (
              <img key={index} src={logo} alt={`College Logo ${index + 16}`} className="college-logo" />
            ))}
          </div>
        </div>

        <div className="college-cards">
          <div className="discover-card">
            <div className="discover-content">
              <h3>Discover Certifications</h3>
              <p>Elevate your career with LetsUpgrade programs, offering everything from technical certifications to design, management and business.</p>
              <button className="btn btn-primary">Explore Certificate Programs</button>
            </div>
            <div className="discover-image">
              <img src="https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FDiscover_Certificate_bca3a66871.webp&w=1920&q=75?height=300&width=300" alt="Certification Discovery" />
            </div>
          </div>

          <div className="stats-card">
            <p className="stats-subtitle">Join a community of students dedicated to upskilling</p>
            <h3 className="stats-number">1,443,660</h3>
            <p className="stats-text">Approximately 10,000 students enroll in LetsUpgrade programs every day</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollegeSection;

