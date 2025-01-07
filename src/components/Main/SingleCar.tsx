import { Button } from 'flowbite-react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdDriveEta, MdLocalOffer } from 'react-icons/md';
import { BsTelephoneForward } from 'react-icons/bs';
import { Slider } from '../About/slider';
import Map from '../Map';
import { VehicleCard } from './VehicleCard';

export default function CarDetails() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Car Images and Details */}
        <div className="md:col-span-2">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold">2009 Toyota Passo</h1>
              <p className="text-xl font-semibold text-orange-500">Ksh 500,000</p>
            </div>
          </div>

          <div className="mb-8">
           <Slider/>
            <div className="grid grid-cols-4 gap-2">
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex gap-4 mb-6">
              <button className="flex-1 bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200">
                Specifications
              </button>
              <button className="flex-1 bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200">
                Features & Option
              </button>
              <button className="flex-1 bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200">
                Overview
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p>Toyota Passo 1000cc 2009 Red</p>
            </div>
          </div>
        </div>

        {/* Contact and Actions */}
        <div className="space-y-4">
          <Button color="info" className="w-full">
            <MdDriveEta className='mr-2'/>
           Book a Test Drive
          </Button>
          <Button color="failure" className="w-full">
            <MdLocalOffer className="mr-2" /> Make an Offer
          </Button>
          <Button color="warning" className="w-full">
            <BsTelephoneForward className="mr-2" /> Request a call Back
          </Button>
          <Button color="success" className="w-full">
            <FaWhatsapp className="mr-2" /> WhatsApp Message
          </Button>

          <div className="bg-white p-4 rounded-lg shadow mt-6">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-gray-500" />
                <span>info@urbandrive.co.ke</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-gray-500" />
                <span>(+254) 770070300</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-500" />
                <span>KIAMBU ROAD - BYPASS JUNCTION</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Shares</h3>
            <div className="flex gap-2">
              <button className="p-2 bg-blue-600 rounded-full">
                <FaFacebook className="text-white" />
              </button>
              <button className="p-2 bg-blue-400 rounded-full">
                <FaTwitter className="text-white" />
              </button>
              <button className="p-2 bg-green-500 rounded-full">
                <FaWhatsapp className="text-white" />
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Map location</h3>
            <div className="h-30 bg-gray-100 rounded-lg">
              <Map/>
            </div>
          </div>
        </div>
      </div>
      <span className='font-bold text-3xl'>Related Posts</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
  <VehicleCard />
  <VehicleCard />
  <VehicleCard />
  <VehicleCard />
 
</div>
    </div>
    
  );
}