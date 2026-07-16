import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import App from "./App.tsx";

import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
    <App />
    </ThemeProvider>
  </Provider>,
);
