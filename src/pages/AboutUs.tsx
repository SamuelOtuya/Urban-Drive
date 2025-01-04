import { FaHeart, FaPhoneAlt } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import aboutus from "../assets/aboutus.png";
import { Slider } from "../components/About/slider";
import vid from "../assets/vid.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96 bg-gray-800">
        <img
          src={aboutus}
          alt="Cars showcase"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">About Us</h1>
        </div>
        <nav className="absolute bottom-8 left-8 text-white">
          <span>Home / About Us</span>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4 ">
        <h2 className="text-3xl font-bold mb-8">Why Urban Drive Autos?</h2>
        <p className="text-xl mb-6">Urban Drive Autos is your trusted Motor dealer in Kenya.</p>
        <p className="text-lg mb-6">
          We deliver Clean, high Grade and Affordable Cars to all our Customers! We offer the best prices in town! 
          We have each category of customers covered! Call us on 0721710463 or 0722972201.
        </p>
        <p className="text-lg">
          Consult with us matters Autos for unmatched service. Karibuni!
        </p>
      </div>

      <div className="relative py-16 ">
      
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${aboutus})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
        }}
      />
      
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8 text-white">What We Do?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 bg-white/90 p-6 rounded-lg">
            <p className="text-lg mb-4">Below are some of our services at urban drive</p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Vehicle import</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Tax/duties consulting</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Clearing and forwarding</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Vehicle deliveries countrywide</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Import finance</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg shadow-lg bg-white">
            <Slider />
          </div>
        </div>
      </div>
    </div>
    

      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <HiSpeakerphone className="text-white w-8 h-8"/>
            </div>
            <h3 className="text-xl font-bold mb-2">Wide Range of Vehicles</h3>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHeart className="text-white w-8 h-8"/>
            </div>
            <h3 className="text-xl font-bold mb-2">Best Rated Car Dealer</h3>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhoneAlt className="text-white w-8 h-8"/>
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 py-16 flex">
        <div className="flex-1"> 
            <img
          src={vid}
          alt="Cars showcase"
          className="w-full h-full object-cover opacity-70"
        />
        </div>
        <div className="max-w-6xl mx-auto px-4 flex-1">
          <h2 className="text-3xl font-bold mb-8">Local Cars</h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>Trade Ins</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>Sell on Behalf</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>Motor Vehicle Services</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>Motor Vehicle Insurance</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;