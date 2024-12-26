import React from 'react';

function AdvisoryBoard() {
  const advisors = [
    {
      name: "Ravi Kumar",
      role: "Advisor",
      company: "Amadeus",
      image: "/placeholder.svg?height=120&width=120"
    },
    {
      name: "Karthikeyan Singh",
      role: "Advisor",
      company: "Pepperfry",
      image: "/placeholder.svg?height=120&width=120"
    },
    {
      name: "Mukul Sharma",
      role: "Advisor",
      company: "FlutterFlow",
      image: "/placeholder.svg?height=120&width=120"
    },
    {
      name: "Vishal Dubey",
      role: "Advisor",
      company: "Volvo",
      image: "/placeholder.svg?height=120&width=120"
    },
    {
      name: "Rahul Hegde",
      role: "Advisor",
      company: "EY",
      image: "/placeholder.svg?height=120&width=120"
    },
    {
      name: "Vaibhav Sisinty",
      role: "Advisor",
      company: "Accenture",
      image: "/placeholder.svg?height=120&width=120"
    },
    // Add more advisors as needed
  ];

  return (
    <section className="advisory-board">
      <div className="container">
        <div className="board-header">
          <h2 className="board-title">LetsUpgrade Advisory Board</h2>
          <p className="board-subtitle">
            This is the perfect base to strengthen any tech right from a strong advisory board and track challenges at 10X mentoring capacity to achieve scalability
          </p>
        </div>

        <div className="advisors-container">
          <div className="advisors-scroll">
            {advisors.map((advisor, index) => (
              <div key={index} className="advisor-card">
                <div className="advisor-image-container">
                  <img
                    src={advisor.image}
                    alt={`${advisor.name} - ${advisor.role}`}
                    className="advisor-image"
                  />
                </div>
                <div className="advisor-info">
                  <h3 className="advisor-name">{advisor.name}</h3>
                  <p className="advisor-role">{advisor.role}</p>
                  <img
                    src="/placeholder.svg?height=30&width=80"
                    alt={advisor.company}
                    className="company-logo"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvisoryBoard;

