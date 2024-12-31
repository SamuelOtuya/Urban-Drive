import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DefaultLayout from "./layout/DefaultLayout";

const App = () => {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </DefaultLayout>
  );
};

export default App;
