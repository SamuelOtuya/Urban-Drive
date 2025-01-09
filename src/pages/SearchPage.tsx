import { useLocation } from "react-router-dom"
import API from "../api/API";
import { useEffect, useState } from "react";
import { VehicleType } from "../types/types";
import { VehicleCard } from "../components/Main/VehicleCard";

const SearchPage = () => {
  const {state} = useLocation();

const [vehicles,setVehicles] = useState<VehicleType[]>([])
  const searchHandler = async ()=>{
    try {
      const res = await API.post("client/search",state)
      setVehicles(res.data.vehicles)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    searchHandler()
  },[])
  return (
    <div>
      {
        vehicles.map((v,i)=>{
          return(
            <VehicleCard vehicle={v} key={i}/>
          )
        })
      }
    </div>
  )
}

export default SearchPage