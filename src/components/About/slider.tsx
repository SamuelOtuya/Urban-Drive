"use client";

import { Carousel } from "flowbite-react";


interface SliderProps {
  images: string[];
}

export function Slider({ images }: SliderProps) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 object-contain">
      <Carousel>
        
        {images.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={image || `carousel-image-${index}`} 
          />
        ))}
      </Carousel>
    </div>
  );
}
