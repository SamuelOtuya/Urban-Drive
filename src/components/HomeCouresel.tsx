"use client";

import { Carousel } from "flowbite-react";
import i1 from "../assets/UD1.png";
import i2 from "../assets/UD2.png";

const data = [i1, i2];

export function HomeCouresel() {
  return (
    <div className="h-full sm:h-64 md:h-[700px] xl:h-80 2xl:h-96 w-full">
      <Carousel leftControl="" rightControl="">
        {data.map((banner, i) => {
          return (
            <img
              key={i}
              src={banner}
              alt="..."
              className="h-full w-full object-cover"
            />
          );
        })}
      </Carousel>
    </div>
  );
}
