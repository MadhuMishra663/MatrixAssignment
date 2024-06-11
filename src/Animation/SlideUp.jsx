// SlideUpComponent.js
import React, { useState, useEffect } from 'react';
import './animation.css';

const SlideUpComponent = ({ contents }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [contents]);

  return (
    <div className="container">
      {contents.map((content, index) => (
        <div
          key={index}
          className={`content ${index === currentIndex ? 'active' : ''}`}
        >
          {content}
        </div>
      ))}
    </div>
  );
};

export default SlideUpComponent;
