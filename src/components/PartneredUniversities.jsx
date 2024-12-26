import React from 'react';

function PartneredUniversities() {
  const programs = [
    {
      title: "MS In Big Data Analytics",
      features: [
        "6 to 8 Months India Online + Offline Learning",
        "Job Opportunities in UK",
        "2-Years Work Visa post complete MS Degree"
      ],
      image: "/placeholder.svg?height=300&width=500"
    },
    {
      title: "MS In Computing",
      features: [
        "6 to 8 months India Online + Offline Learning",
        "Job Opportunities in UK",
        "2-Years Work Visa post MS Degree completion"
      ],
      image: "/placeholder.svg?height=300&width=500"
    },
    {
      title: "MS In IT Management",
      features: [
        "6 to 8 months India Online + Offline Learning",
        "Job Opportunities in UK",
        "2-Years Work Visa post MS Degree completion"
      ],
      image: "/placeholder.svg?height=300&width=500"
    }
  ];

  return (
    <section className="partnered-universities">
      <div className="container">
        <h2 className="partner-title">Esteemed Partnered Universities</h2>
        <p className="partner-subtitle">Partner Universities for MS Study Abroad Programs</p>
        
        <div className="university-logos">
          <div className="logo-container">
            <img src="/placeholder.svg?height=80&width=200" alt="Sheffield Hallam University" className="university-logo" />
            <img src="/placeholder.svg?height=80&width=120" alt="Whitireia" className="university-logo" />
            <img src="/placeholder.svg?height=80&width=120" alt="WelTec" className="university-logo" />
          </div>
        </div>

        <div className="program-cards">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-image-container">
                <img src={program.image} alt={program.title} className="program-image" />
                <div className="admission-banner">ADMISSIONS CLOSING ON 15 DEC</div>
              </div>
              <div className="program-content">
                <div className="university-name">SHEFFIELD HALLAM UNIVERSITY</div>
                <h3 className="program-title">{program.title}</h3>
                <ul className="program-features">
                  {program.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="apply-button">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartneredUniversities;

