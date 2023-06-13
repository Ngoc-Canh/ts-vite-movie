import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LoadingGlobal from "../components/common/LoadingGlobal";

const RootLayout = () => {
  return (
    <>
      <Box component="main">
        <LoadingGlobal />
        <Header />
        <Outlet />
      </Box>
    </>
  );
};

export default RootLayout;
