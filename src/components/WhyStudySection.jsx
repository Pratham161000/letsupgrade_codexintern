import React from 'react';

function WhyStudySection() {
  const instructors = [
    {
      name: "Mr. Mehboob",
      role: "Tech Instructor",
      image: "/placeholder.svg?height=200&width=150"
    },
    {
      name: "Mr. Akash Patel",
      role: "Design Mentor",
      image: "/placeholder.svg?height=200&width=150"
    },
    {
      name: "Mr. Vishal Joshi",
      role: "Program Director",
      image: "/placeholder.svg?height=200&width=150"
    },
    // Add more instructors as needed
  ];

  return (
    <section className="why-study">
      <div className="container">
        <h2 className="section-title">Why Study At School Of Future-Tech?</h2>
        <p className="section-description">
          A perfect guide to challenge the status quo of traditional learning and evolve into education standards, and experience 
          learning in a modern, tech-age classroom environment. Apply into the School of Future-tech to take the growing ride as a part of India
        </p>

        <div className="instructors-scroll">
          <div className="instructors-container">
            {instructors.map((instructor, index) => (
              <div key={index} className="instructor-card">
                <img 
                  src={instructor.image} 
                  alt={`${instructor.name} - ${instructor.role}`}
                  className="instructor-image"
                />
                <div className="instructor-info">
                  <h3>{instructor.name}</h3>
                  <p>{instructor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyStudySection;

