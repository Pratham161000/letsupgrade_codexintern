import React, { useState, useEffect } from 'react';

function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const news = [
    "ENROLLED IN FIGMA BOOTCAMP",
    "HARSHITA PATEL HAS ENROLLED IN CANCELLED PROGRAM",
    "PRIYANSHI BISHT HAS ENROLLED IN FIGMA BOOTCAMP",
    "KANISHK SONI HAS ENROLLED IN HTML & CSS BOOTCAMP",
    "अजित चौधरी"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="news-ticker">
      <div className="container">
        <div className="news-ticker-content">
          <span className="news-ticker-icon">✨</span>
          <span className="news-ticker-text">{news[currentIndex]}</span>
          <span className="news-ticker-icon">✨</span>
        </div>
      </div>
    </div>
  );
}

export default NewsTicker;

