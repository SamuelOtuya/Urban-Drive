import { HomeCouresel } from "../components/HomeCouresel";
import SearchForm from "../components/Main/SearchForm";
import { VehicleCard } from "../components/Main/VehicleCard";

const Homepage = () => {


  return (
    <div>
     <div className="h-full"><HomeCouresel/></div>

     <div className="m-5">
     <div className="pt-5"><SearchForm/></div>
     
     
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
  <VehicleCard />
  <VehicleCard />
  <VehicleCard />
  <VehicleCard />
  <VehicleCard />
  <VehicleCard />
  <VehicleCard />
  <VehicleCard />
  <VehicleCard />
  <VehicleCard />
</div>

    </div>
    </div>
  );
};

export default Homepage;
