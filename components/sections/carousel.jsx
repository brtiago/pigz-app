import React, { useState, useEffect } from 'react';

const Carousel = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [cards.length]);

  return (
    <div className="carousel">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`carousel-card ${index === activeIndex ? 'active' : ''}`}
        >
          {card}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
