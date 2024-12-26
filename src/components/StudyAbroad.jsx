import React from 'react';

function StudyAbroad() {
  const countries = [
    { name: 'USA', flag: '🇺🇸' },
    { name: 'UK', flag: '🇬🇧' },
    { name: 'NEW ZEALAND', flag: '🇳🇿' },
    { name: 'JAPAN', flag: '🇯🇵' },
    { name: 'AUSTRALIA', flag: '🇦🇺' }
  ];

  return (
    <section className="study-abroad">
      <div className="container">
        <h2 className="section-subtitle">LOOKING TO PURSUE YOUR MASTERS DEGREE ABROAD?</h2>
        <h3 className="section-title">Study Abroad While Saving Significantly</h3>
        <p className="section-description">
          Join LetsUpgrade's MS Abroad Program, offering chance to earn high salary with select international universities in India and also save upto 20 lacs during significant savings
        </p>

        <div className="country-cards">
          {countries.map((country) => (
            <div key={country.name} className="country-card">
              <img 
                src="/placeholder.svg?height=200&width=200" 
                alt={`Study in ${country.name}`} 
                className="country-image"
              />
              <div className="country-overlay">
                <span className="country-flag">{country.flag}</span>
                <span className="country-name">{country.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="features-grid">
          <div className="feature-card visa-card">
            <h3>2 Years Post Work Visa</h3>
            <img src="/placeholder.svg?height=400&width=300" alt="London Bridge at sunset" />
          </div>
          
          <div className="feature-card certifications-card">
            <h3>35+ Value Added Certifications</h3>
            <div className="certification-grid">
              {Array(12).fill(0).map((_, index) => (
                <div key={index} className="certification-icon">
                  <img src="/placeholder.svg?height=40&width=40" alt={`Certification ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="feature-card interview-card">
            <h3>FREE</h3>
            <h4>VISA INTERVIEW</h4>
            <p>PREPARATION</p>
          </div>
          
          <div className="feature-card savings-card">
            <h3>UPTO</h3>
            <h4>₹20 LAKHS</h4>
            <p>SAVINGS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudyAbroad;

