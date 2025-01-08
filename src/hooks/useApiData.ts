import { useState } from "react"
import API from "../api/API";
import { VehicleType } from "../types/types";

const useApiData = () => {
    const [loading,setLoading] = useState<boolean>();
    const [error,setError] = useState<any>();


    //get home data
    const getHomeData = async ()=>{
        try {
            setLoading(true);
            setError("")

            const res = await API.get("client/home-listing",{
                params:{
                    limit:8
                }
            })
            
            return res.data.cars as VehicleType | []
        } catch (error) {
          console.log(error) 
          setError(error) 
          return []
        }finally{
            setLoading(false)
        }
        
    }
  return {getHomeData,loading,error}
}

export default useApiData