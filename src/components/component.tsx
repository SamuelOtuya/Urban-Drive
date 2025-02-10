
"use client";

import { Carousel } from "flowbite-react";
import a1 from "../assets/aboutus.png"
import a2 from "../assets/a1.png"

export function Component() {
  return (
    <div className="h-full">
      <Carousel slideInterval={5000} className="object-center">
        <img src={a1} alt="..." />
        <img src={a2} alt="..." />
      </Carousel>
    </div>
  );
}
