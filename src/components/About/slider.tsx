"use client";

import { Carousel } from "flowbite-react";


interface SliderProps {
  images: string[];
}

export function Slider({ images }: SliderProps) {
  return (
    <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
      <Carousel>
        
        {images.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={image || `carousel-image-${index}`} 
            className="h-full w-full"
          />
        ))}
      </Carousel>
    </div>
  );
}
