import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UD1 from "../assets/UD1.png";
import UD2 from "../assets/UD2.png";

const Homepage = () => {
  const Hero = () => {
    const [currentBanner, setCurrentBanner] = useState(0);
    const banners = [
      UD1, // Use imported images instead of paths
      UD2,
    ];

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
      }, 6000);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="relative h-96 overflow-hidden ">
        {banners.map((banner, index) => (
          <div
            key={index} // Changed to index since banner is now an import
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              currentBanner === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="pt-20">
      <Hero />
    </div>
  );
};

export default Homepage;
