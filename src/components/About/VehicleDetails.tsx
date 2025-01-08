import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const VehicleDetails = () => {
  const [activeTab, setActiveTab] = useState('specifications');

  const specifications = {
    "Fuel Type": "petrol",
    "Transmission Type": "automatic",
    "Seating": "4 members",
    "Drive Type": "2WD",
    "Exterior Colors": "Ivory",
    "Interior Colors": "Black",
    "Engine": "870 cc",
    "mileage": "30000 Kms"
  };

  const features = [
    "AM/FM Radio",
    "Bluetooth Car Kit",
    "Power Windows",
    "Fog Lights",
    "CD Player",
    "Reverse Camera",
    "Air Conditioning",
    "Electric Mirrors",
    "Airbags",
    "Electric Windows"
  ];

  const TabButton = ({ name, label, isActive }:any) => (
    <button
      onClick={() => setActiveTab(name)}
      className={`px-2 py-2 text-sm sm:px-4 sm:text-base ${
        isActive 
          ? 'bg-blue-100 text-blue-700 font-medium' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow rounded-lg">
      <div className="border-b">
        <div className="flex flex-wrap gap-1 p-1">
          <TabButton 
            name="specifications" 
            label="Specifications" 
            isActive={activeTab === 'specifications'} 
          />
          <TabButton 
            name="features" 
            label="Features & Option" 
            isActive={activeTab === 'features'} 
          />
          <TabButton 
            name="overview" 
            label="Overview" 
            isActive={activeTab === 'overview'} 
          />
        </div>
      </div>

      <div className="p-2 sm:p-4">
        {activeTab === 'specifications' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            {Object.entries(specifications).map(([key, value]) => (
              <div key={key} className="border p-2 sm:p-3 rounded text-sm sm:text-base">
                <span className="font-medium text-gray-700">{key}: </span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'features' && (
          <div className="space-y-2">
            {features.map((feature) => (
              <div key={feature} 
                className="flex items-center justify-between border p-2 sm:p-3 rounded text-sm sm:text-base">
                <span className="text-gray-700">{feature}</span>
                <FaCheck className="text-green-500 w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'overview' && (
          <div className="p-2 sm:p-4">
            <h2 className="text-lg sm:text-xl font-medium text-gray-900">
              FIAT PANDA 870cc Petrol 2017 Model
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleDetails;