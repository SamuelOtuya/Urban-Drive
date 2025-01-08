import { useEffect, useState } from "react";
import { HomeCouresel } from "../components/HomeCouresel";
import SearchForm from "../components/Main/SearchForm";
import { VehicleCard } from "../components/Main/VehicleCard";
import { VehicleType } from "../types/types";
import API from "../api/API";

const Homepage = () => {
  const [loading,setLoading] = useState<boolean>(false);
  const [vehicles,setVehicles] = useState<VehicleType[]>([])

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
     <div className="pt-5"><SearchForm/></div>
     
     
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
      {
        vehicles.map((vehicle,index)=>{
          return(
            <VehicleCard key={index} vehicle={vehicle} />
          )
        })
      }
</div>

    </div>
    </div>
  );
};

export default Homepage;
