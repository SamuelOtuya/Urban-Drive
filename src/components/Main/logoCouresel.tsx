import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Define the type for the brand data
interface Brand {
  id: number;
  logo: string;
  name: string;
}

const LogoCarousel = () => {
  const [brands, setBrands] = useState<Brand[]>([]); // State type as Brand[]

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch('https://admin.daytonaautosolutions.com/client/brands');
        const data = await response.json();
        setBrands(data.brands); // Assuming the response has a "brands" array
      } catch (error) {
        console.error('Error fetching logos:', error);
      }
    };

    fetchLogos();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  // Update items to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 768) {
        setItemsToShow(2);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? brands.length - itemsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === brands.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
      >
        <FaChevronLeft className="w-6 h-6 text-orange-500" />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
      >
        <FaChevronRight className="w-6 h-6 text-orange-500" />
      </button>

      {/* Logo Container */}
      <div className="overflow-hidden py-8">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
          }}
        >
          {brands.map((brand) => (
            <div
              key={brand.id} // Use the brand id as the key
              className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4"
            >
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <img
                  src={brand.logo} // Display the logo image
                  alt={`${brand.name} logo`} // Alt text based on brand name
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {brand.name} {/* Display the brand name */}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
