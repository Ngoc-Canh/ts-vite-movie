import Header from "./components/Header";
import Routers from "./config/Routers";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseLine from "@mui/material/CssBaseline";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
  console.log("variable::: ", import.meta.env);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseLine />
      <Header />
      <Box component="main">
        <Routers />
      </Box>
    </ThemeProvider>
  );
}

export default App;
