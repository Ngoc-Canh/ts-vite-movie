import { Route, Routes } from "react-router-dom";
import DetailPage from "../components/DetailPage";
import DetailPersonPage from "../components/DetailPersonPage";
import HomePage from "../components/HomePage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id/:type" element={<DetailPage />} />
      <Route path="/person/:id" element={<DetailPersonPage />} />
    </Routes>
  );
};

export default Routers;
