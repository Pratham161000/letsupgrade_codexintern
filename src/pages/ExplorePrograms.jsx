import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import PromotionalSidebar from '../components/PromotionalSidebar';
import { Search } from '../components/icons';

function ExplorePrograms() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filters = ['All', 'Newest', 'A-Z', 'Trending', 'Most Popular'];

  const programs = [
    {
      title: "Postman API Fundamentals",
      image: "/placeholder.svg",
      price: "₹149",
      duration: "4 weeks",
      tag: "Student Expert Certification"
    },
    {
      title: "Figma Bootcamp",
      image: "/placeholder.svg",
      price: "₹149",
      duration: "4 weeks"
    },
    {
      title: "HTML & CSS Bootcamp",
      image: "/placeholder.svg",
      price: "₹149",
      duration: "4 weeks"
    },
    {
      title: "C++ Bootcamp",
      image: "/placeholder.svg",
      price: "₹149",
      duration: "4 weeks"
    },
    {
      title: "GenAI 101 with Pieces",
      image: "/placeholder.svg",
      price: "₹149",
      duration: "4 weeks"
    },
    {
      title: "Java Bootcamp",
      image: "/placeholder.svg",
      price: "₹149",
      duration: "4 weeks"
    },
    {
      title: "JavaScript Bootcamp",
      image: "/placeholder.svg",
      price: "₹149",
      duration: "4 weeks"
    },
    {
      title: "Python Bootcamp",
      image: "/placeholder.svg",
      price: "₹149",
      duration: "4 weeks"
    },
    {
      title: "SQL Bootcamp",
      image: "/placeholder.svg",
      price: "₹149",
      duration: "4 weeks"
    },
    {
      title: "Git & GitHub Bootcamp",
      image: "/placeholder.svg",
      price: "₹149",
      duration: "4 weeks"
    },
    {
      title: "DSA with Java Bootcamp",
      image: "/placeholder.svg",
      price: "₹149",
      duration: "4 weeks"
    },
    {
      title: "Node.js Bootcamp",
      image: "/placeholder.svg",
      price: "₹149",
      duration: "4 weeks"
    },
    {
      title: "Cyber Security and Ethical Hacking Bootcamp",
      image: "/placeholder.svg",
      price: "₹149",
      duration: "4 weeks"
    },
    {
      title: "Placement Preparation",
      image: "/placeholder.svg",
      price: "₹149",
      duration: "4 weeks"
    },
    {
      title: "Data Science with Python",
      image: "/placeholder.svg",
      price: "₹149",
      duration: "4 weeks"
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      <Sidebar />
      
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-4">All Programs</h1>
          
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search all programs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap
                ${index === 0 ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium mb-2">{program.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{program.duration}</span>
                  <span className="font-semibold">{program.price}</span>
                </div>
                {program.tag && (
                  <span className="inline-block mt-2 px-2 py-1 bg-red-100 text-red-600 text-xs rounded">
                    {program.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <PromotionalSidebar />
    </div>
  );
}

export default ExplorePrograms;

