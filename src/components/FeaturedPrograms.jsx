import React from 'react';

function FeaturedPrograms() {
  const programs = [
    {
      title: "Explore Certificate Program",
      image: "https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FUntitled_design_24_4ab85fc478.webp&w=1920&q=75?height=300&width=300",
      link: "#",
      buttonText: "Get Certified"
    },
    {
      title: "Study Abroad Programs",
      image: "https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2FArtboard_2_24_e44d1925b1.webp&w=1920&q=75?height=300&width=300",
      link: "#",
      buttonText: "Explore Program"
    },
    {
      title: "India's Best B.Tech CSE",
      image: "https://letsupgrade.in/_next/image?url=%2Fassets%2Fhero%2Fhero-3.png&w=1920&q=75?height=300&width=300",
      link: "#",
      buttonText: "Apply Now"
    },
    {
      title: "B.Des in UI UX Program",
      image: "https://letsupgrade.in/_next/image?url=https%3A%2F%2Flucdn.letsupgrade.net%2Fassets%2Fbdes_1a1c4cdda8.webp&w=1920&q=75?height=300&width=300",
      link: "#",
      buttonText: "Apply Now"
    }
  ];

  return (
    <section className="featured-programs">
      <div className="container">
        <div className="featured-programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="featured-program-card">
              <img src={program.image} alt={program.title} className="featured-program-image" />
              <div className="featured-program-content">
                <h3>{program.title}</h3>
                <a href={program.link} className="btn btn-light">
                  {program.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPrograms;

