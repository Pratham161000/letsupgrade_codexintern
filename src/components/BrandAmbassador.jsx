import React from 'react';

function BrandAmbassador() {
  const badges = [
    {
      level: "Gold",
      image: "/placeholder.svg?height=60&width=60"
    },
    {
      level: "Silver",
      image: "/placeholder.svg?height=60&width=60"
    },
    {
      level: "Bronze",
      image: "/placeholder.svg?height=60&width=60"
    }
  ];

  const ambassadors = Array(12).fill({
    image: "/placeholder.svg?height=100&width=100",
    name: "Student Ambassador"
  });

  return (
    <section className="brand-ambassador">
      <div className="container">
        <div className="ambassador-card">
          <div className="ambassador-content">
            <span className="section-tag">STUDENT AMBASSADOR</span>
            <h2 className="ambassador-title">Become Our Brand Ambassadors</h2>
            <p className="ambassador-description">
              A special startup program that connects you with our services and represents them
            </p>

            <div className="apply-section">
              <h3>Apply to become An Ambassador</h3>
              <p>
                It's super easy to become a student Ambassador for LetsUpgrade! All it takes is your 
                time for representing LetsUpgrade to your college or university off-line and 
                online through various activities.
              </p>
            </div>

            <div className="badge-section">
              <h3>Level up & Earn Exciting Badge</h3>
              <div className="badges-container">
                {badges.map((badge, index) => (
                  <div key={index} className="badge-item">
                    <img src={badge.image} alt={`${badge.level} Badge`} />
                    <span>{badge.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="join-button">Join Now</button>
          </div>

          <div className="ambassador-gallery">
            <div className="gallery-grid">
              {ambassadors.map((ambassador, index) => (
                <div key={index} className="ambassador-photo">
                  <img src={ambassador.image} alt={ambassador.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandAmbassador;

