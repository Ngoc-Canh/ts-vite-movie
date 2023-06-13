import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hook";
import Header from "../Header";

function LoadingGlobal() {
  const globalLoading = useAppSelector(
    (state) => state.globalLoading.isLoading
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (globalLoading) {
      setIsLoading(true);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, [globalLoading]);

  return (
    <Paper
      style={{
        visibility: isLoading ? "visible" : "hidden",
        opacity: isLoading ? 1 : 0,
        backgroundColor: "#0a1010",
        top: 0,
        width: "100%",
        height: "100vh",
        position: "fixed",
        margin: 0,
        padding: 0,
        zIndex: "1000",
        transition: "visibility ease 500ms",
      }}
    >
      <Header />
      <Box marginTop={10}>
        <LinearProgress color="error" />
      </Box>
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography fontSize="1.7rem" fontWeight={700}>
          L O G O
        </Typography>
      </Box>
    </Paper>
  );
}

export default LoadingGlobal;
