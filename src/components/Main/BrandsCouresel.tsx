import { Carousel } from 'flowbite-react';

const BrandCarousel = () => {
  const brands = [
    {
      name: 'SUBARU',
      logo: '/api/placeholder/100/100'
    },
    {
      name: 'SUZUKI',
      logo: '/api/placeholder/100/100'
    },
    {
      name: 'Toyota',
      logo: '/api/placeholder/100/100'
    },
    {
      name: 'Volkswagen',
      logo: '/api/placeholder/100/100'
    }
  ];

  // Custom styles for Flowbite carousel
  const carouselTheme = {
    root: {
      base: "relative h-full w-full",
      leftControl: "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl: "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
    },
    indicators: {
      active: {
        off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-white dark:bg-gray-800"
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    item: {
      base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: "w-full flex-shrink-0 transform cursor-grab snap-center"
    }
  };

  return (
    <div className="w-full px-4 py-8">
      <div className="flex justify-center mb-8">
        <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
          View all our stock
        </button>
      </div>

      <div className="h-64">
        <Carousel
          slideInterval={5000}
          slide={false}
          theme={carouselTheme}
          className="h-full"
        >
          {/* Group brands into sets of 4 */}
          {Array.from({ length: Math.ceil(brands.length / 4) }, (_, i) => (
            <div key={i} className="flex justify-between items-center h-full gap-4 px-8">
              {brands.slice(i * 4, (i + 1) * 4).map((brand, index) => (
                <div 
                  key={index} 
                  className="flex-1 border rounded-lg p-6 flex flex-col items-center justify-center gap-4 bg-white"
                >
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="w-16 h-16 object-contain"
                  />
                  <h3 className="text-lg font-semibold text-center">
                    {brand.name}
                  </h3>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BrandCarousel;