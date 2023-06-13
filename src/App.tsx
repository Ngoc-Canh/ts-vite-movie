import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import Routers from "./config/Routers";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#131313",
    },
    text: {
      primary: "#FFF",
      secondary: "#FFF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseLine />
      {/* <Header /> */}
      {/* <Box component="main"> */}
      <Routers />
      {/* </Box> */}
    </ThemeProvider>
  );
}

export default App;
