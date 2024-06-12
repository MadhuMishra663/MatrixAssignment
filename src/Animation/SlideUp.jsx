import React from 'react';
import { useInView } from 'react-intersection-observer';
import './animation.css';

const ScrollAnimation = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`scroll-animation ${inView ? 'animate' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
