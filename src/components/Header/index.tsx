import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import LoadingGlobal from "../common/LoadingGlobal";

function Header() {
  const [colorAppbar, setColorAppbar] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setColorAppbar(false);
      } else {
        setColorAppbar(true);
      }
    });
  }, []);

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      alignContent="stretch"
      wrap="wrap"
    >
      <AppBar
        color="transparent"
        className={colorAppbar ? "header-bg-transparent" : "header-bg-red"}
        position="fixed"
        style={{
          boxShadow: "none",
          zIndex: "999",
          top: "0px",
          left: "auto",
          transition: "all 0.5s ease",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }}>Home</Button>
            <Button sx={{ color: "#fff" }}>Movies</Button>
            <Button sx={{ color: "#fff" }}>TV Series</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Header;
