import React from 'react';

function CertificatePrograms() {
  const certificates = [
    {
      title: "Frontend ART Fundamentals",
      price: "₹149.00",
      duration: "4 Weeks",
      level: "Basic",
      image: "https://lucdn.letsupgrade.net/assets/Postman_new_thumb_a87679625f.webp?height=120&width=200"
    },
    {
      title: "Figma Developer",
      price: "₹149.00",
      duration: "4 Weeks",
      level: "Basic",
      image: "https://lucdn.letsupgrade.net/assets/Figma_511ed9fd89.webp?height=120&width=200"
    },
    {
      title: "HTML CSS Developer",
      price: "₹149.00",
      duration: "4 Weeks",
      level: "Basic",
      image: "https://lucdn.letsupgrade.net/assets/HTML_CSS_193c7ca359.webp?height=120&width=200"
    },
    {
      title: "Git & GitHub with Docker",
      price: "₹149.00",
      duration: "4 Weeks",
      level: "Basic",
      image: "https://lucdn.letsupgrade.net/assets/pieces_1_673300b5ab5de_950f6e1bff.webp?height=120&width=200"
    },
    {
      title: "C++ Developer",
      price: "₹149.00",
      duration: "4 Weeks",
      level: "Basic",
      image: "https://lucdn.letsupgrade.net/assets/c_67596cfbd35d6_6d5b865562.webp?height=120&width=200"
    }
  ];

  return (
    <section className="certificate-programs">
      <div className="container">
        <h2 className="section-subtitle">CERTIFICATE PROGRAMS</h2>
        <h3 className="section-title">All From Basic To Advance</h3>
        <p className="section-description">
          Mini certificate From LetsUpgrade, OOO MAC - Google Developer Online KickStart, HBSO, and IT M Group of Institutions
        </p>
        
        <div className="certificate-cards">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <img src={cert.image} alt={cert.title} className="certificate-card-image" />
              <div className="certificate-card-content">
                <h4>{cert.title}</h4>
                <p className="certificate-price">{cert.price}</p>
                <div className="certificate-details">
                  <span>{cert.duration}</span>
                  <span>{cert.level}</span>
                </div>
                <button className="btn btn-primary">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
        
        <a href="#" className="view-all-link">
          View all certificate programs →
        </a>
      </div>
    </section>
  );
}

export default CertificatePrograms;

