import { Route, Routes } from "react-router-dom";
import DetailPage from "../components/DetailPage";
import DetailPersonPage from "../components/DetailPersonPage";
import HomePage from "../components/HomePage";
import RootLayout from "../layouts/RootLayout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/:id/:type" element={<DetailPage />} />
        <Route path="/person/:id" element={<DetailPersonPage />} />
      </Route>
    </Routes>
  );
};

export default Routers;
