import { useEffect, useState } from "react";
import { HomeCouresel } from "../components/HomeCouresel";
import SearchForm from "../components/Main/SearchForm";
import { VehicleCard } from "../components/Main/VehicleCard";
import { VehicleType } from "../types/types";
import API from "../api/API";
import LogoCarousel from "../components/Main/logoCouresel";
import ad1 from "../assets/ad1.png";
import BlogComponent from "../components/Main/Blogcouresel";
// import BrandCarousel from "../components/Main/BrandsCouresel";

const Homepage = () => {
  const [loading,setLoading] = useState<boolean>(false);
  const [vehicles,setVehicles] = useState<VehicleType[]>([])
  

  ///getcar makes
  const getMakesAsync = async () => {
    const res = await API.get("client/search")
    localStorage.setItem("makes",JSON.stringify(res.data.makes))
    console.log(res.data)
  }

  const getHomeData = async ()=>{
    try {
        setLoading(true);

        const res = await API.get("client/home-listing",{
            params:{
                limit:8
            }
        })
        setVehicles(res.data.cars)
        setLoading(false)
        getMakesAsync()
    } catch (error) {
      console.log(error) 
      setLoading(false)
    }  
}

  useEffect(()=>{
    getHomeData()
  },[])

 
  return (
    <div>
     <div className="h-full"><HomeCouresel/></div>
     <div className="m-5">
     <div className="m-5 justify-center flex text-2xl font-bold">
      Latest Vehicles
      </div>
     <div className="border-t border-orange-600 md:col-span-2"></div>
     
     <div className="pt-10"><SearchForm/></div>
     
     
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
      {
        vehicles.map((vehicle,index)=>{
          return(
            <VehicleCard key={index} vehicle={vehicle} />
          )
        })
      }
</div>

<div className="flex justify-center mb-8 px-4 mt-2">
        <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
          View all our stock
        </button>
      </div>
      <LogoCarousel/>

      <div className="flex space-x-4 overflow-hidden w-full max-w-screen-lg mx-auto">
  <div className="w-1/2 overflow-hidden">
    <img
      src={ad1}
      alt="Image 1"
      className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
    />
  </div>
  <div className="w-1/2 overflow-hidden">
    <img
      src={ad1}
      alt="Image 2"
      className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
    />
  </div>
</div>
<BlogComponent/>



{/* <BrandCarousel/> */}

    </div>
    </div>
  );
};

export default Homepage;
