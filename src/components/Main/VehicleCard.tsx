import { Card } from "flowbite-react";
import { FaCalendarAlt, FaCar } from "react-icons/fa";
import { GiGasPump } from "react-icons/gi";
import car from "../../assets/car.png";
import { useNavigate } from "react-router-dom";
import { VehicleType } from "../../types/types";

export function VehicleCard({vehicle}:{vehicle:VehicleType}) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/single-car/${vehicle.id}-${vehicle.make}-${vehicle.model}`)}
      renderImage={() => (
        <div className="max-w-sm relative">
          <img 
            src={vehicle.images} 
            alt="Toyota HiAce" 
            className="w-full h-48 object-cover rounded-t-lg sm:h-60 md:h-72 lg:h-80"
          />
          <div className="absolute bottom-2 left-8 flex gap-2">
            <span className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm">
              Locally Used
            </span>
            <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm">
              Available
            </span>
          </div>
        </div>
      )}
    >
      <h4 className="text-xl font-bold text-orange-500 sm:text-xl md:text-xl">
        {vehicle.title}
      </h4>
      <h3 className="text-xl font-bold text-gray-900 sm:text-xl md:text-xl">
        {vehicle.price}
      </h3>
      <div className="flex flex-wrap items-center justify-between text-gray-600 space-x-4">
        <div className="flex items-center gap-1 text-sm sm:text-base">
          <FaCar />
          <span>4WD</span>
        </div>
        <div className="flex items-center gap-1 text-sm sm:text-base">
          <FaCalendarAlt />
          <span>{vehicle.year}</span>
        </div>
        <div className="flex items-center gap-1 text-sm sm:text-base">
          <GiGasPump />
          <span>{vehicle.fuel_type}</span>
        </div>
      </div>
    </Card>
  );
}
