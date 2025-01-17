import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DefaultLayout from "./layout/DefaultLayout";
import FindCar from "./pages/FindCar";
import AboutUs from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import SingleCar from "./pages/SingleCar";
import SearchPage from "./pages/SearchPage";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <DefaultLayout>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/find-car" element={<FindCar/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
        <Route path="/blog" element={<Blogs/>}/>
        <Route path="/single-car/:id" element={<SingleCar/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
    </DefaultLayout>
  );
};

export default App;
