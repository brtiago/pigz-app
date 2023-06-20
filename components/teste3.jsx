"use client";

import React, { useState } from "react";
import data from "./sections/cards.json";
import Image from "next/image";

const Teste = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const handleNextTitle = () => {
    setCurrentTitleIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mt-28 bg-slate-500 w-full h-screen">
      <button onClick={handleNextTitle}>Next Title</button>
      <div className="bg-slate-500">
      <h1>{data[currentTitleIndex].title}</h1>
        <Image className='mt-[55px]' src={data[currentTitleIndex].image} width={382} height={200} alt={data[currentTitleIndex].caption} />
      </div>
    </div>
  );
};
       
export default Teste;
