import { useEffect, useState } from 'react'
import SearchForm from '../components/Main/SearchForm'
import { VehicleCard } from '../components/Main/VehicleCard'
import API from '../api/API';
import { VehicleType } from '../types/types';



const FindCar = () => {
  const [,setLoading]=useState<boolean>(false);
  const [vehicles,setVehicles]=useState<VehicleType[]>([]);

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
                limit:200
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
    <div className='pt-10'>
      <div className="m-5">
     <div className="pt-5"><SearchForm/></div>
     
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 sm:px-20">
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
  )
}

export default FindCar;