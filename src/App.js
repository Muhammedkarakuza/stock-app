import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { grey, blueGrey } from "@mui/material/colors";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: blueGrey["900"],
      },
    },
  });
  return <div className="App"></div>;
}

export default App;
