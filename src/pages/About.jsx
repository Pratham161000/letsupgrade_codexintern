import React from 'react';
import Sidebar from '../components/Sidebar';
import PromotionalSidebar from '../components/PromotionalSidebar';

function About() {
  const missionPoints = [
    "Provide a lifelong learning platform that can reach 1M+ people on LetsUpgrade through the Industry",
    "Continuously focus on candidate for placement and offers",
    "Keep focus on Live Learning and the outcome of the batch as it's our USP",
    "Make students who have a hunger to grow and learn"
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-4 border-b flex items-center gap-2">
          <span className="text-xl cursor-pointer">←</span>
          <h1 className="font-medium">About Us</h1>
        </div>

        <div className="max-w-3xl mx-auto py-12 px-4">
          <div className="text-center">
            {/* Logo and Main Title */}
            <div className="w-24 h-24 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
              <img 
                src="https://letsupgrade.in/_next/image?url=%2Ficon-black.png&w=1920&q=75" 
                alt="LU Logo" 
                className="w-12 h-12"
              />
            </div>

            <h1 className="text-4xl font-serif mb-2">About LetsUpgrade</h1>
            <p className="text-2xl font-serif italic text-gray-600 mb-12">
              Reimagine Online Upskilling Education
            </p>

            {/* Main Description */}
            <div className="text-gray-600 mb-16">
              <p>
                LetsUpgrade.in is India's largest higher education learning community for
                students enrolled in Indian degree programs. With 1.5 million students and a 45%
                market share among BTech/BE students in India, LetsUpgrade EdTech offers
                many upskilling courses in Tech, Design, Management, Business, and Data.
              </p>
            </div>

            {/* The Beginning Section */}
            <h2 className="text-2xl font-serif mb-8">The Beginning</h2>
            <p className="text-gray-600 mb-16">
              Founded in 2020 as an experimental project by Nitin, Saj, Viral, and Prasad, LetsUpgrade took live learning to
              the next level on YouTube. Thousands of students quickly joined, recognizing its value, and now we offer
              various online programs for students pursuing higher education degrees across India and neighboring
              countries.
            </p>

            {/* Founder Image */}
            <div className="mb-16">
              <img 
                src="https://letsupgrade.in/_next/image?url=%2Fsai-about.png&w=1920&q=75" 
                alt="Founder" 
                className="w-64 h-64 mx-auto rounded-lg object-cover"
              />
            </div>

            {/* Our Collective Vision */}
            <h2 className="text-2xl font-serif mb-8">Our Collective Vision</h2>
            <div className="mb-16 text-gray-600">
              <p className="mb-4">
                To make a 1 Million Master students and upskill another 10M with the same pattern, and a strong connection to our brand LetsUpgrade, ensuring they become a tribe.
              </p>
              <p>
                To make LetsUpgrade the biggest platform for a Higher education student's upskilling world while building a community of 10 Million in 2025.
              </p>
            </div>

            {/* Mission Section */}
            <h2 className="text-2xl font-serif mb-8">Mission</h2>
            <ul className="text-left max-w-2xl mx-auto mb-16">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start mb-4">
                  <span className="mr-2">•</span>
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>

            {/* Ambition Section */}
            <h2 className="text-2xl font-serif mb-8">Ambition</h2>
            <p className="text-gray-600 mb-16">
              To become one of top digital EdTech platform where students and upskill learners are placed like never before by 2025.
            </p>

            {/* Several Team Section */}
            <h2 className="text-2xl font-serif mb-8">Several Team</h2>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              View Open positions
            </button>
          </div>
        </div>
      </main>

      <PromotionalSidebar />
    </div>
  );
}

export default About;

