import { Card } from "flowbite-react";
import { FaCalendarAlt, FaCar } from "react-icons/fa";
import { GiGasPump } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export function VehicleCard({ vehicle }: any) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() =>
        navigate(`/single-car/${vehicle.id}-${vehicle.make}-${vehicle.model}`)
      }
      className="flex flex-col h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer p-0 overflow-hidden"
    >
      {/* Image Section with Slim Margins */}
      <div className="relative w-full h-[220px] sm:h-[250px] md:h-[280px] overflow-hidden">
        <img
          src={vehicle.images}
          alt={vehicle.title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => {
             "/api/placeholder/400/300"; // Fallback image
          }}
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2 z-10">
          <span className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm shadow-md">
            Locally Used
          </span>
          <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm shadow-md">
            Available
          </span>
        </div>
      </div>

      {/* Vehicle Details */}
      <div className="px-3 pb-3 flex-grow flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-semibold text-orange-500 truncate">
            {vehicle.title}
          </h4>
          <h3 className="text-xl font-bold text-gray-900 mt-1">
            KSH {vehicle.price?.toLocaleString() ?? '0'}
          </h3>
        </div>

        {/* Icons and Specs */}
        <div className="grid grid-cols-3 gap-2 text-gray-600 mt-2">
          <div className="flex items-center gap-1 text-sm">
            <FaCar className="text-orange-500" />
            <span>4WD</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <FaCalendarAlt className="text-orange-500" />
            <span>{vehicle.year}</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <GiGasPump className="text-orange-500" />
            <span>{vehicle.fuel_type}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default VehicleCard;
