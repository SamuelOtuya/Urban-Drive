import SearchForm from '../components/Main/SearchForm'
import { VehicleCard } from '../components/Main/VehicleCard'

const FindCar = () => {
  return (
    <div className='pt-10'>
      <div className="m-5">
     <div className="pt-5"><SearchForm/></div>
     
     <div className="flex items-center gap-4 p-2">
       <VehicleCard/>
       <VehicleCard/>
       <VehicleCard/>
       <VehicleCard/>
       <VehicleCard/>
     </div>
     <div className="flex items-center gap-4 p-2">
       <VehicleCard/>
       <VehicleCard/>
       <VehicleCard/>
       <VehicleCard/>
       <VehicleCard/>
     </div>
     <div className="flex items-center gap-4 p-2">
       <VehicleCard/>
       <VehicleCard/>
       <VehicleCard/>
       <VehicleCard/>
       <VehicleCard/>
     </div>
    </div>
      </div>
  )
}

export default FindCar