import React from 'react';

function NewsSection() {
  const newspapers = [
    {
      name: "Business Standard",
      headline: "Top MNC's recruit 120+ Students of LetsUpgrade",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      name: "THE PRINT",
      headline: "LetsUpgrade's latest engineering India's tech B.Tech CSE with 100 per year job guarantee.",
      image: "/placeholder.svg?height=300&width=400"
    }
  ];

  return (
    <section className="news-section">
      <div className="container">
        <div className="news-content">
          <h2 className="news-title">LetsUpgrade In News</h2>
          <p className="news-subtitle">
            Discover how LetsUpgrade is making a difference in the industry
          </p>
          
          <div className="newspapers-container">
            {newspapers.map((paper, index) => (
              <div key={index} className="newspaper-card">
                <img 
                  src={paper.image} 
                  alt={`${paper.name} featuring LetsUpgrade`}
                  className="newspaper-image"
                />
                <div className="newspaper-info">
                  <h3 className="newspaper-name">{paper.name}</h3>
                  <p className="newspaper-headline">{paper.headline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;

