import React from 'react';

function FutureTech() {
  const courses = [
    {
      title: "India's Best BTech CSE",
      image: "/placeholder.svg?height=300&width=400",
      tag: "FUTURE READY"
    },
    {
      title: "BTech in VLSI",
      image: "/placeholder.svg?height=300&width=400",
      tag: "FUTURE READY"
    },
    {
      title: "Executive MTech",
      image: "/placeholder.svg?height=300&width=400",
      tag: "FUTURE READY"
    },
    {
      title: "BTech in EV",
      image: "/placeholder.svg?height=300&width=400",
      tag: "FUTURE READY"
    }
  ];

  return (
    <section className="future-tech">
      <div className="container">
        <div className="future-tech-header">
          <img 
            src="/placeholder.svg?height=60&width=200" 
            alt="School of Future Tech Logo" 
            className="future-tech-logo"
          />
          <p className="future-tech-description">
            We are here to advance our uplifting vision back to life off the world as we are known for, elevated through the School of Education, which is now evolving into something greater, transforming programs to scale to learn.
          </p>
        </div>

        <div className="course-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-image-container">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="course-image" 
                />
                <div className="course-overlay">
                  <span className="course-tag">{course.tag}</span>
                  <h3 className="course-title">{course.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FutureTech;

