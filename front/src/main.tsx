import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
