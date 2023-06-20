"use client";

import React, { useState, useEffect } from "react";
import data from './cards.json';

import CardDefault from "./card-default";
import Carousel from './carousel';

const CardContainer = () => {
  const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];
  const [currentSlide, setCurrentSlide] = useState(0);
  let timer;

  useEffect(() => {
    const transitionSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      timer = setTimeout(transitionSlide, 3000);
    };

    timer = setTimeout(transitionSlide, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const getImagePath = (imageName) => {
    // Adjust this function to return the correct image path based on the imageName
    switch (imageName) {
      case 'Celulares':
        return '/images/Grupo de máscara 2417.png';
      case 'Notebook':
        return '/images/Grupo de máscara 2418.png';
      case 'Entregadores':
        return '/images/Grupo de máscara 2420.png';
      case 'Cartao':
        return '/images/mobile.png';
      default:
        return '';
    }
  };

  const handleClick = (index) => {
    clearTimeout(timer);
    setCurrentSlide(index);
  };

  return (
    <div className="mt-28 mb-20 flex flex-col items-center">
      <div className="flex w-[382px] h-1 gap-x-[10px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`state w-[88px] h-1 rounded-lg ${
              index === currentSlide ? 'bg-color9' : 'bg-color18'
            }`}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-center text-color3 leading-[80px]">
        {data[currentSlide].title}
      </h3>
      
      <CardDefault
        text={data[currentSlide].content}
        imagem={getImagePath(data[currentSlide].image)}
        caption={data[currentSlide].caption}
      />
    </div>
  );
};

export default CardContainer;
